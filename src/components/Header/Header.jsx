import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo-group">
        <h1 className="logo">GROWTHLINE</h1>
        <p className="header-subtitle">Built by students. For founders.</p>
        {/* Tämä tyhjä div toimii viivana */}
        <div className="accent-line"></div>
      </div>
    </header>
  );
}