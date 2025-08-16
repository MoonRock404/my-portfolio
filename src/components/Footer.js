import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #996f4e, #996f4e)",
    borderTop: "3px solid #c4a484",
    padding: "1rem 2rem",
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    color: "#f5e6ca",
    marginTop: "2rem",
  };

  const linkStyle = {
    color: "#f5e6ca",
    textDecoration: "none",
    margin: "0 1rem",
    transition: "color 0.3s",
  };

  const linkHover = {
    color: "#d4af37",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Chandini's Portfolio</p>
      <div>
        {[
          { label: "LinkedIn", url: "https://linkedin.com" },
          { label: "GitHub", url: "https://github.com" },
          { label: "Email", url: "mailto:youremail@example.com" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, linkHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
