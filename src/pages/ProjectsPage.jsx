import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <p className="eyebrow">Projekter</p>
        <h1>Mine projekter</h1>
        <p>
          Udskift eksemplerne med dine egne projekter. Brug korte beskrivelser,
          tydelige billeder og links til live versioner eller GitHub repos.
        </p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
