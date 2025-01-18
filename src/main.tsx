import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { ProfileContextProvider } from "./context/profile.context";
import ProjectDetail from "./pages/ProjectDetail";
import NotFoundPage from "./pages/ErrorPage/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProfileContextProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProfileContextProvider>
    </BrowserRouter>
  </StrictMode>
);
