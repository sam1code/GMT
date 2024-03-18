"use client";
import React from "react";
import Header from "@/components/landing/header/page";
import MainStarter from "@/components/landing/main-starter/page";
import WhyUs from "@/components/landing/why-us/page";
import Plan from "@/components/landing/plan/page";
import Team from "@/components/landing/team/page";
import Subscribe from "@/components/landing/subscribe/page";
import Footer from "@/components/landing/footer/page";
import Services from "@/components/landing/services/Services";
import Clients from "@/components/landing/clients/page";

export default function Home() {
  return (
    <main
      className=""
      style={{
        backgroundColor: "#FEFEFE",
        overflowX: "hidden",
      }}
    >
      <Header />
      <MainStarter /> {/* Done */}
      <Services />
      <WhyUs />
      <Plan />
      <Team />
      <Clients />
      <Subscribe />
      <Footer />
    </main>
  );
}
