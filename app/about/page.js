"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/about/timeline";
import Team from "@/components/about/team";
import Mission from "@/components/about/mission";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <Mission />
      <Timeline />
      <Team />
    </div>
  );
}