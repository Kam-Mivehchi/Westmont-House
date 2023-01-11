import styled from 'styled-components'

export const StyledBanner = styled.div`
background-color:${({ theme }) => theme.color.background};
color:${({ theme }) => theme.color.fontLight};
text-align:center;
padding:1em;
`
export const StyledNav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1em;
max-width:1200px;
margin:0 auto;
img{
   width:8em;
}
a{
   margin:0 .5em;
}
span{
   display:none;
}


//tablets
@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
span{
display:flex;
}
div{
   display:none;
}
}



`