/* eslint-disable no-unused-vars */
import ContainerS, {Cardwarna,SH3} from './komponen/Gaya';
import Buttonutama, {ButtonKonten,ButtonCard,Headerbutton, Buttonfooter, ButtonHover, ButtonTransparan} from './komponen/Button';
import CardGreen, {Cardborder} from './komponen/Border.js';
import FontUtama from './komponen/Container.js';
import React from "react";
import styled from "styled-components";
import Bromo from "../img/bromo.jpg";
import NasiKuning from "../img/nasikuning.jpg";
import Gandrung from "../img/gandrung.jpeg";
import JatimPark from "../img/jatimpark.jpg";
import Typografi, { FontComponent, FontSize, bbb} from './komponen/Typography.js';
import CardBungkus, {Card1,Card1Description,Card1Heading,Card1Image,Card1Konten,Card1Title,Card2, Card2Description, Card2Image, Card2Konten, Card2KontenCard, Card2Price, Card2Title, Card2Button} from './komponen/Styledcard.js';
import AtasanComponent from './Atasan.js';
import Wrapper, { Header1, Header1Container, Header1Logo, Header1Nav, Header1Login, A } from './komponen/Styleheader.js';  
import { Link, Router,Route } from 'react-router-dom';
import { Card } from 'antd';
import Kontenyyy, {Contents, Row , Contentwrapper, Judul2, Text } from './komponen/StyleContent.js';
import Gambar from "../img/gambar.png"
import { Container, FooterSection, Row1, FooterColumn,FooterTitle, Sociallink,UnorderedList,ListItem,Anchor,Footertitle } from './komponen/Stylefooter.js';
import {InstagramFilled, TwitterSquareFilled, FacebookFilled } from '@ant-design/icons';

  

