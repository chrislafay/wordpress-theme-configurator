export const curatedFonts = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Oswald',
  'Raleway',
  'Nunito',
  'Merriweather',
  'Playfair Display',
  'Rubik',
  'Work Sans',
  'Kanit',
  'Fira Sans',
  'Quicksand',
  'Barlow',
  'PT Sans',
  'Titillium Web',
  'Inconsolata'
];

export const initialDesignSystem = {
  project: { name: 'New Theme', slug: 'new-theme' },
  colors: [
    { label: 'Primary', slug: 'primary', hex: '#3B82F6', contrast: 'white' },
    { label: 'Secondary', slug: 'secondary', hex: '#1E293B', contrast: 'white' },
    { label: 'Tertiary', slug: 'tertiary', hex: '#F59E0B', contrast: 'black' },
    { label: 'Dark', slug: 'dark', hex: '#0F172A', contrast: 'white' },
    { label: 'Dark Alt', slug: 'dark-alt', hex: '#1F2937', contrast: 'white' },
    { label: 'Light', slug: 'light', hex: '#F1F5F9', contrast: 'black' },
    { label: 'Light Alt', slug: 'light-alt', hex: '#E2E8F0', contrast: 'black' },
    { label: 'Black', slug: 'black', hex: '#000000', contrast: 'white', locked: true },
    { label: 'White', slug: 'white', hex: '#FFFFFF', contrast: 'black', locked: true }
  ],
  typography: {
    fonts: { heading: 'Inter', body: 'Roboto' },
    sizes: {
      'x-small': { min: '0.75rem', max: '0.875rem' },
      small: { min: '0.875rem', max: '1rem' },
      medium: { min: '1rem', max: '1.125rem' },
      large: { min: '1.5rem', max: '1.75rem' },
      'x-large': { min: '2rem', max: '2.5rem' },
      'xx-large': { min: '3rem', max: '4rem' }
    }
  },
  spacing: {
    steps: {
      10: '0.5rem',
      20: '1rem',
      30: '1.5rem',
      40: '2rem',
      50: '3rem',
      60: '4rem',
      70: '5rem',
      80: '6rem',
      90: '7rem'
    },
    defaultGap: '30',
    contentSize: '1140px',
    wideSize: '1140px'
  },
  customStyles: {
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderWidth: '1px',
    borderRadius: '8px',
    borderStyle: 'solid'
  }
};
