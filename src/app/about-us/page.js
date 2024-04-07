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
      <div className="flex flex-col items-center p-12 text-7xl">About Us</div>
      <div className="flex flex-col p-12 text-2xl">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to FInserve, your premier Indian
        training and consulting firm specializing in finance and banking
        solutions. At FInserve, we are dedicated to empowering individuals and
        institutions to effectively manage their personal and corporate
        finances, ensuring a secure and prosperous financial future.
      </div>
      <div className="flex flex-col p-12 text-2xl">
        <p className="text-2xl font-bold">
          Our comprehensive range of services covers a wide spectrum of
          financial aspects, including:
        </p>
        <ul>
          <br />
          <li>
            <p className="text-2xl font-bold">Personal Finance Management:</p>{" "}
            We provide expert guidance on managing personal finances, including
            planning for retirement, budgeting, and wealth management.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Corporate Finance Solutions:</p>{" "}
            Our team offers insightful advice on insurance products to help
            safeguard you and your loved ones against unforeseen events.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Tax Planning:</p> With our
            expertise in tax laws and regulations, we assist clients in
            optimizing their tax liabilities while remaining compliant with the
            law.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Real Estate Investments:</p>{" "}
            Whether you&apos;re looking to buy, sell, or invest in real estate,
            we offer tailored solutions to maximize returns and minimize risks.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Stock Market Strategies:</p> Our
            seasoned professionals provide invaluable insights into navigating
            the complexities of the stock market, helping clients make informed
            investment decisions.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Credit Management:</p> We help
            individuals and businesses build and maintain healthy credit
            profiles, enabling access to favorable lending terms and financial
            opportunities.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Loans and Financing:</p> Our
            consultancy services cover a wide range of loan products, ensuring
            clients secure the most suitable financing options for their needs.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">
              Private Equity and Hedge Funds:
            </p>{" "}
            FInserve offers expert guidance on alternative investment
            opportunities, including private equity and hedge funds, to
            diversify portfolios and enhance returns.
          </li>
          <br />
          <li>
            <p className="text-2xl font-bold">Other Investments:</p> From mutual
            funds to commodities, we provide comprehensive advice on various
            investment avenues to help clients achieve their financial goals.
          </li>
          <br />
        </ul>

        <br />

        <p className="">
          With a track record of successfully serving over 2000 clients
          globally, FInserve is committed to delivering personalized solutions
          tailored to each client&rsquo;s unique needs and objectives.
          Currently, we have over 100 active clients who rely on our expertise
          to navigate the ever-changing financial landscape with confidence.
        </p>
        <br />
        <p className="">
          Whether you&rsquo;re an individual seeking to build wealth or an
          institution aiming to optimize financial strategies, FInserve is your
          trusted partner for achieving financial success. Contact us today to
          embark on your journey towards a secure and prosperous future.
        </p>
      </div>

      <Footer />
    </main>
  );
}