// import ContainerS, {Card_Full, SH3} from './components/Styled'
// import Button, {StyledButton, Button3d, ButtonRipple} from './components/Button';
function LandingComponent() {
  return (
    <div className="App">
      <ContainerS>
        <Headerbutton><Link to="/atasan">Header</Link></Headerbutton>
        <Buttonfooter><Link to="/footer">Footer</Link></Buttonfooter>
        <ButtonKonten><Link to="/konten">Konten</Link></ButtonKonten>
        <ButtonCard><Link to="/card">Card</Link></ButtonCard>
        <ButtonHover>Cancel</ButtonHover>
        <ButtonTransparan>Transparan</ButtonTransparan>
      </ContainerS>

      <div style={{border : "2px solid black",width:"50%",margin:"auto",textAlign:"center",marginTop:"1em"}}>
        <h3>Penjelasan </h3>
        <FontComponent font="2">pada component button diatas terdapat beberapa model yang dapat kita panggil lagi kedalam component yang lebih besar,
                                dapat disimpulkan button ini adalah salah satu potongan element. </FontComponent>
      </div>
      <hr></hr>

      <h1>jenis font</h1>
      <Typografi>
        <FontComponent font="font1" weight="b">Courier New</FontComponent>
        <FontComponent font="font2">Franklin Gothic Medium</FontComponent>
        <FontComponent font="font3">Gill Sans, Gill Sans MT</FontComponent>
        <FontComponent font="font4">Lucida Sans</FontComponent>
        <FontComponent font="font5">Segoe UI</FontComponent>
        <FontComponent font="font6">Times New Roman</FontComponent>
        <FontComponent font="font7">Trebuchet MS</FontComponent>
        <FontComponent font="font8">Arial</FontComponent>
        <FontComponent font="font9">Cambria</FontComponent>
        <FontComponent font="font10">Georgia</FontComponent>
        <FontComponent font="font11">Impact</FontComponent>
        <FontComponent font="font12">Verdana</FontComponent>
        <FontComponent font="font13">cursive</FontComponent>
        
        

        <FontComponent weight="w1">Weight 100</FontComponent>
        <FontComponent weight="w2">Weight 200</FontComponent>
        <FontComponent weight="w3">Weight 300</FontComponent>
        <FontComponent weight="w4">Weight 400</FontComponent>
        <FontComponent weight="w5">Weight 500</FontComponent>
        <FontComponent weight="w6">Weight 600</FontComponent>
        <FontComponent weight="w7">Weight 700</FontComponent>
        <FontComponent weight="w8">Weight 800</FontComponent>
        <FontComponent weight="w9">Weight 900</FontComponent>
        <FontComponent weight="b">Weight bold</FontComponent>
        <FontComponent weight="bl">Weight bolder</FontComponent>
        <FontComponent weight="l">Weight lighter</FontComponent>

        <FontComponent size="s">Font size 12px</FontComponent>
        <FontComponent size="s1">Font size 14px</FontComponent>
        <FontComponent size="s2">Font size 18px</FontComponent>
        <FontComponent size="m">Font size 24px</FontComponent>
        <FontComponent size="m2">Font size 30px</FontComponent>
        <FontComponent size="xl">Font size 36px</FontComponent>
        <FontComponent size="xxl">Font size 48px</FontComponent>
      </Typografi>
      
      <div style={{border : "2px solid black",width:"50%",margin:"auto",textAlign:"center",marginTop:"1em"}}>
        <h3>Penjelasan </h3>
        <FontComponent font="2"> ada beberapa jenis font yang dapat dipanggil dalam sebuah component,untuk mengetahui jenis font yang akan digunakan dapat menyesuaikan sesuai urutan dan penamaan yang tertera diatas.juga terdapat
                                ukuran font dan style font yang dapat dipanggil kedalam elemet sesuai dengan yang dituliskan pada element tersebut</FontComponent>
      </div>


      <h1>border</h1>
      <Cardwarna variant="dashed" warnabg="abu">
      AYO PAKAI TEMPLATE INI SEKARANG JUGA!!!!!
      </Cardwarna>
      <Cardborder variant="outset">border outset</Cardborder>
      <Cardborder variant="ridge">border ridge</Cardborder>
      <Cardborder variant="groove">border groove</Cardborder>
      <Cardborder variant="inset">border inset</Cardborder>
      <Cardborder variant="solid">border solid</Cardborder>
      <Cardborder variant="double">border double</Cardborder>
      <Cardborder variant="dashed">border dashed</Cardborder>

      <div style={{border : "2px solid black",width:"50%",margin:"auto",textAlign:"center",marginTop:"1em"}}>
        <h3>Penjelasan </h3>
        <FontComponent font="2">terdapat beberapa border yang dapat digunakan dalam component,untuk penggunaanya dapat dipanggil sesuai dengan jenis border</FontComponent>
      </div>

      <div>
        <h1>header</h1>
      <Wrapper>
      <Header1>
        <Header1Container warnabg ="kuning">
          <Header1Logo font="font13" size="xxl" warnabg="hijau">MBOLANGbolo</Header1Logo>
          <Header1Nav font="font4" weight="w1" size="m">
            <A href="">beranda</A>
            <A href="">makanan</A>
            <A href="">minuman</A>
            <A href="">desert</A>
            <A href="">jajanan</A>
            <A href="">about us</A>
          </Header1Nav>

          <Headerbutton>login</Headerbutton>
        </Header1Container>
      </Header1>
      </Wrapper>

      <div style={{border : "2px solid black",width:"50%",margin:"auto",textAlign:"center",marginTop:"1em"}}>
        <h3>Penjelasan </h3>
        <FontComponent font="2">component header, content, card dan footer merupakan contoh awal penggunaan beberapa element,sehingga dapat membentuk kesatuan yang utuh yaitu sebuah component
                                penerapanya terdapat pada element "font","warna","button",dan juga"weight"</FontComponent>
      </div>
      </div>

      <div>
      <h1>Content</h1>
      <Contents warnabg="hijaumuda">
        <Row>
            <Contentwrapper>
                <Judul2>Travel, enjoy and live a new an full life.</Judul2>
                <Text warnabg="hitam">Nikmati masa liburanmu detik demi detiknya sebelum kembali ke aktivitas padatmu sehari-harinya</Text>
                {/* <Text warnabg="hitam">LIBURAN SEKARANG</Text> */}
            </Contentwrapper>
            <Contentwrapper>
            <img src={Gambar} alt="Gambar"/>
            </Contentwrapper>
        </Row>
      </Contents>
      </div>

      <h1>card</h1>
      <div style={{display:"flex"}}>
        <Card1>
            <Card1Konten warnabg="hitam">
            <Card1Image  src={Bromo} alt="Bromo"/>
            <Card1Title warnabg="biru"> Bromo Mountain </Card1Title>
            <Card1Heading size="s1"> Mount Bromo is a very beautiful mountain
                <Card1Description font="font2" size="s1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error velit omnis odio totam quam animi incidunt, tempore, obcaecati ipsum asperiores ea. Sunt ex sequi perspiciatis. Ex nemo cumque minima!</Card1Description>
            </Card1Heading>
            </Card1Konten>
        </Card1>
        <Card2>
          <Card2Konten warnabg="hijau">
          <Card2KontenCard>
              <Card2Image src={NasiKuning} alt="nasikuning"/>
              <Card2Title font="font1" size="m">Nasi Kuning</Card2Title>
              <Card2Price font="font3" size="m">Rp.10.000</Card2Price>
              <Card2Description font="font2" size="s1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Card2Description>
          </Card2KontenCard>
              <ButtonHover>
              Buy now
              </ButtonHover>
          </Card2Konten>
        </Card2>
      </div>

      <div>
        <h1>footer</h1>
      <Container>
      <FooterSection warnabg="kuning">
        <Row1>
          <FooterColumn>
            <FooterTitle font="font13" size="m2" warnabg="hitam" >MBOLANGbolo</FooterTitle>
            <div className="social-links">
              <Sociallink warnabg="hitam" href="#"><InstagramFilled /></Sociallink>
              <Sociallink warnabg="hitam" href="#"><InstagramFilled /></Sociallink>
              <Sociallink warnabg="hitam" href="#"><TwitterSquareFilled /></Sociallink>
              <Sociallink warnabg="hitam" href="#"><FacebookFilled /></Sociallink>
            </div>
          </FooterColumn>
          <FooterColumn>
            <Footertitle font="font7" warnabg="hitam">Layanan</Footertitle>
            <UnorderedList>
              <ListItem><Anchor warnabg="hitam" href="#">Bantuan</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Metode Pembayaran</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Gratis Ongkir</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Hubungi Kami</Anchor></ListItem>
            </UnorderedList>
          </FooterColumn>
          <FooterColumn>
            <Footertitle warnabg="hitam">Jelajahi</Footertitle>
            <UnorderedList>
              <ListItem><Anchor warnabg="hitam" href="#">Tentang Kami</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Karir</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Kebijakan Provasi</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Blog</Anchor></ListItem>
              <ListItem><Anchor warnabg="hitam" href="#">Kontak Media</Anchor></ListItem>
            </UnorderedList>
          </FooterColumn>
        </Row1>
      </FooterSection>
    </Container>
      </div>
    </div>
  );
}

export default LandingComponent;
