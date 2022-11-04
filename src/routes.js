import Explanation from "pages/Explanation";
import Predict from "pages/Predict";

// @mui material components
import Icon from "@mui/material/Icon";

// Pages

const routes = [
  {
    name: "explanation",
    icon: <Icon>dashboard</Icon>,
    route: "/explanation",
    component: <Explanation />,
  },
  {
    name: "predict",
    icon: <Icon>accessibility</Icon>,
    route: "/predict",
    component: <Predict />,
  },
];

export default routes;
