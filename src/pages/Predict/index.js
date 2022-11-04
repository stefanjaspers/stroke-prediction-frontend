// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Predict() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // transparent
        dark
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      />
    </>
  );
}

export default Predict;
