import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlankPage from "./pages/BlankPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blank" element={<BlankPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
