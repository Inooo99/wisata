
import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import {
  MapPinned,
  MapPin,
  Search,
  Menu,
  X,
  Instagram,
  Facebook,
  Mail,
  Clock3,
  Ticket,
  Compass,
  ShieldCheck,
  Globe,
  Send,
} from "lucide-react";

import {
  categories,
  destinations,
  getCategoryName,
} from "./data/destinations.js";

const CONTACT_EMAIL = "info@jelajah.id";
const CONTACT_LOCATION = "Nusa Tenggara Barat, Indonesia";

const heroImages = [
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=2000",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000",
  "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=2000",
];

const categorySlides = {
  pantai: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=2000",
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=2000",
  ],
  "bukit-pegunungan": [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000",
  ],
  "air-terjun": [
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=2000",
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=2000",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=2000",
  ],
  "budaya-religi": [
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=2000",
    "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=2000",
    "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=2000",
  ],
  all: [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=2000",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=2000",
  ],
};

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="JELAJAH Beranda">
      <span className="brand-mark">J</span>
      <span className="brand-copy">
        <span className="brand-name">JELAJAH</span>
        <span className="brand-subtitle">LOMBOK • SUMBAWA • DOMPU • BIMA</span>
      </span>
    </Link>
  );
}

/* NAVBAR */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <Brand />

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Buka atau tutup menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={closeMenus}>Beranda</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown("profil")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/profil" onClick={closeMenus}>
              Profil
            </Link>

            <div className="nav-preview profile-preview">
              <div className="preview-images">
                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500"
                  alt="Air terjun"
                />
                <img
                  src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500"
                  alt="Wisata budaya"
                />
                <img
                  src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=500"
                  alt="Bangunan wisata"
                />
                <span>Profil JELAJAH</span>
              </div>

              <div className="preview-content">
                <div className="preview-brand">
                  <span className="brand-mark">J.</span>
                </div>
                <div>
                  <strong>JELAJAH NTB</strong>
                  <p>
                    Informasi wisata Lombok, Gili, dan Pulau Sumbawa.
                  </p>
                  <Link to="/profil" onClick={closeMenus}>
                    Selengkapnya
                  </Link>
                </div>
              </div>

              <Link
                to="/profil"
                className="preview-footer"
                onClick={closeMenus}
              >
                Tentang JELAJAH
              </Link>
            </div>
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown("kategori")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/kategori" onClick={closeMenus}>
              Kategori
            </Link>

            <div className="nav-preview category-preview">
              <div className="category-preview-title">
                <span className="eyebrow">JELAJAHI NTB</span>
                <strong>Pilih kategori wisata</strong>
              </div>

              <div className="category-preview-list">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/kategori/${category.id}`}
                    onClick={closeMenus}
                  >
                    <img src={category.image} alt={category.name} />
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/kontak" onClick={closeMenus}>Kontak</Link>

          <Link
            to="/destinasi"
            className="nav-contact-button"
            onClick={closeMenus}
          >
            Jelajahi
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* PENCARIAN */

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/destinasi?search=${encodeURIComponent(keyword.trim())}`);
  }

  return (
    <form className="hero-search" onSubmit={handleSubmit}>
      <Search size={20} />
      <input
        type="search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Cari destinasi wisata..."
      />
      <button type="submit">Cari Destinasi</button>
    </form>
  );
}

/* KARTU DESTINASI */

function DestinationCard({ item }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      to={`/wisata/${item.id}`}
      className="destination-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="destination-image">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.video && (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="none"
            className="destination-video"
          />
        )}
        <span className="destination-category">
          {getCategoryName(item.category)}
        </span>
      </div>

      <div className="destination-caption">
        <h3>{item.name}</h3>
        <p><MapPin size={14} /> {item.location}</p>
      </div>
    </Link>
  );
}

function CategoryCard({ category }) {
  const total = destinations.filter(
    (item) => item.category === category.id
  ).length;

  return (
    <Link to={`/kategori/${category.id}`} className="category-card">
      <img src={category.image} alt={category.name} loading="lazy" />
      <div className="category-overlay" />
      <div className="category-caption">
        <h3>{category.name}</h3>
        <span>{total} destinasi</span>
      </div>
    </Link>
  );
}

