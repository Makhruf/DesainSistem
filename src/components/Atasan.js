import React from 'react';
import styled from 'styled-components';
import Typografi, { FontComponent, FontSize, bbb} from './komponen/Typography.js';
import Buttonutama, {Headerbutton} from './komponen/Button.js';
import Wrapper, { Header1, Header1Container, Header1Logo, Header1Nav, Header1Login, A, Header2, Header2Container,Header2Dropdown, Header2Nav, Header2Logo, Header2Login, Header3, Header3Container, Header3H1, Header3Nav, BtnLogin } from './komponen/Styleheader.js';  

const AtasanComponent = () => {
  return (
    <Wrapper>
      <Header1>
        header1
      <Header1Container warnabg ="biru">
            <Header1Logo font="font8" size="m2" warnabg="hitam">Pemuda Berkharisma</Header1Logo>
            <Header1Nav font="font4" weight="w1" size="m">
                <A href="/atasan">Beranda</A>
                <A href="/konten">Informasi Publik</A>
                <A href="/card">Profil</A>
                <A href="/footer">Media</A>
                <A href="/font">Font</A>
                <A href="/button">Button</A>
            </Header1Nav>
          <Headerbutton>login</Headerbutton>
        </Header1Container>
      </Header1>
      <div style={{border : "2px solid black",width:"57%",margin:"auto",marginTop:"1em",maxWidth:"100%",overflowX:"auto"}}>
        <h3 style={{textAlign:"center"}}>Code</h3>
        <FontComponent font="2">
      <pre>
        {`
  <Header1>
      header1
      <Header1Container warnabg ="biru">
            <Header1Logo font="font8" size="m2" warnabg="hitam">Pemuda Berkharisma</Header1Logo>
            <Header1Nav font="font4" weight="w1" size="m">
                <A href="/atasan">Beranda</A>
                <A href="/konten">Informasi Publik</A>
                <A href="/card">Profil</A>
                <A href="/footer">Media</A>
            </Header1Nav>
          <Headerbutton>login</Headerbutton>
        </Header1Container>
                                      *PENJELASAN* 
  Di dalamnya terdapat <Header1Container> dengan properti warnabg="biru" 
  untuk mengatur warna latar atau gaya border, yang menampung logo, navigasi, dan tombol login. 
  Komponen <Header1Logo> dengan teks "Pemuda Berkharisma" memiliki properti font="font8", size="m2",
  dan warnabg="hitam" untuk menyesuaikan gaya font, ukuran, dan warna latar belakang. Di sebelahnya,
  <Header1Nav> digunakan sebagai menu navigasi dengan beberapa tautan ke halaman lain seperti Beranda,
  Informasi Publik, Profil, dan Media, di mana properti font, weight, dan size diterapkan untuk 
  pengaturan gaya teks. Di bagian akhir, terdapat <Headerbutton> sebagai tombol login untuk melengkapi
  tampilan header ini`}
          </pre>
        </FontComponent>

      </div>
      <Header2>
        header 2
        <Header2Container warnabg="hijau">
        <Header2Login warnabg="kuning">
            <A href="">login</A>
          </Header2Login>
          <Header2Dropdown>
            <i className="fa-solid fa-square-caret-down"></i>
          </Header2Dropdown >
          <Header2Nav font="font4" weight="w1" size="m" warnabg="putih">
            <A font="font4" weight="bl" size="xl">Beranda</A>
            <A href="">Informasi Publik</A>
            <A href="">Profil</A>
            <A href="">Media</A>
          </Header2Nav>
          <Header2Logo warnabg="kuning" font="font1" size="xl" weight="b">Pemuda Berkharisma</Header2Logo>
        </Header2Container>
      </Header2>
      <div style={{border : "2px solid black",width:"57%",margin:"auto",marginTop:"1em",maxWidth:"100%",overflowX:"auto"}}>
        <h3 style={{textAlign:"center"}}>Code</h3>
        <FontComponent font="2">
      <pre>
        {`
      <Header2>
        header 2
        <Header2Container warnabg="hijau">
        <Header2Login warnabg="kuning">
            <A href="">login</A>
          </Header2Login>
          <Header2Dropdown>
            <i className="fa-solid fa-square-caret-down"></i>
          </Header2Dropdown >
          <Header2Nav font="font4" weight="w1" size="m" warnabg="putih">
            <A font="font4" weight="bl" size="xxl">Beranda</A>
            <A href="">Informasi Publik</A>
            <A href="">Profil</A>
            <A href="">Media</A>
          </Header2Nav>
          <Header2Logo warnabg="kuning" font="font1" size="xl" weight="b">Pemuda Berkharisma</Header2Logo>
        </Header2Container>
      </Header2>
                                      *PENJELASAN* 
  komponen header kedua <Header2> yang dirancang dengan elemen-elemen seperti container, tombol login, 
  menu dropdown, navigasi, dan logo. Komponen <Header2Container> memiliki properti warnabg="hijau" yang 
  berfungsi sebagai container utama dengan latar belakang hijau. Di dalamnya terdapat <Header2Login 
  warnabg="kuning"> yang berisi tautan login dan menggunakan latar belakang kuning. Selain itu, terdapat 
  <Header2Dropdown>, yang menampilkan ikon dropdown (fa-solid fa-square-caret-down) sebagai pemicu menu 
  tambahan. Komponen <Header2Nav> berisi beberapa tautan navigasi, seperti Beranda, Informasi Publik,
  Profil, dan Media, dengan properti styling font, weight, size, dan warnabg="putih" untuk menyesuaikan
  tampilan teks dan latar belakang. Di sisi lain, <Header2Logo> berfungsi sebagai logo dengan teks 
  "Pemuda Berkharisma," yang memiliki properti warnabg="kuning", font="font1", size="xl", dan 
  weight="b" untuk memberikan tampilan menonjol. Komponen ini membentuk header yang terstruktur 
  dengan pilihan navigasi, login, dan logo yang terintegrasi.`}
          </pre>
        </FontComponent>
      </div>

      <Header3>
        header 3
        <Header3Container warnabg="ungu">
          <Header3H1 warnabg="hijau">Pemuda Berkharisma</Header3H1>
          <Header3Nav warnabg="hitam">
            <A href="">Beranda</A>
            <A href="">Informasi Publik</A>
            <A href="">Profil</A>
            <A href="">Media</A>
          </Header3Nav>
          <Header2Login warnabg="hijau">
            <A>login</A>
          </Header2Login>
        </Header3Container>
      </Header3>
      <div style={{border : "2px solid black",width:"57%",margin:"auto",marginTop:"1em",maxWidth:"100%",overflowX:"auto"}}>
        <h3 style={{textAlign:"center"}}>Code</h3>
        <FontComponent font="2">
      <pre>
        {`
      <Header3>
        header 3
        <Header3Container warnabg="ungu">
          <Header3H1 warnabg="hijau">Pemuda Berkharisma</Header3H1>
          <Header3Nav warnabg="hitam">
            <A href="">Beranda</A>
            <A href="">Informasi Publik</A>
            <A href="">Profil</A>
            <A href="">Media</A>
          </Header3Nav>
          <Header2Login warnabg="hijau">
            <A>login</A>
          </Header2Login>
        </Header3Container>
      </Header3>
                                      *PENJELASAN* 
  komponen header ketiga <Header3> yang terdiri dari container utama, judul, navigasi, dan tombol login. 
  Di dalam <Header3Container> yang memiliki properti warnabg="ungu" sebagai latar belakang, terdapat 
  beberapa elemen lain. Komponen <Header3H1 warnabg="hijau"> menampilkan teks "Pemuda Berkharisma" 
  dengan latar belakang hijau. Di sampingnya, <Header3Nav warnabg="hitam"> berfungsi sebagai menu 
  navigasi yang berisi tautan seperti Beranda, Informasi Publik, Profil, dan Media, dengan latar 
  belakang hitam. Terakhir, terdapat <Header2Login warnabg="hijau"> yang menyertakan tautan 
  login dengan latar belakang hijau. Komponen ini membentuk tampilan header yang ringkas, dengan 
  judul, menu navigasi, dan tombol login yang terintegrasi di dalamnya.`}
          </pre>
        </FontComponent>
      </div>
    </Wrapper>
  );
};

export default AtasanComponent;
