import React from 'react';
import styled from 'styled-components';
import {FontWeight,FontSize,FontStyle } from './Typography';
import {colourStyles, } from './Gaya';

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    text-decoration:none;
  }
`;

export const Header1 = styled.h2`
  padding-bottom: 5px;
  font-weight:${(props) => FontWeight[props.weight]||FontStyle.default};


`;

export const Header2 = styled.h2`
  padding-bottom: 5px;
  font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};

`;

export const Header3 = styled.h2`
  padding-bottom: 5px;
  font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};

`;

export const A = styled.a`
  text-decoration: none;
  font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
`;

// Header 1
export const Header1Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`;

export const Header1Logo = styled.h1`
  padding: 10px;
  font-size : ${(props) => FontSize[props.size]||FontSize.default};
  color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
  font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    &:hover {
      font-size: 31px;
`;

export const Header1Nav = styled.div`
  display: flex;;
  justify-content: space-around;
  font-size : ${(props) => FontSize[props.size]||FontSize.default};
  font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
  font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};
  a {
    padding: 10px;
    text-decoration: none;
    color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    &:hover {
    color:#02010b;
    }
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    &:hover {
      text-decoration: none;
      color: #${(props) => colourStyles[props.warnabg]||colourStyles.default};
    }
  }
`;

export const Header1Login = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
    a{
    background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    padding: 15px;
    border-radius: 10px;
    &:hover {
      color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
      background-color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
        }
    }
`;

// Header 2
export const Header2Container = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`;

export const Header2Dropdown = styled.div`
  i {
    color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
    font-size:${(props) => FontSize[props.size]||FontSize.default};
    margin-top: 10px;
    margin-left: 20px;
  }
`;

export const Header2Nav = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  font-weight:${(props) => FontWeight[props.weight]||FontWeight.default};
  font-size:${(props) => FontSize[props.size]||FontSize.default};
  font-family:${(props) => FontStyle[props.font]||FontStyle.default};
  color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
  a {
    padding: 20px;
    font-family:${(props) => FontStyle[props.font]||FontStyle.default};
    color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    &:hover {
      color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
    }
  }
`;

export const Header2Logo = styled.div`
  padding: 10px;
  font-size:${(props) => FontSize[props.size]||FontSize.default};
  color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
  &:hover {
  color:#02010b;
  }
  font-weight:${(props) => FontWeight[props.weight]||FontWeight.default};
  font-family:${(props) => FontStyle[props.font]||FontStyle.default};

`;

export const Header2Login = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  a {
    
    color: whitesmoke;
    background-color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 10px;
    &:hover {
      background-color:#2f27ce;
    }
  }
`;

// Header 3
export const Header3Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;

export const Header3H1 = styled.h1`
  font-size: ${(props) => FontSize[props.size]||FontSize.default};
  margin-top: 20px;
  font-family:${(props) => FontStyle[props.font]||FontStyle.default};
  color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};
`;

export const Header3Nav = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
  a {
    color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
    padding: 15px;
    margin-top: 20px;
    font-family:${(props) => FontStyle[props.font]||FontStyle.default};
    &:hover {
      font-size: 26px;
    }
  }
`;

export const BtnLogin = styled.a`
  text-decoration: none;
  border: #2f27ce;
  padding: 2px 2px;
  width: 80px;
  height: 40px;
  text-align: center;
  font-size: ${(props) => FontSize[props.size]||FontSize.default};
  background-color:color:${(props) => colourStyles[props.warnabg]||colourStyles.default};
  border-radius: 5px;
  color: ${(props) => colourStyles[props.warnabg]||colourStyles.default};

`;
export const Gaya = styled.a`
  style=
  border : "2px solid black"
  width:"57%"
  margin:"auto"
  marginTop:"1em"
  maxWidth:"100%"
  overflowX:"auto"}}>`
export default Wrapper