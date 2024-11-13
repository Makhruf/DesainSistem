import styled from "styled-components";

const Typografi = styled.div`
background-color: white;
border-radius: 10px;
border: 2px solid;
box-shadow: 0 10px 10px rgba(0,0,0,0.2);
max-width: 50%;
text-align: center;
margin: auto;
overflow: hidden;
padding:10px;
justify-content:center;
margin-top: 20px;
`
export const FontStyle = {
    default: "none",
    font1: "Courier New, Courier, monospace",
    font2: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
    font3: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
    font4: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
    font5: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    font6: "Times New Roman, Times, serif",
    font7: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
    font8: "Arial, Helvetica, sans-serif",
    font9: "Cambria, Cochin, Georgia, Times, Times New Roman, serif",
    font10: "Georgia, Times New Roman, Times, serif",
    font11: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
    font12: "Verdana, Geneva, Tahoma, sans-serif",
    font13: "cursive"
}

export const FontWeight ={
    default: "none",
    w1: 100,
    w2: 200,
    w3: 300,
    w4: 400,
    w5: 500,
    w6: 600,
    w7: 700,
    w8: 800,
    w9: 900,
    b: "bold",
    bl: "bolder",
    l: "lighter"
}

export const FontSize ={
    default: "none",
    s: "12px",
    s1: "14px",
    s2:"18px",
    m: "24px",
    m2: "30px",
    xl: "36px",
    xxl: "48px"

}

export const FontComponent = styled.div`
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    color: black;
    font-size: ${(props) => FontSize[props.size]||FontSize.default};
    font-family: ${(props) => FontStyle[props.font]||FontStyle.default};
    font-weight: ${(props) => FontWeight[props.weight]||FontStyle.default};
`


export default Typografi;

