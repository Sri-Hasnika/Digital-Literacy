"use client";

import { motion } from "framer-motion";
import Programs from "@/components/solutions/programs";
// import Impact from "@/components/solutions/impact";
import Methodology from "@/components/solutions/methodology";

export default function Solutions() {
  return (
    <div className="min-h-screen pt-20">
      <Programs />
      <Methodology />
      {/* <Impact /> */}
    </div>
  );
}