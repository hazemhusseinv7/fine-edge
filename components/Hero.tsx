import { getHeroData } from "@/lib/sanity/queries";
import Aurora from "./Aurora";
import { LiquidGlassCard } from "./liquid-glass";
import { TextEffect } from "./motion-primitives/text-effect";
import { getLocale } from "next-intl/server";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";

const Hero = async () => {
  const locale = await getLocale();
  const data: HeroType | null = await getHeroData(locale);

  const img = urlFor(data?.image).url();
  const badge = urlFor(data?.certificateBadge).url();

  return (
    <section className="mt-16 relative">
      <Aurora
        colorStops={["#46ecd5", "#5ee9b5", "#8ec5ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="p-4 sm:p-6 lg:p-8 relative">
        <div className="p-2 shadow-xl shadow-neutral-200 rounded-3xl bg-white/50">
          <div
            className="h-120 md:h-[80dvh] flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="mt-auto px-5 pb-22 lg:pb-5 md:px-10 md:pb-10">
              <LiquidGlassCard
                glowIntensity="sm"
                shadowIntensity="sm"
                borderRadius="12px"
                blurIntensity="lg"
                draggable
                className="p-4 w-fit max-md:mx-auto"
              >
                {data?.title && (
                  <TextEffect
                    per="word"
                    preset="fade"
                    as="h1"
                    className="text-xl md:text-3xl lg:text-7xl text-neutral-100 font-medium relative"
                  >
                    {data?.title}
                  </TextEffect>
                )}
              </LiquidGlassCard>
            </div>
          </div>
        </div>
        <Image
          className="size-32 lg:size-50 absolute -bottom-8 end-1 lg:end-2 z-20"
          src={badge}
          width={200}
          height={200}
          alt="Certificate Badge"
        />
      </div>
    </section>
  );
};

export default Hero;
