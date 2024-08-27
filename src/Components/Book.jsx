import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBCardText,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import book1 from "../assets/book1.png"
import book from "../assets/book.png";
import bookbg from "../assets/bookbg.png"
import { Grid } from "@mui/material";
function Book() {
  return (
    <Grid
      container
      fluid
      className="my-5"
      style={{
        backgroundImage: `url(${bookbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
      }}
    >
      <Grid
        xs={12}
        md={6}
        lg={6}
        style={{
          textAlign: "center",
        }}
      >
        <img src={book} alt="" style={{ width: "70%" }} />
      </Grid>
      <Grid xs={12} md={6} lg={6} style={{}}>
        <MDBCol
          md="9"
          className="justify-content-center"
          style={{ marginTop: "15%" }}
        >
          <MDBCard
            className="card-custom pb-4"
            style={{ backgroundColor: "#F7F2E7" }}
          >
            <MDBCardBody className="mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <MDBTypography tag="h4" style={{ color: "#495057" }}>
                  Besoin d'une démo ?
                </MDBTypography>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0">
                  <MDBCardImage
                    style={{ width: "128px" }}
                    className="img-fluid rounded-circle border border-dark border-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                    alt="Generic placeholder image"
                    fluid
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <div className="d-flex flex-row align-items-center mb-2 justify-content-center">
                    <h4>Prendre Rendez-vous Avec Jimmy</h4>
                  </div>

                  <div>
                    <MDBBtn
                      style={{ backgroundColor: "#141414", color: "#F5B942" }}
                      rounded
                      block
                      size="lg"
                    >
                      <MDBIcon far icon="clock me-2" /> Accedez a son Agenda
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </Grid>
    </Grid>
  );
}

export default Book;
