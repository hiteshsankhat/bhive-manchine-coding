import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import SpaceOverview from "./components/SpaceOverview";
import DownloadSection from "./components/DownloadSection";
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  return (
    <div className="font-inter">
      <Header />
      <HeroSection />
      <Features />
      <SpaceOverview />
      <DownloadSection />
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © Copyright 2024. Bhive Private Limited.
      </footer>
    </div>
  );
};

export default App;
