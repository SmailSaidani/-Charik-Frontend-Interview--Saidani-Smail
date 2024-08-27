import React, { useState } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";
import Grid from "@mui/material/Grid"; // Importing MUI Grid
import logo from "../assets/logo.png"; // Replace with your logo path
import search from "../assets/search.png"; // Replace with your search image path
import email from "../assets/email.png"; // Replace with your email image path
const AnimatedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MDBBtn
      color="none"
      className="shadow-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: isHovered
          ? "linear-gradient(to right, #FFB84D, #FFDF73, #E68A00)"
          : "linear-gradient(to right, #FFDF73, #FFB84D, #E68A00)",
        color: "#141414",
        fontWeight: "bolder",
        borderRadius: "25px",
        padding: "15px 40px",
        fontSize: "16px",
        border: "none",
        width: "50%",
        textAlign: "left",
        transform: isHovered
          ? "scale(1.05) rotate(2deg)"
          : "scale(1) rotate(0deg)",
        transition: "all 0.4s ease",
        boxShadow: isHovered
          ? "0px 8px 15px rgba(0, 0, 0, 0.2)"
          : "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      Essayer Charik <br />
      <small>14 jours d'essai gratuits</small>
    </MDBBtn>
  );
};

export default function CarouselComponent() {
  return (
    <>
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            color: #141414;
          }
        `}
      </style>

      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              lg={6}
              className="rowing"
              style={{ alignItems: "center" }}
            >
              <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1
                  className="display-4 fw-bold mb-3"
                  style={{ color: "#1C1C1C" }}
                >
                  Découvrez la puissance de HiveIn
                </h1>
                <p className="lead mb-4" style={{ color: "#5A5A5A" }}>
                  Découvrez comment Charik peut transformer votre stratégie de
                  vente, rendant chaque interaction plus impactante et chaque
                  décision plus éclairée. Préparez-vous à redéfinir ce que vous
                  pensiez possible avec HubSpot CRM.
                </p>
                <MDBBtn
                  color="none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FFDF73, #FFB84D, #E68A00)",
                    color: "#3d3d3d",
                    fontWeight: "bold",
                    borderRadius: "18px",
                    padding: "10px 30px",
                    fontSize: "16px",
                    border: "none",
                  }}
                >
                  Live Demo
                </MDBBtn>
              </div>
            </Grid>
            <Grid xs={12} md={6} lg={6} style={{ padding: "2%" }}>
              <img
                src={logo}
                style={{
                  border: "10px solid #3d3d3d",
                  borderRadius: "80%",
                  padding: "2%",
                  width: "70%",
                  marginLeft: "10%",
                }}
                className="shadow-lg"
                alt="Logo"
              />
            </Grid>
          </Grid>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <Grid container>
            <Grid xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
              <h1 style={{ marginTop: "2%", marginBlock: "3%" }}>
                Découvrez HiveIn Company Search
              </h1>
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={6}
              className="rowing"
              style={{ padding: "2%" }}
            >
              <img
                src={search}
                alt=""
                style={{ width: "60%", marginTop: "-5%" }}
                className="rounded-md shadow-lg"
              />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <MDBCol md="6" className="text-center text-md-start">
                <MDBTypography tag="h2" className="display-6 fw-bold mb-3">
                  Trouvez et ajoutez des sociétés à votre CRM en toute
                  simplicité
                </MDBTypography>
                <p className="lead mb-2" style={{ color: "#1C1C1C" }}>
                  <strong>Charik Company Search</strong> facilite la recherche
                  et l'ajout de sociétés selon des critères précis (ville, pays,
                  secteur d'activité, ...) directement dans HubSpot CRM,
                  optimisant vos démarches de prospection.
                </p>
                <p className="mb-4" style={{ color: "#E95C4B" }}>
                  Ne perdez plus de temps à rechercher manuellement des
                  sociétés.
                </p>
                <AnimatedButton />
              </MDBCol>
            </Grid>
          </Grid>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <Grid container spacing={4} style={{ padding: "40px" }}>
            <Grid xs={12} lg={12} md={12}>
              {" "}
              <MDBTypography
                tag="h2"
                className="display-5 mb-4 mt-2"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#141414",
                }}
              >
                Découvrez HiveIn Email Finder
              </MDBTypography>
            </Grid>
            {/* Left Column: Image */}
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={email}
                alt="Charik Email Finder Peacock"
                style={{ maxWidth: "60%", height: "auto" }}
                className=""
              />
            </Grid>

            {/* Right Column: Text and Button */}
            <Grid item xs={12} md={6}>
              <MDBTypography
                tag="h4"
                className="mb-4"
                style={{ fontWeight: "bold", marginTop: "5%" }}
              >
                Trouvez les emails professionnels de vos contacts en quelques
                clics
              </MDBTypography>

              <MDBTypography
                tag="p"
                className="lead mb-4"
                style={{ color: "#6c757d" }}
              >
                Trouvez facilement les emails pros de vos contacts en indiquant
                leur nom, prénom et entreprise.
              </MDBTypography>

              <MDBTypography
                tag="p"
                className="lead mb-4"
                style={{ color: "#6c757d" }}
              >
                Ne perdez plus de temps à chercher les emails de vos contacts.
              </MDBTypography>

              <MDBTypography
                tag="p"
                className="lead mb-4"
                style={{ color: "#6c757d" }}
              >
                Essayez <strong>Charik Email Finder</strong> et découvrez
                comment notre outil peut transformer votre manière de
                travailler.
              </MDBTypography>

              {/* Animated Button */}
              <AnimatedButton />
            </Grid>
          </Grid>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
