import styled, { withTheme } from "styled-components";
import ContainerS, {colourStyles, Cardwarna} from "./Gaya";
import Typografi, {FontStyle, FontWeight, FontSize, FontComponent} from "./Typography";

const Kontenyyy =styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:${(props) => FontStyle[props.font]||FontStyle.default};
  ,
`
export const Kontencontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    height: 350px;

    .btnprimaryone{
        background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
        border: none;
        color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
        padding: 12px 22px;
        margin: auto;
        border-radius: 28px;
        font-size:${(props) => FontSize[props.size]||FontSize.default};
        align-items:center;
        font-family:${(props) => FontStyle[props.font]||FontStyle.default};  
    },
    h3{
        font-size:${(props) => FontSize[props.size]||FontSize.default};
        font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};
        text-transform: capitalize;
        font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    }
    p{
        max-width: 500px;
        margin: 10px auto;
        line-height: 28px;
        font-size:${(props) => FontSize[props.size]||FontSize.default};
        color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
        font-family:${(props) => FontStyle[props.font]||FontStyle.default};
    }
  `
export const Contents = styled.main`
background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`
export const Judul = styled.h3`
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};
    text-transform: capitalize;
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};`
export const Paragraf = styled.p`
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    font-family:${(props) => FontWeight[props.weight]||FontStyle.default};`
export const Row = styled.div`
display: flex;
flex-wrap: wrap;
width: 55%;
height : 55%;
padding-top: 1rem;
margin: 0 auto;
`
export const Judul2 = styled.h1`
font-size: ${(props) => FontSize[props.size]||FontSize.default};
font-family:${(props) => FontWeight[props.weight]||FontStyle.default};`

export const Text = styled.p`
max-width: 500px;
margin: 10px auto;
line-height: 28px;
font-size:${(props) => FontSize[props.size]||FontSize.default};
color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
font-family:${(props) => FontStyle[props.font]||FontStyle.default};`

export const Contentwrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 50%;
margin-top:25px;

.btn{
    padding: 18px 34px;
    font-size:${(props) => FontSize[props.size]||FontSize.default};
    font-weight:${(props) => FontWeight[props.weight]||FontStyle.default};
    display: inline-block;
    margin-right: 24px;
    margin-bottom: 24px;
    color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    border-color: #ec6964;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    border-radius: 0.25;
}
a{
    text-decoration: none;
    background-color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
}
img{
    width: 100%;
    margin:  auto;
    padding-left: 70px;
}`

export const Header = styled.header`
margin-top:40px;
text-align: center;
// padding: 80px;
background-color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`

export const Konten3 = styled.section`
display: flex;
justify-content: space-around;
padding: 50px;
background-color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`
export const Konten = styled.div`
text-align: center;

img{
    max-width: 100%;
    height: auto;
    margin-bottom: 20px; 
}`

export const Konten4 = styled.section`
text-align: center;
padding: 80px;
background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};

.button4 {
    display: inline-block;
    padding: 10px 20px;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    text-decoration: none;
    color:  ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    border-radius: 5px;  
}`


export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    padding: 0; 
    margin: 0; 

  }

  .hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
    background: none;
    border: none;
    color: #fcbf49;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block; /* Menampilkan hamburger di layar kecil */
    }

    ul {
      display: none; /* Sembunyikan daftar ul pada layar kecil */
    }
  }
`;



export default Kontenyyy;
