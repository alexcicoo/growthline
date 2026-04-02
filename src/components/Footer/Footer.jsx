import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-socials">
        <a className="social-link icon-swap" href="https://www.instagram.com/growthline.fi?igsh=MTA5ejJrZ2ZpaGVzaQ==" target="_blank" rel="noopener noreferrer">
          <span className="icon-wrap">
            <img className="icon icon-bw" src="instagram-logo-grey.png" alt="Instagram" />
            <img className="icon icon-color" src="instagram-logo.png" alt="" aria-hidden="true" />
          </span>
        </a>
        
        <a className="social-link icon-swap" href="https://www.linkedin.com/company/growthline-oy/" target="_blank" rel="noopener noreferrer">
          <span className="icon-wrap">
            <img className="icon icon-bw" src="linkedin-logo-grey.png" alt="LinkedIn" />
            <img className="icon icon-color" src="linkedin-logo.png" alt="" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  );
}