import React from "react";
import Dokter1 from "../img/dokter1.webp";
import Dokter2 from "../img/dokter2.jpg";
import Dokter3 from "../img/dokter3.jpg"
import foto1 from "../img/foto1.webp";
import foto4 from "../img/foto4.webp";
import JatimPark from "../img/jatimpark.jpg";
import Typografi, { FontComponent, FontSize, bbb} from './komponen/Typography.js';
import Buttonutama ,{ButtonHover} from "./komponen/Button";
import ContainerS, {Cardwarna} from "./komponen/Gaya";
import { ProfileCard, ProfileImage, ProfileInfo, ProfileButton } from './komponen/Styledcard.js';

import CardBungkus, {CardH1, Card1, Card1Konten, Card1Image, Card1Heading, Card1Title, Card1Description, Card2, Card2Konten, Card2Image, Card2Description, Card2Price, Card2KontenCard, Card2Title, Card3, Card3Description, Card3Image, Card3Konten, Card3Title, Card4, Card4Button, Card4Description, Card4Image, Card4Konten, Card4KontenCard, Card4Title} from "./komponen/Styledcard";
const CardComponent = () => {
    return (
        <div>
            <div>
            </div>
            <CardBungkus>
            <CardH1>Card 1</CardH1>
            <Card1>
                <Card1Konten warnabg="hitam">
                <Card1Image  src={Dokter2} alt="Dokter2"/>
                <Card1Title warnabg="kuning"> dr. ALEXANDRA MAX, Sp.JP </Card1Title>
                <Card1Heading warnabg="putih" > Dokter Spesialis Jantung
                        <Card1Description font="font3"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error velit 
                            omnis odio totam quam animi incidunt, tempore, obcaecati ipsum asperiores ea. 
                            Sunt ex sequi perspiciatis. Ex nemo cumque minima!
                        </Card1Description>
                    </Card1Heading>
                </Card1Konten>

                <Card1Konten warnabg="hitam">
                <Card1Image  src={Dokter1} alt="Dokter1"/>
                <Card1Title warnabg="kuning"> dr. BAMBANG WIJOYO, Ph.D, Sp.M</Card1Title>
                <Card1Heading> Dokter Spesialis Penyakit Mata
                    <Card1Description font="font2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error velit omnis odio totam quam animi incidunt, tempore, obcaecati ipsum asperiores ea. Sunt ex sequi perspiciatis. Ex nemo cumque minima!
                    </Card1Description>
                </Card1Heading>
                </Card1Konten>

                <Card1Konten warnabg="hitam">
                <Card1Image  src={Dokter3} alt="Dokter3"/>
                <Card1Title warnabg="kuning"> drg. ERVINA FARDILA, MDSc., Sp.KGA </Card1Title>
                <Card1Heading>Dokter Gigi Spesialis Gigi Dan Mulut
                    <Card1Description font="font2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error velit omnis odio totam quam animi incidunt, tempore, obcaecati ipsum asperiores ea. Sunt ex sequi perspiciatis. Ex nemo cumque minima!</Card1Description>
                </Card1Heading>
                </Card1Konten>
            </Card1>
            <div style={{ border: "2px solid black", width: "57%", margin: "auto", marginTop: "-6em",maxWidth:"100%",overflowX:"auto" }}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-10em",marginTop:"-3em"  }}>
      {`
<CardH1>Card 1</CardH1>
    <Card1>
        <Card1Konten warnabg="hitam">
            <Card1Image  src={Dokter2} alt="Dokter2"/>
            <Card1Title warnabg="kuning"> dr. ALEXANDRA MAX, Sp.JP </Card1Title>
                <Card1Heading warnabg="putih" > Dokter Spesialis Jantung
                    <Card1Description font="font3"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error velit 
                        omnis odio totam quam animi incidunt, tempore, obcaecati ipsum asperiores ea. 
                        Sunt ex sequi perspiciatis. Ex nemo cumque minima!
                    </Card1Description>
                </Card1Heading>
            </Card1Konten>

                                            *PENJELASAN*
 CardH1 digunakan sebagai judul utama, yaitu "Card 1." Komponen Card1 bertindak sebagai kontainer
 utama yang membungkus seluruh isi kartu, sementara Card1Konten dengan latar belakang hitam 
 (warnabg="hitam") menampung elemen-elemen inti. Card1Image menampilkan foto dokter yang diambil 
 dari variabel Dokter2, dan Card1Title memperlihatkan nama dokter, dr. ALEXANDRA MAX, Sp.JP, dengan
 latar kuning (warnabg="kuning") untuk penekanan. Card1Heading menampilkan spesialisasi dokter, 
 yaitu "Dokter Spesialis Jantung," dengan latar putih (warnabg="putih"), sedangkan Card1Description 
 menambahkan deskripsi singkat menggunakan font khusus (font="font3").
      `}
    </pre>
  </FontComponent>
</div>
    <CardH1>Card 2</CardH1>
    <Card2>
    <ProfileCard  warnabg="default" borderbd="ungu">
      <ProfileImage src={Dokter3} alt="Dokter3"/>
      <ProfileInfo warnabg="hitam">
        <h3> drg. ERVINA FARDILA, MDSc., Sp.KGA</h3>
        <div className="specialty">
          <span className="badge">Dokter Spesialis</span>
          <span className="badge"> Gigi & Mulut</span>
        </div>
        <div className="location">RSUP Dr. Sardjito (Yogyakarta)</div>
      </ProfileInfo>
      <ProfileButton>Cek Profil</ProfileButton>
    </ProfileCard>

    <ProfileCard warnabg="ungu">
      <ProfileImage src={Dokter1} alt="Dokter1"/>
      <ProfileInfo warnabg="putih">
        <h3>dr. BAMBANG WIJOYO, Ph.D, Sp.M</h3>
        <div className="specialty">
          <span className="badge">Dokter Spesialis</span>
          <span className="badge">Penyakit Mata</span>
        </div>
        <div className="location">RSUP Dr. Sardjito (Yogyakarta)</div>
      </ProfileInfo>
      <ProfileButton>Cek Profil</ProfileButton>
    </ProfileCard>

    <ProfileCard warnabg="kuning" borderbd="hijau">
      <ProfileImage src={Dokter2} alt="Dokter2"/>
      <ProfileInfo warnabg="hitam">
        <h3>dr. ALEXANDRA MAXULUNA, Sp.JP</h3>
        <div className="specialty">
          <span className="badge">Dokter Spesialis</span>
          <span className="badge">Jantung</span>
        </div>
        <div className="location">RSUP Dr. Sardjito (Yogyakarta)</div>
      </ProfileInfo>
      <ProfileButton>Cek Profil</ProfileButton>
    </ProfileCard>
            </Card2>
            <div style={{ border: "2px solid black", width: "57%", margin: "auto", marginTop: "-6em",maxWidth:"100%",overflowX:"auto" }}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-10em",marginTop:"-3em"  }}>
      {`


<ProfileCard warnabg="hitam">
    <ProfileImage src={Dokter3} alt="Dokter3"/>
      <ProfileInfo warnabg="putih">
        <h3> drg. ERVINA FARDILA, MDSc., Sp.KGA</h3>
            <div className="specialty">
                <span className="badge">Dokter Spesialis</span>
                <span className="badge"> Gigi & Mulut</span>
            </div>
        <div className="location">RSUP Dr. Sardjito (Yogyakarta)</div>
    </ProfileInfo>
    <ProfileButton>Cek Profil</ProfileButton>
    </ProfileCard>

                                            *PENJELASAN*
ProfileCard sebagai kontainer utama dengan latar belakang hitam (warnabg="hitam"). Di dalamnya terdapat
ProfileImage yang menampilkan gambar dokter dengan sumber dari variabel Dokter3 dan deskripsi alternatif 
alt="Dokter3" untuk aksesibilitas. Selanjutnya, ProfileInfo berfungsi sebagai wadah informasi dokter,
dengan latar belakang putih (warnabg="putih"), menampilkan nama lengkap dokter drg. ERVINA FARDILA, 
MDSc., Sp.KGA dalam elemen h3, diikuti oleh div yang menunjukkan spesialisasi dokter dengan dua badge 
yang menyatakan bahwa beliau adalah Dokter Spesialis di bidang Gigi & Mulut. Informasi tambahan mengenai 
lokasi praktik, yaitu "RSUP Dr. Sardjito (Yogyakarta)," juga ditampilkan dalam bagian ini. Terakhir, 
ProfileButton berfungsi sebagai tombol interaktif bertuliskan "Cek Profil," yang memungkinkan pengguna 
untuk mengakses informasi lebih lanjut mengenai dokter.




      `}
    </pre>
  </FontComponent>
  </div>
            <CardH1>Card 3</CardH1>
            <Card3>
                <Card3Konten warnabg="ungu">
                    <Card3Image src={foto4} alt="foto4"/>
                </Card3Konten>

                <Card3Konten warnabg="default">
                    <Card3Image src={foto4} alt="foto4"/>
                    <Card3Title warnabg="hitam">Kesehatan</Card3Title>
                    <Card3Description warnabg="hitam">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique quisquam 
                      nemo commodi dolorem quod ad omnis libero. Et quisquam soluta eum corporis 
                      tenetur est aperiam id impedit neque recusandae!
                    </Card3Description>
                </Card3Konten>

                <Card3Konten warnabg="kuning">
                    <Card3Image src={foto4} alt="foto4"/>
                    <Card3Title warnabg="hitam">Kesehatan</Card3Title>
                    <Card3Description warnabg="hitam">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique quisquam 
                      nemo commodi dolorem quod ad omnis libero. Et quisquam soluta eum corporis 
                      tenetur est aperiam id impedit neque recusandae!
                    </Card3Description>
                </Card3Konten>
            </Card3>
            <div style={{ border: "2px solid black", width: "57%", margin: "auto", marginTop: "-6em",maxWidth:"100%",overflowX:"auto" }}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-10em",marginTop:"-3em"  }}>
      {`


                <Card3Konten warnabg="default">
                    <Card3Image src={foto4} alt="foto4"/>
                    <Card3Title warnabg="hitam">Kesehatan</Card3Title>
                    <Card3Description warnabg="hitam">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique quisquam 
                      nemo commodi dolorem quod ad omnis libero. Et quisquam soluta eum corporis 
                      tenetur est aperiam id impedit neque recusandae!
                    </Card3Description>
                </Card3Konten>

                                            *PENJELASAN*
 Komponen utama <Card3Konten> berfungsi sebagai wadah dengan prop warnabg="default" yang mengindikasikan
 penggunaan warna latar belakang default. Di dalamnya terdapat <Card3Image> yang menampilkan gambar dari
 variabel foto4, dengan atribut alt="foto4" untuk aksesibilitas. Judul kartu, "Kesehatan", ditampilkan
 melalui <Card3Title> dengan latar belakang hitam (warnabg="hitam"), memberikan kontras yang kuat.
 Selain itu, <Card3Description> menyajikan deskripsi tambahan menggunakan kalimat placeholder yang umum,
 juga dengan latar belakang hitam.
      `}
    </pre>
  </FontComponent>
  </div>
            <CardH1>Card 4</CardH1>
            <Card4>
                <Card4Konten warnabg="ungu">
                <Card4KontenCard>
                    <Card4Image src={foto1} alt="foto1"/>
                    <Card4Title warnabg="putih">Informasi Terkini</Card4Title>
                    <Card4Description warnabg="putih">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Curabitur at posuere eros.Interdum et malesuada fames ac
                      ante ipsum primis in faucibus.
                      </Card4Description>
                </Card4KontenCard>
                <Card4Button>
                      Read More
                </Card4Button>
                </Card4Konten>

                <Card4Konten warnabg="default">
                <Card4KontenCard >
                    <Card4Image src={foto1} alt="foto1"/>
                    <Card4Title warnabg="hitam">Informasi Terkini</Card4Title>
                    <Card4Description warnabg="hitam">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at posuere eros. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus.
                      </Card4Description>
                </Card4KontenCard>
                <Card4Button>
                    Read More
                </Card4Button>
                </Card4Konten>

                <Card4Konten warnabg="kuning">
                <Card4KontenCard>
                    <Card4Image src={foto1} alt="foto1"/>
                    <Card4Title warnabg="hitam">Informasi Terkini</Card4Title>
                    <Card4Description warnabg="hitam">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur at posuere eros. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus.
                      </Card4Description>
                </Card4KontenCard>
                <Card4Button>
                    Read More
                </Card4Button>
                </Card4Konten>
            </Card4>
            <div style={{ border: "2px solid black", width: "57%", margin: "auto", marginTop: "-6em",maxWidth:"100%",overflowX:"auto" }}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-10em",marginTop:"-3em"  }}>
      {`
        <Card4Konten warnabg="ungu">
          <Card4KontenCard>
            <Card4Image src={foto1} alt="foto1"/>
              <Card4Title warnabg="putih">Jawa Timur Park 1</Card4Title>
                <Card4Description warnabg="putih">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Curabitur at posuere eros.Interdum et malesuada fames ac
                  ante ipsum primis in faucibus.
                </Card4Description>
              </Card4KontenCard>
            <Card4Button>
              Read More
            </Card4Button>
          </Card4Konten>

    *PENJELASAN*
Komponen utama <Card4Konten> memiliki prop warnabg="ungu" untuk mengatur warna latar belakang kartu
menjadi ungu. Di dalamnya terdapat <Card4KontenCard>, yang berfungsi sebagai wadah untuk elemen konten
inti seperti <Card4Image>, yang menampilkan gambar dari variabel foto1 dengan deskripsi alternatif,
<Card4Title> yang menampilkan judul "Jawa Timur Park 1" dengan latar belakang putih, dan <Card4Description>
yang berisi teks placeholder dengan latar belakang putih untuk deskripsi tambahan. Komponen ini juga
menyertakan <Card4Button> dengan label "Read More", yang memungkinkan pengguna mengklik tombol untuk
memperoleh informasi lebih lanjut.  
      `}
    </pre>
  </FontComponent>
  </div>
            </CardBungkus>
        </div>
    )
}

export default CardComponent;