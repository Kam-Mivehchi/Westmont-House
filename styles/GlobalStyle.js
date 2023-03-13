import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 1.5em;
} 

h3 {
  font-size: 1.3em;
}

h4 {
  font-size: 1em;
}

h5 {
  font-size: 0.8em;
}

h6 {
  font-size: 0.7em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-style: normal;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
main {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a{
 
 color: ${({ theme }) => theme.color.accent2};
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-out;
}
a:hover{
color: ${({ theme }) => theme.color.accent};

}

`
export default GlobalStyle;