import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => handleScroll("projects-subsection")}>Projects</li>
        <li onClick={() => handleScroll("experience-subsection")}>Experience</li>
        <li onClick={() => handleScroll("certifications-subsection")}>Certifications</li>
      </ul>
    </nav>
  );
};

export default Navbar;
