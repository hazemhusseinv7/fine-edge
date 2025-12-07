import { getRiskAdvantageData } from "@/lib/sanity/queries";
import Card from "./Card";
import { getLocale } from "next-intl/server";
import { urlFor } from "@/lib/sanity/image";

const RiskAdvantageCards = async () => {
  const locale = await getLocale();
  const data: RiskAdvantageType | null = await getRiskAdvantageData(locale);

  const list = data?.cards.map((card) => ({
    title: card.title,
    description: card.description || [],
    image: urlFor(card.image.asset).url(),
  }));

  const title = data?.title;

  return (
    <section className="relative">
      <Card list={list} title={title} />
    </section>
  );
};

export default RiskAdvantageCards;
