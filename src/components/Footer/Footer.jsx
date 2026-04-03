import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-socials">
        <a 
          className="social-link icon-swap" 
          href="https://www.instagram.com/growthline.fi" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow Growthline on Instagram"
        >
          <span className="icon-wrap">
            <img className="icon icon-bw" src="instagram-icon-monochrome.webp" alt="Instagram" />
            <img className="icon icon-color" src="instagram-icon-brand.webp" alt="" aria-hidden="true" />
          </span>
        </a>
        
        <a 
          className="social-link icon-swap" 
          href="https://www.linkedin.com/company/growthline-oy/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Growthline LinkedIn"
        >
          <span className="icon-wrap">
            <img className="icon icon-bw" src="linkedin-icon-monochrome.webp" alt="LinkedIn" />
            <img className="icon icon-color" src="linkedin-icon-brand.webp" alt="" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  );
}