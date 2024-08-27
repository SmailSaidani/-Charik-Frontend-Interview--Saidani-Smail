import React from "react";
import "../App.css"; // Import your custom styles
import { Box, Grid } from "@mui/material";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import logo from "../assets/logo.png"
import hublogo from "../assets/hubspotlogo.png"

function HiveInShowcase({stl}) {


  return (
    <Box style={{ width: "100%", height: "100%", marginTop: "2%" }} >
      <Grid xs={12} md={12} lg={12} container>
        <Grid
          xs={12}
          md={12}
          lg={12}
          style={{ textAlign: "ceter", alignItems: "center" }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Découvrez nos principales fonctionnalités</h1>

            <p style={{ opacity: "0.8" }}>
              Nos clients gagnent en moyenne 8h par mois en connectant Charik à
              hubSpot. Grâce à nos fonctionnalités avancées et souvent uniques à
              ce niveau d'intégration dans votre CRM préféré.
            </p>
          </div>
          <h6
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={hublogo}
              alt=""
              style={{ width: "64px", height: "62px" }}
            />
            Made for HubSpot la meilleure intégration que vous verrez avec
            HubSpot
          </h6>
        </Grid>

        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} md={2} lg={2} container>
            <Grid xs={12} md={12} lg={12} container>
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="search-dollar"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Search Companies
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Trouvez des sociétés sur la base de critères multiples.
                </p>
              </Grid>
            </Grid>

            <Grid xs={12} md={12} lg={12} container className="pr-mt">
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="cart-plus"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Add companies
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Ajoutez des sociétés en un clic.
                </p>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              md={12}
              lg={12}
              container
              style={{ marginTop: "10%" }}
            >
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="database"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Segment your CRM
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Segmentez votre base HubSpot avec des champs dédiés.
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} md={3} lg={3} style={{ textAlign: "center" }}>
            <img
              src={logo}
              style={{ marginTop: "-5%", width: "100%", padding: "3%" }}
            />
          </Grid>

          <Grid xs={12} md={2} lg={2} container>
            <Grid xs={12} md={12} lg={12} container>
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="ethernet"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Domain Finder
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Hubspot demande un nom de domaine. On le trouve pour vous.
                </p>
              </Grid>
            </Grid>

            <Grid xs={12} md={12} lg={12} container className="pr-mt">
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="search-plus"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Search Contacts
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Générez une liste de contacts depuis la fiche société.
                </p>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              md={12}
              lg={12}
              container
              style={{ marginTop: "10%" }}
            >
              <Grid xs={3} md={3} lg={3}>
                <MDBIcon
                  fas
                  icon="address-card"
                  style={{
                    background: "#F5B942",
                    fontSize: "40px",
                    color: "#141414",
                    borderRadius: "75%",
                    padding: "15%",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                />
              </Grid>
              <Grid xs={9} md={9} lg={9}>
                <p style={{ fontWeight: "bold", textAlign: "left" }}>
                  Add Contacts
                </p>
                <p
                  style={{
                    width: "100%",
                    marginTop: "-5%",
                    textAlign: "left",
                  }}
                >
                  Jetez vos claviers, ajouter un contact en un clic.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HiveInShowcase;
