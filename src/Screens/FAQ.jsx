import React, { useState } from 'react'
import Navb from '../Components/Navb'
import faqbg from "../assets/book1.png"
import { Grid } from '@mui/material';
import { MDBInputGroup, MDBInput, MDBBtn, MDBIcon, MDBCol, MDBTypography, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import Footer from '../Components/Footer';

function FAQ() {

    //searchbar
    const [searchQuery, setSearchQuery] = useState("Search");

    const handleSearch = () => {
      // Handle the search logic here
      console.log("Searching for:", searchQuery);
    };
  return (
    <div style={{ backgroundColor: "#F7F2E7" }} className="sora-nrml">
      <div
        style={{
          backgroundImage: `url(${faqbg})`,
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <Grid container>
          <Grid xs={12} md={6} lg={6}>
            <h1
              style={{
                marginTop: "15%",
                marginLeft: "2%",
                color: "#141414",
                fontWeight: "bold",
                fontSize:"5vh"
              }}
            >
              Besoin d'aide ?
            </h1>

            <MDBInputGroup className="rounded-search-bar mb-3">
              <MDBInput
                type="search"
                placeholder="Search..."
                aria-label="Search"
                className="form-control rounded-input shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ height: "50px" }}
              />
              <MDBBtn
                style={{ backgroundColor: "#3d3d3d" }}
                className="rounded-button"
                onClick={handleSearch}
              >
                <MDBIcon icon="search" />
              </MDBBtn>
            </MDBInputGroup>
          </Grid>
        </Grid>
      </div>
      <MDBContainer>
        <section>
          <MDBTypography
            tag="h3"
            className="text-c   enter mb-4 pb-2  fw-bold mt-2"
            style={{ color: "#141414",textAlign:"center" }}
          >
            HubSpot FAQ
          </MDBTypography>
          <p className="text-center mb-5">
            Find the answers to the most frequently asked questions about
            HubSpot below.
          </p>

          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon
                  far
                  icon="question-circle  pe-2"
                  style={{ color: "#141414" }}
                />{" "}
                What is HubSpot used for?
              </MDBTypography>
              <p>
                HubSpot is a comprehensive platform for inbound marketing,
                sales, and customer service. It provides tools for email
                marketing, social media management, customer relationship
                management (CRM), content management, and more, all designed to
                help businesses attract, engage, and delight customers.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon
                  fas
                  ic
                  style={{ color: "#141414" }}
                  on="dollar-sign  pe-2"
                />{" "}
                How much does HubSpot cost?
              </MDBTypography>
              <p>
                HubSpot offers a range of pricing plans starting from free tiers
                up to enterprise-level packages. The cost depends on the
                specific tools and features you need, with additional charges
                for larger contacts databases and advanced features.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon
                  fas
                  ico
                  style={{ color: "#141414" }}
                  n="puzzle-piece  pe-2"
                />{" "}
                Does HubSpot integrate with other tools?
              </MDBTypography>
              <p>
                Yes, HubSpot integrates with a wide variety of third-party tools
                and platforms, including Salesforce, Slack, WordPress, Zapier,
                and more, allowing seamless data flow and extended
                functionality.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon
                  fas
                  icon="hands-helping  pe-2"
                  style={{ color: "#141414" }}
                />{" "}
                What kind of support does HubSpot offer?
              </MDBTypography>
              <p>
                HubSpot provides several support options, including a
                comprehensive knowledge base, community forums, email support,
                and phone support. Premium support is also available for
                customers on higher-tier plans.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon
                  fas
                  i
                  style={{ color: "#141414" }}
                  con="mobile-alt  pe-2"
                />{" "}
                Is there a mobile app for HubSpot?
              </MDBTypography>
              <p>
                Yes, HubSpot offers a mobile app for both iOS and Android
                devices, allowing users to manage contacts, deals, tasks, and
                more on the go.
              </p>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography
                tag="h6"
                style={{ color: "#141414" }}
                className="mb-3 "
              >
                <MDBIcon style={{ color: "#141414" }} fas icon="book  pe-2" />{" "}
                How do I get started with HubSpot?
              </MDBTypography>
              <p>
                To get started with HubSpot, you can sign up for a free account
                on their website. The free plan provides access to basic CRM
                features, email marketing tools, and other resources to help you
                explore the platform.
              </p>
            </MDBCol>
          </MDBRow>
        </section>
          </MDBContainer>
          
          <Footer />
    </div>
  );
}

export default FAQ