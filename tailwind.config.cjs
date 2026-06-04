/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lordish: ['LordishRegular'],
        bitechalk: ['BiteChalk'],
        bitechalknormal: ['BiteChalkNormal'],
        handcraftChalk: ['HandcraftChalkRegular'],
        paragraph: ['Neuton'],
        acdc: ['acdc'],
        namefont: ['namefont'],
      },
      textColor: {
        skin: {
          base: 'var(--text-primary)',
          accent: 'var(--text-accent)',
          inverted: 'var(--text-inverted)',
          muted: 'var(--color-muted)',
        },
      },
      fontSize: {
        '10xl': '12rem',
        'xxs': '0.6rem',
      },
      backgroundColor: {
        skin: {
          bg: 'var(--color-bg)',
          trans: 'var(--color-bg-trans)',
          muted: 'var(--color-bg-muted)',
          card: 'var(--color-bg-card)',
          lightMuted: 'var(--color-muted)',
          accentdark: 'var(--color-accent)',
          glow: 'var(--color-glow)',
          accent: 'var(--color-accent-main)',
          accentMute: 'var(--color-accent-mute)',
        },
      },
      colors: {
        borderglow: 'var(--color-glow)',
        bordermain: 'var(--color-accent-main)',
        bordersubtle: 'var(--color-border-subtle)',
        mutedglow: '#454545',
        mainblack: '#191919',
        mutedtext: 'var(--color-muted-text)',
      },
      boxShadow: {
        '0xl': '0 4px 20px -2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'accent': '0 8px 30px -4px rgba(255,196,102,0.25)',
      },
      animation: {
        morph: 'morph 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      inset: {
        84: '24.3rem',
        63: '15.96rem',
      },
    },
  },
  plugins: [],
}
