/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1', // Adiciona o valor -1 para z-index
      },
      textUnderlineOffset: {
        'custom': '4px', // Ajuste o valor conforme necessário
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textUnderlineOffsets = theme('textUnderlineOffset');
      const textUnderlineOffsetUtilities = Object.keys(textUnderlineOffsets).map((key) => {
        return {
          [`.underline-offset-${key}`]: {
            'text-underline-offset': textUnderlineOffsets[key],
          },
        };
      });
      addUtilities(textUnderlineOffsetUtilities, ['responsive', 'hover']);
    },
  ],
};
