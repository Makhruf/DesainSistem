import Typografi, { FontComponent, } from "./komponen/Typography.js";

const FontComponents = () => {
  return (
    <div>
      <h1>jenis font</h1>
      <Typografi>
        <FontComponent font="font1" weight="b">
          Courier New
        </FontComponent>
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

      <div
        style={{
          border: "2px solid black",
          width: "62%",
          height:"62%",
          margin: "auto",
          marginTop: "10em",
          maxWidth:"100%",
          overflowX:"auto"
        }}
      >
        <h3 style={{ textAlign: "center" }}>Code</h3>
        <FontComponent font="2">
          <pre
            style={{ textAlign: "left", margin: "-14em", marginTop: "-2em" }}
          >
            {`
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

    *PENJELASAN*
FontComponent yang dikustomisasi untuk menampilkan berbagai font family, ketebalan, dan ukuran teks. Mari kita 
jelaskan lebih rinci setiap bagian:
Font Styles (font family): Setiap elemen FontComponent menerima prop font yang menentukan jenis font 
(misalnya, font="font2" akan menampilkan "Franklin Gothic Medium" jika font tersebut tersedia di perangkat pengguna).
Di sini, berbagai jenis font digunakan, mulai dari serif (seperti "Times New Roman" dan "Georgia"), sans-serif 
(seperti "Arial" dan "Verdana"), hingga gaya dekoratif seperti "Impact" dan "cursive". Jika browser atau perangkat 
pengguna memiliki akses ke font yang ditentukan, teks akan ditampilkan dengan karakteristik khas font tersebut,
misalnya "Courier New" yang berjenis monospace, "Arial" yang jelas dan bersih, atau "Impact" yang tebal dan mencolok.
Font Weight (Ketebalan): Kode menggunakan prop weight untuk menentukan ketebalan teks, mulai dari sangat tipis
(w1, 100) hingga sangat tebal (w9, 900), dengan penambahan opsi b untuk bold, bl untuk bolder, dan l untuk lighter.
Setiap nilai ini menciptakan variasi visual pada teks yang menunjukkan tingkat tebal tipisnya teks, sehingga memudahkan
pengguna mengatur hierarki teks secara visual, seperti judul yang tebal atau teks informasi yang ringan.
Font Size (Ukuran): Prop size menentukan ukuran teks, dengan nilai s (12px) yang kecil hingga xxl (48px) yang sangat besar.
Ukuran ini digunakan untuk berbagai kebutuhan tampilan, seperti s atau s1 untuk teks kecil atau catatan, dan xxl untuk teks
penting atau judul utama.
Contoh Implementasi: Misalnya, <FontComponent font="font2">Franklin Gothic Medium</FontComponent> akan menampilkan teks 
"Franklin Gothic Medium" dalam gaya font Franklin Gothic Medium. Jika perangkat mendukung font tersebut, teks akan
memiliki tampilan tebal, dengan karakteristik yang padat dan modern, cocok untuk judul atau teks dengan penekanan.
Jadi, keseluruhan kode ini menghasilkan serangkaian teks dengan berbagai kombinasi jenis font, ketebalan, dan ukuran,
yang dapat diterapkan dalam desain UI untuk menciptakan tampilan teks yang konsisten dan bervariasi.






      `}
          </pre>
        </FontComponent>
      </div>
    </div>
  );
}

export default FontComponents
