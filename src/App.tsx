import { Route, Routes } from "react-router-dom";
import Button from "./components/button";
import Container from "./components/container";
import Devider from "./components/devider";
import Input from "./components/input";
import "./styles/styles.scss";
import Layout from "./components/layout";
import Home from "./features/home/home";
import NoMatch from "./features/no-match/no-match";
import Contact from "./features/contact/contact";
import Progressbar from "./features/progress-bar/progressbarpage";
import ProgressbarPage from "./features/progress-bar/progressbarpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressbarPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
