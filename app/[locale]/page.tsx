import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import ReactLenis from "lenis/react";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import RiskAdvantageCards from "@/components/RiskAdvantageCards";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <ReactLenis root className="min-h-[200vh] overflow-hidden">
      <Hero />
      <RiskAdvantageCards />
      <AboutUs />
    </ReactLenis>
  );
}
