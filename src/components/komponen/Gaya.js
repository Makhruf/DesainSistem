import styled from "styled-components";

const ContainerS = styled.div`
    background-color: #fff;
    border-radius: 10px;
    border: double 2px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.2);
    display: flex;
    max-width: 100%;
    margin-right:20px;
    margin-left:20px;
    overflow: hidden;
    padding:10px;
    justify-content: space-around;
`
export const StyledButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
`
export const CardGreen = styled.div`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    border: double 2px;
    box-shadow: 0 20px rgba(0,0,0,0.2);
    display: flex;
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 800px;
    padding: 10px;
`
const borderStyles = {
  double: 'double 5px',
  dashed: 'dashed 5px',
  solid: 'solid 5px',
  groove: 'grove 5px',
  ridge: 'ridge 5px',
  inset: 'inset 5px',
  outset: 'outset 5px',
  default: 'none'
};
export const colourStyles = {
  merah: '#e63946',
  kuning: '#fcbf49',
  hijau: '#294B29',
  ungu: '#023047',
  hitam: '#0d1b2a',
  coklat: '#582f0e',
  abu: '#ebebeb',
  biru: '#0174BE',
  default: '#ffffff',
  hijaumuda: '#65B741'
  
};
export const Cardwarna = styled.div`
    align-items: center;
    justify-content: center;
    background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    border-radius: 10px;   
    border: ${(props) => borderStyles[props.variant] || borderStyles.default};  
    
    box-shadow: 0 5px rgba(0,0,0,0.2);
    display: flex;
    max-width: 100%;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 20px;
    overflow: hidden;
    padding: 10px;
`
export const SH3 = styled.h3`
    color: blue;
    letter-spacing: 1px;
    margin: 10px 0;
`
export default ContainerS;