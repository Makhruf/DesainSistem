import styled from 'styled-components';
import Typografi ,{FontSize, FontStyle} from './Typography';
import CardGreen, {borderStyles} from './Border';
import Gaya, {colourStyles} from './Gaya'

// card 1
const CardBungkus = styled.div`
    padding : 0;
    margin : 0;`
export const CardH1 = styled.h1`
    margin-left: 25px
    `

export const Card1 = styled.div`
    display: flex;
    padding-bottom: 100px;
    `

export const Card1Konten = styled.div`
    width: 190px;
    border: 2px solid;
    border-color: rgba(219, 234, 254, 1);
    border-radius: 1rem;
    background-color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    padding: 1rem;
    margin: 20px;
    `

export const Card1Image = styled.img`
    background-position: center;
    background-size: cover;
    width: 95%;
    height: 165px;
    border-radius : 50%;
    &:hover {
        transform: scale(0.98);
    }
    `

export const Card1Title = styled.div`
    text-transform: uppercase;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    font-weight: 600;
    color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    padding: 10px 7px 0;
    cursor: pointer;
    `

export const Card1Heading = styled.div`
    font-weight: 400;
    color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    padding: 7px;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    `

export const Card1Description = styled.div`
    color: gray;
    font-weight: 400;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    padding-top: 20px;
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    `

// card 2

export const Card2 = styled.div`
    display: flex;
    padding-bottom: 100px;
    `

export const Card2Konten = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    padding: 20px 1px;
    margin: 10px 20px 0;
    text-align: center;
    position: relative;
    border-radius: 10px;
    background: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    border: ${(props) => borderStyles[props.variant] || borderStyles.default} ${(props)=> colourStyles[props.warnabg]||colourStyles.default};  
    `

export const Card2KontenCard = styled.div`
    padding: 20px;
    `

export const Card2Image = styled.img`
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 130px;
    border-radius: 6px 6px 0 0;
    `

export const Card2Title = styled.div`
    font-weight: 800;
    text-transform: uppercase;
    color: white;
    margin-top: 10px;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    letter-spacing: 1px;
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    ` 

export const Card2Price = styled.div`
    color: white;
    font-weight: 800;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    `

export const Card2Description = styled.div`
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    `

export const Card2Button = styled.button`
    border: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    width: 90%;
    text-shadow: 0px 4px 18px #2c3442;
    cursor: pointer;
    &:hover{
        transform: scale(0.98);
        background-color: rgb(33 100 243);
    }
    `

// card 3

export const Card3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    width: 100%;
`;

export const Card3Konten = styled.div`
    width: 90%; /* Adjusted for a wider layout */
    height:50%;
    background: white;
    border: 2px solid black;
    border-color: rgba(219, 234, 254, 1);
    border-radius: 1rem;
    background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
    padding: 1rem;
    margin: 20px;
`;

export const Card3Image = styled.img`
    background-position: center;
    background-size: cover;
    width: 100%; /* Make it fill the card width */
    height: 400px; /* Reduce height for a wider look */
    border-radius: 6px 6px 0 0;
    object-fit: cover; /* Ensures the image scales properly */
`;

export const Card3Title = styled.p`
    font-weight: 800;
    text-transform: uppercase;
    color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};  
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
    text-align: center;
    &:hover {
        transform: scale(0.98);
    }
`;

export const Card3Description = styled.p`
    margin-top: 1rem;
    color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
`;


// card 4

export const Card4 = styled.div`
    display: flex;
    padding-bottom: 100px;
    `
  
export const Card4Konten = styled.div`
    width: 260px;
    background: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
    border: 2px solid rgba(219, 234, 254, 1);
    border-radius: 1rem;
    padding: 20px 1px;
    margin: 10px 20px 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Deeper shadow for more dimension */
    position: relative;
    overflow: hidden; /* To keep contents within bounds */
&::before {
    content: 'Informasi'; /* Placeholder for the title */
    position: absolute;
    top: -10px; /* Position it above the card */
    left: 10px; /* Adjust as needed */
    font-size: 1.2rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(219, 234, 254, 1); /* Border for the header */
}
    
    /* Unique Background Texture */
    background-image: url('/path/to/texture.png'); /* Add a textured background */
    background-size: cover; /* Cover the entire background */
        
    /* Notebook-style lines */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 10px;
        right: 10px;
        height: 100%;
        border-left: 1px dashed rgba(0, 0, 0, 0.3);
        border-right: 1px dashed rgba(0, 0, 0, 0.3);
        pointer-events: none;
    }
`

export const Card4KontenCard = styled.div`
    padding: 20px;
    `

export const Card4Image = styled.img`
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 130px;
    border-radius: 6px 6px 0 0;
    `

export const Card4Title = styled.div`
    font-weight: 800;
    text-transform: uppercase;
    color:  ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
    `

export const Card4Description = styled.div`
    color:  ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    margin-top: 10px;
    font-size: 14px;

    `

export const Card4Button = styled.button`
    display:flex;
    justify-content:center;
    margin-left:13px;
    border: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    padding: 0.75rem 1.5rem;
    background-color: rgb(33 150 243);
    border-radius: 0.5rem;
    width: 90%;
    text-shadow: 0px 4px 18px #2c3442;
    &:hover{
        transform: scale(0.98);
    }
    `

  
export const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: ${(props) => colourStyles[props.warnabg] || colourStyles.default};
    border-radius: 8px;
    border: 1.5px solid ${(props) => colourStyles[props.borderbd] || colourStyles.default}; /* Menggunakan borderbd */
    max-width: 400px;
    margin: auto;
    transition: box-shadow 0.3s ease;
    
    &:hover {
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.3);
    }
`
// Profile Image Styling
export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
`;

// Profile Information Container
export const ProfileInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    font-weight: 600;
    
  }

  .specialty {
    display: flex;
    align-items: center;
    margin: 8px 0;

    .badge {
      background-color: #007c91;
      color: white;
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 5px;
      margin-right: 5px;
    }
  }

  .location {
    font-size: 14px;
    color: ${(props)=> colourStyles[props.warnabg]||colourStyles.default};
    margin-bottom: 10px;
  }`
export const ProfileButton = styled.button`
  background-color: #007c91;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #005f6b;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default CardBungkus;
  