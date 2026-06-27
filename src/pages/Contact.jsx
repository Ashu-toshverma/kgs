import React, { useState } from "react";
import "./Contact.css";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaPaperPlane,
  FaGlobe,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/academic", label: "Academic" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact Us" },
];

const footerGallery = [
  "gallery_1.webp",
  "gallery_2.webp",
  "new_f1.jpg",
  "new_f2.jpg",
  "gallery_5.webp",
  "gallery_6.webp",
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaTwitter />,
    link: "#",
  },
  {
    icon: <FaYoutube />,
    link: "#",
  },
];

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <span>
              <FaPhone /> +91 81760 01454
            </span>

            <span>
              <FaEnvelope /> kgiclko@gmail.com
            </span>

            <span>
              <FaMapMarkerAlt /> Chinhat · Barabanki · Dewa Road
            </span>
          </div>

          <div className="topbar-right">
            <a href="/assets/images/props.pdf" target="_blank" rel="noreferrer">
              <FaDownload /> Prospectus
            </a>

            <a
              href="/assets/images/aadmin.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt /> Admission Form
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link className="nav-logo" to="/">
            <img src="/assets/images/logo_kgic.png" alt="KGIC Logo" />

            <div className="logo-text">
              <div className="name">King George School</div>

              <div className="tagline">
                Chinhat · Barabanki · Dewa Road, Lucknow
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

            <li>
              <a
                href="/assets/images/props.pdf"
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
              >
                <FaDownload />
                Prospectus
              </a>
            </li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mob ${menuOpen ? "show" : ""}`}>
        <button className="mob-close" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academic">Academic</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>

        <a
          href="/assets/images/props.pdf"
          target="_blank"
          rel="noreferrer"
          className="mob-prospectus"
        >
          ⬇️ Download Prospectus
        </a>
      </div>

      {/* HERO */}
      <div className="pg-hero">
        <h1>Contact Us</h1>

        <p>King George School Contact Information</p>

        {/* <div className="bc">
          <Link to="/">Home</Link>

          <span>/</span>

          <span>Contact Us</span>
        </div> */}
      </div>

      {/* BRANCH SECTION */}
      <section className="sec">
        {/* CONTACT GRID */}
        <div className="contact-grid">
          <div>
            <div className="tag">Get In Touch</div>

            <h2 className="t1" style={{ marginBottom: "26px" }}>
              Contact <span>Information</span>
            </h2>

            <div className="c-item">
              <div className="c-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Head Office</h4>

                <p>1, Prembagh, Matiyari, Chinhat, Lucknow, UP 226028</p>
              </div>
            </div>

            <div className="c-item">
              <div className="c-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Barabanki Branch</h4>

                <p>2, Raj Kamal Cinema Hall Road, Kamaria Bagh, Barabanki</p>
              </div>
            </div>

            <div className="c-item">
              <div className="c-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Dewa Road Branch</h4>

                <p>3, B.R. Dubey Enclave, Dewa Road, Lucknow</p>
              </div>
            </div>

            <div className="c-item">
              <div className="c-icon">
                <FaPhone />
              </div>

              <div>
                <h4>Admission Contact</h4>

                <p>
                  +91 81760 01454
                  <br />
                  +91 81760 01455
                  <br />
                  +91 81760 01456
                </p>
              </div>
            </div>

            <div className="c-item">
              <div className="c-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>

                <p>kgiclko@gmail.com</p>
              </div>
            </div>

            <div className="c-item">
              <div className="c-icon">
                <FaGlobe />
              </div>

              <div>
                <h4>Website</h4>

                <p>www.kgicschool.org.in</p>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/assets/images/props.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-r"
                style={{
                  fontSize: "13px",
                  padding: "10px 18px",
                }}
              >
                <FaFileAlt /> Download Prospectus
              </a>

              <a
                href="/assets/images/aadmin.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-y"
                style={{
                  fontSize: "13px",
                  padding: "10px 18px",
                  color: "var(--black)",
                }}
              >
                <FaFileAlt /> Admission Form
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="form-card">
            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                marginBottom: "22px",
                color: "var(--black)",
              }}
            >
              Enquiry Now
            </h3>

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

            <button
              className="btn btn-r"
              style={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <FaPaperPlane />
              Submit Enquiry
            </button>
          </div>
        </div>

        {/* MAP */}
        <div className="kgic-map">
          <iframe
            title="King George School Location"
            src="https://maps.google.com/maps?q=King%20George%20Inter%20College%20Prembagh%20Chinhat%20Lucknow%20226028&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
              <FaMapMarkerAlt
                style={{
                  color: "var(--sky)",
                  marginRight: "6px",
                }}
              />
              Behind Chinhat Cold Storage, Prembagh, Chinhat, Lucknow, UP 226028
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="ft-h">Quick Links</h4>

            <ul className="ft-links">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                    <FaAngleRight />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h4 className="ft-h">Information</h4>

            <div className="ft-ci">
              <FaMapMarkerAlt />
              <span>
                Behind Chinhat Cold Storage, Prembagh, Chinhat, Lucknow 226028
              </span>
            </div>

            <div className="ft-ci">
              <FaPhone />
              <span>+91 81760 01454</span>
            </div>

            <div className="ft-ci">
              <FaPhone />
              <span>+91 81760 01455</span>
            </div>

            <div className="ft-ci">
              <FaPhone />
              <span>+91 81760 01456</span>
            </div>

            <div className="ft-ci">
              <FaEnvelope />
              <span>kgiclko@gmail.com</span>
            </div>
          </div>

          {/* GALLERY */}
          <div>
            <h4 className="ft-h">Gallery</h4>

            <div className="ft-gal">
              {footerGallery.map((img, index) => (
                <img
                  key={index}
                  src={`/assets/images/${img}`}
                  alt={`Gallery ${index + 1}`}
                />
              ))}
            </div>

            <h4 className="ft-h" style={{ marginTop: "18px" }}>
              Download
            </h4>

            <div className="ft-ci">
              <FaFileAlt />

              <a
                href="/assets/images/props.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Prospectus
              </a>
            </div>

            <div className="ft-ci">
              <FaFileAlt />

              <a
                href="/assets/images/aadmin.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Admission Form
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="ft-bot">
          <p>
            Copyright 2026 KGS. All Rights Reserved. | Design & Developed by{" "}
            <a
              href="https://www.globalhorizoninfotech.com/"
              target="_blank"
              rel="noreferrer"
            >
              GHI
            </a>
          </p>

          <div className="socials">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="soc"
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918176001454"
        target="_blank"
        rel="noreferrer"
        className="wa"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Contact;
