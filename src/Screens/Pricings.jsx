import React, { useState } from 'react'
import Navb from '../Components/Navb'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";
import bg from "../assets/pricingbg.png"
import HiveInShowcase from '../Components/Hive';
import Footer from '../Components/Footer';
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

function Pricings() {
    //conditional pricing 
      const [activePlan, setActivePlan] = useState("monthly");
      const [price, setPrice] = useState(59); // Initial price for monthly

      const handlePlanChange = (plan) => {
        if (plan === "monthly") {
          setActivePlan("monthly");
          setPrice(79); // Set price for monthly
        } else if (plan === "annual") {
          setActivePlan("annual");
          setPrice(59); // Set price for annual
        }
    };
    


      const baseStyle = {
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
  };

  // Conditionally set the background color based on activePlan
  const conditionalStyle = {
    backgroundColor: activePlan === 'annual' ? '#141414' : 'gray',
    color: activePlan === 'annual' ? '#F5B942' : 'black'
    };
    
// glassmorphic
    const glassmorphicStyle = {
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "15px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)", // For Safari
      border: "1px solid rgba(255, 255, 255, 0.3)",

      
    };



  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "Cover",
        backgroundRepeat: "no-repeat",
      }}
      className="sora-nrml"
    >
      <MDBContainer className="py-5">
        <MDBRow className="text-center rowing">
          <MDBCol md="5">
            <MDBCard
              className="mb-4 shadow-lg"
              style={{ borderRadius: "24px" }}
            >
              <MDBCardBody>
                <MDBCardTitle className="h3">Single user</MDBCardTitle>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn
                    color="light"
                    className={`rounded-pill ${
                      activePlan === "monthly" ? "active-btn" : ""
                    }`}
                    onClick={() => handlePlanChange("monthly")}
                  >
                    Monthly
                  </MDBBtn>
                  <MDBBtn
                    color="light"
                    className={`rounded-pill ms-2 ${
                      activePlan === "annual" ? "active-btn" : ""
                    }`}
                    onClick={() => handlePlanChange("annual")}
                  >
                    Annual{" "}
                    <MDBBadge pill color="" className="ms-1">
                      -25%
                    </MDBBadge>
                  </MDBBtn>
                </div>
                <div className="rowing">
                  <h1>{price}€ HT</h1>
                  <p className="text-muted mt-2">/ Mois / user *</p>
                </div>

                <MDBCardText>
                  Pour des utilisateurs souhaitant booster leur activité avec
                  HubSpot CRM.
                </MDBCardText>
                <ul className="list-unstyled mb-4">
                  <li>✔ 100 B2B email finder / mois</li>
                  <li>✔ Recherches de sociétés illimitées</li>
                  <li>✔ Recherches de contacts illimitées</li>
                </ul>
                <MDBBtn
                  style={{
                    backgroundColor: "#F5B942",
                    color: "#3d3d3d",
                    fontWeight: "bold",
                  }}
                  className="rounded-pill"
                >
                  Essai gratuit (14 jours) <br /> pas besoin de CB
                </MDBBtn>
                <p className="mt-3 text-muted">* Facturé annuellement</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="5">
            <MDBCard className="mb-4 shadow-sm">
              <MDBCardBody>
                <MDBCardTitle className="h3">Team</MDBCardTitle>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn
                    className="rounded-pill ms-2 "
                    style={{ backgroundColor: "#141414", color: "#F5B942" }}
                  >
                    Annual{" "}
                    <MDBBadge pill color="none" className="ms-1">
                      -25%
                    </MDBBadge>
                  </MDBBtn>
                </div>
                <h2 className="mb-0">490€ HT</h2>
                <p className="text-muted">
                  / Mois avec utilisateur illimités *
                </p>
                <MDBCardText>
                  Pour des équipes souhaitant développer leurs ventes et
                  augmenter leur productivité avec HubSpot CRM.
                </MDBCardText>
                <ul className="list-unstyled mb-4">
                  <li>✔ Utilisateurs illimités dans votre portail HubSpot</li>
                  <li>✔ 10000 B2B email finder à partager</li>
                  <li>✔ Recherches de sociétés illimitées</li>
                  <li>✔ Recherches de contacts illimitées</li>
                </ul>
                <MDBBtn
                  style={{ color: "#141414", backgroundColor: "#F5B942" }}
                  className="rounded-pill"
                >
                  Réserver une Démo avec Jimmy
                </MDBBtn>
                <p className="mt-3 text-muted">* Facturé annuellement</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div style={glassmorphicStyle}>
        {" "}
        <HiveInShowcase />
      </div>

      <div>
        <h3 className="text-muted mt-4" style={{ textAlign: "center" }}>
          {" "}
          Our Clients
        </h3>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            display: "flex",
          }}
          className='rowing'
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "5%",
              fontWeight:"bold"
            }}
          >
            Ils ont rejoing HiveIn
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
      </div>

      <MDBContainer className=" my-container " style={{marginTop:"5%"}} >
        <img
          src="https://www.charik.fr/hs-fs/hubfs/logo%20digitaweb%20horizontal.png?width=700&name=logo%20digitaweb%20horizontal.png"
          className="rounded-3"
          alt="Avatar"
        />
        <img
          src="https://www.charik.fr/hs-fs/hubfs/logo%20ticket%20fond%20blanc%20horizontal.png?width=700&name=logo%20ticket%20fond%20blanc%20horizontal.png"
          className="rounded-3"
          alt="Avatar"
        />
        <img
          src="https://www.charik.fr/hubfs/logo-ouest%20croissance.svg"
          className="rounded-3"
          alt="Avatar"
        />
        <img
          src="https://www.charik.fr/hubfs/numoo.svg"
          className="rounded-3"
          alt="Avatar"
        />
      </MDBContainer>
      <div
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <h3 className="text-muted " style={{ textAlign: "center",marginTop:"5%" }}>
          {" "}
          Si vous avez besoin de plus d'informations
        </h3>
        <h1
          style={{ textAlign: "center", marginBottom: "20px",  }}
        >
          Questions fréquentes
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
      <MDBContainer
        className="mt-5"
        style={{
          maxWidth: "1000px",
          backgroundColor: "#FEFEFE", // White background
          borderRadius: "22px", // Rounded corners
          padding: "3%", // Padding for content inside the container
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
          border: "1px solid rgba(255, 255, 255, 0.3)",
          // Border similar to the screenshot
        }}
      >
        <MDBAccordion alwaysOpen initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle={<h3>Quelle version de HubSpot dois-je avoir ?</h3>}
            style={{
              border: "none",
            }}
          >
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem
            style={{ border: "none" }}
            collapseId={2}
            headerTitle={<h3>Quelle est la durée minimum d'engagement ?</h3>}
          >
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem
            style={{ border: "none" }}
            collapseId={3}
            headerTitle={
              <h3>
                J'utilise une solution pour trouver les numéros de téléphone,
                êtes-vous compatible ?
              </h3>
            }
          >
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>

      <Footer />

      <style jsx>{`
        .active-btn {
          background-color: #141414 !important;
          color: #f5b942 !important;
        }
      `}</style>
    </div>
  );
}

export default Pricings