import React from "react";
import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import * as Constants from "../../../utils/Constant";

const PREFIX = "Header";

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled("div")(() => ({
  [`&.${classes.root}`]: {
    maxHeight: "6.4rem",
    minHeight: "6.4rem",
  },
}));

function Header() {
  const navigate = useNavigate();
  const handleHeaderNavLinkClick = (routename) => {
    switch (routename) {
      case "info":
        return navigate("/");
      case "home":
        return navigate("/home");

      default:
        navigate("/");
    }
  };
  const location = useLocation();

  return (
    <Root className={classes.root}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "common.black",
        }}
      >
        <Toolbar sx={{ minHeight: "6.4rem", maxHeight: "6.4rem" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            flexWrap="nowrap"
            sx={{ padding: "0 5rem" }}
          >
            <Grid
              container
              item
              xs="auto"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="nowrap"
              flex="1 0 0"
            >
              {/* <img
                data-testid="logo"
                src={VCheck}
                width={34}
                height={40}
                alt="logo"
              /> */}
              <Typography
                variant="subtitle1"
                noWrap
                sx={{
                  lineHeight: "32px",
                  fontSize: "32px",
                  color: "common.white",
                  minWidth: "13.2rem",
                }}
              >
                <b>{Constants.PORTAL_NAME}</b>
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs="auto"
              flexWrap="nowrap"
              flex="6 0 0"
              justifyContent="center"
              alignItems="center"
            >
              <Link
                data-testid="info"
                underline="hover"
                component="button"
                sx={{
                  color: "common.white",
                  lineHeight: "20px",
                  fontSize: "16px",
                  marginRight: "1.5rem",
                  height: "32px",
                }}
                onClick={() => handleHeaderNavLinkClick("info")}
                className={`top-menu ${
                  location.pathname === "/" || location.pathname === "/info"
                    ? "active-menu"
                    : ""
                }`}
              >
                <b>Info</b>
              </Link>
              <Link
                data-testid="home"
                underline="hover"
                component="button"
                sx={{
                  color: "common.white",
                  lineHeight: "20px",
                  fontSize: "16px",
                  marginRight: "3rem",
                  height: "32px",
                }}
                onClick={() => handleHeaderNavLinkClick("home")}
                className={`top-menu ${
                  location.pathname == "/home" ? "active-menu" : ""
                }`}
              >
                <b>Home</b>
              </Link>
            </Grid>
            <Grid
              container
              item
              xs="auto"
              justifyContent="flex-end"
              flexWrap="nowrap"
              flex="0 1 auto"
              sx={{ minWidth: "13.8rem" }}
              alignItems="center"
            >
              <Link
                underline="hover"
                sx={{
                  color: "common.white",
                  lineHeight: "20px",
                  fontSize: "16px",
                  marginRight: "1.5rem",
                }}
                href="#"
              >
                <b>Sign Out</b>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default Header;
