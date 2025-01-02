import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/components/Faq";
import Contact from "./pages/components/Contact";
import HelpLayout from "./pages/HelpLayout";

import ExSite from "./pages/ExSite";
// exSite Pages


// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Routes for the main website */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Nested ExSite Routes */}
      <Route path="exSite" element={<ExSite />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
