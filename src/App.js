import { useContext } from "react";
import About from "./component/about/About";

import Contact from "./component/contact/Contact";
import Intro from "./component/intro/Intro";
import ProductList from "./component/productList/ProductList";
import Toggle from "./component/toggle/Toggle";

import { ThemeContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillList from "./component/skilllist/SkillList";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle/>
     <Intro/>
     <About/>
     <ProductList/>
     <SkillList/>
     <Contact/> 
    </div>
  );
};

export default App;