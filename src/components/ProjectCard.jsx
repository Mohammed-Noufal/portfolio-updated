export default function ProjectCard({ project }) {
  const { title, subtitle, description, features = [], tech = [], links = [], githubUrl } = project;

  return (
    <article className="card project">
      <h3>
        {githubUrl ? (
          <a className="link" href={githubUrl} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="sub">{subtitle}</p>
      <p>{description}</p>
      <ul className="bullets">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <ul className="chips" aria-label="Tech stack">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {links.length > 0 && (
        <div className="row">
          {links.map((link) => (
            <a key={link.href} className="btn btn-ghost" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
