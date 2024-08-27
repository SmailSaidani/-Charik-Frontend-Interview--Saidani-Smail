import React from 'react'
import Navb from '../Components/Navb'
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import logo from "../assets/logo.png"
import prtn from "../assets/prtn.png"
import join from "../assets/join.png"
import bg from "../assets/pricingbg.png"
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
function About() {

       const glassmorphicStyle = {
         background: "rgba(255, 255, 255, 0.1)",
         borderRadius: "15px",
         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
         backdropFilter: "blur(10px)",
         WebkitBackdropFilter: "blur(10px)", // For Safari
         border: "1px solid rgba(255, 255, 255, 0.3)",
       };
  return (
    <div className="sora-nrml" style={{ backgroundColor: "#F7F2E7" }}>
      <div className="about-bg"  style={{paddingBottom:"20px"}}>
        <div className="rowing ">
          {" "}
          <img
            src={logo}
            style={{
              backgroundColor: "#FEFEFE",
              width: "200px",
              borderRadius: "90%",
              padding: "1%",
              marginTop: "5%",
            }}
            className="shadow-lg"
          />
        </div>
        <div style={{ textAlign: "center", color: "#fefefe" }}>
          <h1 style={{ color: "#FEFEFE" }}>À propos de nous</h1>
          <h1 style={{ width: "40%", marginLeft: "30%", color: "#fefefe" }}>
            La Sales Intelligence pour tous les utilisateurs HubSpot
          </h1>
          <h2 style={{ width: "60%", marginLeft: "20%" }}>
            Donnez{" "}
            <strong style={{ color: "#3d3d3d" }}>
              à chaque utilisateur de HubSpot
            </strong>{" "}
            les outils de Sales Intelligence pour révolutionner leur stratégie
            de vente.
          </h2>
          <h4 style={{ width: "60%", marginLeft: "20%", opacity: "0.7" }}>
            Obtenez des informations précieuses, identifiez les opportunités et
            prenez des décisions éclairées pour augmenter vos ventes et votre
            croissance.
          </h4>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          position: "relative",
          marginTop: "5%",
        }}
        className="rowing"
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Notre Histoire
        </h1>
        <div
          style={{
            position: "absolute",
            width: "50%" /* Adjust width as needed */,
            height: "5px" /* Adjust height for thickness */,
            bottom: "-10px" /* Adjust vertical position of the underline */,
            left: "25%" /* Center the underline */,
            background: "linear-gradient(90deg, #3d3d3d 50%, #F5B942 50%)",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <MDBContainer className="py-5" style={{ width: "100%" }}>
        <div className="main-timeline">
          {/* Timeline 2023 */}
          <div className="timeline left">
            <MDBCard
              style={{ width: "100%", borderRadius: "25px" }}
              className="shadow-lg"
            >
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/INBOUND-2016-HUBSPOT-BOSTON-min.jpeg?width=1000&name=INBOUND-2016-HUBSPOT-BOSTON-min.jpeg"
                    alt="2023"
                    fluid
                    style={{ marginTop: "25%" }}
                  />
                </MDBCol>
                <MDBCol md="8" sm="12">
                  <MDBCardBody className="p-4">
                    <h3>Partenariat avec HubSpot</h3>
                    <p className="mb-0">
                      Jimmy (notre fondateur) a commencé son parcours en tant
                      que partenaire HubSpot et a rapidement évolué pour devenir
                      l'un des 20 meilleurs partenaires HubSpot dans le monde.
                    </p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          {/* Timeline 2020 */}
          <div className="timeline right">
            <MDBCard className="shadow-lg">
              <MDBRow className="g-0">
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <h3>HiveIn V1.0</h3>
                    <p className="mb-0">
                      Un groupe restreint de clients nous a fait confiance, et
                      ensemble, nous avons collaboré pour créer la première
                      version de notre produit.
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCardImage
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/illustration%20keypeole%20plus.jpg?width=1000&name=illustration%20keypeole%20plus.jpg"
                    alt="2020"
                    fluid
                    style={{ marginTop: "5%" }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          {/* Timeline 2018 */}
          <div className="timeline left">
            <MDBCard style={{ maxWidth: "540px" }} className="shadow-lg">
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage src={logo} alt="2018" fluid />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <h3>Lancement de HiveIn</h3>
                    <p className="mb-0">
                      Dévoilement de notre premier site web et lancement de
                      notre logiciel.
                    </p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          {/* Timeline 2015 */}
          <div className="timeline right">
            <MDBCard style={{ maxWidth: "540px" }} className="shadow-lg">
              <MDBRow className="g-0">
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <h3>Startup Alpha au WebSummit Qatar</h3>
                    <p className="mb-0">
                      Nous sommes ravis d'avoir été sélectionnés parmi les 100
                      startups invitées à participer au premier WebSummit au
                      Qatar.
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCardImage
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/WS%20QATAR%20Startup%20charik-min.jpg?width=6750&name=WS%20QATAR%20Startup%20charik-min.jpg"
                    alt="2015"
                    fluid
                    style={{ padding: "1%", marginTop: "5%" }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          {/* Timeline 2010 */}
          <div className="timeline left">
            <MDBCard
              style={{ maxWidth: "540px", borderRadius: "22px" }}
              className="shadow-lg"
            >
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/charik%20app%20v2%20keypeople-min.jpg?width=1876&name=charik%20app%20v2%20keypeople-min.jpg  "
                    alt="2010"
                    fluid
                    style={{ marginTop: "5%" }}
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <h1>Charik V2.0</h1>

                    <p className="mb-0">
                      Un an après la version 1.0, nous sommes fiers de dévoiler
                      notre dernière mise à jour du site Web et du logiciel
                      conçue pour améliorer l'utilisation de l'intelligence
                      commerciale pour les utilisateurs de HubSpot.
                    </p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>

          {/* Timeline 2007 */}
          <div className="timeline right">
            <MDBCard style={{ maxWidth: "540px" }} className="shadow-lg">
              <MDBRow className="g-0">
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <h3>Lancement du programme partenaires</h3>
                    <p className="mb-0">
                      La création d'un réseau d'experts HubSpot qui souhaitent
                      offrir des gains de productivité à leurs clients.
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCardImage
                    src={prtn}
                    alt="2007"
                    fluid
                    style={{ marginTop: "5%" }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        </div>
      </MDBContainer>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCardBody className="p-5">
              <div className="text-center mb-4 pb-2">
                <MDBCardImage src={join} alt="Bulb" width="100" />
              </div>
              <MDBTypography blockquote style={{ textAlign: "center" }}>
                <h2 className="pb-3">
                  <span className="lead font-italic">Why not today ?</span>
                </h2>
                <h6>
                  devenez notre client Et vous gagnez du temps chaque jour avec
                  HubSpot et HiveIn.
                </h6>
                <button className="demo-button">Try HiveIn</button>
              </MDBTypography>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
              className="demo-button shadow-lg"
              style={{
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

export default About