import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaUsers,
  FaBus,
  FaShieldAlt,
  FaClock,
  FaMedal,
  FaTrophy,
  FaStar,
  FaFlask,
  FaBook,
  FaDesktop,
  FaInfoCircle,
  FaArrowRight,
  FaCheckCircle,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPaperPlane,
  FaImages,
} from "react-icons/fa";

const slides = [
  {
    image: "/assets/images/KGIC_TELCO.webp",
    title: "Welcome to",
    highlight: "King George",
    subtitle: "Inter College",
    desc: "Discover excellence through quality education, strong values, and a nurturing environment that supports students' academic and personal growth.",
    badges: [
      { icon: <FaGraduationCap />, text: "Est. 1921" },
      { icon: <FaUsers />, text: "500+ Students" },
      //   { icon: <FaMapMarkerAlt />, text: "3 Campuses" },
    ],
  },
  {
    image: "/assets/images/bus.jpg",
    title: "Safe Daily",
    highlight: "Commute",
    subtitle: "",
    desc: "Our dedicated school buses ensure safe and comfortable transportation for all students.",
    badges: [
      { icon: <FaBus />, text: "School Buses" },
      { icon: <FaShieldAlt />, text: "Safety First" },
      { icon: <FaClock />, text: "On Time" },
    ],
  },
  {
    image: "/assets/images/sports.webp",
    title: "Excellence in",
    highlight: "Sports & Events",
    subtitle: "",
    desc: "Students participate in state and national competitions with outstanding achievements.",
    badges: [
      { icon: <FaMedal />, text: "100+ Medals" },
      { icon: <FaTrophy />, text: "Champions" },
      { icon: <FaStar />, text: "Excellence" },
    ],
  },
  {
    image: "/assets/images/teacher.webp",
    title: "World-Class",
    highlight: "Academic",
    subtitle: "Excellence",
    desc: "Modern laboratories, digital classrooms, and expert faculty for academic success.",
    badges: [
      { icon: <FaFlask />, text: "Advanced Labs" },
      { icon: <FaBook />, text: "Rich Library" },
      { icon: <FaDesktop />, text: "Smart Classes" },
    ],
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
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
            <img src="/assets/images/logo_kgic.png" alt="KGIC" />

            <div className="logo-text">
              <div className="name">King George Inter College</div>

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

      {/* HERO CAROUSEL */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              currentSlide === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="carousel-content">
              <h1>
                {slide.title} <span>{slide.highlight}</span> {slide.subtitle}
              </h1>

              <p>{slide.desc}</p>

              <div className="carousel-badges">
                {slide.badges.map((badge, i) => (
                  <span className="carousel-badge" key={i}>
                    {badge.icon}
                    {badge.text}
                  </span>
                ))}
              </div>

              <div className="carousel-btns">
                <Link
                  to="/contact"
                  className="carousel-btn carousel-btn-primary"
                >
                  <FaGraduationCap />
                  Admissions Open
                </Link>

                <Link
                  to="/about"
                  className="carousel-btn carousel-btn-secondary"
                >
                  <FaInfoCircle />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-nav carousel-nav-prev" onClick={prevSlide}>
          ❮
        </button>

        <button className="carousel-nav carousel-nav-next" onClick={nextSlide}>
          ❯
        </button>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="carousel-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="strip">
        <div className="strip-in">
          {/* <div className="stat">
            <div className="stat-n">3</div>
            <div className="stat-l">Campuses</div>
          </div> */}

          <div className="stat">
            <div className="stat-n">500+</div>
            <div className="stat-l">Happy Students</div>
          </div>

          <div className="stat">
            <div className="stat-n">20+</div>
            <div className="stat-l">Expert Faculty</div>
          </div>

          <div className="stat">
            <div className="stat-n">100%</div>
            <div className="stat-l">Committed Results</div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="sec">
        <div className="wrap">
          <div className="two">
            <div className="about-img-wrap">
              <img
                src="/assets/images/kgic_about.png"
                className="img-r-lg"
                alt="About"
              />
            </div>

            <div>
              <div className="tag">About Us</div>

              <h2 className="t1">
                Discover Excellence, Shaping <span>Young Minds</span>
              </h2>

              <p className="para">
                King George Inter College is dedicated to providing quality
                education, strong values, and a nurturing environment.
              </p>

              <ul className="checks">
                <li>
                  <FaCheckCircle />
                  Qualified Teachers
                </li>

                <li>
                  <FaCheckCircle />
                  Smart Classrooms
                </li>

                {/* <li>
                  <FaCheckCircle />3 Campuses
                </li> */}

                <li>
                  <FaCheckCircle />
                  Discipline & Ethics
                </li>
              </ul>

              <Link to="/about" className="btn btn-r">
                <FaArrowRight />
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-g">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">What We Do</div>

            <h2 className="t1">
              Our <span>Programs</span>
            </h2>

            <p className="sub">
              Our academic programs focus on quality education, discipline, and
              overall development to help students build a strong future.
            </p>
          </div>

          <div className="four">
            <div className="card">
              <img src="/assets/images/prog_1.webp" alt="Academic Excellence" />

              <div className="card-body">
                <h3 className="c-t">Academic Excellence</h3>

                <p className="c-p">
                  We provide strong academic foundations with experienced
                  teachers and a structured curriculum for better results.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="/assets/images/prog_2.avif" alt="Sports & Activities" />

              <div className="card-body">
                <h3 className="c-t">Sports & Activities</h3>

                <p className="c-p">
                  We encourage sports, cultural programs, and creative
                  activities to build confidence and teamwork.
                </p>
              </div>
            </div>

            <div className="card">
              <img src="/assets/images/prog_3.avif" alt="Student Development" />

              <div className="card-body">
                <h3 className="c-t">Student Development</h3>

                <p className="c-p">
                  We focus on discipline, values, and personality development to
                  prepare students for future challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Our Services</div>

            <h2 className="t1">
              Best Learning, Care & <span>Growth</span>
            </h2>
          </div>

          <div className="four services-grid">
            <div className="srv">
              <img src="/assets/images/kgic_gallery3.jpeg" alt="" />

              <div className="srv-b">
                <h4>Student Care & Guidance</h4>

                <p>
                  Proper care, guidance, and mentoring by teachers for students'
                  overall growth.
                </p>
              </div>
            </div>

            <div className="srv">
              <img src="/assets/images/kgic_e5.jpeg" alt="" />

              <div className="srv-b">
                <h4>Health & Hygiene Programs</h4>

                <p>
                  Regular health check-ups, cleanliness awareness, and healthy
                  habits for students.
                </p>
              </div>
            </div>

            <div className="srv">
              <img src="/assets/images/gallery_1.webp" alt="" />

              <div className="srv-b">
                <h4>Inclusive Learning Environment</h4>

                <p>
                  Equal opportunities for all students in a supportive and
                  respectful learning culture.
                </p>
              </div>
            </div>

            <div className="srv">
              <img src="/assets/images/prog_2.avif" alt="" />

              <div className="srv-b">
                <h4>Sports & Physical Activities</h4>

                <p>
                  Annual sports day, physical training classes, games, and
                  fitness activities.
                </p>
              </div>
            </div>

            <div className="srv">
              <img src="/assets/images/new_f2.jpg" alt="" />

              <div className="srv-b">
                <h4>Nutrition Awareness Programs</h4>

                <p>
                  Promoting healthy eating habits and student wellness programs.
                </p>
              </div>
            </div>

            <div className="srv">
              <img src="/assets/images/annual.webp" alt="" />

              <div className="srv-b">
                <h4>Social & Cultural Activities</h4>

                <p>
                  Cultural programs, group activities, and leadership
                  development for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY HOME */}
      <section className="sec">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Gallery</div>

            <h2 className="t1">
              Our Campus <span>Life Showcase</span>
            </h2>

            <p className="sub">
              Our journey of learning, activities and achievements at King
              George Inter College.
            </p>
          </div>

          <div className="gal-home">
            <div className="gi-wrap wide">
              <img src="/assets/images/kgic_gallery4.jpeg" alt="" />

              <div className="gi-ov">
                <FaImages />
              </div>
            </div>

            <div className="gi-wrap">
              <img src="/assets/images/kgic_e5.jpeg" alt="" />

              <div className="gi-ov">
                <FaImages />
              </div>
            </div>

            <div className="gi-wrap">
              <img src="/assets/images/kgic_gallery8.jpg" alt="" />

              <div className="gi-ov">
                <FaImages />
              </div>
            </div>

            <div className="gi-wrap wide">
              <img src="/assets/images/kgic_gallery3.jpeg" alt="" />

              <div className="gi-ov">
                <FaImages />
              </div>
            </div>

            <div className="gi-wrap wide">
              <img src="/assets/images/kgic_gallery2.jpeg" alt="" />

              <div className="gi-ov">
                <FaImages />
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link to="/gallery" className="btn btn-r">
              <FaImages />
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="sec bg-g">
        <div className="wrap">
          <div className="hdr c">
            <div className="tag">Blog & News</div>

            <h2 className="t1">
              Welcome to <span>KGIC Blog</span>
            </h2>

            <p className="sub">
              Latest updates on academics, events, activities and achievements
              of our students.
            </p>
          </div>

          <div className="four">
            <div className="blog-card">
              <img src="/assets/images/annual1.avif" alt="" />

              <div className="blog-body">
                <span className="blog-cat">Events</span>

                <h4>Annual Function Highlights</h4>

                <p>
                  Glimpses of cultural performances and student talents from our
                  annual function.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt=""
              />

              <div className="blog-body">
                <span className="blog-cat">Achievements</span>

                <h4>Student Achievements & Awards</h4>

                <p>
                  Honoring students for excellence in academics and
                  competitions.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <img src="/assets/images/prog_2.avif" alt="" />

              <div className="blog-body">
                <span className="blog-cat">Sports</span>

                <h4>Sports & Activities Day</h4>

                <p>
                  Moments from sports events and co-curricular activities on
                  campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta">
        <h2>Ready to Join King George Inter College?</h2>

        <p>Admissions open for 2025–26 across all campuses.</p>

        <div className="cta-btns">
          <Link to="/contact" className="btn btn-y">
            <FaPhone />
            Contact Now
          </Link>

          <a
            href="/assets/images/aadmin.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-o"
          >
            <FaDownload />
            Admission Form
          </a>
        </div>
      </div>

      {/* ENQUIRY SECTION */}
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
              <h3 className="enq-title">Enquiry Now</h3>

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
                style={{ width: "100%", justifyContent: "center" }}
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
              Over a century, the King George Family has created some of the
              finest educational institutions.
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="ft-h">Information</h4>

            <div className="ft-ci">
              <FaMapMarkerAlt />
              <span>Lucknow, Uttar Pradesh</span>
            </div>

            <div className="ft-ci">
              <FaPhone />
              <span>+91 81760 01454</span>
            </div>

            <div className="ft-ci">
              <FaEnvelope />
              <span>kgiclko@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="ft-h">Gallery</h4>

            <div className="ft-gal">
              <img src="/assets/images/gallery_1.webp" alt="" />

              <img src="/assets/images/gallery_2.webp" alt="" />

              <img src="/assets/images/new_f1.jpg" alt="" />

              <img src="/assets/images/new_f2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="ft-bot">
          <p>Copyright 2026 KGIC. All Rights Reserved</p>

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

export default Home;
