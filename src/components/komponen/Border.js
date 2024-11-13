import styled from "styled-components";

const CardGreen = styled.div`
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
export const borderStyles = {
  double: 'double 5px',
  dashed: 'dashed 5px',
  solid: 'solid 5px',
  groove: 'grove 5px',
  ridge: 'ridge 5px',
  inset: 'inset 5px',
  outset: 'outset 5px',
  default: 'none'
};

export const Cardborder = styled.div`
    align-items: center;
    justify-content: center;
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

export default CardGreen;
