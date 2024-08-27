import * as React from "react";


import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import bg from "../assets/pricingbg.png"
import Navb from "../Components/Navb";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";



export default function Blog() {
  return (
    <div className="sora-nrml" style={{ backgroundColor: "#F7F2E7" }}>
      <div className="background-container">
        <div className="text-overlay">
          <MDBCard
            className="text-white shadow-lg"
            style={{ backgroundColor: "#3d3d3d", borderRadius: "15px" }}
          >
            <MDBCardBody className="p-5">
              <MDBIcon
                fas
                icon="quote-left mb-4"
                size="2x"
                className="shadow-lg"
                style={{ color: "#F5B942" }}
              />

              <p className="lead">
                "Notre objectif est de permettre à vos commerciaux de s'épanouir
                en réussissant leurs objectifs professionnels et personnels au
                sein de votre équipe."
              </p>

              <hr />

              <div className="d-flex justify-content-center">
                <h4 className="mb-0" style={{ color: "#F5B942" }}>
                  Jimmy, CEO @ Charik
                </h4>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <div
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        <div
          style={{
            textAlign: "center",
            position: "relative",
            display: "inline-block",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem",marginTop:"22%" }}>
            le blog de la Sales Intelligence
          </h2>
          {/* Curved underline */}
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
        </div>{" "}
        <MDBRow
          className="row-cols-1 row-cols-md-4 g-4  p-1"
          style={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
        >
          <MDBCol>
            <BlogCard />
          </MDBCol>
          <MDBCol>
            <BlogCard />
          </MDBCol>
          <MDBCol>
            <BlogCard />
          </MDBCol>
          <MDBCol>
            <BlogCard />
          </MDBCol>
        </MDBRow>
      </div>

      <Footer />
    </div>
  );
}
