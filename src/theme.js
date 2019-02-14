import { rem } from 'polished';

export const breakpoints = ['512px', '768px', '1024px', '1600px'];

export const blues = {
  blueLighter: '#6688FF',
  blueLight: '#5577FF',
  blue: '#4466EE',
  blueDark: '#4455CC',
  blueDarkest: '#2E374E'
};

export const greys = {
  grey10: '#F8F9F9',
  grey20: '#F2F2F2',
  grey30: '#EBECEC',
  grey40: '#E0E1E2',
  grey50: '#BEBEC0',
  grey60: '#989A9C',
  grey70: '#78797D',
  grey80: '#5B5D61',
  grey90: '#25272D',
  grey100: '#0F0F10'
};

export const whites = {
  white: '#FFFFFF',
  white10: '#F5F5F5'
};

export const reds = {
  redLighter: '#FF6655',
  redLight: '#FF4444',
  red: '#EE2200',
  redDark: '#DD1100'
};

export const greens = {
  greenLighter: '#00CC66',
  greenLight: '#00BB44',
  green: '#00AA44',
  greenDark: '#008833'
};

export const black = '#000000';

export const bronzes = {
  bronzeLight: '#CC9900',
  bronze: '#CC7700',
  bronzeDark: '#AA5500'
};

export const colors = {
  black,
  ...blues,
  ...greys,
  ...whites,
  ...greens,
  ...reds,
  ...bronzes
};

export const fontSizes = {
  size1: rem('12px'),
  size2: rem('14px'),
  size3: rem('16px'),
  size4: rem('18px'),
  size5: rem('22px'),
  size6: rem('28px'),
  size7: rem('34px')
};

export const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700
};

export const lineHeights = {
  small: 1.25,
  large: 1.5
};

export const typography = {
  text: {
    ui: {
      fontSize: fontSizes.size2,
      color: colors.grey100
    },
    longForm: {
      fontSize: fontSizes.size3,
      color: colors.grey100
    },
    tiny: {
      fontSize: fontSizes.size1,
      color: colors.grey80
    }
  }
};

export const brandFont = 'Motiva Sans';

export const spacings = {
  smallest: rem('4px'),
  smaller: rem('8px'),
  small: rem('12px'),
  regular: rem('16px'),
  large: rem('24px'),
  larger: rem('32px'),
  largest: rem('64px')
};

export const borderRadius = {
  small: '3px',
  large: '6px'
};

export const borderWidth = {
  small: '1px',
  medium: '2px',
  large: '4px'
};

export default {
  borderRadius,
  borderWidth,
  brandFont,
  breakpoints,
  colors,
  fontWeights,
  fontSizes,
  iconFontPrefix: 'ar',
  lineHeights,
  space: spacings,
  typography
};
