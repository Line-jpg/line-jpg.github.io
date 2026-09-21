import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import projects from "../data/projects";
import { scrollToSection } from "../scroll";

const toolTags = [
  { label: "Koncept Design", className: "tools-tag-1" },
  { label: "Figma", className: "tools-tag-2" },
  { label: "VSC", className: "tools-tag-3" },
  { label: "UX/UI", className: "tools-tag-4" },
  { label: "SupaBase", className: "tools-tag-5" },
  { label: "Claude Code", className: "tools-tag-6" },
  { label: "Photoshop", className: "tools-tag-7" },
  { label: "GitHub", className: "tools-tag-8" },
  { label: "REACT", className: "tools-tag-9" },
];

function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      scrollToSection(state.scrollTo);
    }
  }, [state]);

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
            Jeg arbejder med frontend, design og digitale produkter. Her samler
            jeg projekter, proces og det, jeg lærer undervejs.
          </p>
          <div className="actions">
            <button
              type="button"
              className="button"
              onClick={() => scrollToSection("projekter")}
            >
              Se projekter
            </button>
            <button
              type="button"
              className="button secondary"
              onClick={() => scrollToSection("kontakt")}
            >
              Kontakt mig
            </button>
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

      <section className="project-section" id="projekter">
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

      <section className="tools-section">
        <div className="tools-section-heading">
          <h2>Værktøjer</h2>
        </div>

        <div className="tools-showcase">
          <img
            className="tools-ape tools-ape-gron"
            src="/gronAbe.svg"
            alt="grøn abe"
            draggable={false}
          />
          <img
            className="tools-ape tools-ape-blaa"
            src="/blaaAbe.svg"
            alt="blå abe"
            draggable={false}
          />
          {toolTags.map((tool) => (
            <span
              className={`tools-tag ${tool.className}`}
              key={tool.className}
            >
              {tool.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
