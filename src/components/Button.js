import Buttonutama, { Headerbutton, Buttonfooter, ButtonKonten, ButtonCard, ButtonHover, ButtonTransparan } from './komponen/Button.js';
import { FontComponent } from './komponen/Typography.js';
const button = () => {
    return (
        <div>
            <div style={{ marginLeft: '25%' }}>
                <Headerbutton>Button</Headerbutton>
                <Buttonutama>Button</Buttonutama>
                <Buttonfooter>Button</Buttonfooter>
                <ButtonKonten>Button</ButtonKonten>
                <ButtonHover >Button</ButtonHover>
                <ButtonTransparan>Button</ButtonTransparan>
            </div>
            <div style={{ border: "2px solid black", width: "57%", margin: "auto", marginTop: "1em", maxWidth: "100%", overflowX: "auto" }}>
                <h3 style={{ textAlign: "center" }}>Code</h3>
                <FontComponent font="2">
                    <pre style={{ textAlign: "left", margin: "-4em" }}>
                        {`
          <Headerbutton>login</Headerbutton>

                        *PENJELASAN* 
<Headerbutton> digunakan untuk memamanggil sebagai tombol login untuk melengkapi tampilan header ini


`}
                    </pre>
                </FontComponent>
            </div>
        </div>

    );
}
export default button;