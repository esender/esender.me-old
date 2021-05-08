const postcssPresetEnv = require("postcss-preset-env");

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      autoprefixer: { grid: true },
      stage: 0,
      importFrom: [
        {
          customMedia: {
            "--mobile-medium": "(width >= 360px)",
            "--small-tablet": "(width >= 660px)",
            "--tablet": "(width >= 768px)",
            "--desktop": "(width >= 1024px)",
          },
        },
      ],
    }),
  ],
});
