import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";
import Features from "@/components/home/features";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}