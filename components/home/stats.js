"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, number: 50000, label: "Students Reached" },
  { id: 2, number: 1000, label: "Communities Served" },
  { id: 3, number: 500, label: "Digital Centers" },
  { id: 4, number: 95, label: "Success Rate" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  suffix={stat.id === 4 ? "%" : "+"}
                />
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}