export default function Hero({ profile, highlights }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-role">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="row">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href={profile.resume}>
              View Resume
            </a>
          </div>
        </div>
        <aside className="card highlights" aria-label="Highlights">
          <h2>Highlights</h2>
          <ul>
            {highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
