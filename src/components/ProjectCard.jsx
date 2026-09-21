import { Link } from "react-router";

function ProjectCard({ project }) {
  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
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
  );
}

export default ProjectCard;
