import GlobalStyle from '../styles/GlobalStyle.js'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'


const theme = {
  color: {
    background: "gray",
    foreground: "white",
    fontDark: "black",
    fontLight: "white",
    accent: "purple",
    accent2: "teal",
    shadow: "black"
  },
  border: {
    inner: ".5em",
    outer: "1em",
    input: ".25em"
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '	1536px'

  }
}
export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout >
      <GlobalStyle />
    </ThemeProvider>
  )
}
