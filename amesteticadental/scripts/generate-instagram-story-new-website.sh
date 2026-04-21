#!/bin/zsh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/examples"
OUT_VIDEO="$OUT_DIR/am-estetica-dental-new-website-story.mp4"
OUT_POSTER="$OUT_DIR/am-estetica-dental-new-website-story-poster.jpg"

SLIDE_01="$ROOT/examples/story-assets/slide-01.svg"
SLIDE_02="$ROOT/examples/story-assets/slide-02.svg"
SLIDE_03="$ROOT/examples/story-assets/slide-03.svg"
SLIDE_04="$ROOT/examples/story-assets/slide-04.svg"
PNG_01="$ROOT/examples/story-assets/slide-01.png"
PNG_02="$ROOT/examples/story-assets/slide-02.png"
PNG_03="$ROOT/examples/story-assets/slide-03.png"
PNG_04="$ROOT/examples/story-assets/slide-04.png"

node -e '
const sharp = require("sharp");
const jobs = process.argv.slice(1);
Promise.all(jobs.map((pair) => {
  const [input, output] = pair.split("::");
  return sharp(input, {density: 216}).resize(1080, 1920).png().toFile(output);
})).catch((error) => {
  console.error(error);
  process.exit(1);
});
' \
  "$SLIDE_01::$PNG_01" \
  "$SLIDE_02::$PNG_02" \
  "$SLIDE_03::$PNG_03" \
  "$SLIDE_04::$PNG_04"

/opt/homebrew/bin/ffmpeg -y \
  -loop 1 -t 9.8 -i "$PNG_01" \
  -loop 1 -t 9.8 -i "$PNG_02" \
  -loop 1 -t 9.8 -i "$PNG_03" \
  -loop 1 -t 9.8 -i "$PNG_04" \
  -filter_complex "
    [0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,format=yuv420p[v0];
    [1:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,format=yuv420p[v1];
    [2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,format=yuv420p[v2];
    [3:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,format=yuv420p[v3];
    [v0][v1]xfade=transition=fade:duration=0.6:offset=2.2[x1];
    [x1][v2]xfade=transition=fade:duration=0.6:offset=4.8[x2];
    [x2][v3]xfade=transition=fade:duration=0.6:offset=7.4[outv]
  " \
  -map "[outv]" \
  -r 30 \
  -t 9.8 \
  -c:v libx264 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUT_VIDEO"

/opt/homebrew/bin/ffmpeg -y -i "$OUT_VIDEO" -vf "select='eq(n,255)'" -vframes 1 "$OUT_POSTER"

echo "Generated: $OUT_VIDEO"
echo "Poster: $OUT_POSTER"
