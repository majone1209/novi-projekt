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
import ProgressbarPage from "./features/progress-bar/progressbarpage";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select-page/select-page";
import Animals from "./features/animals/animals";
import AnimalCreate from "./features/animals/animal-create";
import AnimalEdit from "./features/animals/animal-edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressbarPage />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />

          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<AnimalCreate />} />
          <Route path="animals/:animalId" element={<AnimalEdit />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
