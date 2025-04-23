import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ActionSelection from './pages/ActionSelection';
import ImportActionSelection from './pages/ImportActionSelection';
import IdentifyProduct from './pages/IdentifyProduct';
import ProductDescriptionForm from './pages/ProductDescriptionForm';
import ProductImageUpload from './pages/ProductImageUpload';
import ProductUrlUpload from './pages/ProductUrlUpload';
import HaveYourShippingCost from './pages/HaveYourShippingCost';
import BeforeCostSummary2 from './pages/BeforeCostSummary2';
import ShippingTypeSelection from './pages/ShippingTypeSelection';
import PackingTypeSelection from './pages/PackingTypeSelection';
import PackagingDetailsConfirmation from './pages/PackagingDetailsConfirmation';
import PackagingDetailsForm from './pages/PackagingDetailsForm';
import ShippingCarrierSelection from './pages/ShippingCarrierSelection';
import CostSummary2 from './pages/CostSummary2';
import CostSummary3 from './pages/CostSummary3';
import PackingListEstimation from './pages/PackingListEstimation';
import ShippingCostEstimates from './pages/ShippingCostEstimates';
import FinalCostSummary from './pages/FinalCostSummary';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import UserPanel from './pages/UserPanel';
import DocumentsNeeded from './pages/DocumentsNeeded';
import TestOpenAI from './pages/TestOpenAI';
import TestQwenApi from './pages/TestQwenApi';
import TestCurrencyConversion from './pages/TestCurrencyConversion';
import PrivacyPolicy from './pages/LegalPages/PrivacyPolicy';
import TermsOfService from './pages/LegalPages/TermsOfService';
import CookiePolicy from './pages/LegalPages/CookiePolicy';
import LegalNotice from './pages/LegalPages/LegalNotice';

export const LanguageContext = React.createContext<{
  language: string;
  setLanguage: (lang: string) => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

const paypalOptions = {
  clientId: "AYUnQGATcVuG422hLFcqk1GT6l70cfpMxEN5irEIuhttcYJLUokAkNl9Ftn9pGoKr_VuyJWNS4LL8UgB",
  currency: "USD",
  intent: "capture"
};

const App: React.FC = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      <PayPalScriptProvider options={paypalOptions}>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<ActionSelection />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogArticlePage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/legal-notice" element={<LegalNotice />} />
                
                {/* Main Application Routes */}
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/panel" element={<UserPanel />} />
                <Route path="/import-details" element={<ImportActionSelection />} />
                <Route path="/identify-product" element={<IdentifyProduct />} />
                <Route path="/product-description" element={<ProductDescriptionForm />} />
                <Route path="/product-image" element={<ProductImageUpload />} />
                <Route path="/product-url" element={<ProductUrlUpload />} />
                <Route path="/have-your-shipping-cost" element={<HaveYourShippingCost />} />
                <Route path="/before-cost-summary2" element={<BeforeCostSummary2 />} />
                <Route path="/shipping-type" element={<ShippingTypeSelection />} />
                <Route path="/packing-type" element={<PackingTypeSelection />} />
                <Route path="/packaging-confirmation" element={<PackagingDetailsConfirmation />} />
                <Route path="/packaging-details-form" element={<PackagingDetailsForm />} />
                <Route path="/shipping-carrier" element={<ShippingCarrierSelection />} />
                <Route path="/cost-summary3" element={<CostSummary3 />} />
                <Route path="/cost-summary2" element={<CostSummary2 />} />
                <Route path="/packing-list-estimation" element={<PackingListEstimation />} />
                <Route path="/shipping-cost-estimates" element={<ShippingCostEstimates />} />
                <Route path="/final-cost-summary" element={<FinalCostSummary />} />
                <Route path="/documents" element={<DocumentsNeeded />} />
                <Route path="/test-openai" element={<TestOpenAI />} />
                <Route path="/test-qwen" element={<TestQwenApi />} />
                <Route path="/test-currency" element={<TestCurrencyConversion />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </PayPalScriptProvider>
    </LanguageContext.Provider>
  );
};

export default App;