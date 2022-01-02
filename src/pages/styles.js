import styled from "styled-components";

export const Fila = styled.div` 
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Backg = styled.div` 
    background-color: black;
    width: 100vw;
    height: 100vh;
    color: white;
    
 `;    

export const Perf = styled.div`
    width: 200px;
    border: 4px solid transparent;
    border-radius: 16px;
    background: white;
    background-clip: padding-box;
    padding: 10px;    
    border-radius:50%;
    align-self: center;
`;

export const Foto=styled.img`
   display: flex;
   align-self:center;
    width: 100%;
    height: auto;
`;

export const Text01=styled.h1` 
  font-size: 3rem; 

`;

export const Text02=styled.h1` 
  font-size: 3rem;
  color: blue;  

`;

export const Article=styled.article `
  background: linear-gradient(90deg, 
  hsl(98 100% 62%), 
  hsl(204 100% 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  
`;
  
  
    