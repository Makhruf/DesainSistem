import styled from 'styled-components';
import Typografi, {FontStyle, FontWeight, FontSize, FontComponent} from './Typography';
const colourStyles = {
    merah: '#e63946',
    kuning: '#fcbf49',
    hijau: '#a7c957',
    ungu: '#023047',
    hitam: '#0d1b2a',
    coklat: '#582f0e',
    abu: '#ebebeb',
    default: '#ffffff',
    biru: '#52D3D8',
    birutua:'#3887BE',
    birutua2:'#38419D',
    birutua3:'#200E3A',
  
  };
  export const FooterBungkus = styled.footer`
  margin-top: 10px;
  background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font-family: ${(props) => FontStyle[props.font] || FontStyle.default};
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
  font-weight: ${(props) => FontWeight[props.weight] || FontWeight.default};
  padding: 45px 50px;
  display: flex;
`;


export const FooterKiri = styled.div`
  flex: 1; /* Makes the left section flexible */

  .footer-table {
    display: flex; /* Use flexbox for the table layout */
    justify-content: space-between; /* Space out the columns */
    margin-bottom: 20px; /* Space below the footer table */
  }

  .footer-row {
    display: flex; /* Create a row for table cells */
    width: 100%; /* Take full width */
  }

  .footer-cell {
    flex: 1; /* Make each cell flexible to fill available space */
    margin: 0 10px; /* Space between cells */
    text-align: left; /* Align text to the left */
  }

  h2 {
    color: ${(props) => colourStyles[props.warnabg] || colourStyles.default}; /* Fixed color syntax */
    margin-bottom: 10px; /* Add spacing below the heading */
  }

  p {
    color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
    font-size: ${(props) => FontSize[props.size] || FontSize.default};
    margin: 0;
    
    &:not(:last-child) {
      margin-bottom: 15px; /* Space between paragraphs */
    }
  }

  .footer-links {
    margin: 0 0 10px;
    padding: 0;
    transition: ease 0.25s;

    p {
      display: inline-block;
      line-height: 1.8;
      text-decoration: none;
      color: ${(props) => colourStyles[props.warnabg] || colourStyles.default}; /* Ensure links use the correct color */
      transition: ease 0.25s;

      &:hover {
        text-decoration: underline; /* Underline on hover */
      }

      &:before {
        content: "·"; /* Bullet point before each link */
        display: inline-block;
        padding-right: 5px;
      }
    }

    .link-1:before {
      content: none; /* Remove bullet point for the first link */
    }
  }
`;


export const FooterKanan = styled.div`
  margin-top: 1px;
  max-width: 180px;
  display: flex; /* Use flexbox for horizontal alignment */
  justify-content: flex-end; /* Align items to the right */

  p {
      margin: 0 5px;
      cursor: pointer;
      transition: all 0.25s; 
      width: 35px; 
      height: 35px;
      background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
      border-radius: 10px;
      font-size: ${(props) => FontSize[props.size] || FontSize.default};
      color: ${(props) => colourStyles[props.warna] || colourStyles.default};
      display: flex; /* Use flexbox for centering */
      justify-content: center; /* Center icons horizontally */
      align-items: center; /* Center icons vertically */
      text-align: center;

      &:hover {
          transform: scale(1.1); /* Scale up on hover */
      }
  }
`;
  

// margin-top: 1px;
// max-width: 180px;
// display: flex; /* Use flexbox for horizontal alignment */
// justify-content: flex-end; /* Align items to the right */

// p {
//     margin: 0 5px; /* Add horizontal spacing between icons */
//     cursor: pointer; /* Change cursor to pointer on hover */
//     transition: color 0.3s; /* Smooth transition for color change */
//     color:${(props)=> colourStyles[props.warnabg]||colourStyles.default};       
//     &:hover {
//         color: #007bff; /* Change color on hover */
//     }
// }
// `
  
// Styled Components
export const FooterWrapper = styled.footer`
  padding-top: 30px;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;

export const FooterTitle = styled.h3`
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
  font-weight: ${(props) => FontWeight[props.weight] || FontWeight.default};
  text-transform: capitalize;
  line-height: 3rem;
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  font-family: ${(props) => FontStyle[props.font] || FontStyle.default};
`;

export const FooterParagraph = styled.p`
  max-width: 500px;
  margin: 10px auto;
  line-height: 28px;
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
      
  margin: 0;
`;

export const SocialListItem = styled.li`
  margin: 0 5px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  border: 1.1px solid white;
  padding: 5px;
  border-radius: 50%;
`;

export const SocialIcon = styled.i`
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
  width: 20px;
  transition: color 0.4s ease;
`;

export const FooterBottom = styled.div`
  background: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Align items to left and right */
  align-items: center;
`;

export const BottomParagraph = styled.p`
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
  word-spacing: 2px;
  text-transform: capitalize;
  margin: 0;
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;

export const BottomSpan = styled.span`
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 20;
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;
  
  export const FooterMenu = styled.div`
  text-align : right;
  `
  ;
  
  export const MenuList = styled.ul`
    display: flex;
    text-align: right;
  `;
  
  export const MenuItem = styled.li`
    padding-right: 10px;
    display: block;
  `;
  
  export const MenuLink = styled.a`
    color:  ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    text-decoration: none;
  
    &:hover {
      color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    }
  `;

export const Container = styled.div`

  position: relative;
  background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  box-sizing: border-box;
  padding: 0;
  margin-top: 10px;
    padding: 45px 50px;

`;

export const Row1 = styled.div` // Changed Row1 to Row for clarity
  display: flex;
  flex-wrap: wrap;
  max-width: 1170px;
  margin: auto;
`;

export const UnorderedList = styled.ul`
  list-style: none;
`;

export const FooterSection = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex; // Added display flex to align items
  justify-content: center; // Center items
`;

export const FooterColumn = styled.div`
  padding: 0 47px;
  margin-left: 80px;
  background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;

export const Footertitle = styled.h4` 
  font-size: ${(props) => FontSize[props.size] || FontSize.default};
  color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
  margin-bottom: 35px;
  font-weight: ${(props) => FontWeight[props.weight] || FontWeight.default}; 
  position: relative;
  margin-left: 40px;

  &::before {
    position: absolute;
    left: 0;
    bottom: -10px; // Added 'px' to bottom
    height: 22px;
    box-sizing: border-box;
    width: 50px;
    background-color: currentColor; // Added background color for visibility
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

  export const Anchor = styled.a`
    font-size:${(props) => FontSize[props.size]||FontSize.default};
    text-transform: capitalize;
    color:  ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    text-decoration: none;
    font-weight: 300;
    transition: all 0.3s ease;
  

  `;
  
  export const Sociallink = styled.a`
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color:  ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    transition: all 0.5s ease;
  
    &:hover {
      color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
      background-color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    }
  `
  ;