import React, { useState } from 'react'
import Navb from '../Components/Navb'
import { Grid, Typography } from '@mui/material'
import logo from "../assets/logo.png"
import { MDBBtn, MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import search from "../assets/search.png"
import email from "../assets/email.png"
import Book from '../Components/Book';
import Footer from '../Components/Footer';
import CarouselComponent from '../Components/Carou';
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

function Logiciel() {


   
  return (
    <div style={{ backgroundColor: "#F7F2E7" }} className="sora-nrml">
      <CarouselComponent />

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{
          padding: "40px 20px",
          width: "70%",
          marginLeft: "15%",
          marginTop: "2%",
        }}
        className="glass-effect"
      >
        {/* Fiabilité Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            className="rowing"
            style={{
              textAlign: "center",
              color: "#141414",
              alignItems: "center",
            }}
          >
            <MDBIcon icon="check-circle" size="2x" className="mb-3" />
            Fiabilité
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Emails Vérifiés :</strong> Tous les emails que nous
            fournissons sont rigoureusement vérifiés et validés. Vous pouvez
            être sûr à 100% que chaque email est exact et fonctionnel.
          </Typography>
          <Typography variant="body1">
            <strong>Haut Taux de Succès :</strong> Nos algorithmes avancés
            garantissent un taux de succès élevé, vous permettant de trouver les
            emails que vous recherchez avec une précision inégalée.
          </Typography>
        </Grid>

        {/* Rapidité Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            className="rowing"
            style={{
              textAlign: "center",
              color: "#141414",
              alignItems: "center",
            }}
          >
            <MDBIcon icon="bolt" size="2x" className="mb-3" />
            Rapidité
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Rapidité :</strong> Plus besoin de passer des heures à
            rechercher des contacts. Charik Email Finder vous offre des
            résultats rapides et fiables, vous permettant de vous concentrer sur
            ce qui compte vraiment.
          </Typography>
          <Typography variant="body1">
            <strong>Efficacité :</strong> En automatisant la recherche d'emails,
            notre outil vous fait gagner un temps précieux, accélérant ainsi vos
            processus de prospection et de communication.
          </Typography>
        </Grid>

        {/* Sécurité Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            gutterBottom
            className="rowing"
            style={{
              textAlign: "center",
              color: "#141414",
              alignItems: "center",
            }}
          >
            <MDBIcon
              icon="shield-alt"
              size="2x"
              className="mb-3"
              style={{ color: "#141414" }}
            />
            Sécurité
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Données Sécurisées :</strong> La protection de vos données
            est notre priorité. Toutes les recherches et les résultats sont
            traités avec le plus haut niveau de confidentialité.
          </Typography>
          <Typography variant="body1">
            <strong>Résultats Garantis :</strong> Si nous vous fournissons un
            email, nous garantissons qu'il est correct et fonctionnel, vous
            évitant ainsi les emails retournés ou non délivrés.
          </Typography>
        </Grid>
      </Grid>

      <Book />
      <div className="about-bg" style={{ padding: "1%" }}>
        <Grid container>
          <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <h1 style={{ color: "#141414" }}>Devenez HiveIn Partner</h1>
            <h4
              style={{
                width: "60%",
                marginLeft: "20%",
                color: "#fefefe",
                marginTop: "5%",
                color: "#141414",
              }}
            >
              Si vous êtes prêt à aider vos clients à tirer parti du pouvoir de
              l'Intelligence Commerciale au sein de HubSpot, contactons-nous dès
              maintenant !
            </h4>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={6}
            className="rowing"
            style={{ alignItems: "center" }}
          >
            {" "}
            <button
              className="demo-button"
              style={{
                height: "35%",
                border: "#141414",
                width: "30%",
                color: "#fefefe",
              }}
            >
              Discover Our Offers
            </button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Logiciel