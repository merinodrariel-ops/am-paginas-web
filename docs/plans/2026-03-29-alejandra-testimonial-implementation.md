# Alejandra Testimonial Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create one 2-3 minute Alejandra testimonial master edit and three 50-65 second short-form variants with cleaned audio, vertical reframing, emotional structure, metadata, and publishing copy.

**Architecture:** Use the main interview video as the backbone, replace camera audio with the external WAV, and build a narrative-first cut. Use B-roll from adjacent smile and macro clips to hide trims, reinforce key emotional beats, and diversify the three short versions.

**Tech Stack:** `ffmpeg`, `ffprobe`, shell commands, filesystem organization in external media folders, plain text copy deliverables in repo docs.

---

### Task 1: Audit Source Media

**Files:**
- Inspect: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/testimonio Aljandra ferrari.MP4`
- Inspect: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/audio testimonio alejandra ferrari.WAV`
- Inspect: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/`

**Step 1: Inspect all candidate media**

Run:

```bash
ffprobe -v error -show_entries format=duration,size -show_streams -of json "/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/testimonio Aljandra ferrari.MP4"
```

**Step 2: Inspect external microphone audio**

Run:

```bash
ffprobe -v error -show_entries format=duration,size -show_streams -of json "/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/audio testimonio alejandra ferrari.WAV"
```

**Step 3: List nearby B-roll assets**

Run:

```bash
ls -la "/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio"
```

**Step 4: Confirm output folder plan**

Create folders for master, variants, and review exports under the same testimonial directory.

### Task 2: Create a Review Proxy and Transcribe Candidate Moments

**Files:**
- Create: review proxy in `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/exports-review/`

**Step 1: Create low-weight review proxy**

Run:

```bash
ffmpeg -y -i "/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/testimonio Aljandra ferrari.MP4" -vf "scale=960:-2" -c:v libx264 -preset veryfast -crf 28 -c:a aac -b:a 96k "/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/exports-review/alejandra-review-proxy.mp4"
```

**Step 2: Review and log strongest moments**

Capture timestamps for:

- strongest opening hook
- strongest emotional shift
- best line about confidence or self-image
- best result statement
- any redundant or weak sections to remove

**Step 3: Review B-roll candidates**

Identify best smile/macro shots with timestamps and note whether they work as opener, bridge, or closer.

### Task 3: Sync and Prepare Master Timeline Assets

**Files:**
- Create: synced source in `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/exports-master/`

**Step 1: Sync external WAV to camera reference audio**

Use waveform alignment or manual offset check.

**Step 2: Produce synced mezzanine file**

Run a command that keeps video quality high and replaces the primary spoken track with the WAV-derived mix.

**Step 3: Verify lip sync on three checkpoints**

Check start, middle, and end before cutting.

### Task 4: Build the Long Master Edit

**Files:**
- Create: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/exports-master/alejandra-testimonio-master-vertical.mp4`

**Step 1: Select the emotional sequence**

Assemble the narrative in this order:

1. strongest emotional hook
2. what she felt before
3. what changed during the process
4. what she feels now
5. final emotional landing line

**Step 2: Remove silences and weak repetitions**

Cut dead air, filler, and redundant sentences while preserving natural rhythm.

**Step 3: Reframe to 9:16**

Center the speaker intentionally and adjust crop based on head movement.

**Step 4: Layer in macro/smile B-roll**

Use B-roll to hide cuts and intensify key lines.

**Step 5: Export review cut**

Export a near-final master for qualitative review.

### Task 5: Build Three Short Variants

**Files:**
- Create: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/Version 1/`
- Create: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/Version 2/`
- Create: `/Volumes/Samsung_T5/VIDEOS/TESTIMONIOS/Alejandra Ferrari testimonio/Version 3/`

**Step 1: Version 1 - emotional hook**

Open with the most vulnerable or revealing phrase.

**Step 2: Version 2 - transformation hook**

Open with the clearest line about internal change or self-esteem.

**Step 3: Version 3 - smile/confidence hook**

Open with the strongest line tied to smile, confidence, or identity.

**Step 4: Use different B-roll emphasis per version**

Avoid making the three variants feel identical.

### Task 6: Apply Metadata and Naming

**Files:**
- Modify/export final media in each version folder

**Step 1: Choose SEO-friendly filenames**

Use names built around:

- `alejandra ferrari`
- `testimonio`
- `diseno de sonrisa`
- `puerto madero`
- `am estetica dental`

**Step 2: Apply metadata**

Set distinct values for `title`, `description`, `comment`, `keywords`, and `location` for master and short variants.

**Step 3: Verify metadata with `ffprobe`**

Confirm every output has the intended tags.

### Task 7: Prepare Publishing Copy

**Files:**
- Create: `docs/plans/2026-03-29-alejandra-testimonial-publish-copy.md`

**Step 1: Write one copy block for the master**

Tone: emotional, observational, no hard CTA.

**Step 2: Write three short-version copy blocks**

Each should match its hook and emotional angle.

**Step 3: Add per-version extras**

Include:

- title
- hook text on screen
- caption
- hashtags
- optional pinned comment

### Task 8: Verification and Handoff

**Files:**
- Verify all final exports and docs

**Step 1: Check durations and aspect ratio**

Run `ffprobe` on all outputs.

**Step 2: Spot-check sync and audio quality**

Review start, middle, and end on master and each short version.

**Step 3: Confirm folder organization**

Ensure master and short variants are separated clearly.

**Step 4: Commit repo-side planning docs if requested**

Do not commit external media assets.
