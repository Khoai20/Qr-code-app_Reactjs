import React from "react";
import { Box, Card, CardContent, Tab, Tabs, useTheme } from "@mui/material";
import GeneratorScreen from "./Generator";
import ScannerScreen from "./Scanner";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const PageLayout = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card
      sx={{ width: "50%", margin: "2rem auto !important", maxWidth: "600px" }}
    >
      <Tabs
        sx={{ background: "#4473ff" }}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Generator" {...a11yProps(1)} />
        <Tab label="Scanner" {...a11yProps(1)} />
      </Tabs>
      <CardContent>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GeneratorScreen />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ScannerScreen />
        </TabPanel>
      </CardContent>
    </Card>
  );
};

export default PageLayout;
