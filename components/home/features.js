"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Users, BookOpen, Award } from "lucide-react";

const features = [
  {
    title: "Digital Skills Training",
    description: "Comprehensive courses covering essential digital skills for the modern world.",
    icon: Laptop,
  },
  {
    title: "Community Engagement",
    description: "Building strong networks of digitally empowered communities.",
    icon: Users,
  },
  {
    title: "Educational Resources",
    description: "Access to high-quality learning materials and online resources.",
    icon: BookOpen,
  },
  {
    title: "Certification Programs",
    description: "Recognized certifications to validate digital literacy skills.",
    icon: Award,
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital literacy programs designed to empower rural communities
            with essential skills for the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full group relative overflow-hidden transition-transform transform hover:scale-105"
              >
                <CardHeader className="p-4">
                <feature.icon className="h-8 w-8 mb-4 text-primary transition-colors duration-500 group-hover:text-yellow-400"/>
                  <CardTitle
                    className="text-lg font-bold transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-l from-yellow-400 to-red-500"
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-muted-foreground overflow-hidden group-hover:text-white">
                    {feature.description}
                  </p>
                </CardContent>              
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}