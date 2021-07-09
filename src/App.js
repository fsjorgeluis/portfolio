import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import Navbar from "./components/Nabvar";
import About from "./components/About/";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Personality from "./components/Personality";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Internationalization from './context/i18n-context';

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
  const [language, setLanguage] = useState("english");
  const value = { language, setLanguage };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let nativeLang = null;
    if (language === 'english') nativeLang = 'en';
    if (language === 'español') nativeLang = 'es';
    i18n.changeLanguage(nativeLang);
  }, [language, i18n]);

  return (
    <MuiThemeProvider theme={theme}>
      <Internationalization.Provider value={value}>
        <div className={classes.root}>
          <Navbar />
          <About id="about" dark={true} />
          <Personality title={t('personality.title')} id="aptitudes" dark={false} />
          {/* <Personality title="My Personality" id="aptitudes" dark={false} /> */}
          <Skills title={t('skills.title')} id="skills" dark={false} />
          {/* <Skills title="My coding skills" id="skills" dark={false} /> */}
          <Works title={t('works.title')} id="jobs" dark={true} />
          {/* <Works title="My work" id="jobs" dark={true} /> */}
          <Contact title={t('contact.title')} id="contact" dark={false} />
          {/* <Contact title="Get in touch" id="contact" dark={false} /> */}
          <Footer dark={true} />
        </div>
      </Internationalization.Provider>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default App;
