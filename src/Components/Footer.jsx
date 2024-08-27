import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/logo-H.png"
export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted "
      style={{ marginTop: "5%" }}
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom "
        style={{ background: "#3d3d3d" }}
      >
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "#F5B942" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="facebook-f" style={{ color: "#F5B942" }} />
          </a>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="twitter" style={{ color: "#F5B942" }} />
          </a>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="google" style={{ color: "#F5B942" }} />
          </a>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="instagram" style={{ color: "#F5B942" }} />
          </a>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="linkedin" style={{ color: "#F5B942" }} />
          </a>
          <a href="" className="me-4 text-reset" style={{ color: "#F5B942" }}>
            <MDBIcon fab icon="github" style={{ color: "#F5B942" }} />
          </a>
        </div>
      </section>

      <section className="" style={{ color: "#141414" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold " style={{marginTop:"-5%"}}>
                <img src={logo} alt="logo" style={{ width: "150px" }} />
              </h6>
              <p>
                HiveIn your platform for enhancing collaboration and
                productivity, offering tools and resources for efficient team
                management and project execution.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/logiciel" className="text-reset">
                  HiveIn
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  A propos
                </a>
              </p>
              <p>
                <a href="/pricings" className="text-reset">
                  Tarifs
                </a>
              </p>
              <p>
                <a href="/faq" className="text-reset">
                  Faq
                </a>
              </p>
              <p>
                <a href="/blog" className="text-reset">
                  Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
