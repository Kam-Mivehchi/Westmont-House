import styled, { keyframes } from 'styled-components'
const gradbar = keyframes`
               0% {
                  background-position: 0% 50%
               }
               50% {
                  background-position: 100% 50%
               }
               100% {
                  background-position: 0% 50%
               }
`

export const StyledBanner = styled.div`

color:${({ theme }) => theme.color.fontLight};
text-align:center;
padding:1em;
width: 100%;
background: linear-gradient(-45deg, ${({ theme }) => theme.color.accent2}, ${({ theme }) => theme.color.accent}, ${({ theme }) => theme.color.accent2}, ${({ theme }) => theme.color.accent});
background-size: 400% 400%;
-webkit-animation: ${gradbar} 20s ease infinite;
-moz-animation: ${gradbar} 20s ease infinite;
animation: ${gradbar} 20s ease infinite;


a{
color:${({ theme }) => theme.color.fontLight};
&:hover{
   color: ${({ theme }) => theme.color.accent}
}
}

`
export const StyledNav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1em;
max-width:1200px;
margin:0 auto;
position:relative;
flex-wrap:wrap;

img{
   width:8em;
}
a{
   margin:0 .5em;
   font-size:min(10vw,1.5em);
   font-weight:bold;
   color:${({ theme }) => theme.color.accent2};
}
span{
flex-direction:column;
flex-basis: 100% ;
text-align:center;
justify-content:center;
border-top:4px solid ${({ theme }) => theme.color.accent2};

a{
  
   
   border-bottom: 1px solid ${({ theme }) => theme.color.accent2};
}
}


//tablets
@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
span{
display:flex;
flex-direction:row;
flex-basis: auto ;
border-top:0;
border-bottom:4px solid ${({ theme }) => theme.color.accent2};

a{


   border-bottom: 0;
}
}
div{
   display:none;
}
}



`