import React, { useState } from "react";
import "./About.css";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaBus,
  FaUserShield,
  FaShieldAlt,
  FaRoute,
  FaExpandAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const galleryImages = [
  "kgic_gallery4.jpeg",
  "kgic_e5.jpeg",
  "kgic_gallery8.jpg",
  "kgic_gallery3.jpeg",
  "kgic_gallery2.jpeg",
];

const features = [
  "Qualified & Experienced Teachers",
  "Smart Classrooms & Learning Resources",
  "Regular Assessments & Mentorship",
  "Discipline with Values & Ethics",
];

const transportFeatures = [
  {
    icon: <FaBus />,
    text: "Well-maintained school buses",
  },
  {
    icon: <FaUserShield />,
    text: "Experienced and trained drivers",
  },
  {
    icon: <FaShieldAlt />,
    text: "Safety of students is our top priority",
  },
  {
    icon: <FaRoute />,
    text: "Fixed routes and timings",
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/groups/224215619157129/?ref=share_group_link&rdid=tarfVPzDpkjCdQ4o&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F18kz3qNvqd%2F%3Fref%3D1#",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/king_george___school?igsh=eWdoOG5yYm00b20y",
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

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/academic", label: "Academic" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact Us" },
];

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
              <FaEnvelope /> kinggeorgeschool01@gmail.com
            </span>

            <span>
              <FaMapMarkerAlt /> GP Bhawan BR Dubey Enclave near Telco , Lucknow
            </span>
          </div>

          <div className="topbar-right">
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
      </div>

      {/* HERO */}
      <div className="pg-hero">
        <h1>About KGS</h1>

        <p>
          King George School — Quality Education, Strong Values, Holistic Growth
        </p>
      </div>

      {/* ABOUT */}
      <section className="sec">
        <div className="wrap two">
          <div className="about-img-wrap">
            <img
              src="/assets/images/kgic_e5.jpeg"
              className="img-r-lg"
              alt="About KGS"
            />

            <div className="about-badge">
              <div className="bn">5+</div>

              <div className="bt">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </div>

          <div>
            <div className="tag">Who We Are</div>

            <h2 className="t1">
              King George <span>School</span>
            </h2>

            <p>
              King George School is dedicated to providing quality education,
              strong values, and a nurturing environment that supports students'
              academic and personal growth.
            </p>

            <div className="mission-box">
              <div className="m-card b1">
                <img src="/assets/images/32.jpg" alt="Mission" />

                <div>
                  <h4>Our Mission</h4>

                  <p>Strong academic foundation & excellence in every field.</p>
                </div>
              </div>

              <div className="m-card b2">
                <img src="/assets/images/33.jpg" alt="Commitment" />

                <div>
                  <h4>Our Commitment</h4>

                  <p>Holistic growth through values, discipline & care.</p>
                </div>
              </div>
            </div>

            <ul className="checks">
              {features.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="sec bg-g">
        <div className="wrap two">
          <div>
            <div className="tag">Transport Facility</div>

            <h2 className="t1">
              Safe & Comfortable <span>Transport</span>
            </h2>

            <ul className="tp-list">
              {transportFeatures.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/assets/images/transport_1.png"
            className="img-r-lg"
            alt="Transport"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="sec bg-s">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Gallery</div>

            <h2 className="t1">
              Our Campus
              <span> Life Showcase</span>
            </h2>
          </div>

          <div className="gal-home">
            {galleryImages.map((img, index) => (
              <div className="gi-wrap" key={index}>
                <img
                  src={`/assets/images/${img}`}
                  alt={`Gallery ${index + 1}`}
                />

                <div className="gi-ov">
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
          </div>

          <div>
            <h4 className="ft-h">Quick Links</h4>

            <ul className="ft-links">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
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
            <h4 className="ft-h">Social</h4>

            <div className="socials">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="soc"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ft-bot">
          <p>Copyright 2026 KGS. All Rights Reserved.</p>
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

export default About;
