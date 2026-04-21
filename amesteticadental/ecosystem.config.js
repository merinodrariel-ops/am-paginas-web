module.exports = {
  apps: [
    {
      name: "amesteticadental-dev",
      script: "node_modules/.bin/next",
      args: "dev --port 3001",
      cwd: __dirname,
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      watch: false,
      autorestart: true,
    },
  ],
};
