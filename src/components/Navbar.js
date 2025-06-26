import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavBar = styled.nav`
  height: 120px; /* Increase header height */
  width: 100%;
  background-color: #f4e9d8; /* parchment tone */
  background-image: url("${process.env.PUBLIC_URL}/assets/parchment-texture.png");
  background-size: cover;
  background-repeat: repeat;
  color: #3b2f2f;
  font-family: 'Georgia', serif;
  box-shadow: 0 4px 6px rgba(60, 40, 20, 0.15);
  border-bottom: 2px solid #c4b89d;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 0 #fffef6;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #3b2f2f;
    padding: 0.25rem 0.5rem;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 2px solid #a0825e;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
  }
`;

function Navbar() {
  return (
    <NavBar>
      <Logo>Chandini's Library</Logo>
      <NavLinks>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavLinks>
    </NavBar>
  );
}

export default Navbar;
