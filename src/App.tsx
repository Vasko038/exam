import React, { Fragment, useState } from "react";
import { typeData } from "./components/Data";
import "./App.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { DataContext } from "./components/Context";
import Tabs from "@mui/material/Tabs";
import { AddCardPage } from "./pages/AddCard";
import { MyCardPage } from "./pages/MyCard";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import { cardData } from "./components/Data";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export function App() {
  const [value, setValue] = React.useState(0);
  const [cards, setCard] = useState(cardData);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const defaultTheme = createTheme();
  return (
    <Fragment>
      <ThemeProvider theme={defaultTheme}>
        <DataContext.Provider value={{ cards, setCard }}>
          <CssBaseline>
            <Container className="pt-5">
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  aria-label=" basic tabs example"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    border: "none",
                    marginBottom: 3,
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  <Tab
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      maxWidth: "100%",
                      display: "block",
                      textAlign: "left",
                      minWidth: "0",
                      padding: "10px 20px",
                      marginRight: "10px",
                      flex: 1,
                      textTransform: "none",
                      "&.Mui-selected": {
                        backgroundColor: "rgb(199, 154, 241)",
                        border: "2px solid purple",
                        color: "white",
                      },
                    }}
                    className="border rounded-2xl "
                    label={
                      <Box>
                        <AddCardIcon></AddCardIcon>
                        <Typography variant="body1">Add New Card</Typography>
                      </Box>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      textAlign: "left",
                      display: "block",
                      maxWidth: "100%",
                      minWidth: "0",
                      marginLeft: "10px",
                      padding: "10px 20px",
                      flex: 1,
                      textTransform: "none",
                      "&.Mui-selected": {
                        backgroundColor: "rgb(199, 154, 241)",
                        border: "2px solid purple",
                        color: "white",
                      },
                    }}
                    label={
                      <Box>
                        <CreditCardIcon></CreditCardIcon>
                        <Typography variant="body1">Add New Card</Typography>
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
                  <AddCardPage></AddCardPage>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <MyCardPage></MyCardPage>
                </CustomTabPanel>
              </Box>
            </Container>
          </CssBaseline>
        </DataContext.Provider>
      </ThemeProvider>
    </Fragment>
  );
}
export default App;
