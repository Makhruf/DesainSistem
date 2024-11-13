import styled from "styled-components";
import Gambar1 from "../img/gambar1.jpg";
import Gambar2 from "../img/gambar2.jpg";
import Gambar3 from "../img/gambar3.jpg";
import Gambar4 from "../img/gambar4.jpg";
import Typografi, { FontComponent } from "./komponen/Typography";
import Kontenyyy, { Kontencontent, Contents, Row, Contentwrapper, Header, Konten3, Konten, Konten4 } from "./komponen/StyleContent";

const Content = () => {
    return (
        <>
            <Contents>
                <Row>
                    <Contentwrapper>
                        <h1>Jaga Kesehatan Mental Anda</h1>
                        <p>
                            Stres dan tekanan hidup dapat memengaruhi kesehatan mental kita. Luangkan waktu untuk menjaga keseimbangan pikiran dan jiwa Anda.
                        </p>
                        <a href="#more-info">Temukan Tips dan Artikel</a>
                    </Contentwrapper>
                    <Contentwrapper>
                        <img src={Gambar1} alt="Mental Health Awareness"/>
                    </Contentwrapper>
                </Row>
            </Contents>
            <div style={{ border: "2px solid black", width: "55%", margin: "auto", marginTop: "1em",maxWidth: "100%",overflowX: "auto"}}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-9em",marginTop:"2em"}}>
      {`
            <Contents>
                <Row>
                    <Contentwrapper>
                        <h1>Jaga Kesehatan Mental Anda</h1>
                        <p>
                            Stres dan tekanan hidup dapat memengaruhi kesehatan mental kita. 
                            Luangkan waktu untuk menjaga keseimbangan pikiran dan jiwa Anda.
                        </p>
                        <a href="#more-info">Temukan Tips dan Artikel</a>
                    </Contentwrapper>
                    <Contentwrapper>
                        <img src={Gambar1} alt="Mental Health Awareness"/>
                    </Contentwrapper>
                </Row>
            </Contents>

*PENJELASAN*
bagian <Contents> adalah wadah utama yang digunakan untuk membungkus konten. Di dalamnya terdapat elemen <Row>, 
yang berfungsi untuk mengatur tata letak dua kolom secara horizontal menggunakan flexbox atau grid (tergantung 
implementasi di CSS). Di dalam <Row>, terdapat dua komponen <Contentwrapper>. Komponen pertama berisi sebuah 
judul utama (<h1>) yang bertuliskan "Jaga Kesehatan Mental Anda", yang bertujuan untuk memberikan pesan penting 
kepada pengguna tentang pentingnya menjaga kesehatan mental. Di bawah judul tersebut, terdapat sebuah paragraf 
(<p>) yang menjelaskan dampak stres dan tekanan hidup terhadap kesehatan mental serta mengajak pengguna untuk 
menjaga keseimbangan pikiran dan jiwa mereka. Diikuti dengan sebuah link (<a>) yang mengarah ke bagian lain dari 
halaman, yang bertuliskan "Temukan Tips dan Artikel", memberikan kesempatan kepada pengguna untuk mengeksplorasi 
lebih lanjut mengenai tips dan informasi terkait. Komponen <Contentwrapper> kedua berisi sebuah elemen <img> yang
menampilkan gambar terkait kesadaran kesehatan mental, yang diambil dari file gambar yang diimpor sebelumnya 
(dalam hal ini, Gambar1). Gambar ini bertujuan untuk memperkuat pesan yang disampaikan oleh teks dan memberikan 
visual yang relevan untuk mendukung topik yang dibahas.


      `}
    </pre>
     </FontComponent>
    </div>

            <Header>
                <h1>Selamat Datang di Platform Kesehatan Mental Anda</h1>
                <p>
                    Kami hadir untuk membantu Anda memahami pentingnya kesehatan mental dan menawarkan panduan yang tepat dalam mencapai keseimbangan hidup.
                </p>
            </Header>
            <Konten3>
                <Konten>
                    <img src={Gambar2} alt="Self-Care Tips"/>
                    <h2>Tips Perawatan Diri</h2>
                    <p>
                        Perawatan diri adalah langkah pertama dalam menjaga kesehatan mental. Temukan cara-cara mudah untuk merawat diri Anda di setiap kesempatan.
                    </p>
                </Konten>
                <Konten>
                    <img src={Gambar3} alt="Stress Management"/>
                    <h2>Manajemen Stres</h2>
                    <p>
                        Stres adalah bagian dari hidup, tetapi dapat dikelola. Pelajari teknik manajemen stres untuk tetap tenang dan fokus.
                    </p>
                </Konten>
                <Konten>
                    <img src={Gambar4} alt="Mindfulness Practices"/>
                    <h2>Praktik Mindfulness</h2>
                    <p>
                        Mindfulness membantu Anda hidup di saat ini dan menenangkan pikiran. Jelajahi teknik mindfulness untuk meningkatkan ketenangan batin.
                    </p>
                </Konten>
            </Konten3>

            <Konten4>
                <h2>Gabung dengan Komunitas Kami</h2>
                <p>
                    Bergabunglah dengan komunitas yang peduli dengan kesehatan mental. Mari saling mendukung dan tumbuh bersama.
                </p>
                <a href="kontak.html" className="button4">Hubungi Kami</a>
            </Konten4>
            <div style={{ border: "2px solid black", width: "55%", margin: "auto", marginTop: "1em",maxWidth: "100%",overflowX: "auto"}}>
  <h3 style={{ textAlign: "center" }}>Code</h3>
  <FontComponent font="2">
    <pre style={{ textAlign: "left",margin:"-9em",marginTop:"2em"}}>
      {`
        <Header>
                <h1>Selamat Datang di Platform Kesehatan Mental Anda</h1>
                <p>
                    Kami hadir untuk membantu Anda memahami pentingnya kesehatan mental dan 
                    menawarkan panduan yang tepat dalam mencapai keseimbangan hidup.
                </p>
            </Header>
            <Konten3>
                <Konten>
                    <img src={Gambar2} alt="Self-Care Tips"/>
                    <h2>Tips Perawatan Diri</h2>
                    <p>
                        Perawatan diri adalah langkah pertama dalam menjaga kesehatan mental. 
                        Temukan cara-cara mudah untuk merawat diri Anda di setiap kesempatan.
                    </p>
                </Konten>
                <Konten>
                    <img src={Gambar3} alt="Stress Management"/>
                    <h2>Manajemen Stres</h2>
                    <p>
                        Stres adalah bagian dari hidup, tetapi dapat dikelola. Pelajari teknik 
                        manajemen stres untuk tetap tenang dan fokus.
                    </p>
                </Konten>
                <Konten>
                    <img src={Gambar4} alt="Mindfulness Practices"/>
                    <h2>Praktik Mindfulness</h2>
                    <p>
                        Mindfulness membantu Anda hidup di saat ini dan menenangkan pikiran. 
                        Jelajahi teknik mindfulness untuk meningkatkan ketenangan batin.
                    </p>
                </Konten>
            </Konten3>

            <Konten4>
                <h2>Gabung dengan Komunitas Kami</h2>
                <p>
                    Bergabunglah dengan komunitas yang peduli dengan kesehatan mental. Mari 
                    saling mendukung dan tumbuh bersama.
                </p>
                <a href="kontak.html" className="button4">Hubungi Kami</a>
            </Konten4>
                                            *PENJELASAN*
Kode di atas menyusun halaman web yang berfokus pada kesehatan mental dengan beberapa bagian utama.
Di dalam elemen <Header>, terdapat judul "Selamat Datang di Platform Kesehatan Mental Anda" 
dan deskripsi yang menjelaskan tujuan platform ini untuk membantu pengguna memahami pentingnya kesehatan 
mental dan mencapai keseimbangan hidup. Selanjutnya, dalam elemen <Konten3>, terdapat tiga bagian 
konten yang masing-masing membahas topik penting, yaitu: pertama, "Tips Perawatan Diri" yang memberikan 
informasi tentang cara merawat diri untuk menjaga kesehatan mental; kedua, "Manajemen Stres" yang menjelaskan 
teknik mengelola stres agar tetap tenang dan fokus; dan ketiga, "Praktik Mindfulness" yang mengajak pengguna 
untuk menjelajahi cara-cara mindfulness guna meningkatkan ketenangan batin. Terakhir, dalam elemen 
<Konten4>, pengguna diajak untuk bergabung dengan komunitas yang peduli tentang kesehatan mental, 
dengan ajakan untuk saling mendukung dan tumbuh bersama, serta tautan untuk menghubungi platform melalui halaman kontak. 
Struktur ini bertujuan untuk memberikan informasi terorganisir mengenai kesehatan mental dan mengundang partisipasi 
pengguna dalam komunitas yang peduli terhadap isu ini.

         `}
    </pre>
     </FontComponent>
    </div>
        </>
    );
}

export default Content;
