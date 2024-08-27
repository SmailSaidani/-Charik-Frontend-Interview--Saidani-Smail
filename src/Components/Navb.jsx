import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png"; // Ensure your logo path is correct
import logoinv from "../assets/logoinv.png";

export default function Navb() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen to scroll events and change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  //searchbar modal 
    const [basicModal, setBasicModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleOpen = () => setBasicModal(!basicModal);

    const handleSearch = () => {
      // Logic for handling the search can be added here
      console.log("Searching for:", searchQuery);
  };
  console.log(basicModal)


  return (
    <>
      <MDBModal
        open={basicModal}
        onClose={toggleOpen}
        animation // Enables animation for modal appearance
        className="rounded-lg mt-4 "
        centered
      >
        <MDBModalDialog>
          <MDBModalContent
            className="p-4 rounded-content shadow-lg"
            style={{ marginTop: "5%" }}
          >
            <MDBModalHeader className="border-0">
              <MDBModalTitle>Search</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBInputGroup className=" mb-3">
              <MDBInput
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="form-control  shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ height: "50px", border: "#3d3d3d" }}
              />
              <MDBBtn
                style={{ backgroundColor: "#3d3d3d" }}
                className="rounded-button"
                onClick={handleSearch}
              >
                <MDBIcon icon="search" />
              </MDBBtn>
            </MDBInputGroup>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBNavbar
        expand="lg"
        light
        className={`sticky-top ${
          isScrolled ? "scrolled-navbar" : "default-navbar"
        }`}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" style={{ marginLeft: "25%" }}>
            <img
              src={isScrolled ? logoinv : logo}
              style={{ width: "128px" }}
              alt="Logo"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-controls="navbarCollapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log("hello");
            }}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={isOpen} id="navbarCollapse">
            <MDBNavbarNav
              className="me-auto mb-2 mb-lg-0"
              style={{ fontSize: "20px" }}
            >
              {/* Charik Dropdown */}
              <MDBNavbarItem className="dropdown">
                <MDBNavbarLink
                  href="/logiciel"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  HiveIn
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* Tarifs Link */}
              <MDBNavbarItem>
                <MDBNavbarLink href="/pricing">Tarifs</MDBNavbarLink>
              </MDBNavbarItem>

              {/* À propos Link */}
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">À propos</MDBNavbarLink>
              </MDBNavbarItem>

              {/* Ressources Dropdown */}
              <MDBNavbarItem className="dropdown">
                <MDBNavbarLink
                  href="/faq"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Ressources
                </MDBNavbarLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </MDBNavbarItem>

              {/* Search Icon */}
              <MDBNavbarItem onClick={() => setBasicModal(!basicModal)}>
                <MDBIcon fas icon="search" />
              </MDBNavbarItem>

              {/* Language Selector */}
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  FR <MDBIcon fas icon="caret-down" />
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* Demo Button */}
              <MDBNavbarItem>
                <button className="demo-button">Demo</button>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
