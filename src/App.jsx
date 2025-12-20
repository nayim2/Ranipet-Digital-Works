import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Cursor from "./Components/Cursor/Cursor";
import WhatsAppButton from "./Components/WhatsApp/WhatsAppButton";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Results from "./Components/Results/Results";
import MarketingAudit from "./Components/MarketingAudit/MarketingAudit";
import Services from "./Components/Services/Services";
import Clients from "./Components/Clients/Clients";
import RiskFree from "./Components/RiskFree/RiskFree";
import SmmBanner from "./Components/Services/SocialMediaMarketing/Smm";
import SocialAgency from "./Components/Services/SocialMediaMarketing/SocialAgency";
import SocialProfit from "./Components/Services/SocialMediaMarketing/SocialProfit";
import SocialWorks from "./Components/Services/SocialMediaMarketing/SocialWorks";
import SmmLead from "./Components/Services/SocialMediaMarketing/SmmLead";
import SmmCaseStudy from "./Components/Services/SocialMediaMarketing/SmmCaseStudy";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import OverView from "./Components/CaseStudy/OverView";
import SeoBanner from "./Components/Services/Seo/SeoBanner";
import SeoAgency from "./Components/Services/Seo/SeoAgency";
import SeoProfit from "./Components/Services/Seo/SeoProfit";
import SeoWorks from "./Components/Services/Seo/SeoWorks";
import SeoLead from "./Components/Services/Seo/SeoLead";
import Solutionss from "./Components/CaseStudy/Solutionss";
import Outputs from "./Components/CaseStudy/Outputs";
import ContactSection from "./Components/ContactSection/ContactSection";
import RegisterForm from "./Components/ContactSection/RegisterForm";
import ScrollToTop from "./Components/Home/ScrollToTop";
import Result from "./Components/Results/Result";

const App = () => {
  return (
    <div>
    <ScrollToTop />
      <Navbar />
      <Cursor />
      <WhatsAppButton />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <RiskFree />
              <Services />
              <Clients />
              <Results />
              <MarketingAudit />

            
            </>
          }
        />

        <Route
          path="/services/social-media"
          element={
            <>
              <SmmBanner />
              <SocialAgency />
              <SocialProfit />
              <SocialWorks />
              <SmmLead />
              <SmmCaseStudy />
            </>
          }
        />

        <Route
          path="/services/seo"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />



         <Route
          path="/services/digital-marketing"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />



        <Route
          path="/services/branding"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />


        <Route
          path="/services/content-marketing"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />


        <Route
          path="/services/web-development"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />

        
        <Route
          path="/services/app-development"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />


          <Route
          path="/services/media-analytics"
          element={
            <>
              <SeoBanner />
              <SeoAgency />
              <SeoProfit />
              <SeoWorks />
              <SeoLead />
              <SmmCaseStudy />
            </>
          }
        />



        <Route
          path="/case-study"
          element={
            <>
              <CaseStudy />
              <OverView />
              <Solutionss />
              {/* <Solution /> */}
              <Outputs />
              <SmmCaseStudy />
            </>
          }
        />

        <Route
          path="/form"
          element={
            <>
              <RegisterForm />
            </>
          }
        />
        
      </Routes>

        <ContactSection />

        
    </div>
  );
};

export default App;
