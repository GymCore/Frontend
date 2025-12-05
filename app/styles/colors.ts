export const colors = {
  primary: {
    DEFAULT: '#4F46E5',
    hover: '#6366F1',
    light: '#818CF8',
    lighter: '#A5B4FC',
    dark: '#4338CA',
  },
  background: {
    dark: '#0F172A',
    card: '#1E293B',
    cardHover: '#334155',
    light: '#F8FAFC',
    white: '#FFFFFF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#94A3B8',
    muted: '#64748B',
    dark: '#0F172A',
    light: '#CBD5E1',
  },
  border: {
    DEFAULT: '#334155',
    light: '#475569',
    dark: '#1E293B',
  },
  status: {
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const;

export const gradients = {
  hero: 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900',
  overlay: 'bg-gradient-to-r from-slate-900/90 to-slate-900/70',
  primaryButton: 'bg-gradient-to-r from-indigo-600 to-indigo-500',
  premium: 'bg-gradient-to-b from-indigo-600 to-indigo-700',
  card: 'bg-gradient-to-br from-slate-800 to-slate-900',
  text: 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent',
  logo: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent',
} as const;

export const shadows = {
  card: 'shadow-xl',
  cardHover: 'shadow-2xl',
  button: 'shadow-lg shadow-indigo-500/25',
  navbar: 'shadow-lg shadow-slate-900/10',
} as const;

export const tailwindColors = {
  buttonPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
  buttonSecondary: 'bg-transparent border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10',
  buttonGhost: 'bg-transparent hover:bg-slate-800 text-slate-300',
  bgDark: 'bg-slate-900',
  bgCard: 'bg-slate-800',
  bgCardHover: 'hover:bg-slate-700',
  textPrimary: 'text-white',
  textSecondary: 'text-slate-400',
  textMuted: 'text-slate-500',
  textAccent: 'text-indigo-400',
  borderDefault: 'border-slate-700',
  borderLight: 'border-slate-600',
  card: 'bg-slate-800 border border-slate-700 rounded-2xl',
  cardHover: 'hover:bg-slate-700 hover:border-slate-600 transition-all duration-300',
} as const;

export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  scaleOnHover: {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
  },
} as const;

export const spacing = {
  section: 'py-20 px-4 sm:px-6 lg:px-8',
  container: 'max-w-7xl mx-auto',
  card: 'p-6 sm:p-8',
} as const;

export const typography = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'text-3xl sm:text-4xl font-bold',
  h3: 'text-xl sm:text-2xl font-semibold',
  body: 'text-base text-slate-400',
  small: 'text-sm text-slate-500',
} as const;

const theme = {
  colors,
  gradients,
  shadows,
  tailwindColors,
  animations,
  spacing,
  typography,
};

export default theme;
