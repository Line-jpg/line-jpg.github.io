import { Link, useParams } from "react-router";
import projects from "../data/projects";

// Buet pil der forbinder to tekstbokse. Spejles hver anden gang (zigzag).
function DetailArrow({ flip }) {
  return (
    <svg
      className={`detail-arrow${flip ? " flip" : ""}`}
      viewBox="0 0 160 34"
      aria-hidden="true"
    >
      <path d="M10 2 C 8 20, 50 28, 110 28" />
      <path d="M101 22 L111 28 L101 33" />
    </svg>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/" state={{ scrollTo: "projekter" }}>
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  const sections = [1, 2, 3, 4]
    .map((n) => ({
      heading: project[`heading${n}`],
      text: project[`text${n}`],
      image: project[`image${n}`],
    }))
    .filter((section) => section.text);

  return (
    <article className="page">
      <div className="detail-intro">
        <Link className="back-link" to="/" state={{ scrollTo: "projekter" }}>
          <span aria-hidden="true">←</span> Tilbage til projekter
        </Link>

        <p className="eyebrow">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>

        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="actions">
          {project.links.map((link) => (
            <a
              className="button secondary"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {sections.length > 0 && (
        <section className="detail-steps">
          {sections.map((section, i) => (
            <div key={i}>
              <div className={`detail-step${i % 2 ? " offset" : ""}`}>
                <div className="detail-box">
                  <span className="detail-box-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading && <h2>{section.heading}</h2>}
                  <p>{section.text}</p>
                </div>
                {section.image && (
                  <div className="detail-collage">
                    <img
                      className="detail-collage-image"
                      src={section.image}
                      alt=""
                    />
                  </div>
                )}
              </div>
              {i < sections.length - 1 && <DetailArrow flip={i % 2 === 1} />}
            </div>
          ))}
        </section>
      )}
    </article>
  );
}

export default ProjectPage;
