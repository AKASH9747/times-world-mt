import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getCountriesDetails } from "../features/countriesSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleNavLinkClick = (link: string) => {
    setActiveLink(link);
    dispatch(getCountriesDetails(link));
  };

  console.log({ activeLink });
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <h4>Countries</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto gap-4">
            <Nav.Item
              onClick={() => handleNavLinkClick("")}
              className={activeLink === "" ? "active-link" : ""}
            >
              All
            </Nav.Item>
            <Nav.Item
              onClick={() => handleNavLinkClick("asia")}
              className={activeLink === "asia" ? "active-link" : ""}
            >
              Asia
            </Nav.Item>
            <Nav.Item
              onClick={() => handleNavLinkClick("europe")}
              className={activeLink === "europe" ? "active-link" : ""}
            >
              Europe
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
