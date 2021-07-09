import { createContext } from "react";

const Internationalization = createContext({
    language: "english",
    setLanguage: () => { }
});

export default Internationalization;