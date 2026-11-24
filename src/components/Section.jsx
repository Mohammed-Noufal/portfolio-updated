export default function Section({ id, title, children }) {
  const headingId = `${id}-title`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="wrap section-grid">
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
