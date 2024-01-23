const fonts = {
  primary: 'Montserrat' || 'sans-serif',
  secondary: 'Open Sans' || 'sans-serif'
}

const colors = {
  primary: '#859EFF',
  logo: '#414C5E',
  warning: '#ff9696',
  light: '#fff',
  lightText: '#778195',
  darkText: '#566074'
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

const theme = {
  fonts,
  colors,
  device
}

export default theme
