"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const methodologySteps = [
  {
    title: "Assessment",
    description: "We begin by understanding the specific needs and challenges of each community.",
    points: [
      "Community surveys and interviews",
      "Digital literacy level assessment",
      "Infrastructure evaluation",
      "Resource mapping"
    ]
  },
  {
    title: "Customization",
    description: "Programs are tailored to meet the unique requirements of each community.",
    points: [
      "Curriculum adaptation",
      "Local language support",
      "Cultural context integration",
      "Flexible learning schedules"
    ]
  },
  {
    title: "Implementation",
    description: "We use a multi-faceted approach to deliver our programs effectively.",
    points: [
      "Hands-on workshops",
      "Online learning modules",
      "Peer learning groups",
      "Practical projects"
    ]
  },
  {
    title: "Support",
    description: "Ongoing support ensures sustainable learning outcomes.",
    points: [
      "Technical assistance",
      "Mentorship programs",
      "Community forums",
      "Progress tracking"
    ]
  }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to ensuring effective digital literacy education
            and sustainable community impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}