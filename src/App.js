import { ThemeProvider } from 'styled-components';
import {StyledApp, darkTheme, lightTheme, Btn, BtnDiv, StyledText, StyledDiv, GlobalStyle, EdiPrev, Prev} from './components/theme';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const defText = () =>{
    return `Here are some Headers for you 

# Echoooooo
## Echoooooooo


A Bold Gentlemen Perhaps?

**Gentlemen**

Browsing secretly not to be detected by your cats ? Use this link. To browse other cute fluffers in SECRET!. Thank Me later [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")

Some of your basic typical boring CodeBlokcs and Divs

\`codeblock\`

\`<div></div>\`

Use These to list down people you wanna Hack!

1. list 
- list

Since using react, i've forgetton how to write out my HTML boilerplate XD

\`\`\`
<html>
<head>
</head>
</html>
\`\`\`

Pictures.
![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

The all Important Blockquotes......
> BlockQuote
`
    // header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
  }
  const [output, setOutput]= useState(defText())
  const [text,setState] = useState('LIGHT')
  const [theme,setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () =>{
    setTheme(isDarkTheme ? 'light' : 'dark');
    setState(isDarkTheme ? 'LIGHT' : 'DARK')
    //if isDarkTheme = true , if yes we wanna turn it to light after this , if its not then turn it to dark after this 
}
  const changeOutput = (event) =>{
    setOutput(event.target.value);
  }  

  // const markedIt = marked.parse(output);

  


  
  return (
  
   <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme}/*ask whether or not this is a dark themed if yes turn to darkthem if no turn to lightheme*/>
   <GlobalStyle />
    <EdiPrev>EDITOR</EdiPrev>
    <Prev>PREVIEW</Prev>
   <BtnDiv><Btn onClick={()=>toggleTheme()}>{text}</Btn></BtnDiv>
    <StyledApp >    
     <StyledText id='editor' onChange={(event) => changeOutput(event)} value={output}></StyledText>
      <StyledDiv id='preview' dangerouslySetInnerHTML={{ __html: marked(output)}}></StyledDiv>
    </StyledApp>  
    </ThemeProvider>
  );
}

export default App;
