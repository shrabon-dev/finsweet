import ContactPage from "./component/pages/ContactPage";
import HomePage from "./component/pages/Home";
import PricngPage from "./component/pages/PricingPage";
import PrivacygPage from "./component/pages/PrivacyPage";
import FeaturePage from "./component/pages/FeaturePage";
import AboutPage from "./component/pages/AboutPage";

import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReadBlogPage from "./component/pages/ReadBlogPage";
import "slick-carousel/slick/slick.css";
import { BlogPage } from "./component/pages/Blog";
import { WorkPage } from "./component/pages/Work";
import { CaseStudyPage } from "./component/pages/CaseStudyPage";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/feature" element={<FeaturePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/read-blog" element={<ReadBlogPage />}></Route>
      <Route path="/price" element={<PricngPage />}></Route>
      <Route path="/privacy" element={<PrivacygPage />}></Route>
      <Route path="/contuct-us" element={<ContactPage />}></Route>
      <Route path="/work" element={<WorkPage />}></Route>
      <Route path="/case-study" element={<CaseStudyPage />}></Route>
    </Routes>
  </BrowserRouter>
  
  </>

  );
}

export default App;
