export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="wrap">
        © {new Date().getFullYear()} {name}
      </div>
    </footer>
  );
}
