module.exports = {
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                  ...require("daisyui/src/theming/themes")["dark"],
                  primary: "#8867c0",
                },
            },
        ],
    },
};
  