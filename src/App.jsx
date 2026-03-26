import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ThankYouPage } from "./pages/ThankYouPage";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/diensten/:slug" element={<ServiceDetailPage />} />
        <Route path="/projecten" element={<ProjectsPage />} />
        <Route path="/projecten/:slug" element={<ProjectDetailPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bedankt" element={<ThankYouPage />} />
      </Route>
    </Routes>
  );
}

export default App;
