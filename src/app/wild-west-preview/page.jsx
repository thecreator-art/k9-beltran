"use client";

import { Barlow, Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function WildWestPreview() {
  return (
    <section className={`hero-wrap ${barlow.className}`} id="home">
      <div className="bg-svg-container" aria-hidden="true">
        <svg className="bg-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="1600" height="900" fill="#0D1B3E" />

          <ellipse cx="820" cy="760" rx="760" ry="190" fill="#E8A020" opacity="0.52" />
          <ellipse cx="820" cy="800" rx="920" ry="210" fill="#C8861A" opacity="0.24" />
          <rect x="0" y="700" width="1600" height="18" fill="#E8A020" opacity="0.24" />

          <circle cx="86" cy="90" r="2" fill="#ffffff" opacity=".95" />
          <circle cx="144" cy="170" r="1.8" fill="#ffffff" opacity=".9" />
          <circle cx="202" cy="62" r="2.1" fill="#ffffff" opacity=".85" />
          <circle cx="278" cy="128" r="1.6" fill="#ffffff" opacity=".8" />
          <circle cx="360" cy="84" r="2" fill="#ffffff" opacity=".9" />
          <circle cx="445" cy="146" r="1.7" fill="#ffffff" opacity=".82" />
          <circle cx="530" cy="100" r="2.2" fill="#ffffff" opacity=".88" />
          <circle cx="620" cy="68" r="1.8" fill="#ffffff" opacity=".9" />
          <circle cx="708" cy="124" r="1.9" fill="#ffffff" opacity=".8" />
          <circle cx="795" cy="80" r="2.1" fill="#ffffff" opacity=".92" />
          <circle cx="870" cy="160" r="1.7" fill="#ffffff" opacity=".82" />
          <circle cx="955" cy="112" r="2" fill="#ffffff" opacity=".9" />
          <circle cx="1040" cy="72" r="1.8" fill="#ffffff" opacity=".84" />
          <circle cx="1112" cy="145" r="2.2" fill="#ffffff" opacity=".87" />
          <circle cx="1198" cy="95" r="1.6" fill="#ffffff" opacity=".9" />
          <circle cx="1280" cy="130" r="2" fill="#ffffff" opacity=".83" />
          <circle cx="1365" cy="75" r="1.8" fill="#ffffff" opacity=".9" />
          <circle cx="1450" cy="160" r="2.1" fill="#ffffff" opacity=".88" />
          <circle cx="1520" cy="92" r="1.7" fill="#ffffff" opacity=".87" />

          <path d="M0 690 L0 628 L88 628 L112 590 L236 590 L260 628 L362 628 L388 600 L532 600 L560 628 L700 628 L724 578 L874 578 L896 628 L1032 628 L1054 592 L1188 592 L1212 628 L1370 628 L1392 604 L1534 604 L1562 628 L1600 628 L1600 690 Z" fill="#2A1C11" opacity=".96" />
          <path d="M0 760 L0 690 L146 690 L168 660 L296 660 L320 690 L470 690 L492 650 L650 650 L676 690 L824 690 L848 646 L1016 646 L1040 690 L1200 690 L1222 664 L1388 664 L1410 690 L1600 690 L1600 760 Z" fill="#24180f" opacity=".98" />
          <path d="M0 900 L0 760 L1600 760 L1600 900 Z" fill="#1C130A" />

          <path d="M98 900 L98 770 C98 748 113 733 134 733 C155 733 170 748 170 770 L170 900 Z" fill="#120c07" />
          <path d="M76 846 C76 818 93 799 114 799 C129 799 140 811 140 828 L140 900 L76 900 Z" fill="#120c07" />
          <path d="M170 858 C170 835 184 820 201 820 C215 820 224 830 224 845 L224 900 L170 900 Z" fill="#120c07" />

          <path d="M310 900 L310 812 C310 793 324 780 341 780 C359 780 372 793 372 812 L372 900 Z" fill="#120c07" />
          <path d="M286 874 C286 851 299 836 316 836 C328 836 336 844 336 856 L336 900 L286 900 Z" fill="#120c07" />
          <path d="M372 878 C372 858 384 845 399 845 C410 845 418 853 418 864 L418 900 L372 900 Z" fill="#120c07" />

          <path d="M1426 900 L1426 752 C1426 730 1442 714 1462 714 C1482 714 1498 730 1498 752 L1498 900 Z" fill="#120c07" />
          <path d="M1402 824 C1402 799 1418 782 1437 782 C1451 782 1461 792 1461 806 L1461 900 L1402 900 Z" fill="#120c07" />
          <path d="M1498 836 C1498 816 1510 802 1526 802 C1538 802 1546 811 1546 823 L1546 900 L1498 900 Z" fill="#120c07" />

          <path d="M726 900 L726 798 C726 775 742 758 764 758 C786 758 802 775 802 798 L802 900 Z" fill="#160f09" />
          <path d="M700 850 C700 826 715 810 734 810 C747 810 756 819 756 833 L756 900 L700 900 Z" fill="#160f09" />
          <path d="M802 854 C802 834 815 820 831 820 C843 820 851 828 851 840 L851 900 L802 900 Z" fill="#160f09" />
        </svg>
      </div>

      <div className="overlay" />

      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className={`logo ${oswald.className}`}>
            WILD WEST
            <small>WINDOW WASH</small>
          </a>
          <div className={`links ${oswald.className}`}>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Service Areas</a>
            <a href="#">Gallery</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
          </div>
          <a href="tel:+18329797905" className={`phone-btn ${oswald.className}`}>
            (832) 979-7905
          </a>
        </div>
      </nav>

      <div className="content">
        <div>
          <h1 className={oswald.className}>PROFESSIONAL WINDOW CLEANING IN HOUSTON, TX</h1>
          <p className="subline">
            Houston&apos;s highest-rated window cleaning crew. Same-day response. Free estimates.
          </p>
          <div className="rating">
            <span>4.9</span>
            <span className="stars">★★★★★</span>
            <span>(61 Google Reviews)</span>
          </div>
          <ul className="bullets">
            <li>
              <span className="check">✓</span>Licensed, Bonded &amp; Fully Insured
            </li>
            <li>
              <span className="check">✓</span>Free Estimates — Response Within 2 Hours
            </li>
            <li>
              <span className="check">✓</span>Emergency &amp; Same-Day Service
            </li>
            <li>
              <span className="check">✓</span>100% Satisfaction Guarantee
            </li>
          </ul>
          <a href="#" className={`cta ${oswald.className}`}>
            GET A FREE ESTIMATE
          </a>
        </div>

        <form className="form-card">
          <h2 className={oswald.className}>REQUEST AN ESTIMATE</h2>
          <div className="field">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="Phone" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="service">Select Service</label>
            <select id="service" name="service" defaultValue="Select Service">
              <option>Select Service</option>
              <option>Window Cleaning</option>
              <option>Gutter Cleaning</option>
              <option>Power Washing</option>
              <option>Soft Washing</option>
              <option>House Washing</option>
              <option>Gutter Guard Installation</option>
              <option>Screen Cleaning</option>
              <option>Holiday Lighting</option>
              <option>Permanent Lighting</option>
            </select>
          </div>
          <button type="button" className={`submit ${oswald.className}`}>
            GET MY FREE ESTIMATE ★
          </button>
          <div className="privacy">WE RESPECT YOUR PRIVACY. NO SPAM, EVER.</div>
        </form>
      </div>

      <style jsx>{`
        .hero-wrap {
          --dark: #1c130a;
          --amber: #e8a020;
          --gold: #c8861a;
          --cta: #c94f1a;
          --text: #f5edd8;
          --sky: #0d1b3e;
          --muted: #b8ac98;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: var(--dark);
          color: var(--text);
        }
        .bg-svg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .bg-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 27, 62, 0.08);
          z-index: 1;
          pointer-events: none;
        }
        .nav {
          position: relative;
          z-index: 3;
          background: var(--dark);
          border-bottom: 1px solid rgba(232, 160, 32, 0.2);
        }
        .nav-inner {
          width: min(1240px, calc(100% - 2rem));
          margin: 0 auto;
          min-height: 84px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1.2rem;
        }
        .logo {
          color: var(--text);
          text-decoration: none;
          text-transform: uppercase;
          line-height: 0.9;
          letter-spacing: 0.8px;
          font-size: 1.25rem;
          padding: 0.4rem 0.65rem;
          border: 1px solid rgba(232, 160, 32, 0.35);
          border-radius: 10px;
          box-shadow: 0 0 0 1px rgba(201, 79, 26, 0.2) inset;
          display: inline-block;
        }
        .logo small {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          color: #d8c9af;
          margin-top: 2px;
        }
        .links {
          display: flex;
          justify-content: center;
          gap: 1.35rem;
          flex-wrap: wrap;
          text-transform: uppercase;
        }
        .links a {
          text-decoration: none;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 0.6px;
          opacity: 0.95;
        }
        .links a:hover {
          color: var(--amber);
        }
        .phone-btn {
          text-decoration: none;
          color: #fff;
          border: 2px solid var(--cta);
          border-radius: 12px;
          padding: 0.65rem 0.95rem;
          font-size: 1.1rem;
          letter-spacing: 0.4px;
          box-shadow: 0 0 20px rgba(201, 79, 26, 0.2);
          white-space: nowrap;
        }
        .content {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 3.4rem 0 4.4rem;
          display: grid;
          grid-template-columns: 1.04fr 0.96fr;
          gap: 2rem;
          align-items: start;
        }
        h1 {
          margin: 0;
          color: #fff;
          text-transform: uppercase;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 0.94;
          letter-spacing: 0.8px;
          max-width: 12ch;
          text-wrap: balance;
          text-shadow: 0 6px 20px rgba(28, 19, 10, 0.45);
        }
        .subline {
          margin: 1rem 0 1.1rem;
          max-width: 48ch;
          font-size: 1.34rem;
          color: var(--text);
          font-weight: 500;
          line-height: 1.42;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text);
          font-size: 1.05rem;
          margin-bottom: 0.9rem;
          font-weight: 600;
        }
        .stars {
          color: var(--amber);
          letter-spacing: 2px;
          font-size: 1.25rem;
        }
        .bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.35rem;
          max-width: 52ch;
        }
        .bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.58rem;
          color: #f0e5d2;
          font-size: 1.02rem;
          line-height: 1.4;
          font-weight: 600;
        }
        .check {
          color: var(--amber);
          margin-top: 1px;
          font-weight: 800;
          font-size: 1.04rem;
        }
        .cta {
          margin-top: 1.25rem;
          display: inline-block;
          background: var(--cta);
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          font-size: 1.35rem;
          border-radius: 10px;
          padding: 0.78rem 1.55rem;
          box-shadow: 0 12px 24px rgba(201, 79, 26, 0.35);
        }
        .form-card {
          background: rgba(28, 19, 10, 0.86);
          border: 1px solid rgba(232, 160, 32, 0.52);
          border-radius: 18px;
          padding: 1.2rem;
          box-shadow: 0 0 0 1px rgba(232, 160, 32, 0.28) inset, 0 0 30px rgba(232, 160, 32, 0.18);
          backdrop-filter: blur(2px);
        }
        .form-card h2 {
          margin: 0 0 0.85rem;
          color: var(--amber);
          text-transform: uppercase;
          font-size: 2.1rem;
          letter-spacing: 0.6px;
          line-height: 0.96;
        }
        .field {
          margin-bottom: 0.6rem;
        }
        .field label {
          display: block;
          color: #eadfca;
          font-size: 0.9rem;
          margin: 0 0 0.2rem;
          font-weight: 600;
        }
        .field input,
        .field select {
          width: 100%;
          background: rgba(13, 27, 62, 0.25);
          border: 1px solid rgba(245, 237, 216, 0.5);
          color: #fff;
          border-radius: 10px;
          padding: 0.76rem 0.78rem;
          font-family: inherit;
          font-size: 1.02rem;
          outline: none;
        }
        .field input::placeholder {
          color: #cec2b1;
        }
        .field input:focus,
        .field select:focus {
          border-color: var(--amber);
          box-shadow: 0 0 0 2px rgba(232, 160, 32, 0.22);
        }
        .submit {
          width: 100%;
          border: none;
          background: var(--cta);
          color: #fff;
          border-radius: 10px;
          padding: 0.83rem;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          font-size: 1.3rem;
          cursor: pointer;
          margin-top: 0.25rem;
        }
        .privacy {
          margin-top: 0.62rem;
          font-size: 0.84rem;
          color: #b9ab96;
          text-align: center;
          letter-spacing: 0.02em;
          font-weight: 500;
        }
        @media (max-width: 1080px) {
          .content {
            grid-template-columns: 1fr;
          }
          .subline {
            font-size: 1.16rem;
          }
          .form-card {
            max-width: 640px;
          }
        }
        @media (max-width: 860px) {
          .links {
            display: none;
          }
          .nav-inner {
            grid-template-columns: auto auto;
            justify-content: space-between;
          }
          .phone-btn {
            font-size: 0.98rem;
          }
          h1 {
            font-size: clamp(2.2rem, 10vw, 3.5rem);
          }
          .cta {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