/* FOOTER */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <Brand />
          <p>
            JELAJAH membantu kamu menemukan destinasi wisata
            menarik di Lombok, Kepulauan Gili, dan Pulau Sumbawa.
          </p>
        </div>

        <div className="footer-menu">
          <h4>Jelajahi</h4>
          <Link to="/">Beranda</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/kategori">Kategori</Link>
          <Link to="/destinasi">Semua Destinasi</Link>
        </div>

        <div className="footer-menu">
          <h4>Kategori</h4>
          {categories.map((category) => (
            <Link key={category.id} to={`/kategori/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div>

        <div className="footer-menu">
          <h4>Hubungi Kami</h4>
          <Link to="/kontak"><Mail size={16} /> Kontak JELAJAH</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Mail size={16} /> {CONTACT_EMAIL}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} JELAJAH. Hak cipta dilindungi.</span>
        <span>Jelajahi keindahan NTB.</span>
      </div>
    </footer>
  );
}

/* BERANDA */

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${activeSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-kicker">
            <span className="hero-kicker-line" />
            JELAJAH NUSA TENGGARA BARAT
          </span>

          <h1>
            EXPLORE<br />
            <em>THE WORLD.</em>
          </h1>

          <p>
            Temukan tempat menarik dan pengalaman perjalanan
            yang tak terlupakan.
          </p>

          <SearchForm />
        </div>

        <div className="hero-bottom">
          <span>{String(activeSlide + 1).padStart(2, "0")} / 03</span>

          <div className="hero-dots">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={activeSlide === index ? "dot active-dot" : "dot"}
                onClick={() => setActiveSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <span>LOMBOK • SUMBAWA • DOMPU • BIMA</span>
        </div>
      </section>

      <section className="quick-info section-wrap">
        <Link to="/destinasi" className="quick-info-item quick-info-link">
          <div className="quick-icon"><MapPinned /></div>
          <div>
            <strong>{destinations.length}+</strong>
            <span>Destinasi pilihan</span>
          </div>
        </Link>

        <Link to="/kategori" className="quick-info-item quick-info-link">
          <div className="quick-icon"><Compass /></div>
          <div>
            <strong>{categories.length}</strong>
            <span>Kategori wisata</span>
          </div>
        </Link>

        <Link to="/destinasi" className="quick-info-item quick-info-link">
          <div className="quick-icon"><ShieldCheck /></div>
          <div>
            <strong>NTB</strong>
            <span>Lombok, Gili &amp; Sumbawa</span>
          </div>
        </Link>
      </section>

      <section className="destination-section section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DESTINASI WISATA</span>
            <h2>Jelajahi <em>NTB.</em></h2>
            <p>
              Temukan pantai, pegunungan, air terjun, dan wisata budaya
              di Lombok, Gili, dan Sumbawa.
            </p>
          </div>

          <Link to="/destinasi" className="section-link">
            Lihat semua destinasi
          </Link>
        </div>

        <div className="destination-grid">
          {destinations.slice(0, 4).map((item) => (
            <DestinationCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="category-section">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TEMUKAN PILIHANMU</span>
              <h2>Kategori <em>Wisata.</em></h2>
              <p>Pilih jenis perjalanan yang ingin kamu jelajahi.</p>
            </div>

            <Link to="/kategori" className="section-link">
              Semua kategori
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="travel-cta">
        <div className="travel-cta-image" />
        <div className="travel-cta-overlay" />

        <div className="travel-cta-content">
          <span className="eyebrow">WAKTUNYA MENJELAJAH</span>
          <h2>
            Mulailah perjalanan<br />
            yang <em>tak terlupakan.</em>
          </h2>
          <p>Temukan keindahan tersembunyi di Nusa Tenggara Barat.</p>

          <Link to="/destinasi" className="cta-button">
            Mulai Jelajahi
          </Link>
        </div>
      </section>
    </main>
  );
}

/* PROFIL */

function Profile() {
  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="profile-hero-image">
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=2000"
            alt="Panorama Nusa Tenggara Barat"
          />
          <div className="profile-hero-overlay" />
        </div>

        <div className="profile-hero-content">
          <span className="eyebrow">TENTANG KAMI</span>
          <h1>Mengenal <em>JELAJAH.</em></h1>
          <p>
            Menemukan keindahan Lombok, Gili, dan Pulau Sumbawa
            dalam satu perjalanan.
          </p>
        </div>
      </section>

      <section className="profile-content section-wrap">
        <div className="profile-intro">
          <div className="profile-symbol">J.</div>

          <div>
            <span className="eyebrow">JELAJAH NUSA TENGGARA BARAT</span>
            <h2>Jelajahi lebih dekat.</h2>
            <p>
              JELAJAH merupakan platform informasi wisata yang
              menyajikan referensi destinasi di Provinsi Nusa Tenggara
              Barat. Kami menghadirkan informasi tempat wisata,
              gambaran lokasi, dan kategori perjalanan untuk membantu
              pengunjung merencanakan perjalanan.
            </p>
          </div>
        </div>

        <div className="profile-values">
          <article>
            <MapPinned size={25} />
            <h3>Informasi Destinasi</h3>
            <p>Mengenalkan berbagai tempat wisata di Lombok, Gili, dan Sumbawa.</p>
          </article>

          <article>
            <Compass size={25} />
            <h3>Referensi Perjalanan</h3>
            <p>Membantu pengunjung menemukan pilihan wisata berdasarkan kategori.</p>
          </article>

          <article>
            <ShieldCheck size={25} />
            <h3>Jelajah Lokal</h3>
            <p>Berfokus pada potensi alam dan budaya Nusa Tenggara Barat.</p>
          </article>
        </div>

        <div className="profile-gallery">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900" alt="Pantai" />
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900" alt="Pegunungan" />
          <img src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900" alt="Air terjun" />
        </div>

        <div className="profile-cta">
          <h2>Siap menjelajahi NTB?</h2>
          <Link to="/destinasi" className="cta-button">
            Lihat Destinasi
          </Link>
        </div>
      </section>
    </main>
  );
}

/* HALAMAN KATEGORI */

function CategoryIndex() {
  return (
    <main className="category-page">
      <section className="category-page-hero">
        <div className="category-page-hero-overlay" />

        <div className="category-page-hero-content">
          <span className="eyebrow">JELAJAH NUSA TENGGARA BARAT</span>
          <h1>Kategori <em>Wisata.</em></h1>
          <p>
            Temukan destinasi berdasarkan jenis wisata yang ingin kamu kunjungi.
          </p>
        </div>
      </section>

      <section className="category-page-content section-wrap">
        {categories.map((category) => {
          const items = destinations.filter(
            (item) => item.category === category.id
          );

          return (
            <section className="category-group" key={category.id}>
              <div className="category-group-heading">
                <div>
                  <span className="eyebrow">KATEGORI WISATA</span>
                  <h2>{category.name}</h2>
                  <p>{items.length} destinasi</p>
                </div>

                <Link to={`/kategori/${category.id}`} className="section-link">
                  Lihat kategori
                </Link>
              </div>

              {items.length ? (
                <div className="destination-grid">
                  {items.map((item) => (
                    <DestinationCard item={item} key={item.id} />
                  ))}
                </div>
              ) : (
                <div className="empty-state category-empty">
                  Belum ada destinasi pada kategori ini.
                </div>
              )}
            </section>
          );
        })}
      </section>
    </main>
  );
}

/* DAFTAR DESTINASI */

function Listing({ categoryOnly = false }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [activeSlide, setActiveSlide] = useState(0);

  const category = categories.find((item) => item.id === slug);
  const title = categoryOnly ? category?.name : "Semua Destinasi";
  const slides = categorySlides[categoryOnly ? slug : "all"] || categorySlides.all;

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  useEffect(() => {
    setActiveSlide(0);

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slug, categoryOnly, slides.length]);

  const filtered = destinations.filter((item) => {
    const matchesCategory = !categoryOnly || item.category === slug;
    const keyword = search.toLowerCase().trim();

    const matchesSearch =
      item.name.toLowerCase().includes(keyword) ||
      item.location.toLowerCase().includes(keyword) ||
      item.island.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  if (categoryOnly && !category) {
    return (
      <main className="not-found">
        <h2>Kategori tidak ditemukan.</h2>
        <Link to="/kategori">Lihat semua kategori</Link>
      </main>
    );
  }

  return (
    <main className="listing-page">
      <section className="listing-hero">
        {slides.map((image, index) => (
          <div
            key={`${slug || "all"}-${index}`}
            className={`listing-hero-slide ${activeSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}

        <div className="listing-hero-overlay" />

        <div className="listing-hero-content">
          <span className="listing-hero-kicker">
            <span className="listing-kicker-line" />
            JELAJAH NUSA TENGGARA BARAT
          </span>

          <h1>{title}<em>.</em></h1>
          <p>{filtered.length} destinasi ditemukan</p>
        </div>

        <div className="listing-hero-bottom">
          <span>{String(activeSlide + 1).padStart(2, "0")} / 03</span>

          <div className="listing-hero-dots">
            {slides.map((image, index) => (
              <button
                key={image}
                type="button"
                className={activeSlide === index ? "listing-dot active" : "listing-dot"}
                onClick={() => setActiveSlide(index)}
                aria-label={`Lihat slide ${index + 1}`}
              />
            ))}
          </div>

          <span>LOMBOK • SUMBAWA • DOMPU • BIMA</span>
        </div>
      </section>

      <section className="listing-content">
        <div className="listing-tools">
          <div className="search-box">
            <Search size={18} />
            <input
              type="search"
              placeholder="Cari nama tempat atau lokasi..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="clear-filter"
            onClick={() => navigate(categoryOnly ? "/kategori" : "/destinasi")}
          >
            {categoryOnly ? "Semua kategori" : "Lihat kategori"}
          </button>
        </div>

        {filtered.length ? (
          <div className="destination-grid catalog-grid">
            {filtered.map((item) => (
              <DestinationCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Destinasi tidak ditemukan.</h3>
            <p>Coba kata kunci yang berbeda.</p>
          </div>
        )}
      </section>
    </main>
  );
}

/* KONTAK */

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.subject || "Pesan dari pengunjung JELAJAH"
    );

    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-image" />
        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <span className="eyebrow">HUBUNGI KAMI</span>
          <h1>Kontak <em>JELAJAH.</em></h1>
          <p>
            Ada pertanyaan atau ingin berbagi informasi wisata?
            Hubungi kami melalui kontak berikut.
          </p>
        </div>
      </section>

      <section className="contact-content section-wrap">
        <div className="contact-heading">
          <span className="eyebrow">KAMI SIAP MEMBANTU</span>
          <h2>Terhubung dengan kami.</h2>
          <p>
            Silakan gunakan informasi kontak atau kirim pesan melalui formulir berikut.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-information">
            <article className="contact-card">
              <div className="contact-icon"><Mail /></div>
              <div>
                <span>Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </article>

            <article className="contact-card">
              <div className="contact-icon"><MapPin /></div>
              <div>
                <span>Wilayah</span>
                <strong>{CONTACT_LOCATION}</strong>
              </div>
            </article>

            <article className="contact-card">
              <div className="contact-icon"><Globe /></div>
              <div>
                <span>Website</span>
                <strong>JELAJAH — Informasi Wisata NTB</strong>
              </div>
            </article>

            <div className="contact-social">
              <h3>Ikuti JELAJAH</h3>
              <div>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"><Mail /></a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Kirim Pesan</h3>
            <p>Isi formulir berikut untuk menghubungi JELAJAH.</p>

            <label htmlFor="contact-name">Nama</label>
            <input
              id="contact-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama kamu"
              required
            />

            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
            />

            <label htmlFor="contact-subject">Subjek</label>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subjek pesan"
              required
            />

            <label htmlFor="contact-message">Pesan</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tuliskan pesan kamu..."
              required
            />

            <button type="submit" className="contact-submit">
              Kirim melalui Email <Send size={16} />
            </button>

            <small>
              Tombol ini akan membuka aplikasi email pada perangkat kamu.
            </small>
          </form>
        </div>
      </section>
    </main>
  );
}

/* DETAIL DESTINASI */

function Detail() {
  const { id } = useParams();
  const item = destinations.find((destination) => destination.id === id);

  if (!item) {
    return (
      <main className="not-found">
        <h2>Destinasi tidak ditemukan.</h2>
        <Link to="/destinasi">Kembali ke destinasi</Link>
      </main>
    );
  }

  const mapsQuery = `${item.name}, ${item.location}`;
  const mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  const embedUrl =
    `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

  return (
    <main className="detail-page">
      <div className="detail-cover">
        <img src={item.image} alt={item.name} />
        <div className="detail-cover-overlay" />

        <div className="detail-cover-content">
          <span>{getCategoryName(item.category)}</span>
          <h1>{item.name}</h1>
          <p><MapPin size={16} /> {item.location}</p>
        </div>
      </div>

      <div className="detail-container">
        <section className="detail-main">
          <div className="detail-description">
            <span className="eyebrow">TENTANG DESTINASI</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>

          <div className="detail-info-grid">
            <div className="info-item">
              <Ticket size={22} />
              <div>
                <span>Harga tiket</span>
                <strong>{item.ticket}</strong>
              </div>
            </div>

            <div className="info-item">
              <Clock3 size={22} />
              <div>
                <span>Waktu kunjungan</span>
                <strong>{item.bestTime}</strong>
              </div>
            </div>
          </div>

          <section className="location-section">
            <span className="eyebrow">LOKASI</span>
            <h2>Temukan Lokasinya.</h2>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-preview"
            >
              <iframe
                title={`Peta ${item.name}`}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="-1"
              />

              <div className="map-preview-overlay">
                <div className="map-preview-label">
                  <MapPinned size={30} />
                  <span>{item.name}</span>
                  <small>{item.location}</small>
                  <strong>Buka Google Maps</strong>
                </div>
              </div>
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}

/* ROUTING */

function AppContent() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/kategori" element={<CategoryIndex />} />
        <Route path="/kategori/:slug" element={<Listing categoryOnly />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/destinasi" element={<Listing />} />
        <Route path="/wisata/:id" element={<Detail />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
