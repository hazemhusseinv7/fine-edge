import { getSettingsData, getAboutUsData } from "@/lib/sanity/queries";

import AboutUs from "@/components/AboutUs";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  const [settings, aboutUs] = await Promise.all([
    getSettingsData(),
    getAboutUsData(locale),
  ]);
  return (
    <main>
      <AboutUs settings={settings} aboutUs={aboutUs} />
    </main>
  );
}
