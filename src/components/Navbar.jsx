import { NavLink, useLocation, useNavigate } from "react-router";
import { scrollToSection } from "../scroll";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (target) => {
    if (pathname === "/") {
      scrollToSection(target);
      return;
    }

    navigate("/", { state: { scrollTo: target } });
  };

  return (
    <header className="site-header">
      <button
        type="button"
        className="brand"
        onClick={() => goToSection("top")}
        aria-label="Til toppen"
      >
        <img className="brand" src="iconWhite.png" alt="Line Svendsen" />
      </button>

      <nav className="site-nav" aria-label="Primær navigation">
        <button type="button" onClick={() => goToSection("top")}>
          Forside
        </button>
        <button type="button" onClick={() => goToSection("projekter")}>
          Projekter
        </button>
        <NavLink to="/about">Om mig</NavLink>
        <button type="button" onClick={() => goToSection("kontakt")}>
          Kontakt
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
