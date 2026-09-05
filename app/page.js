'use client'
import Hero from "@/app/components/Hero";
import Header from "@/app/components/shared/Header";
import Features from "@/app/components/Features";
import About from "@/app/components/About";
import Features2 from "@/app/components/Features2";
import DownloadCTA from "@/app/components/Download";
import FAQ from "@/app/components/FAQ";
import Screenshots from "@/app/components/ScreenShots";
import Pricing from "@/app/components/Pricing";
import Support from "@/app/components/Support";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Features2 />
      <DownloadCTA />
      <FAQ />
      <Screenshots />
      <Pricing />
      <Support />
      <Footer />
    </>
  );
}
