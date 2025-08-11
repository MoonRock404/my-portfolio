import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(90deg, #8b6f55, #5c4640)",
    borderBottom: "3px solid #c4a484",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Cormorant Garamond', serif",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#f5e6ca",
    letterSpacing: "1px",
    cursor: "default",
    textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
  };

  const navListStyle = {
    display: "flex",
    listStyle: "none",
    gap: "2rem",
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    color: "#f5e6ca",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "color 0.3s, transform 0.2s",
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  };

  const navItemHover = {
    color: "#d4af37",
    transform: "scale(1.05)",
  };

  return (
    <nav style={navbarStyle}>
      <div style={titleStyle}>Chandini's Portfolio</div>
      <ul style={navListStyle}>
        {[
          { label: "Projects", id: "projects-subsection" },
          { label: "Experience", id: "experience-subsection" },
          { label: "Certifications", id: "certifications-subsection" },
        ].map((item) => (
          <li
            key={item.id}
            style={navItemStyle}
            onClick={() => handleScroll(item.id)}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, navItemHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, navItemStyle)
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
