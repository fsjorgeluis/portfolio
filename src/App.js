import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import Navbar from "./components/Nabvar";
import About from "./components/About/";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Personality from "./components/Personality";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF7043",
    },
    secondary: {
      main: "#2D1E2F",
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About id="about" dark={true} />
        <Personality title="My Personality" id="aptitudes" dark={false} />
        <Skills title="My coding skills" id="skills" dark={false} />
        <Works title="My work" id="jobs" dark={true} />
        <Contact title="Get in touch" id="contact" dark={false} />
        <Footer dark={true} />
      </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default App;
