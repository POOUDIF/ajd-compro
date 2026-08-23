# Panduan Gambar Slideshow - Format Landscape

## ⚠️ **Masalah Portrait pada Slideshow**

Jika gambar slideshow terlihat **portrait** (tinggi lebih dari lebar), ini disebabkan oleh gambar asli yang memiliki orientasi portrait. Slideshow dirancang untuk menampilkan gambar **landscape** (lebar lebih dari tinggi).

## 📐 **Spesifikasi Gambar yang Benar**

### Format yang Direkomendasikan
- **Aspect Ratio**: 16:9 (landscape)
- **Resolusi Minimum**: 1920x1080 pixels
- **Orientasi**: **LANDSCAPE** (horizontal)
- **Format File**: JPG, PNG, atau WebP

### Ukuran Standar yang Disarankan
- **1920 x 1080** (Full HD 16:9) - **RECOMMENDED**
- **1366 x 768** (HD 16:9)
- **2560 x 1440** (2K 16:9)
- **3840 x 2160** (4K 16:9)

## 🔧 **Cara Memperbaiki Gambar Portrait**

### Opsi 1: Crop Gambar Portrait ke Landscape
1. **Buka gambar** di editor foto (Photoshop, GIMP, Canva, dll)
2. **Crop/Potong** gambar dengan ratio 16:9
3. **Pilih bagian terpenting** dari gambar untuk di-crop
4. **Export** dengan ukuran 1920x1080

### Opsi 2: Rotate & Resize
1. **Rotate gambar** 90 derajat jika memungkinkan
2. **Resize** ke dimensi 1920x1080
3. **Pastikan konten masih terlihat jelas**

### Opsi 3: Gunakan Background/Letterbox
1. **Buat canvas baru** 1920x1080
2. **Tambahkan background** (blur atau solid color)
3. **Tempatkan gambar portrait di tengah**
4. **Tambahkan efek atau frame** jika perlu

## 🎨 **Tips Optimasi Gambar**

### Untuk Corporate Excellence (pic1.jpg)
- Gunakan foto gedung/kantor dari sudut lebar
- Landscape shot dari meeting room atau office space
- Skyline atau exterior building

### Untuk Infrastructure Development (pic2.jpg)
- **Foto konstruksi atau jalan dari perspektif lebar**
- **Hindari foto vertikal gedung tinggi**
- Gunakan drone shot atau wide angle untuk infrastruktur
- Foto jalan tol, jembatan, atau proyek dari samping

### Untuk Financial Engineering (pic3.jpg)
- Chart atau grafik dalam format landscape
- Meeting room atau presentation setup
- Multiple monitors atau dashboard view

### Untuk Investment Solutions (pic4.jpg)
- Handshake atau business meeting
- Office environment yang luas
- Portfolio atau document layout

### Untuk Business Portfolio (pic5.jpg)
- Overview shot dari aset atau proyek
- Collage atau montage dalam format landscape
- Wide shot dari berbagai bisnis unit

## 🛠️ **Tools untuk Edit Gambar**

### Online Tools (Gratis)
- **Canva** - Template dan crop tools
- **Photopea** - Photoshop alternative online
- **Resize.it** - Simple resize tool
- **Crop.me** - Quick cropping tool

### Desktop Software
- **Adobe Photoshop** - Professional editing
- **GIMP** - Free alternative
- **Paint.NET** - Windows free editor
- **Figma** - Design and resize

## ✅ **Checklist Sebelum Upload**

- [ ] Gambar berformat **landscape** (16:9)
- [ ] Resolusi minimal **1920x1080**
- [ ] File size di bawah **500KB** untuk performa optimal
- [ ] Kualitas gambar tajam dan jelas
- [ ] Konten gambar sesuai dengan tema slide
- [ ] Nama file sesuai: `pic1.jpg`, `pic2.jpg`, etc.

## 🔍 **Cara Mengecek Hasil**

1. **Upload gambar** ke folder `/public/img/`
2. **Refresh website** (Ctrl+F5)
3. **Cek slideshow** - pastikan semua gambar landscape
4. **Test di mobile** - pastikan responsive
5. **Cek loading speed** - pastikan tidak terlalu lambat

## 🚨 **Jika Masih Bermasalah**

Jika setelah mengganti gambar masih terlihat portrait:
1. **Clear browser cache** (Ctrl+Shift+Del)
2. **Hard refresh** (Ctrl+F5)
3. **Cek ukuran file asli** - pastikan benar-benar landscape
4. **Restart development server** (`npm run dev`)

---

**💡 Tip**: Selalu gunakan gambar landscape untuk slideshow agar tampilan website profesional dan konsisten!