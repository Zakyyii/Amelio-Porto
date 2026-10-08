export const profile = {
  name: "[NAMA LENGKAP]",
  nim: "[NIM]",
  maskNim: false,
  major: "[Program Studi]",
  headline: "[Kalimat singkat tentang diri Anda, maks 90 karakter]",
  description:
    "[Tuliskan 80-150 kata tentang diri Anda di sini. Ceritakan latar belakang, minat, dan tujuan Anda secara ringkas.]",
  photo: "/images/profile/profile.webp",
  photoAlt: "/images/profile/profile-2.webp",
  education: [
    {
      level: "S1",
      institution: "[Nama Universitas]",
      startYear: 2022,
      endYear: "Sekarang",
    },
    {
      level: "SMA",
      institution: "[Nama Sekolah]",
      startYear: 2019,
      endYear: 2022,
    },
    {
      level: "SMP",
      institution: "[Nama Sekolah]",
      startYear: 2016,
      endYear: 2019,
    },
    {
      level: "SD",
      institution: "[Nama Sekolah]",
      startYear: 2010,
      endYear: 2016,
    },
  ],
  activities: [
    {
      id: "osis",
      title: "OSIS",
      role: "[Peran]",
      period: "2023 - 2024",
      description: "[Keterangan singkat tentang kontribusi Anda di OSIS]",
      photos: [
        {
          src: "/images/org/osis-1.webp",
          program: "Latihan Dasar Kepemimpinan (LDK)",
          desc: "Penggemblengan calon pengurus OSIS periode baru."
        },
        {
          src: "/images/org/osis-2.webp",
          program: "Pentas Seni & Budaya (Pensi)",
          desc: "Ajang kreativitas siswa dan pergelaran musik tahunan."
        },
        {
          src: "/images/org/osis-3.webp",
          program: "Pekan Olahraga Sekolah (Porseni)",
          desc: "Kompetisi olahraga antar kelas dan jalan sehat."
        },
        {
          src: "/images/org/osis-4.webp",
          program: "Bakti Sosial & Donor Darah",
          desc: "Aksi kepedulian sosial dan kepemudaan."
        },
        {
          src: "/images/org/osis-5.webp",
          program: "Classmeeting & Perlombaan",
          desc: "Kegiatan hiburan dan keakraban pasca ujian semester."
        },
      ],
    },
    {
      id: "mpk",
      title: "MPK",
      role: "[Peran]",
      period: "2022 - 2023",
      description: "[Keterangan singkat tentang kontribusi Anda di MPK]",
      photos: [
        {
          src: "/images/org/mpk-1.webp",
          program: "Sidang Pleno & Aspirasi Siswa",
          desc: "Fasilitasi penyampaian aspirasi siswa ke pihak sekolah."
        },
        {
          src: "/images/org/mpk-2.webp",
          program: "Pengawasan Kinerja OSIS",
          desc: "Evaluasi pelaksanaan program kerja OSIS berkala."
        },
        {
          src: "/images/org/mpk-3.webp",
          program: "Pemilihan Umum Ketua OSIS (Pemilos)",
          desc: "Penyelenggaraan pemilu demokratis di lingkungan sekolah."
        },
        {
          src: "/images/org/mpk-4.webp",
          program: "Revisi & Pembahasan AD/ART",
          desc: "Musyawarah penetapan aturan organisasi siswa."
        },
        {
          src: "/images/org/mpk-5.webp",
          program: "Sertijab & Pelantikan Pengurus",
          desc: "Prosesi serah terima jabatan kepengurusan baru."
        },
      ],
    },
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/[username]",
    instagram: "https://www.instagram.com/[username]",
    email: "[email@domain.com]",
    phone: "+62[nomor]",
    whatsapp: "https://wa.me/62[nomor]",
    cvFile: "/cv/CV_NamaAnda.pdf",
  },
};
