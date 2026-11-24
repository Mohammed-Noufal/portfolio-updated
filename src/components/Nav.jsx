import Icon from "./Icon.jsx";

export default function Nav({ items, name, theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          {name}
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="icon-btn"
          onClick={onToggle}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <Icon name={isDark ? "sun" : "moon"} />
        </button>
      </div>
    </header>
  );
}
