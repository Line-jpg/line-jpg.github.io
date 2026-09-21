import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <img
            className="hero-logo"
            src="/Line Svendsen.svg"
            alt="Line Svendsen"
          />
          <p className="hero-text">
            Jeg arbejder med frontend, design og digitale produkter. Her
            samler jeg projekter, proces og det, jeg lærer undervejs.
          </p>
          <div className="actions">
            <Link className="button" to="/projects">
              Se projekter
            </Link>
            <Link className="button secondary" to="/contact">
              Kontakt mig
            </Link>
          </div>
        </div>

        <div className="hero-collage">
          <img
            className="hero-collage-item hero-collage-blaa"
            src="/blaaBlomst.svg"
            alt=""
            draggable={false}
          />
          <img
            className="hero-collage-item hero-collage-pink"
            src="/pinkBlomst.svg"
            alt=""
            draggable={false}
          />
          <img
            className="hero-collage-item hero-collage-placeholder"
            src="/placeHolder.svg"
            alt="Portfolio billede"
            draggable={false}
          />
          <img
            className="hero-collage-item hero-collage-hvid"
            src="/hvidBlomst.svg"
            alt=""
            draggable={false}
          />
          <img
            className="hero-collage-item hero-collage-klister"
            src="/klisterMissen.svg"
            alt=""
            draggable={false}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>De nyeste.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <Link
              className="project-card"
              to={`/projects/${project.slug}`}
              key={project.slug}
            >
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
