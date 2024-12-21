"use client";

import { motion } from "framer-motion";
import ResourceHub from "@/components/resources/resource-hub";
import FAQ from "@/components/resources/faq";

export default function Resources() {
  return (
    <div className="min-h-screen pt-20">
      <ResourceHub />
      <FAQ />
    </div>
  );
}