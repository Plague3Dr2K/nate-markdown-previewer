import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';



 export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  
  
}

`



export const StyledApp = styled.div`
background-color:${(props) => props.theme.body};
width: 100%;
height: 100vh;
color:${(props) => props.theme.title};
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
margin:0 auto;
padding:0 auto;
`
export const BtnDiv = styled.div`
background-color: ${(props)=> props.theme.body };
position: sticky;
margin:0;
padding:0;
top:0;
display: flex;
justify-content: center;
align-items: center;
`
export const Btn = styled.button`
width: 50px;
height:50px;
color:${(props) => props.theme.fntclr};
background-color: ${(props)=> props.theme.btnclr};
border-radius: 100px;
border: 4mm ridge #DCDCDC;
position: absolute;
top:15px;
left:20px;
display: flex;
justify-content: center;
align-items: center;
transition: all .2s ease-in-out; 
font-size:1px;
@media only screen and (min-width: 200px) and (max-width: 900px) {
    position: sticky;
    width: 150px;
    height:50px;
    
    
}



&:hover{
    transform:scale(1.3);
    font-size:15px;
    font-family: 'Press Start 2P', cursive;
}
`
export const StyledText = styled.textarea`
background-color: ${(props) => props.theme.body};
color:${(props) => props.theme.fntclr};
width: 50%;
height:250px;
position: absolute;
top:100px;
font-size:1rem;
font-family: 'Silkscreen', cursive;
border: 2px solid #708090;
padding:0 50px;

@media only screen and (min-width: 200px) and (max-width: 900px) {
    font-size : 10px;
    width: 60%;
    &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid black;
     
  }
    
}

@media only screen and (min-width: 200px) and (max-width: 400px) {
    font-size : 10px;
    width: 80%;
    &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid black;
     
  }
}

`
export const StyledDiv = styled.div`
background-color: ${(props) => props.theme.body};
color:${(props) => props.theme.fntclr};
position: absolute;
top: 450px;
border: 2px solid #708090;
width:80%;
height:500px;
overflow:scroll;
font-family: 'Silkscreen', cursive;
padding:0 50px;
@media only screen and (min-width: 200px) and (max-width: 900px) {
    font-size : 15px;
    width: 90%;
    &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid black;
    
}}
@media only screen and (min-width: 200px) and (max-width: 400px) {
    font-size : 15px;
    width: 80%;
    &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 15px;
     height: 15px;
     border:1px solid black;
     
  }
}

`
export const EdiPrev = styled.div`
background-color: ${(props) => props.theme.body};
color:${(props) => props.theme.fntclr};
width: 20%;
height:250px;
position: absolute;
top:70px;
left:321px;
font-size:1rem;
font-family: 'Silkscreen', cursive;
border: 2px dashed #708090;
text-align: center;
@media only screen and (min-width: 200px) and (max-width: 900px) {
    position: absolute;
    left:50px;
   width:60%;
    
}
@media only screen and (min-width: 200px) and (max-width: 400px) {
    position: absolute;
    left:0px;
   width:100%;
   height:320px;
    
}
`
export const Prev = styled.div`
background-color: ${(props) => props.theme.body};
color:${(props) => props.theme.fntclr};
width: 20%;
height:500px;
position: absolute;
top:420px;
left:128px;
font-size:1rem;
font-family: 'Silkscreen', cursive;
border: 2px dashed #708090;
text-align: center;
@media only screen and (min-width: 200px) and (max-width: 900px) {
   top:420px;
   left:26px;
width:50%;
}
@media only screen and (min-width: 200px) and (max-width: 400px) {
    position: absolute;
    left:0px;
   width:100%;
   
    
}
`

 export const darkTheme ={
    body: "#696969",
    title:"white",
    border:"white",
    markdowns:"black",
    btnfont: "white",
    btnclr:"#708090",
    btnborder:"#DCDCDC",
    fntclr:"#00CED1"
    
}

export const lightTheme={
    body:"white",
    title:"black",
    border:"black",
    markdowns:"white",
    btnfont: "black",
    btnclr:"white",
    btnborder:"black",
    image:"url({gandalf});"

}



