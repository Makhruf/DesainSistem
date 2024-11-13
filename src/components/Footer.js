import React from 'react';
import { InstagramFilled, TwitterSquareFilled, FacebookFilled, QqCircleFilled } from '@ant-design/icons';
import { FontComponent } from './komponen/Typography';
import { FooterBungkus, FooterKiri, FooterKanan, FooterWrapper, FooterContent, Row, FooterTitle, FooterParagraph, SocialList, SocialListItem, SocialLink, SocialIcon, FooterBottom, BottomParagraph, BottomSpan, FooterMenu, MenuItem, MenuList, MenuLink, Container, Row1, UnorderedList, FooterSection, FooterColumn, Footertitle, ListItem, Anchor, Sociallink } from './komponen/Stylefooter';

// Styled componen
const FooterComponent = () => {
  return (
    <>
      <FooterBungkus warnabg="ungu">
        <FooterKiri warnabg="abu">
          <FooterTitle warnabg="birutua">Pemuda Berkharisma</FooterTitle>

          <div className="footer-table">
            <div className="footer-row">
              <div className="footer-cell">
                <h2>Company</h2>
                <p className="link-1">Home</p>
                <p>Tentang Kami</p>
                <p>Kontak</p>
              </div>
              <div className="footer-cell">
                <h2>Services</h2>
                <p className="link-1">Rental</p>
                <p>Maintenance</p>
                <p>Consultation</p>
              </div>
              <div className="footer-cell">
                <h2>Support</h2>
                <p className="link-1">FAQs</p>
                <p>Help Center</p>
                <p>Contact Support</p>
              </div>
            </div>
          </div>

          <p>Kesehatan adalah tabungan saat kita tua</p>
        </FooterKiri>

        <FooterKanan warnabg="default" warna="ungu">
          <p><InstagramFilled /></p>
          <p><TwitterSquareFilled /></p>
          <p><FacebookFilled /></p>
        </FooterKanan>
      </FooterBungkus>

      <div style={{ border: "2px solid black", width: "59%", margin: "auto", marginTop: "1em",maxWidth:"100%",overflowX:"auto" }}>
        <h3 style={{ textAlign: "center" }}>Code</h3>
        <FontComponent font="2">
          <pre style={{ textAlign: "left", margin: "-10em", marginTop: "-6em" }}>
            {`


      <FooterBungkus warnabg="ungu">
        <FooterKiri warnabg="abu">
          <FooterTitle warnabg="birutua">Pemuda Berkharisma</FooterTitle>

          <div className="footer-table">
            <div className="footer-row">
              <div className="footer-cell">
                <h2>Company</h2> 
                <p className="link-1">Home</p>
                <p>Tentang Kami</p>
                <p>Kontak</p>
              </div>
              <div className="footer-cell">
                <h2>Services</h2> 
                <p className="link-1">Rental</p>
                <p>Maintenance</p>
                <p>Consultation</p>
              </div>
              <div className="footer-cell">
                <h2>Support</h2> 
                <p className="link-1">FAQs</p>
                <p>Help Center</p>
                <p>Contact Support</p>
              </div>
            </div>
          </div>

          <p>Kesehatan adalah tabungan saat kita tua</p>
        </FooterKiri>

        <FooterKanan warnabg="default" warna="ungu">
          <p><InstagramFilled /></p>
          <p><TwitterSquareFilled /></p>
          <p><FacebookFilled /></p>
        </FooterKanan>
      </FooterBungkus>


    *PENJELASAN*
<FooterBungkus> berfungsi sebagai pembungkus dengan prop warnabg="ungu" yang mengatur warna latar belakang
footer menjadi ungu, menciptakan tampilan yang mencolok. Di dalamnya terdapat dua bagian utama:
<FooterKiri> dan <FooterKanan>. Bagian <FooterKiri> menggunakan prop warnabg="abu" dan menampilkan judul
"Pemuda Berkharisma", yang diikuti oleh sebuah tabel yang diatur dalam div dengan kelas footer-table. Tabel
ini terdiri dari tiga kolom, masing-masing diwakili oleh <div className="footer-cell">, yang berisi heading
seperti "Company", "Services", dan "Support", di mana setiap heading memiliki beberapa item terkait seperti
"Home", "Tentang Kami", dan "Rental". Di bawah tabel, terdapat kalimat motivasional "Majukan Pariwisata
Majukan Negri" yang memberikan nuansa positif. Sementara itu, bagian <FooterKanan> yang memiliki prop
warnabg="default" dan warna="ungu" menampilkan ikon media sosial, termasuk ikon untuk Instagram, Twitter,
dan Facebook, yang diwakili oleh komponen seperti <InstagramFilled />. Secara keseluruhan, footer ini tidak
hanya memberikan informasi penting dan navigasi, tetapi juga menghubungkan pengguna dengan platform media
sosial, semua dalam desain yang estetis dan fungsional.




      `}
          </pre>
        </FontComponent>
      </div>

      <FooterWrapper>
        <FooterContent warnabg="hijau">
          <FooterTitle warnabg="hitam">Pemuda Berkharisma</FooterTitle>
          <FooterParagraph >
            " Kesehatan adalah tabungan kita ketika kita tua kelak "
          </FooterParagraph>
        </FooterContent>
        <FooterBottom warnabg="birutua2">
          <BottomParagraph warnabg="abu">
            © 2023 <a>Pemuda Berkharisma</a>. All Rights Reserved.
          </BottomParagraph>
          <SocialList>
            <SocialListItem><SocialLink href="#"><InstagramFilled /></SocialLink></SocialListItem>
            <SocialListItem><SocialLink href="#"><TwitterSquareFilled /></SocialLink></SocialListItem>
            <SocialListItem><SocialLink href="#"><FacebookFilled /></SocialLink></SocialListItem>
          </SocialList>
        </FooterBottom>
      </FooterWrapper>

      <div style={{ border: "2px solid black", width: "64%", margin: "auto", marginTop: "1em",maxWidth:"100%",overflowX:"auto" }}>
        <h3 style={{ textAlign: "center" }}>Code</h3>
        <FontComponent font="2">
          <pre style={{ textAlign: "left", margin: "-10em", marginTop: "-6em" }}>
            {`


<FooterWrapper>
  <FooterContent warnabg="hijau">
    <FooterTitle warnabg="hitam">Pemuda Berkharisma</FooterTitle>
    <FooterParagraph >
      " Kesehatan adalah tabungan kita ketika kita tua kelak "
    </FooterParagraph>
  </FooterContent>
  <FooterBottom warnabg="birutua2">
    <BottomParagraph warnabg="abu">
      © 2023 <a>Pemuda Berkharisma</a>. All Rights Reserved.
    </BottomParagraph>
    <SocialList>
      <SocialListItem><SocialLink href="#"><InstagramFilled /></SocialLink></SocialListItem>
      <SocialListItem><SocialLink href="#"><TwitterSquareFilled /></SocialLink></SocialListItem>
      <SocialListItem><SocialLink href="#"><FacebookFilled /></SocialLink></SocialListItem>
    </SocialList>
  </FooterBottom>
</FooterWrapper>


    *PENJELASAN*
<FooterWrapper> berfungsi sebagai pembungkus untuk seluruh elemen footer. Di dalamnya, terdapat
<FooterContent> dengan prop warnabg="hijau" yang mengatur warna latar belakang menjadi hijau, memberikan
kesan segar dan menarik. Pada bagian ini, terdapat <FooterTitle> dengan latar belakang hitam (warnabg="hitam")
yang menampilkan teks "Pemuda Berkharisma" sebagai judul. Di bawah judul, <FooterParagraph> menampilkan
kutipan inspiratif tentang kesehatan: "Kesehatan adalah tabungan kita ketika kita tua kelak". Bagian footer ini
menggabungkan informasi dengan sentuhan motivasi yang relevan dengan tema kesehatan. Di bawah <FooterContent>,
terdapat <FooterBottom> yang berfungsi sebagai bagian bawah footer dengan latar belakang biru tua
(warnabg="birutua2"). Di sini, <BottomParagraph> menampilkan teks hak cipta yang bertuliskan "© 2023 Pemuda
Berkharisma. All Rights Reserved" dengan latar belakang abu-abu (warnabg="abu"), serta menambahkan tautan yang
menunjukkan nama organisasi. Di sebelahnya, <SocialList> berfungsi sebagai daftar ikon media sosial, yang
ditampilkan melalui <SocialListItem> untuk setiap ikon. Setiap ikon (Instagram, Twitter, dan Facebook) dibungkus
dengan <SocialLink> yang memiliki atribut href="#", memungkinkan pengunjung untuk mengakses media sosial yang
terkait.




      `}
          </pre>
        </FontComponent>
      </div>
      {/* FOOterkuliner */}
      <Container warnabg="birutua">
        <FooterSection warnabg="merah">
          <Row1>
            <FooterColumn warnabg="birutua">
              <FooterTitle warnabg="hitam">Pemuda Berkharisma</FooterTitle>

              <Sociallink href="#"><InstagramFilled /></Sociallink>
              <Sociallink href="#"><TwitterSquareFilled /></Sociallink>
              <Sociallink href="#"><FacebookFilled /></Sociallink>
              <Sociallink href="#"><QqCircleFilled /></Sociallink>

            </FooterColumn>
            <FooterColumn warnabg="birutua">
              <Footertitle warnabg="hitam">Layanan</Footertitle>
              <UnorderedList warnabg="birutua">
                <ListItem><Anchor href="#">Bantuan</Anchor></ListItem>
                <ListItem><Anchor href="#">Metode Pembayaran</Anchor></ListItem>
                <ListItem><Anchor href="#">Jadwal Dokter</Anchor></ListItem>
                <ListItem><Anchor href="#">Hubungi Kami</Anchor></ListItem>
              </UnorderedList>
            </FooterColumn>
            <FooterColumn warnabg="birutua">
              <Footertitle warnabg="hitam">Jelajahi</Footertitle>
              <UnorderedList warnabg="birutua">
                <ListItem><Anchor href="#">Tentang Kami</Anchor></ListItem>
                <ListItem><Anchor href="#">Karir</Anchor></ListItem>
                <ListItem><Anchor href="#">Kebijakan Privasi</Anchor></ListItem>
                <ListItem><Anchor href="#">Blog</Anchor></ListItem>
                <ListItem><Anchor href="#">Kontak Media</Anchor></ListItem>
              </UnorderedList>
            </FooterColumn>
          </Row1>
        </FooterSection>
      </Container>
      <div style={{ border: "2px solid black", width: "59%", margin: "auto", marginTop: "1em",maxWidth:"100%",overflowX:"auto" }}>
        <h3 style={{ textAlign: "center" }}>Code</h3>
        <FontComponent font="2">
          <pre style={{ textAlign: "left", margin: "-10em", marginTop: "-6em" }}>
            {`


      <Container warnabg="birutua">
        <FooterSection warnabg="merah">
          <Row1>
            <FooterColumn warnabg="birutua">
              <FooterTitle warnabg="hitam">Pemuda Berkharisma</FooterTitle>

                <Sociallink href="#"><InstagramFilled/></Sociallink>
                <Sociallink href="#"><TwitterSquareFilled /></Sociallink>
                <Sociallink href="#"><FacebookFilled /></Sociallink>
                <Sociallink href="#"><QqCircleFilled/></Sociallink>
              
            </FooterColumn>
            <FooterColumn warnabg="birutua">
              <Footertitle warnabg="hitam">Layanan</Footertitle>
              <UnorderedList warnabg="birutua">
                <ListItem><Anchor href="#">Bantuan</Anchor></ListItem>
                <ListItem><Anchor href="#">Metode Pembayaran</Anchor></ListItem>
                <ListItem><Anchor href="#">Jadwal Dokter</Anchor></ListItem>
                <ListItem><Anchor href="#">Hubungi Kami</Anchor></ListItem>
              </UnorderedList>
            </FooterColumn>
            <FooterColumn warnabg="birutua">
              <Footertitle warnabg="hitam">Jelajahi</Footertitle>
              <UnorderedList warnabg="birutua">
                <ListItem><Anchor href="#">Tentang Kami</Anchor></ListItem>
                <ListItem><Anchor href="#">Karir</Anchor></ListItem>
                <ListItem><Anchor href="#">Kebijakan Privasi</Anchor></ListItem>
                <ListItem><Anchor href="#">Blog</Anchor></ListItem>
                <ListItem><Anchor href="#">Kontak Media</Anchor></ListItem>
              </UnorderedList>
            </FooterColumn>
          </Row1>
        </FooterSection>
      </Container>

    *PENJELASAN*
<FooterBungkus> berfungsi sebagai pembungkus dengan prop warnabg="ungu" yang mengatur warna latar belakang
footer menjadi ungu, menciptakan tampilan yang mencolok. Di dalamnya terdapat dua bagian utama:
<FooterKiri> dan <FooterKanan>. Bagian <FooterKiri> menggunakan prop warnabg="abu" dan menampilkan judul
"Pemuda Berkharisma", yang diikuti oleh sebuah tabel yang diatur dalam div dengan kelas footer-table. Tabel
ini terdiri dari tiga kolom, masing-masing diwakili oleh <div className="footer-cell">, yang berisi heading
seperti "Company", "Services", dan "Support", di mana setiap heading memiliki beberapa item terkait seperti
"Home", "Tentang Kami", dan "Rental". Di bawah tabel, terdapat kalimat motivasional "Majukan Pariwisata
Majukan Negri" yang memberikan nuansa positif. Sementara itu, bagian <FooterKanan> yang memiliki prop
warnabg="default" dan warna="ungu" menampilkan ikon media sosial, termasuk ikon untuk Instagram, Twitter,
dan Facebook, yang diwakili oleh komponen seperti <InstagramFilled />. Secara keseluruhan, footer ini tidak
hanya memberikan informasi penting dan navigasi, tetapi juga menghubungkan pengguna dengan platform media
sosial, semua dalam desain yang estetis dan fungsional.




      `}
          </pre>
        </FontComponent>
      </div>
    </>
  );
};

export default FooterComponent;
