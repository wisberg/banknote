import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Converter from "./components/Converter";
import News from "./components/News";
import Contact from "./components/Contact";
import SectionTemplate from "./components/SectionTemplate";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BankNoteImg1 from "./assets/BankNote_Img1.jpg";
import BankNoteImg2 from "./assets/BankNote_Img2.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Landing />
        <Converter />
        <SectionTemplate
          direction="left"
          imageSrc={BankNoteImg1}
          header="Explore Currency News on BankNote"
          content="Our intuitive search feature allows you to easily explore a vast collection of news stories related to currencies from around the globe. Simply enter your keywords or topics of interest, and let BankNote do the rest. Stay updated on major market fluctuations, learn about emerging digital currencies, or discover insightful analyses by leading financial experts. BankNote ensures that you never miss a beat when it comes to currency news."
          linkComponent="/news"
          linkText="Search Currency News"
        />
        <SectionTemplate
          direction="right"
          imageSrc={BankNoteImg2}
          header=" Get in Touch with BankNote"
          content="At BankNote, we value your feedback, questions, and suggestions. We're here to provide you with exceptional support and address any concerns you may have. Please feel free to contact us by following the page below."
          linkComponent="/contact"
          linkText="Contact BankNote"
        />
        <Footer />
      </div>
    ),
  },
  {
    path: "/news",
    element: (
      <div>
        <Header />
        <News />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
