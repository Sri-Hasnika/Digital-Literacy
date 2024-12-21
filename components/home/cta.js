"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join our initiative and help bridge the digital divide in rural communities.
          Together, we can create a more inclusive digital future.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/apply">Apply Now</Link>
        </Button>
      </motion.div>
    </section>
  );
}