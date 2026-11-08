export default function Footer() {
  return (
    <footer className="wrap footer">
      <span>© {new Date().getFullYear()} Udaya Chathuranga</span>
      <div>
        <a
          href="https://github.com/udayacgamage"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/udaya-chathuranga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
