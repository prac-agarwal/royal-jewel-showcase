import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { MomentumCarousel } from "@/components/site/MomentumCarousel";
import { Collections } from "@/components/site/Collections";
import { Heritage } from "@/components/site/Heritage";
import { CraftTimeline } from "@/components/site/CraftTimeline";
import { CustomOrderForm } from "@/components/site/CustomOrderForm";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jewels of the Desert Palace" },
      {
        name: "description",
        content:
          "An editorial catalogue of heirloom Rajasthani bridal jewellery — kundan, polki and meenakari pieces handcrafted in the desert palaces of Rajasthan.",
      },
      { property: "og:title", content: "Jewels of the Desert Palace" },
      {
        property: "og:description",
        content:
          "An editorial catalogue of heirloom Rajasthani bridal jewellery handcrafted in Jaipur.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory text-ink min-h-screen">
      <Hero />
      <MomentumCarousel />
      <Collections />
      <Heritage />
      <CraftTimeline />
      <CustomOrderForm />
      <SiteFooter />
    </main>
  );
}
