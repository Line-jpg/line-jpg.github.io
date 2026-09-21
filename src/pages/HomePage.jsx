import { Link } from "react-router";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

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

      <section className="project-section">
        <div className="project-section-heading">
          <h2>Mine projekter</h2>
        </div>

        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <Link
              className="project-row"
              to={`/projects/${project.slug}`}
              key={project.slug}
            >
              <span className="project-row-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-row-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-row-tags">{project.tags.join(" - ")}</p>
              </div>
              <img
                className="project-row-image"
                src={project.image}
                alt={`Preview af ${project.title}`}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
