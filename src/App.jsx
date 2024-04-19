import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider>
      <div className="">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}
