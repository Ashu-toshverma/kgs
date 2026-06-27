import React, { useState } from "react";
import "./Gallery.css";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaTimes,
  FaExpandAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaAngleRight,
  FaBars,
} from "react-icons/fa";

const galleryImages = [
  {
    image: "kgic_gallery2.jpeg",
    category: "event",
  },
  {
    image: "new_one.jpeg",
    category: "event",
  },
  {
    image: "kgic_e3.jpeg",
    category: "event",
  },
  {
    image: "dance_1.webp",
    category: "dance",
  },
  {
    image: "kgic_d5.jpeg",
    category: "dance",
  },
  {
    image: "kgic_gallery8.jpg",
    category: "event",
  },
  {
    image: "new_three.jpeg",
    category: "event",
  },
  {
    image: "new_two.jpeg",
    category: "event",
  },
  {
    image: "new_four.jpeg",
    category: "event",
  },
  {
    image: "1.jpeg",
    category: "event",
  },
  {
    image: "kgic_gallery2.jpeg",
    category: "event",
  },
  {
    image: "kgic_e3.jpeg",
    category: "event",
  },
  {
    image: "kgic_gallery8.jpg",
    category: "event",
  },
  {
    image: "CHR.jpeg",
    category: "event",
  },
  {
    image: "d1.jpeg",
    category: "dance",
  },
  {
    image: "c1.jpeg",
    category: "event",
  },
  {
    image: "c2.jpeg",
    category: "event",
  },
  {
    image: "new_two.jpeg",
    category: "event",
  },
  {
    image: "c2.jpeg",
    category: "event",
  },
  {
    image: "coll.jpeg",
    category: "event",
  },
];

const footerGallery = [
  "gallery_1.webp",
  "gallery_2.webp",
  "new_f1.jpg",
  "new_f2.jpg",
  "gallery_5.webp",
  "gallery_6.webp",
];

const Gallery = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((item) => item.category === filter);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <FaPhone /> +91 9214010108
            </span>
            <span>
              <FaPhone /> +91 9454433180
            </span>
            <span>
              <FaPhone /> +91 8468005089
            </span>

            <span>
              <FaEnvelope />
              kinggeorgeschool01@gmail.com
            </span>

            <span>
              <FaMapMarkerAlt />
              GP Bhawan BR Dubey Enclave near Telco , Lucknow
            </span>
          </div>

          <div className="topbar-right">
            <a
              href="/assets/images/aadmin.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt />
              Admission Form
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link className="nav-logo" to="/">
            <img src="/assets/images/logo_kgic.png" alt="KGIC" />

            <div className="logo-text">
              <div className="name">King George School</div>

              <div className="tagline">
                GP Bhawan BR Dubey Enclave near Telco , Lucknow
              </div>
            </div>
          </Link>

          <ul className="nav-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/academic">Academic</NavLink>
            </li>

            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mob ${mobileMenu ? "show" : ""}`}>
        <button className="mob-close" onClick={() => setMobileMenu(false)}>
          <FaTimes />
        </button>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academic">Academic</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* HERO */}
      <div className="pg-hero">
        <h1>Gallery</h1>

        <p>Our Campus Life — Memories, Moments & Milestones</p>

        {/* <div className="bc">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div> */}
      </div>

      {/* GALLERY */}
      <section className="sec">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Photo Gallery</div>

            <h2 className="t1">
              KGS <span>Gallery</span>
            </h2>
          </div>

          {/* FILTERS */}
          <div className="gal-filter-wrap">
            <button
              className={filter === "all" ? "gfbtn on" : "gfbtn off"}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "event" ? "gfbtn on" : "gfbtn off"}
              onClick={() => setFilter("event")}
            >
              Event
            </button>

            <button
              className={filter === "dance" ? "gfbtn on" : "gfbtn off"}
              onClick={() => setFilter("dance")}
            >
              Dance
            </button>
          </div>

          {/* GRID */}
          <div className="gal-full-grid">
            {filteredImages.map((item, index) => (
              <div className="gfi" key={index}>
                <img src={`/assets/images/${item.image}`} alt="Gallery" />

                <div className="ov">
                  <FaExpandAlt />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="sec enquiry-section">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Admission Enquiry</div>

            <h2 className="t1">
              Enquiry <span>Now</span>
            </h2>

            <p className="sub">
              Share your details and our admission team will contact you
              shortly.
            </p>
          </div>

          <div className="enquiry-wrap">
            <div className="form-card">
              <h3>Enquiry Now</h3>

              <div className="frow">
                <div className="fg">
                  <label>Your Name *</label>

                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="fg">
                  <label>Phone Number *</label>

                  <input type="tel" placeholder="+91 XXXXXXXXXX" />
                </div>
              </div>

              <div className="fg">
                <label>Email Address</label>

                <input type="email" placeholder="email@example.com" />
              </div>

              <div className="frow">
                <div className="fg">
                  <label>Branch</label>

                  <select>
                    <option>Select Branch</option>

                    <option>Chinhat (Head Office)</option>

                    <option>Barabanki</option>

                    <option>Dewa Road</option>
                  </select>
                </div>

                <div className="fg">
                  <label>Class</label>

                  <select>
                    <option>Select Class</option>

                    <option>Nursery / LKG / UKG</option>

                    <option>Class I – V</option>

                    <option>Class VI – VIII</option>

                    <option>Class IX – X</option>

                    <option>Class XI – XII</option>
                  </select>
                </div>
              </div>

              <div className="fg">
                <label>Message</label>

                <textarea placeholder="Write your message here..." />
              </div>

              <button className="btn btn-r full">
                <FaPaperPlane />
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ft">
          <div>
            <img
              src="/assets/images/logo_kgic.png"
              className="ft-logo"
              alt="KGIC"
            />

            <p className="ft-about">
              Over a century, the King George Family has created, supported and
              managed some of the country's finest educational institutions.
            </p>

            <p className="ft-addr">
              <FaMapMarkerAlt />
              Behind Chinhat Cold Storage, Prembagh, Chinhat, Lucknow
            </p>
          </div>

          <div>
            <h4 className="ft-h">Quick Links</h4>

            <ul className="ft-links">
              <li>
                <Link to="/">
                  <FaAngleRight />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <FaAngleRight />
                  About
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  <FaAngleRight />
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <FaAngleRight />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="ft-h">Information</h4>

            <div className="ft-ci">
              <span>
                <FaPhone /> +91 9214010108, <FaPhone /> +91 9454433180,{" "}
                <FaPhone /> +91 8468005089
              </span>
            </div>

            <div className="ft-ci">
              <FaEnvelope />
              <span>kinggeorgeschool01@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="ft-h">Gallery</h4>

            <div className="ft-gal">
              {footerGallery.map((img, index) => (
                <img key={index} src={`/assets/images/${img}`} alt="" />
              ))}
            </div>

            <h4 className="ft-h mt">Download</h4>
          </div>
        </div>

        <div className="ft-bot">
          <p>
            Copyright 2026 KGS. All Rights Reserved | Design & Developed by
            <a
              href="https://www.globalhorizoninfotech.com/"
              target="_blank"
              rel="noreferrer"
            >
              GHI
            </a>
          </p>

          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="soc"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="soc"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="soc"
            >
              <FaTwitter />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="soc"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918707710161"
        target="_blank"
        rel="noreferrer"
        className="wa"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Gallery;
