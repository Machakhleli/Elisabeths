export default function Footer() {
  return (
    <footer className=" footer ">
      <span className="footer-text">
        © {new Date().getFullYear()} Elisabeth GogoliSvili Photography Studio.
        All rights reserved.
      </span>
      <div className="footer-social-media">
        <span className="social-link">Facebook</span>
        <span className="social-link">Instagram</span>
        <span className="social-link">Behance</span>
      </div>
    </footer>
  );
}
