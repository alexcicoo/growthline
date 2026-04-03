import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo-group">
        <h1 className="logo">GROWTHLINE</h1>
        <p className="header-subtitle">House Of Brands</p>
        <div className="accent-line" aria-hidden="true"></div>
      </div>
    </header>
  );
}