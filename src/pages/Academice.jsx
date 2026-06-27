import React, { useState } from "react";
import "./Academic.css";
import { Link, NavLink } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
  FaTrophy,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const features = [
  "Qualified & Experienced Teachers",
  "Smart Classrooms & Learning Resources",
  "Regular Assessments & Mentorship",
  "Discipline with Values & Ethics",
];

const wingData = [
  {
    image: "/assets/images/primary_wing.webp",
    label: "Primary Wing",
    title: "Strong Foundation for Young Minds",
    desc: "Our primary section focuses on joyful learning, basic concepts, language skills, and activity-based education to build a strong base for students.",
  },
  {
    image: "/assets/images/aca_3.webp",
    label: "Middle Wing",
    title: "Concept Clarity & Skill Development",
    desc: "Students are guided with interactive methods, practical learning, and continuous evaluation to strengthen their academic concepts.",
  },
  {
    image: "/assets/images/aca_4.webp",
    label: "Senior Wing",
    title: "Board Preparation & Career Guidance",
    desc: "Senior students receive focused board exam preparation, doubt-clearing sessions, and career guidance to prepare them for higher education.",
  },
];

const featureCards = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    desc: "Dedicated teachers guiding students with care and expertise.",
  },
  {
    icon: <FaBookOpen />,
    title: "Structured Curriculum",
    desc: "Well-planned academic framework aligned with board standards.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Student Mentorship",
    desc: "Personal guidance to improve performance & confidence.",
  },
  {
    icon: <FaTrophy />,
    title: "Academic Excellence",
    desc: "Consistent results & achievements by KGIC students.",
  },
];

const galleryImages = [
  "gallery_1.webp",
  "gallery_2.webp",
  "new_f1.jpg",
  "new_f2.jpg",
  "gallery_5.webp",
  "gallery_6.webp",
];

const Academic = () => {
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
        <h1>Our Academic</h1>

        <p>Academic Excellence at King George School</p>

        {/* <div className="bc">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Academic</span>
        </div> */}
      </div>

      {/* ABOUT ACADEMIC */}
      <section className="sec">
        <div className="wrap">
          <div className="two">
            <div>
              <div className="tag">Our Academic</div>

              <h2 className="t1">
                Academic Excellence <span>at KGS</span>
              </h2>

              <p className="para">
                King George School is committed to holistic education, blending
                academics, discipline, and values to nurture confident learners.
              </p>

              <h3 className="mini-title">A Tradition of Quality Education</h3>

              <p className="para">
                At King George School, we focus on academic excellence through
                structured curriculum, experienced faculty, and student-centric
                teaching methods.
              </p>

              <ul className="checks">
                {features.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <img
              src="/assets/images/traditional.webp"
              className="img-r-lg"
              alt="Academic"
            />
          </div>
        </div>
      </section>

      {/* WING SECTION */}
      <section className="sec bg-g">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Wing Structure</div>

            <h2 className="t1">
              From Foundation <span>to Senior Level</span>
            </h2>
          </div>

          <div className="wing-grid">
            {wingData.map((item, index) => (
              <div className="wing" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="wing-b">
                  <span className="wing-label">{item.label}</span>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="feat-grid">
            {featureCards.map((item, index) => (
              <div className="feat" key={index}>
                {item.icon}

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
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

            <p className="ft-addr">
              <FaMapMarkerAlt />
              GP Bhawan BR Dubey Enclave near Telco , Lucknow
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
                <Link to="/academic">
                  <FaAngleRight />
                  Academic
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
              <FaMapMarkerAlt />
              <span>GP Bhawan BR Dubey Enclave near Telco , Lucknow</span>
            </div>
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
              {galleryImages.map((img, index) => (
                <img key={index} src={`/assets/images/${img}`} alt="" />
              ))}
            </div>

            <h4 className="ft-h mtop">Download</h4>

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

        <div className="ft-bot">
          <p>
            Copyright 2026 KGS. All Rights Reserved | Design & Developed by{" "}
            <a
              href="https://www.globalhorizoninfotech.com/"
              target="_blank"
              rel="noreferrer"
            >
              GHI
            </a>
          </p>

          <div className="socials">
            <a href="/" className="soc">
              <FaFacebookF />
            </a>

            <a href="/" className="soc">
              <FaInstagram />
            </a>

            <a href="/" className="soc">
              <FaTwitter />
            </a>

            <a href="/" className="soc">
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

export default Academic;
