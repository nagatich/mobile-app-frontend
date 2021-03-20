import { defaultThemeVariables } from './variables/defaultThemeVariables'
import { breakpoints } from './variables/breakpoints'

export default {
  isDefault: true,
  isDark: false,
  fontSizeGlobal: defaultThemeVariables.fontSizeGlobal,
  breakpoints,
  body: {
    bg: defaultThemeVariables.color.white,
    color: defaultThemeVariables.color.blackLighter,
    fontFamily: defaultThemeVariables.fontFamily.montserrat,
    fontWeight: defaultThemeVariables.fontWeight.medium,
  },
  textColor: {
    base: defaultThemeVariables.color.blackLighter,
    primary: defaultThemeVariables.color.white,
    baseLight: defaultThemeVariables.color.greyDark,
    baseFaded: defaultThemeVariables.color.greyLighter,
    activeBright: defaultThemeVariables.color.orange,
    activeFaded: defaultThemeVariables.color.grey,
    error: defaultThemeVariables.color.red,
    success: defaultThemeVariables.color.green,
    primaryHover: defaultThemeVariables.color.orangeDark,
  },
  bgColor: {
    base: defaultThemeVariables.color.white,
    primary: defaultThemeVariables.color.orange,
    primaryPale: defaultThemeVariables.color.orangePale,
    secondary: defaultThemeVariables.color.grey,
    secondaryLight: defaultThemeVariables.color.greyLight,
    secondaryBlue: defaultThemeVariables.color.greyBlueLight,
    extra: defaultThemeVariables.color.beigePale,
    blackout: defaultThemeVariables.color.blackLighter,
    danger: defaultThemeVariables.color.red,
    safe: defaultThemeVariables.color.green,
    safePale: defaultThemeVariables.color.greenPale,
  },
  borderColor: {
    primary: defaultThemeVariables.color.orange,
    secondary: defaultThemeVariables.color.grey,
    secondaryLight: defaultThemeVariables.color.greyLight,
    extra: defaultThemeVariables.color.beigePale,
    active: defaultThemeVariables.color.blackLighter,
    landing: defaultThemeVariables.color.beigePaleLight,
    green: defaultThemeVariables.color.green,
  },
  borderRadius: defaultThemeVariables.borderRadius,
  fontFamily: {
    primary: defaultThemeVariables.fontFamily.montserrat,
  },
  fontWeight: {
    regular: defaultThemeVariables.fontWeight.regular,
    medium: defaultThemeVariables.fontWeight.medium,
    bold: defaultThemeVariables.fontWeight.bold,
  },
  transitionDuration: {
    regular: defaultThemeVariables.transition.regular,
  },
  fontSize: defaultThemeVariables.fontSize,
  button: {
    bgColor: {
      primary: defaultThemeVariables.color.orange,
      primaryHover: defaultThemeVariables.color.orangeDark,
      secondary: defaultThemeVariables.color.grey,
      secondaryHover: defaultThemeVariables.color.grey,
      secondaryLight: defaultThemeVariables.color.beigePale,
      secondaryLightHover: defaultThemeVariables.color.beigePaleLight,
    },
    textColor: {
      primary: defaultThemeVariables.color.white,
      primaryHover: defaultThemeVariables.color.white,
      secondary: defaultThemeVariables.color.orange,
      secondaryHover: defaultThemeVariables.color.orange,
      secondaryLight: defaultThemeVariables.color.blackLighter,
    },
  },
  margins: {
    base: defaultThemeVariables.margins.base,
    big: defaultThemeVariables.margins.big,
    small: defaultThemeVariables.margins.small,
  },
  form: {
    labelColor: {
      base: defaultThemeVariables.color.blackLighter,
      disable: defaultThemeVariables.color.greyDark,
      error: defaultThemeVariables.color.greyDark,
      success: defaultThemeVariables.color.greyDark,
    },
    bgColor: {
      base: defaultThemeVariables.color.white,
      active: defaultThemeVariables.color.orange,
      dropdownElementHover: defaultThemeVariables.color.beigePale,
    },
    textColor: {
      base: defaultThemeVariables.color.blackLighter,
      placeholder: defaultThemeVariables.color.greyLightSecondary,
      active: defaultThemeVariables.color.orange,
    },
    borderColor: {
      base: defaultThemeVariables.color.greyLight,
      active: defaultThemeVariables.color.orange,
      activeSecondary: defaultThemeVariables.color.blackLighter,
      landing: defaultThemeVariables.color.beigePaleLight,
      landingDark: defaultThemeVariables.color.beigePaleDark,
    },
  },
  zIndex: {
    lowest: defaultThemeVariables.zIndex.zIndexLowest,
    lower: defaultThemeVariables.zIndex.zIndexLower,
    low: defaultThemeVariables.zIndex.zIndexLow,
    default: defaultThemeVariables.zIndex.zIndexDefault,
    high: defaultThemeVariables.zIndex.zIndexHigh,
    higher: defaultThemeVariables.zIndex.zIndexHigher,
    highest: defaultThemeVariables.zIndex.zIndexHighest,
  },
  padding: defaultThemeVariables.padding,
}
