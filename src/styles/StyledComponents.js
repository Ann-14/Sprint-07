import styled from "styled-components";
import ImgHome from  '../img/pexels-fauxels-3184306.jpg' 
/* APP.JS STYLING*/
export const WrapperBody = styled.div`

  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 4rem;
  display: flex;
  flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center; 
 height: 100vh; 
   
  
  `
export const ButtonSubmit = styled.button`
display:inline-block;
margin:1rem 0.4rem 0.3rem 0;
border-radius:0.4rem;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:400;
color:#FFFFFF;
background-color:#3369ff;
text-align:center;
width: 8rem;
height: 4.5rem;
font-size: 1.6rem;
margin-bottom: 5rem;



&:hover{
  text-shadow: 0 0 2rem rgba(255,255,255,1);
  background-color:#4095c6;

}
  `



/* PANEL.JS STYLING*/
export const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.5rem solid pink;
  border-radius: 1rem;
  padding: 1.2rem 0.5rem;
  width: 45rem;
  height: 20rem;
  padding: 1rem;
  margin: 2rem;
  
  
`;

export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`
export const ControlsStyled = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    
`
export const ButtonControls = styled.button`
   display:inline-block;
   padding:0.6rem 1.6rem;
   border:0.1rem solid #4095c7;
   margin:0.3rem;
   box-sizing: border-box;
   text-decoration:none;
   font-weight:400;
   color:#121212;
   text-align:center;
  
`
export const LabelStyled = styled.label`
display: block;
  width: 100%;
  max-width: 100%;
  
`
export const CheckBoxStyled = styled.input`
margin-right: 1rem;
margin-bottom:3rem;

`

/* WELCOME.JS STYLING*/
export const WelcomeBackground = styled.div`
   height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-image: url('../img/pexels-fauxels-3184306.jpg') ; 
`;

export const WelcomeCard = styled.div`
  width: 50%;
  height: 50%;
  margin-left: 50%;
  margin-right: 50%;
  background-color:#4095c6 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 0.5 1.2rem;
  margin-top: 4rem;
  border-radius: 2rem;
`;

export const WelcomeText = styled.div`
  color: #151314;
  font-size: 2rem;
`;