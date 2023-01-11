import styled from 'styled-components'

export const Grid = styled.div`
display:grid;
grid-template-columns:repeat(12,1fr);
justify-items:center;
gap:1em;
`

export const Card = styled.div`
grid-column: span ${({ sm }) => sm || '12'};
border-radius:${({ theme }) => theme.border.outer};
// position:relative;

display:grid;
grid-template-columns:repeat(12,1fr);
   width:90%;

*{
grid-column:span 12;
}
h2{
   font-size:min(9vw,3rem);
   font-weight:bold;
}
img{
   justify-self:center;
   object-fit:contain;
   width:100%;
   aspect-ratio:2/1;
   object-fit:cover; 
    border-radius:${({ theme }) => theme.border.outer};
;
}
button{
   width:max-content;
    border-radius:${({ theme }) => theme.border.inner};
   padding:.5em 2em;
   font-weight:bold;
}
p,button{
   margin:1em;
}

@media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
grid-column: span${({ md }) => md || '12'};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
grid-column: span${({ lg }) => lg || '12'};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}){
grid-column: span${({ xl }) => xl || '12'};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}){
grid-column: span${({ xxl }) => xxl || '12'};

}
`
export const FeaturedCard = styled(Card)`
img{

}

h2{
color:${({ theme }) => theme.color.accent2}

}
p,button{
   margin:1em 0;
}
button{
background:${({ theme }) => theme.color.accent};
color:${({ theme }) => theme.color.fontLight};
border:0;
box-shadow:-.5em .5em  ${({ theme }) => theme.color.accent2};
}
`
export const EnclosedCard = styled(Card)`
border:1px solid black;
// overflow:hidden;
div{
   position:relative;
}

img{
   margin:0;
   border-radius:${({ theme }) => theme.border.outer} ${({ theme }) => theme.border.outer} 0 0;
}

h2{
position:absolute;
bottom:0em;
left:.5em;
color:${({ theme }) => theme.color.fontLight};
}

button{
background:${({ theme }) => theme.color.accent2};
color:${({ theme }) => theme.color.fontLight};
border:0;
box-shadow:-.5em .5em  ${({ theme }) => theme.color.accent};

}
`