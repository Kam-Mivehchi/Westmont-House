import styled from 'styled-components'

export const Grid = styled.div`
display:grid;
grid-template-columns:repeat(12,1fr);
justify-items:center;


max-width:${({ theme }) => theme.breakpoints.xl};
margin:auto;
`

export const Card = styled.div`
order:${({ order }) => order};
grid-column:span ${({ sm }) => sm || '12'};
border-radius:${({ theme }) => theme.border.outer};


display:grid;
grid-template-columns:repeat(12,1fr);
width:90%;
div{
   width:100%;
   height:15em;
   position:relative;

}
*{
grid-column:span 12;
}
h2{
   font-size:min(9vw,3rem);
   font-weight:bold;
}
img{
   
   justify-self:center;
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
grid-column: span ${({ md }) => md};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
grid-column: span ${({ lg }) => lg};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}){
grid-column: span ${({ xl }) => xl};

}
@media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}){
grid-column: span ${({ xxl }) => xxl};

}
`
export const FeaturedCard = styled(Card)`
div{
   height:25em;
   
}
img{
   margin:0;
  
   border-radius:${({ theme }) => theme.border.outer} ;
}
h2{
color:${({ theme }) => theme.color.accent2};
display:block;
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
margin:.5em 0;
img{
   margin:0;
   position:absolute;
   z-index:-1;
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

export const ThumbnailLink = styled.div`
order:5;

position:relative;
grid-column:span 12;
height:15vh;
margin:.5em;
padding:0.5em 0em;
width:70%;
transition: all .3s ease-in-out;
border-radius:${({ theme }) => theme.border.outer};
background-color:rgb(0,0,0,.5);



img{
   position:absolute;
   z-index:-1;
   width:100%;
   height:100%;
   object-fit:cover;
   border-radius:${({ theme }) => theme.border.outer};
}


a{
position:absolute;
bottom:50%;
left:50%;
width:max-content;
transform:translate(-50%,50%);
color:${({ theme }) => theme.color.fontLight};
font-weight:bold;
font-size: min(10vw,3em);
filter:none;

}

&:hover{
background-color:rgb(0,0,0,.2);
background-color:rgb(0,0,0,.2);
text-shadow: 0 0 10px black;
a{
color:${({ theme }) => theme.color.accent2};
text-shadow: 0 0 20px white;
}
}


@media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
grid-column: span 4;

}


`