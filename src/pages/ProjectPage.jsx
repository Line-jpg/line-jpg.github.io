import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router";
import CaseMedia from "../components/CaseMedia";
import projects from "../data/projects";
import styles from "./ProjectPage.module.css";

// Tomme skabelonfelter ("" eller [""]) skal ikke vises på siden.
const hasText = (value) => typeof value === "string" && value.trim() !== "";
const filled = (value) => [value].flat().filter(hasText);

function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  // Start øverst, også når man går videre til næste projekt.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  const nextProject = projects[index + 1];
  const number = String(index + 1).padStart(2, "0");

  const facts = [
    { label: "Discipliner", value: project.services },
    { label: "Projektform", value: project.collaboration },
    { label: "Værktøjer", value: project.tools },
  ].filter((fact) => hasText(fact.value));

  const links = (project.links ?? []).filter((link) => hasText(link.url));
  const showAbout = hasText(project.description) || links.length > 0;

  const story = (project.story ?? [])
    .map((section) => ({
      ...section,
      paragraphs: filled(section.paragraphs),
      links: (section.links ?? []).filter((link) => hasText(link.url)),
      images: (section.media?.items ?? []).filter((item) => hasText(item.src)),
    }))
    .filter(
      (section) => hasText(section.heading) || section.paragraphs.length > 0,
    );

  const reflection = filled(project.reflection);

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <Link
          className={styles.backLink}
          to="/"
          state={{ scrollTo: "projekter" }}
        >
          <span aria-hidden="true">←</span> Tilbage til projekter
        </Link>

        <div className={styles.top}>
          <span>{[number, project.category].filter(hasText).join(" · ")}</span>
          {hasText(project.year) && <span>{project.year}</span>}
        </div>

        <h1>{project.title}</h1>
        {hasText(project.intro) && <p>{project.intro}</p>}
      </header>

      {hasText(project.cover) ? (
        <div className={styles.cover}>
          <div className={styles.coverMedia}>
            <img
              className={styles.coverImage}
              src={project.cover}
              alt={project.coverAlt || project.title}
            />
            {hasText(project.category) && (
              <div className={styles.coverOverlay}>
                <span>{project.category}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        hasText(project.category) && (
          <div className={styles.cover}>
            <div className={styles.coverGraphic}>
              <span>{project.category}</span>
            </div>
          </div>
        )
      )}

      {(facts.length > 0 || showAbout) && (
        <section className={styles.overview}>
          {facts.length > 0 && (
            <div>
              {facts.map((fact) => (
                <Fragment key={fact.label}>
                  <p className={styles.label}>{fact.label}</p>
                  <span>{fact.value}</span>
                </Fragment>
              ))}
            </div>
          )}

          {showAbout && (
            <div className={styles.about}>
              <p className={styles.label}>Om projektet</p>
              {hasText(project.description) && <h2>{project.description}</h2>}

              {links.length > 0 && (
                <div className={styles.links}>
                  {links.map((link) => (
                    <a
                      href={link.url}
                      key={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {story.length > 0 && (
        <section className={styles.story} aria-label="Projektets historie">
          {story.map((section, sectionIndex) => (
            <div
              className={`${styles.storySection} ${
                section.layout === "text-above"
                  ? styles.caseTextAbove
                  : section.images.length > 0
                    ? styles.caseSplit
                    : ""
              }`}
              key={sectionIndex}
            >
              <div className={styles.storyHeading}>
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                {hasText(section.heading) && <h2>{section.heading}</h2>}
              </div>

              <div className={styles.storyText}>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {section.links.map((link) => (
                  <a
                    href={link.url}
                    key={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>

              {section.images.length > 0 && (
                <div className={styles.caseMediaRow}>
                  <CaseMedia
                    key={`${project.slug}-${sectionIndex}`}
                    media={{ ...section.media, items: section.images }}
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {reflection.length > 0 && (
        <section className={styles.reflection}>
          <h2>Refleksion</h2>
          <div>
            {reflection.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      <Link
        className={styles.next}
        to={nextProject ? `/projects/${nextProject.slug}` : "/"}
        state={nextProject ? undefined : { scrollTo: "projekter" }}
      >
        <span>{nextProject ? "Næste projekt" : "Tilbage til oversigten"}</span>
        <strong>{nextProject ? nextProject.title : "Alle projekter"} →</strong>
      </Link>
    </article>
  );
}

export default ProjectPage;
