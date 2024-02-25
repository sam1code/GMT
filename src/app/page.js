"use client";
import React from "react";
import Header from "@/components/landing/header/page";
import MainStarter from "@/components/landing/main-starter/page";
import ProductsListing from "@/components/landing/product-listing/page";
import WhyUs from "@/components/landing/why-us/page";
import Clients from "@/components/landing/clients/page";
import Plan from "@/components/landing/plan/page";
import Team from "@/components/landing/team/page";
import Subscribe from "@/components/landing/subscribe/page";
import Footer from "@/components/landing/footer/page";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MainStarter />
      <WhyUs />
      <Clients />
      <Plan />
      <Team />
      <Clients />
      <Subscribe />
      <Footer />
    </main>
  );
}
