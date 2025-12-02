import { LiquidGlassCard } from "./liquid-glass";
import { TextEffect } from "./motion-primitives/text-effect";

const Hero = () => {
  return (
    <section className="mt-16 relative">
      {/* <!-- Gradients --> */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-linear-to-r from-blue-300/50 to-blue-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-linear-to-tl from-teal-50 via-teal-100 to-teal-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      {/* <!-- End Gradients --> */}

      <div className="p-4 sm:p-6 lg:p-8 relative">
        <div className="p-2 shadow-xl shadow-green-300 rounded-3xl bg-white/50">
          <div className="h-120 md:h-[80dvh] flex flex-col bg-[url('/hero/hero.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl">
            <div className="mt-auto px-5 pb-5 md:px-10 md:pb-10">
              <LiquidGlassCard
                glowIntensity="sm"
                shadowIntensity="sm"
                borderRadius="12px"
                blurIntensity="lg"
                draggable
                className="p-4 w-fit max-md:mx-auto"
              >
                <TextEffect
                  per="word"
                  preset="fade"
                  as="h1"
                  className="text-xl md:text-3xl lg:text-7xl text-neutral-100 relative"
                >
                  Decades of Steel. Unmatched Quality
                </TextEffect>
              </LiquidGlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
