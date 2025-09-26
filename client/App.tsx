import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Layout from "./components/layout/Layout";
import BuilderProvider from "./builder/BuilderProvider";
import BuilderPage from "./pages/BuilderPage";

const App = () => (
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BuilderProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/quiz/:sport" element={<Quiz />} />
              <Route path="/b/*" element={<BuilderPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BuilderProvider>
      </BrowserRouter>
    </TooltipProvider>
  </MotionConfig>
);

createRoot(document.getElementById("root")!).render(<App />);
