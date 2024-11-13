import styled, {keyframes} from "styled-components";

const Buttonutama = styled.button`
  border: 5px solid ##AAD86A;
  background-color: aqua;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration:none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin-right: 20px;
`
export const Headerbutton = styled.button`
    background: #a950f0;
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 30%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {

        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    a{
      text-decoration: none;
    }
`
export const Buttonfooter = styled.button`
  border: 3px solid #B2A59B;
  background-color: #C3E2C2;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration:none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin-right: 20px;
  border-radius : 5px;
  a{
    text-decoration: none;
  }
`
export const ButtonKonten = styled.button`
    background-color : #3887BE;
    color: black;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-right: 20px;
    a{
      text-decoration: none;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
`
const rippleAnimation = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`
export const ButtonCard = styled.button`
    position: relative;
    overflow: hidden;
    display: inline-block;
    padding: 10px 34px;
    background-color: #52D3D8;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    overflow: hidden;
    margin-right: 20px;
    a{
      text-decoration: none;
    }

  &:after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: ${rippleAnimation} 0.6s linear;
    transform: scale(0);
  }
`

export const ButtonHover = styled.button`
  background-color: #5C8374;
  color: white;
  padding: 15px 32px;
  text-align: center;
  border: 1px solid whitesmoke;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin-right: 20px;
  border-radius: 20px;
  &:hover {
    background-color: #1B4242;
    font-size: 18px;
  }`

export const ButtonTransparan = styled.button`
  border: 2px solid black;
  color: black;
  border-radius: 20px;
  padding: 15px 32px;
  text-align: center;
  text-decoration:none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  margin-right: 20px;
  `

export default Buttonutama;