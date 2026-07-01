export type VersionId = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7';

export type ThemeColors = {
  bg: string;
  bg2: string;
  bgCard: string;
  ink: string;
  ink2: string;
  ink3: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  warm: string;
  line: string;
  bgRgb: string;
  inkRgb: string;
};

export type ThemeConfig = {
  id: VersionId;
  label: string;
  description: string;
  fontSans: string;
  fontDisplay: string;
  colors: ThemeColors;
};

export const VERSION_IDS: VersionId[] = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7'];

export const themes: Record<VersionId, ThemeConfig> = {
  v1: {
    id: 'v1',
    label: 'Editorial Mono',
    description: 'Onest · камень и чёрный',
    fontSans: 'var(--font-onest)',
    fontDisplay: 'var(--font-onest)',
    colors: {
      bg: '#F7F6F3',
      bg2: '#EEEDEA',
      bgCard: '#E2E0DA',
      ink: '#111111',
      ink2: '#3A3A3A',
      ink3: '#7C7C78',
      accent: '#111111',
      accentHover: '#2C2C2C',
      accentSoft: '#9A8468',
      warm: '#E6E2DA',
      line: '#D5D1C9',
      bgRgb: '247, 246, 243',
      inkRgb: '17, 17, 17',
    },
  },
  v2: {
    id: 'v2',
    label: 'Classic Fashion',
    description: 'Manrope + Cormorant · бургунди',
    fontSans: 'var(--font-manrope)',
    fontDisplay: 'var(--font-cormorant)',
    colors: {
      bg: '#FAF8F5',
      bg2: '#F2EDE8',
      bgCard: '#E8E0D8',
      ink: '#1A1410',
      ink2: '#4A3F38',
      ink3: '#8E7E72',
      accent: '#1A1410',
      accentHover: '#3D2E28',
      accentSoft: '#7A3344',
      warm: '#EDE4DA',
      line: '#D9CEC4',
      bgRgb: '250, 248, 245',
      inkRgb: '26, 20, 16',
    },
  },
  v3: {
    id: 'v3',
    label: 'Scandinavian',
    description: 'Inter + Jost · хвойный',
    fontSans: 'var(--font-inter)',
    fontDisplay: 'var(--font-jost)',
    colors: {
      bg: '#F4F5F3',
      bg2: '#EAEBE8',
      bgCard: '#DDE0DB',
      ink: '#1C211E',
      ink2: '#3D4540',
      ink3: '#7A827C',
      accent: '#1C211E',
      accentHover: '#2F3833',
      accentSoft: '#3D5C4E',
      warm: '#E2E6E1',
      line: '#CDD2CC',
      bgRgb: '244, 245, 243',
      inkRgb: '28, 33, 30',
    },
  },
  v4: {
    id: 'v4',
    label: 'Warm Heritage',
    description: 'Golos + Playfair · терракота',
    fontSans: 'var(--font-golos)',
    fontDisplay: 'var(--font-playfair)',
    colors: {
      bg: '#FBF7F2',
      bg2: '#F3EDE4',
      bgCard: '#E8DFD4',
      ink: '#231C16',
      ink2: '#4D4036',
      ink3: '#948578',
      accent: '#231C16',
      accentHover: '#3D3028',
      accentSoft: '#B85C38',
      warm: '#EDE5DA',
      line: '#DDD2C6',
      bgRgb: '251, 247, 242',
      inkRgb: '35, 28, 22',
    },
  },
  v5: {
    id: 'v5',
    label: 'Modern Navy',
    description: 'TT Firs Neue · индиго',
    fontSans: 'var(--font-tt-firs)',
    fontDisplay: 'var(--font-tt-firs)',
    colors: {
      bg: '#F8F9FB',
      bg2: '#EEF1F5',
      bgCard: '#E2E7EE',
      ink: '#0F1419',
      ink2: '#2E3744',
      ink3: '#6B7585',
      accent: '#0F1419',
      accentHover: '#1E2A3A',
      accentSoft: '#2B4A6E',
      warm: '#E4E9F0',
      line: '#D0D7E2',
      bgRgb: '248, 249, 251',
      inkRgb: '15, 20, 25',
    },
  },
  v6: {
    id: 'v6',
    label: 'Retro Signal',
    description: 'Radiotechnika · хаки и янтарь',
    fontSans: 'var(--font-radiotechnika)',
    fontDisplay: 'var(--font-radiotechnika)',
    colors: {
      bg: '#F2EDE4',
      bg2: '#E6DDD0',
      bgCard: '#D8CDBE',
      ink: '#1E1A14',
      ink2: '#3F382E',
      ink3: '#7A7064',
      accent: '#1E1A14',
      accentHover: '#342E24',
      accentSoft: '#C45A1A',
      warm: '#E8DFD2',
      line: '#CFC4B4',
      bgRgb: '242, 237, 228',
      inkRgb: '30, 26, 20',
    },
  },
  v7: {
    id: 'v7',
    label: 'CRT Studio',
    description: 'Monitorca · графит и неон',
    fontSans: 'var(--font-monitorca)',
    fontDisplay: 'var(--font-monitorca)',
    colors: {
      bg: '#ECEEEC',
      bg2: '#DDE2DE',
      bgCard: '#CDD4CE',
      ink: '#121614',
      ink2: '#2E3530',
      ink3: '#667068',
      accent: '#121614',
      accentHover: '#242C27',
      accentSoft: '#2E8B57',
      warm: '#D8DED9',
      line: '#BFC7C0',
      bgRgb: '236, 238, 236',
      inkRgb: '18, 22, 20',
    },
  },
};

export function isVersionId(value: string): value is VersionId {
  return VERSION_IDS.includes(value as VersionId);
}

export function getBasePath(version: VersionId): string {
  return `/${version}`;
}
