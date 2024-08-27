import React from 'react'
import Navbar from '../Components/Navb'
import { Grid } from '@mui/material'
import img1 from '../assets/img1.png'
import HexGrid from '../Components/Hive';
import HiveGrid from '../Components/Hive';
import FeatureGrid from '../Components/Hive';
import Book from '../Components/Book';
import bookbg from "../assets/bookbg.png"
import testbg from "../assets/testomials.png"
import { MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import BlogCard from '../Components/BlogCard';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div style={{ backgroundColor: "#F7F2E7" }} className="sora-nrml">
      <Grid container style={{  backgroundColor: "#F7F2E7" }}>
        <Grid xs={12} md={6} lg={6}>
          <div className="sales-intelligence-container" style={{marginTop:"5%"}}>
            <h1>
              Join the{" "}
              <span className="forest-green">Sales Intelligence Hive</span>{" "}
              <span role="img" aria-label="honeybee">
                🐝
              </span>
              <br />
              dedicated to <span className="highlight-orange">
                HubSpot
              </span>{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </h1>
            <p className="subtext">
              Collect contacts and companies from anywhere: LinkedIn, the web,
              ... and even HubSpot.
            </p>
            <p className="cta">
              <strong>Connect to the hive, sell more.</strong>
            </p>
            <button className="cta-button">Discover Our Offers</button>
          </div>
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={img1} style={{  width: "50%" }} />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <FeatureGrid />
        </Grid>
        <Grid xs={12} md={12} lg={12}>
          <Book />
        </Grid>

        <Grid
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundImage: `url(${testbg})` }}
        >
          <MDBContainer className="my-5">
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              `` Buzz About HiveIn: Transforming Businesses with HubSpot
              Excellence``
            </h2>
            <MDBCarousel showControls dark fade>
              <MDBContainer>
                <MDBCarouselItem className="active text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    className="hexagon-image"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">Maria Kate</h5>
                      <p>Photographer</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus et deleniti nesciunt sint eligendi reprehenderit
                        reiciendis, quibusdam illo, beatae quia fugit
                        consequatur laudantium velit magnam error. Consectetur
                        distinctio fugit doloremque.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>

                <MDBCarouselItem className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                    alt="avatar"
                    className="hexagon-image"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">John Doe</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus et deleniti nesciunt sint eligendi reprehenderit
                        reiciendis.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>

                <MDBCarouselItem className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt="avatar"
                    className="hexagon-image"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">Anna Deynah</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus et deleniti nesciunt sint eligendi reprehenderit
                        reiciendis, quibusdam illo, beatae quia fugit
                        consequatur laudantium velit magnam error. Consectetur
                        distinctio fugit doloremque.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>
              </MDBContainer>
            </MDBCarousel>
          </MDBContainer>
        </Grid>

        <Grid xs={12} md={12} lg={12} container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "5%",
            }}
          >
            <div
              style={{
                textAlign: "center",
                position: "relative",
                display: "inline-block",
              }}
            >
              <h2 style={{ marginBottom: "1.5rem" }}>
                le blog de la Sales Intelligence
              </h2>
              {/* Curved underline */}
              <div
                style={{
                  position: "absolute",
                  width: "50%" /* Adjust width as needed */,
                  height: "5px" /* Adjust height for thickness */,
                  bottom:
                    "-10px" /* Adjust vertical position of the underline */,
                  left: "25%" /* Center the underline */,
                  background:
                    "linear-gradient(90deg, #3d3d3d 50%, #F5B942 50%)",
                  borderRadius: "50%",
                }}
              ></div>
            </div>{" "}
          </Grid>
          <Grid
            xs={12}
            md={4}
            lg={4}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BlogCard />
          </Grid>
          <Grid
            xs={12}
            md={4}
            lg={4}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BlogCard />
          </Grid>{" "}
          <Grid
            xs={12}
            md={4}
            lg={4}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BlogCard />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home