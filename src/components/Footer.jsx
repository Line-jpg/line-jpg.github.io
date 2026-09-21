function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-intro">
          <h2 className="footer-heading">
            Her finder
            <br />
            du mig
          </h2>
          <p className="footer-location">Aarhus - Danmark</p>
        </div>

        <div className="footer-details">
          <div className="footer-item">
            <p className="footer-label">Mail</p>
            <a className="footer-value" href="mailto:lines1310@gmail.com">
              lines1310@gmail.com
            </a>
          </div>

          <div className="footer-item">
            <p className="footer-label">GitHub</p>
            <a
              className="footer-value"
              href="https://github.com/Line-jpg"
              target="_blank"
              rel="noreferrer"
            >
              Line-JPG
            </a>
          </div>

          <div className="footer-item">
            <p className="footer-label">LinkedIn</p>
            <a
              className="footer-value"
              href="https://www.linkedin.com/in/line-svendsen-112911427"
              target="_blank"
              rel="noreferrer"
            >
              Line Svendsen
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© {year} Line Svendsen</p>
      </div>
    </footer>
  );
}

export default Footer;
