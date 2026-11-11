
export const categories = [
  {
    id: "pantai",
    name: "Pantai",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
  },
  {
    id: "bukit-pegunungan",
    name: "Bukit & Pegunungan",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000",
  },
  {
    id: "air-terjun",
    name: "Air Terjun",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1000",
  },
  {
    id: "budaya-religi",
    name: "Budaya & Religi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-QaciKjPZG5psv9guvp1ACkARlrRFHX6vZwFsU0dIw&s=10",
  },
];

export const destinations = [

  // ==========================================
  // PANTAI DAN KEPULAUAN
  // LOMBOK, GILI, SUMBAWA
  // ==========================================

  {
    id: "pantai-kuta-mandalika",
    name: "Pantai Kuta Mandalika",
    category: "pantai",
    island: "Lombok",
    location: "Kuta, Lombok Tengah, NTB",
    image:
      "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/lombok/pantai-kuta-mandalika-profile1645517036.png?x-image-process=image/resize,p_100,limit_1/imageslim",
    youtube: "https://www.youtube.com/embed/-y214N31C-A?si=JeRZh7hyHoHJIflV",
    description:
      "Pantai Kuta Mandalika merupakan salah satu destinasi unggulan di Lombok Tengah. Pantai ini memiliki pasir putih, air laut jernih, serta kawasan pesisir yang dikelilingi perbukitan.",
    ticket: "Estimasi Rp10.000",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "tanjung-aan",
    name: "Pantai Tanjung Aan",
    category: "pantai",
    island: "Lombok",
    location: "Mandalika, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh88M18Ni626kbwExSMLUYILGBlvPgbtxeZfWiNL_C1JbalzQgsraEZbPo&s=10",
    youtube: "https://www.youtube.com/embed/JPaXBrhTj94?si=nEZQz7QCco90QfWw",
    description:
      "Pantai Tanjung Aan terkenal dengan pasir putih, air laut berwarna biru kehijauan, dan garis pantai yang luas. Kawasan ini menjadi salah satu tujuan wisata favorit di selatan Lombok.",
    ticket: "Estimasi Rp10.000",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "selong-belanak",
    name: "Pantai Selong Belanak",
    category: "pantai",
    island: "Lombok",
    location: "Praya Barat, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G0lJSwRxxI3-WSAq6wuOVMLyzc8HnEUHrBtPLgSAIT1xXr8R_x03fmY&s=10",
    youtube: "https://www.youtube.com/embed/nr6mUTUj-1U?si=mGkdnKuexZRemoXT",
    description:
      "Pantai Selong Belanak memiliki garis pantai melengkung dengan hamparan pasir putih. Ombaknya menjadi daya tarik bagi wisatawan yang ingin belajar berselancar.",
    ticket: "Estimasi Rp5.000",
    bestTime: "Pagi dan sore hari",
  },

  {
    id: "pantai-pink",
    name: "Pantai Pink (Tangsi)",
    category: "pantai",
    island: "Lombok",
    location: "Jerowaru, Lombok Timur, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5GfX9EFipsWfITpm6zkHtD9c10rAnwVSpnpib18Yvk_8D-cj94ILGVkM&s=10",
    youtube: "https://www.youtube.com/embed/zEITESv3Iiw?si=A9ejyl38foJNKS9J",
    description:
      "Pantai Pink atau Pantai Tangsi memiliki pasir dengan semburat warna merah muda. Pantai ini dikelilingi perbukitan dan pemandangan laut yang indah.",
    ticket: "Estimasi Rp10.000",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pantai-mawun",
    name: "Pantai Mawun",
    category: "pantai",
    island: "Lombok",
    location: "Praya Barat, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6CmWsfdFr8HzjLrz-oAXR4ZoimiunlHOhKmxYwx1EerZROoJA1_aEIAn&s=10",
    youtube: "https://www.youtube.com/embed/ciyw0rQI_QI?si=4-o825ylgDKhWrt-",
    description:
      "Pantai Mawun merupakan teluk dengan pasir putih yang dikelilingi perbukitan hijau. Bentuk teluknya menciptakan pemandangan alam yang menarik.",
    ticket: "Estimasi Rp10.000",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pantai-mandalika-seger",
    name: "Pantai Seger",
    category: "pantai",
    island: "Lombok",
    location: "Mandalika, Lombok Tengah, NTB",
    image:
      "https://travelspromo.com/wp-content/uploads/2022/02/Keindahan-pantai-seger-lombok-berlatar-bukit.jpeg",
    youtube: "https://www.youtube.com/embed/hjM2mXdjBp8?si=3-xilJmFs13L40aD",
    description:
      "Pantai Seger berada di kawasan Mandalika dan dikenal dengan pemandangan laut, bukit, serta keterkaitannya dengan tradisi Bau Nyale masyarakat Sasak.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi dan sore hari",
  },

  {
    id: "pantai-nipah",
    name: "Pantai Nipah",
    category: "pantai",
    island: "Lombok",
    location: "Malaka, Lombok Utara, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2_QGfmIghKuXZkylrSw2cIFLEguwuX1mJHt_OhwFmuHAiG1HNh9Ms2I&s=10",
    youtube: "https://www.youtube.com/embed/KqCd_HxvNDY?si=FD5oRePauizKGLU4",
    description:
      "Pantai Nipah menawarkan suasana pesisir yang tenang dengan air laut jernih. Kawasan ini juga dikenal dengan pilihan kuliner hasil laut di sekitar pantai.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Sore hari",
  },

  {
    id: "pantai-senggigi",
    name: "Pantai Senggigi",
    category: "pantai",
    island: "Lombok",
    location: "Senggigi, Lombok Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-nH72StzqsI-ZZQ3XMJPojAKc4KsXF0ZqT59uJF1CSteOGe3wCOzsoCD&s=10",
    youtube: "https://www.youtube.com/embed/Yf5rk0fsbUk?si=gG4gDwig2_9Yhes-",
    description:
      "Pantai Senggigi merupakan kawasan wisata pesisir yang populer di Lombok Barat. Wisatawan dapat menikmati panorama laut, matahari terbenam, dan fasilitas wisata di sekitarnya.",
    ticket: "Mengikuti ketentuan kawasan",
    bestTime: "Sore menjelang matahari terbenam",
  },

  {
    id: "gili-trawangan",
    name: "Gili Trawangan",
    category: "pantai",
    island: "Gili",
    location: "Pemenang, Lombok Utara, NTB",
    image:
      "https://images.trvl-media.com/place/6047546/76419393-f05c-42a1-ae3f-6f44b035649c.jpg",
    youtube: "https://www.youtube.com/embed/IXEXo56hWRk?si=4l4SXnzGfop38F8K",
    description:
      "Gili Trawangan merupakan pulau wisata yang terkenal dengan pantai berpasir putih, aktivitas snorkeling, menyelam, serta suasana wisata pulau yang khas.",
    ticket: "Biaya penyeberangan dan aktivitas menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gili-air",
    name: "Gili Air",
    category: "pantai",
    island: "Gili",
    location: "Pemenang, Lombok Utara, NTB",
    image:
      "https://ik.imagekit.io/tvlk/blog/2022/04/Wisata-di-Gili-Trawangan-Lombok-Traveloka-Xperience-2.jpg",
    youtube: "https://www.youtube.com/embed/nFmULib358E?si=bPqlgFi3An-KialJ",
    description:
      "Gili Air menawarkan suasana pulau yang relatif santai dengan pantai berpasir putih, perairan jernih, dan aktivitas wisata bahari.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gili-meno",
    name: "Gili Meno",
    category: "pantai",
    island: "Gili",
    location: "Pemenang, Lombok Utara, NTB",
    image:
      "https://images.unsplash.com/photo-1733016658164-09acc5293ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    youtube: "https://www.youtube.com/embed/jXTfBICscsE?si=-8IsGH8SZDWDPcU1",
    description:
      "Gili Meno merupakan salah satu pulau dalam kawasan Tiga Gili. Destinasi ini dikenal dengan suasana lebih tenang dan keindahan bawah lautnya.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gili-nanggu",
    name: "Gili Nanggu",
    category: "pantai",
    island: "Gili",
    location: "Sekotong, Lombok Barat, NTB",
    image:
      "https://www.lombokspeedboat.co.id/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-24-at-13.28.02-2.jpeg",
    youtube: "https://www.youtube.com/embed/kAwC83nzOe4?si=ct7jlfe3lwzN6u1g",
    description:
      "Gili Nanggu merupakan pulau kecil di kawasan Sekotong dengan pasir putih dan perairan yang cocok untuk menikmati wisata bahari serta snorkeling.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "gili-sudak",
    name: "Gili Sudak",
    category: "pantai",
    island: "Gili",
    location: "Sekotong, Lombok Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio-6YmX2ESf4PZa1N9hUCxdd5eOisUhEpFIEc3dZ0cw&s=10",
    youtube: "https://www.youtube.com/embed/kxjhXuqoWRQ?si=Mx3Ba2wsSQTbsTYn",
    description:
      "Gili Sudak merupakan pulau wisata di kawasan Sekotong yang menawarkan pantai berpasir putih, laut jernih, dan suasana pulau yang tenang.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gili-kedis",
    name: "Gili Kedis",
    category: "pantai",
    island: "Gili",
    location: "Sekotong, Lombok Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ft1m2rlAQWV_aw5EaYwRtwPIE7LRspgpxhIT2onEp8XyfFEymm_kO7Am&s=10",
    youtube: "https://www.youtube.com/embed/sBWbnN63Y1o?si=KO0eqmCjiboP_BYu",
    description:
      "Gili Kedis merupakan pulau kecil yang dikenal dengan hamparan pasir putih dan laut biru. Pulau ini menjadi salah satu tujuan wisata singkat di kawasan Sekotong.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gili-gede",
    name: "Gili Gede",
    category: "pantai",
    island: "Gili",
    location: "Sekotong, Lombok Barat, NTB",
    image:
      "https://www.gilibestdeal.com/asset/upload/gili_gede_island_1663817935.jpg",
    youtube: "https://www.youtube.com/embed/tnGCeLC8tLI?si=ygqspI3y1v9PkBCi",
    description:
      "Gili Gede merupakan pulau di kawasan Sekotong yang memiliki pantai, perairan jernih, dan suasana wisata bahari yang lebih tenang.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pulau-moyo",
    name: "Pulau Moyo",
    category: "pantai",
    island: "Sumbawa",
    location: "Kabupaten Sumbawa, NTB",
    image:
      "https://famous.ppl.ac.id/wp-content/uploads/2025/10/pantai-di-NTB-10-Native-Indonesia.webp",
    youtube: "https://www.youtube.com/embed/5Vc266wO5FY?si=yOFcwbNjbtGTWktT",
    description:
      "Pulau Moyo merupakan destinasi wisata alam di utara Pulau Sumbawa. Pulau ini terkenal dengan keindahan laut, kawasan hutan, serta Air Terjun Mata Jitu.",
    ticket: "Biaya transportasi dan kunjungan menyesuaikan",
    bestTime: "Menyesuaikan cuaca dan penyeberangan",
  },

  {
    id: "pulau-kenawa",
    name: "Pulau Kenawa",
    category: "pantai",
    island: "Sumbawa",
    location: "Poto Tano, Sumbawa Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmPWPBXXu75WPH-NKrdfowMkQd6eRs8ctkp5J8SUdsgRh5EJGgzLUv5Jv&s=10",
    youtube: "https://www.youtube.com/embed/p9rkBxG5J9s?si=KyI3kNUhOCIGzSxQ",
    description:
      "Pulau Kenawa dikenal dengan padang rumput, bukit kecil, pantai, dan panorama laut di kawasan Poto Tano. Destinasi ini menjadi tempat menarik untuk menikmati pemandangan alam.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi atau sore hari",
  },

  {
    id: "pulau-paserang",
    name: "Pulau Paserang",
    category: "pantai",
    island: "Sumbawa",
    location: "Poto Tano, Sumbawa Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPfiG4VMYchd3SOMS4imwuZdnymr5kb2MAkjGBWh8N3V6xo38Z6Gm601a&s=10",
    youtube: "https://www.youtube.com/embed/q-8fg5Tblqw?si=N5eoKIRmSVtlDDix",
    description:
      "Pulau Paserang berada di kawasan Poto Tano, Sumbawa Barat. Destinasi ini menawarkan pemandangan perairan biru, pantai, dan panorama pulau-pulau kecil.",
    ticket: "Biaya penyeberangan menyesuaikan",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pantai-maluk",
    name: "Pantai Maluk",
    category: "pantai",
    island: "Sumbawa",
    location: "Maluk, Sumbawa Barat, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2pmIiUppY5IX97pAPu6f7z-2WjHZZ5KN55YSG0CZACbps7tY2YNmMYbS&s=10",
    youtube: "https://www.youtube.com/embed/4ok5_GIdstY?si=5tONYNTx6jEKWgPs",
    description:
      "Pantai Maluk merupakan destinasi pesisir di Sumbawa Barat yang dikenal dengan pasir pantai dan ombak yang menarik bagi penggemar olahraga selancar.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pantai-jelenga",
    name: "Pantai Jelenga",
    category: "pantai",
    island: "Sumbawa",
    location: "Jereweh, Sumbawa Barat, NTB",
    image:
      "https://herewego.id/wp-content/uploads/2024/12/PANTAI-JELENGA-KABUPATEN-SUMBAWA-BARAT.jpg",
    youtube: "https://www.youtube.com/embed/_EWf89PR9-g?si=sTAjktrwVolCq9V7",
    description:
      "Pantai Jelenga terkenal di kalangan peselancar karena karakter ombaknya. Kawasan ini juga menawarkan panorama pantai yang indah dan suasana pesisir yang menarik.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Menyesuaikan kondisi ombak",
  },

  {
    id: "pantai-lakey",
    name: "Pantai Lakey",
    category: "pantai",
    island: "Sumbawa",
    location: "Hu'u, Dompu, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdxHA4_ys16iliK8q3Ky2W0ngj54ngv1vQE3y8KsOuBZsqLcIM9s5R73m&s=10",
    youtube: "https://www.youtube.com/embed/WOi4mlNeLKw?si=ek_wus0-B7-yzZB5",
    description:
      "Pantai Lakey merupakan destinasi wisata bahari di Kabupaten Dompu yang dikenal secara internasional oleh komunitas selancar karena karakter ombaknya.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Menyesuaikan musim dan kondisi ombak",
  },

  {
    id: "pulau-satonda",
    name: "Pulau Satonda",
    category: "pantai",
    island: "Sumbawa",
    location: "Kabupaten Dompu, NTB",
    image:
      "https://cdn.otiumyacht.com/wp-content/uploads/2026/07/satonda-island-4.webp",
    youtube: "https://www.youtube.com/embed/nvThiQ7VrQk?si=WvU4XHkBqFkOY0G3",
    description:
      "Pulau Satonda merupakan kawasan pulau vulkanik yang memiliki danau air asin di bagian tengahnya. Destinasi ini memiliki daya tarik geologi dan ekosistem alam yang unik.",
    ticket: "Mengikuti ketentuan kawasan konservasi",
    bestTime: "Menyesuaikan cuaca dan penyeberangan",
  },

  // ==========================================
  // BUKIT DAN PEGUNUNGAN
  // ==========================================

  {
    id: "gunung-rinjani",
    name: "Gunung Rinjani",
    category: "bukit-pegunungan",
    island: "Lombok",
    location: "Lombok Timur dan Lombok Utara, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTye_JMmI7uasWOIi0u7xqDSQjWxBf_kMhZTtXBpmzHyQ&s=10",
    youtube: "https://www.youtube.com/embed/Ajl2FZT77lk?si=CoXx4VUsVssiZW5_",
    description:
      "Gunung Rinjani merupakan gunung berapi yang menjadi ikon wisata alam Lombok. Kawasan ini terkenal dengan jalur pendakian, pemandangan pegunungan, dan Danau Segara Anak.",
    ticket: "Mengikuti tarif resmi pendakian",
    bestTime: "Sesuai musim dan jadwal resmi pendakian",
  },

  {
    id: "bukit-merese",
    name: "Bukit Merese",
    category: "bukit-pegunungan",
    island: "Lombok",
    location: "Mandalika, Lombok Tengah, NTB",
    image:
      "https://images.unsplash.com/photo-1595740802643-4cc5beb11b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    youtube: "https://www.youtube.com/embed/CxwVV_wysns?si=Ldrc7g9iwv2qS4Ze",
    description:
      "Bukit Merese memiliki panorama laut dan hamparan perbukitan yang luas. Tempat ini menjadi salah satu lokasi favorit untuk menikmati matahari terbenam di kawasan Mandalika.",
    ticket: "Estimasi Rp5.000",
    bestTime: "Menjelang matahari terbenam",
  },

  {
    id: "bukit-selong",
    name: "Bukit Selong",
    category: "bukit-pegunungan",
    island: "Lombok",
    location: "Sembalun, Lombok Timur, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAduM81AriMhIZcjP_9a6ltl_i5VOXN2XztSeIZk01A&s=10",
    youtube: "https://www.youtube.com/embed/aUSQVRSCxrw?si=uIi0himzFsMR3vTB",
    description:
      "Bukit Selong menawarkan pemandangan hamparan sawah dan perbukitan di kawasan Sembalun. Dari atas bukit, pengunjung dapat melihat lanskap pertanian dengan latar Gunung Rinjani.",
    ticket: "Estimasi Rp5.000",
    bestTime: "Pagi hari",
  },

  {
    id: "bukit-pergasingan",
    name: "Bukit Pergasingan",
    category: "bukit-pegunungan",
    island: "Lombok",
    location: "Sembalun, Lombok Timur, NTB",
    image:
      "https://trilokalomboktransport.com/wp-content/uploads/2026/11/paket-wisata-Bukit-Pergasingan.jpg",
    youtube: "https://www.youtube.com/embed/ArszDXTJIhY?si=fyoPU1JGIbSh-19h",
    description:
      "Bukit Pergasingan merupakan kawasan perbukitan yang populer untuk trekking dan menikmati pemandangan Sembalun dari ketinggian.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hari",
  },

  {
    id: "sembalun",
    name: "Kawasan Wisata Sembalun",
    category: "bukit-pegunungan",
    island: "Lombok",
    location: "Sembalun, Lombok Timur, NTB",
    image:
      "https://thumb.viva.id/vivabali/665x374/2025/08/31/68b3d5214b2e5-taman-surga-rinjani-sembalun-lombok-timur_bali.jpg",
    youtube: "https://www.youtube.com/embed/mfFtR1NdeI0?si=6my6khF91bBx6JZB",
    description:
      "Sembalun merupakan kawasan dataran tinggi di kaki Gunung Rinjani yang memiliki panorama pegunungan, perkebunan, dan hamparan pertanian.",
    ticket: "Menyesuaikan lokasi wisata",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "gunung-tambora",
    name: "Gunung Tambora",
    category: "bukit-pegunungan",
    island: "Sumbawa",
    location: "Dompu dan Kabupaten Bima, NTB",
    image:
      "https://www.gunungbagging.com/wp-content/NEXTGEN/Tambora/img_0577.jpg",
    youtube: "https://www.youtube.com/embed/KKZCLqnto-Q?si=mV1Kr73juZO09ODN",
    description:
      "Gunung Tambora merupakan gunung berapi bersejarah di Pulau Sumbawa yang terkenal dengan kaldera luas dan peristiwa letusan besar pada tahun 1815.",
    ticket: "Mengikuti ketentuan resmi kawasan",
    bestTime: "Sesuai musim dan izin pendakian",
  },

  {
    id: "bukit-mantar",
    name: "Bukit Mantar",
    category: "bukit-pegunungan",
    island: "Sumbawa",
    location: "Poto Tano, Sumbawa Barat, NTB",
    image:
      "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/sumbawa/bukit-mantar-profile1645694173.png?x-image-process=image/resize,p_100,limit_1/imageslim",
    youtube: "https://www.youtube.com/embed/YCT0g1eC6UY?si=50T6saQtc6FWiuHX",
    description:
      "Bukit Mantar berada di dataran tinggi Sumbawa Barat dan dikenal dengan pemandangan perbukitan, laut, serta panorama alam dari ketinggian.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hari",
  },

  // ==========================================
  // AIR TERJUN
  // ==========================================

  {
    id: "benang-kelambu",
    name: "Air Terjun Benang Kelambu",
    category: "air-terjun",
    island: "Lombok",
    location: "Aik Berik, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_8RteGv8TGjXLBwWnl04NcCu7pQUABPUCI_OpiH89Q&s=10",
    youtube: "https://www.youtube.com/embed/5HT8jUCSa7U?si=d3HOQNtKCWGLHKZ8",
    description:
      "Air Terjun Benang Kelambu memiliki aliran air yang keluar dari sela-sela vegetasi sehingga membentuk tampilan menyerupai tirai alami.",
    ticket: "Mengikuti tarif pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "benang-stokel",
    name: "Air Terjun Benang Stokel",
    category: "air-terjun",
    island: "Lombok",
    location: "Aik Berik, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaI_187kqmte26sbQQzweMfGbvsnlwesL64PmQMoWJdg&s=10",
    youtube: "https://www.youtube.com/embed/z64Tc6L7plk?si=2xjrFf3dfhJ_tjgL",
    description:
      "Air Terjun Benang Stokel memiliki beberapa aliran air yang jatuh dari tebing tinggi. Destinasi ini berada dalam kawasan wisata alam Aik Berik.",
    ticket: "Mengikuti tarif pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "sendang-gile",
    name: "Air Terjun Sendang Gile",
    category: "air-terjun",
    island: "Lombok",
    location: "Senaru, Lombok Utara, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOPBAC0Nb6yNdtKPt6q_v2ZCg7PXwwBuWTYrTVmNkDg&s=10",
    youtube: "https://www.youtube.com/embed/P_QqqHlGu7E?si=eaehs9aXfJXwsKJs",
    description:
      "Air Terjun Sendang Gile berada di kawasan Senaru, di kaki Gunung Rinjani. Airnya mengalir di antara pepohonan dan tebing yang menciptakan suasana sejuk.",
    ticket: "Mengikuti tarif pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "tiu-kelep",
    name: "Air Terjun Tiu Kelep",
    category: "air-terjun",
    island: "Lombok",
    location: "Senaru, Lombok Utara, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaVXlpPXILVNMke0eLfS6n1PnVidNZEv6sKPDkvQ3FA&s=10",
    youtube: "https://www.youtube.com/embed/JRAraeUmWv4?si=JRwBym0qLN2RGbOn",
    description:
      "Air Terjun Tiu Kelep dikenal dengan aliran air yang tinggi dan suasana hutan tropis. Destinasi ini dapat dijangkau melalui jalur trekking di kawasan Senaru.",
    ticket: "Mengikuti tarif pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "mangku-sakti",
    name: "Air Terjun Mangku Sakti",
    category: "air-terjun",
    island: "Lombok",
    location: "Sajang, Sembalun, Lombok Timur, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyHKLaOrZKN_N5IvpC88ULSBBG8WShwYoFMbpFBoLCA&s=10",
    youtube: "https://www.youtube.com/embed/3MSjeoYIRAU?si=TheF1eGTsykSBkhw (",
    description:
      "Air Terjun Mangku Sakti berada di kawasan Sembalun. Air terjun ini memiliki karakter aliran air dan bebatuan yang menjadi daya tarik wisata alam.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "mata-jitu",
    name: "Air Terjun Mata Jitu",
    category: "air-terjun",
    island: "Sumbawa",
    location: "Pulau Moyo, Kabupaten Sumbawa, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ILJHH4nlHl0hVwQZ5G-pQRvoZpLF__pmJ5zhxLSoZw&s=10",
    youtube: "https://www.youtube.com/embed/cBCzwz09hUk?si=buwNfncIYkZfFPuI ",
    description:
      "Air Terjun Mata Jitu merupakan objek wisata alam di Pulau Moyo. Air terjun ini dikenal dengan undakan kolam alami dan suasana hutan yang masih asri.",
    ticket: "Biaya perjalanan dan kunjungan menyesuaikan",
    bestTime: "Pagi hingga siang hari",
  },

  {
    id: "air-terjun-agal",
    name: "Air Terjun Agal",
    category: "air-terjun",
    island: "Sumbawa",
    location: "Kabupaten Sumbawa, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVW3PSAm0TBQTsNSRT0-ZeK5J8IINdiYRKZH26GvTWw&s=10",
    youtube: "https://www.youtube.com/embed/hHpDGGiEcDk?si=7BmfhM-cOH1MOSYp ",
    description:
      "Air Terjun Agal merupakan salah satu tujuan wisata alam di Pulau Sumbawa dengan pemandangan air terjun dan lingkungan alami yang menarik.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga siang hari",
  },

  // ==========================================
  // BUDAYA DAN RELIGI
  // ==========================================

  {
    id: "desa-adat-sade",
    name: "Desa Adat Sade",
    category: "budaya-religi",
    island: "Lombok",
    location: "Rembitan, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-QaciKjPZG5psv9guvp1ACkARlrRFHX6vZwFsU0dIw&s=10",
    youtube: "https://www.youtube.com/embed/5wTU9G02rlc?si=gxNJ1DL7YpRnFUdm",
    description:
      "Desa Adat Sade merupakan permukiman masyarakat Sasak yang mempertahankan rumah tradisional, tradisi lokal, dan kerajinan tenun khas Lombok.",
    ticket: "Donasi sesuai ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "desa-adat-ende",
    name: "Desa Adat Ende",
    category: "budaya-religi",
    island: "Lombok",
    location: "Pujut, Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8JJNruZrNbwkpM41F_fjTwDphDsHCh5tcvMshzYo1Q&s=10",
    youtube: "https://www.youtube.com/embed/3kKYxwJaprQ?si=1dwR9FwdeHvSvbgk",
    description:
      "Desa Adat Ende merupakan salah satu desa wisata budaya masyarakat Sasak. Pengunjung dapat mengenal rumah tradisional, kehidupan masyarakat, dan kebudayaan lokal.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "pura-lingsar",
    name: "Pura Lingsar",
    category: "budaya-religi",
    island: "Lombok",
    location: "Lingsar, Lombok Barat, NTB",
    image:
      "https://cdn-jpr.jawapos.com/images/41/2024/07/26/Pura-Lingsar-Lombok-Gambar-dari-Rostasedlacek-Shutterstock-2487271013.png",
    youtube: "https://www.youtube.com/embed/ktQK-hR_eYo?si=eFk2omlCanPkbAvB",
    description:
      "Pura Lingsar merupakan tempat ibadah bersejarah di Lombok yang mencerminkan keberagaman tradisi dan kehidupan masyarakat setempat.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "islamic-center-mataram",
    name: "Islamic Center Mataram",
    category: "budaya-religi",
    island: "Lombok",
    location: "Kota Mataram, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXVGir9qe9_h2Ey7MsZ9Yg6qpedQYHfe_iKoELFqaNw&s=10",
    youtube: "https://www.youtube.com/embed/qA2lsGsj17E?si=scAiojq9MWN3cwQk",
    description:
      "Islamic Center Mataram merupakan salah satu landmark religi di Kota Mataram. Bangunannya memiliki arsitektur khas dan menjadi salah satu tujuan wisata religi di Lombok.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Menyesuaikan jadwal kunjungan",
  },

  {
    id: "masjid-kuno-bayan",
    name: "Masjid Kuno Bayan Beleq",
    category: "budaya-religi",
    island: "Lombok",
    location: "Bayan, Lombok Utara, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H3e226X3_vXQSnsrq92-mE9oBTVMCGjUBQ8MQYgd6Q&s=10",
    youtube: "https://www.youtube.com/embed/NF0y_Nkp8I4?si=aqZ2nSk-Itfjmubr",
    description:
      "Masjid Kuno Bayan Beleq merupakan peninggalan sejarah Islam di Lombok Utara. Bangunan ini memiliki nilai budaya dan sejarah bagi masyarakat setempat.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Menyesuaikan ketentuan kunjungan",
  },

  {
    id: "desa-marang",
    name: "Desa Wisata Marong",
    category: "budaya-religi",
    island: "Lombok",
    location: "Lombok Tengah, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_VBcPR4-ed50WDXWBb6USVOwk2s4Oi7V6Clxw4NQnMXn4ilKhWmuLSgL&s=10",
    youtube: "https://www.youtube.com/embed/GwUotLZ9a_E?si=iUoMJm7Kx17gcLHU",
    description:
      "Desa wisata di kawasan Lombok Tengah menawarkan pengalaman mengenal kehidupan masyarakat lokal, tradisi, dan kegiatan budaya setempat.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "istana-dalam-loka",
    name: "Istana Dalam Loka",
    category: "budaya-religi",
    island: "Sumbawa",
    location: "Kota Sumbawa Besar, NTB",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9HQa6kzw460JSe8bMt8iHLgXpj12NdeY19n4T-zlVw&s=10",
    youtube: "https://www.youtube.com/embed/P72viYjqoXQ?si=In-f49Gz_gBGXA49",
    description:
      "Istana Dalam Loka merupakan bangunan bersejarah peninggalan Kesultanan Sumbawa. Bangunan kayu tradisional ini menjadi salah satu simbol sejarah dan kebudayaan Sumbawa.",
    ticket: "Mengikuti ketentuan pengelola",
    bestTime: "Pagi hingga sore hari",
  },

  {
    id: "desa-adat-poto",
    name: "Kawasan Budaya Sumbawa",
    category: "budaya-religi",
    island: "Sumbawa",
    location: "Kabupaten Sumbawa, NTB",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200",
    youtube: "https://www.youtube.com/embed/QmoxT7R-Ufo?si=IZv4xKL_Elo82AIC",
    description:
      "Kawasan budaya Sumbawa menyimpan tradisi, kesenian, rumah adat, dan peninggalan sejarah masyarakat Samawa yang menjadi bagian dari identitas budaya Pulau Sumbawa.",
    ticket: "Menyesuaikan lokasi kunjungan",
    bestTime: "Pagi hingga sore hari",
  },

];

/* ==========================================
   FUNGSI NAMA KATEGORI
========================================== */

export function getCategoryName(categoryId) {
  const category = categories.find(
    (item) => item.id === categoryId
  );

  return category ? category.name : "Destinasi Wisata";
}
