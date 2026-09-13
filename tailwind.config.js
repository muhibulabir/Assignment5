export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1222',
        muted: '#6B7280',
        brand: {
          orange: '#FB923C',
          pink: '#EC4899',
          violet: '#8B5CF6',
        },
      },
      // Single source of truth for the shared brand gradient.
      // Change these three stops to re-theme the whole UI.
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FB923C 0%, #EC4899 55%, #8B5CF6 100%)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 18, 34, 0.04), 0 8px 24px rgba(15, 18, 34, 0.06)',
      },
    },
  },
  plugins: [],
}
