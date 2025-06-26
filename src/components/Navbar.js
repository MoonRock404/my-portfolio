import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  height: 100px;
  max-width: 1000px;
  margin: 1rem auto;
  padding: 0 2rem;
  background-image: url("${process.env.PUBLIC_URL}/assets/dark-parchment.png");
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #2c1d0f;
  font-family: 'Georgia', serif;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #2c1d0f;
  font-weight: 500;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>MyPortfolio</Logo>
      <NavLinks>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
