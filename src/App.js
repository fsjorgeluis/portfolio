import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Nabvar";
import About from "./components/About/";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="About me" id="about" dark={true} />
      <Skills title="My coding skills" id="skills" dark={false} />
      <Works title="My work" id="jobs" dark={true} />
      <Contact title="Get in touch" id="contact" dark={false} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default App;
