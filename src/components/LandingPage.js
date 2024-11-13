import Wrapper, { Header2Container, Header2Dropdown, Header2Nav, Header2Logo, Header2Login, A } from './komponen/Styleheader.js'; 
import Kontenyyy, { Konten, Nav } from "./komponen/StyleContent";
import foto from "../img/image.webp";
import CardBungkus, {Card3Description, Card3Image, Card3Konten, Card3Title} from "./komponen/Styledcard";

function LandingPages() {
    return (
        <div>
            {/* Navigation Bar */}
            <Nav>
                <Header2Container warnabg="hijau">
                    <Header2Login warnabg="kuning">
                        <A href="">Login</A>
                    </Header2Login>
                    <Header2Dropdown>
                        <i className="fa-solid fa-square-caret-down"></i>
                    </Header2Dropdown>
                    <Header2Nav font="font4" weight="w1" size="m" warnabg="putih">
                        <ul>
                            <A font="font4" weight="bl" size="xl" href="/atasan">Beranda</A>
                            <A href="/konten">Informasi Publik</A>
                            <A href="/card">Profil</A> 
                            <A href="/footer">Media</A>
                        </ul>
                    </Header2Nav>
                    <Header2Logo warnabg="kuning" font="font1" size="xl" weight="b">Pemuda Berkharisma</Header2Logo>
                    <button className="hamburger">☰</button>
                </Header2Container>
            </Nav>

            {/* Content Section */}
        <CardBungkus>
            <Card3Konten warnabg="default">
                    <Card3Image src={foto} alt="foto4"/>
                    <Card3Title warnabg="hitam">Mental Health - Kesehatan Mental</Card3Title>
                    <Card3Description warnabg="hitam">
                        <p>
                            Selamat datang di <strong>Pemuda Berkharisma</strong>, portal informasi yang didedikasikan untuk 
                            kesehatan mental generasi muda. Kami percaya bahwa kesehatan mental sama pentingnya dengan kesehatan fisik. 
                            Di sini, Anda akan menemukan berbagai artikel, panduan, dan sumber daya untuk membantu Anda menjaga keseimbangan mental 
                            dalam menjalani kehidupan yang penuh tantangan.
                        </p>
                        <p>
                            Apakah Anda sedang menghadapi stres, kecemasan, atau merasa membutuhkan panduan untuk mengelola emosi? Kami 
                            hadir untuk mendukung Anda dengan informasi dan komunitas yang bisa membantu Anda meraih kualitas hidup yang lebih baik.
                        </p>
                    </Card3Description>
                </Card3Konten>
            </CardBungkus>

        </div>
    );
}

export default LandingPages;
