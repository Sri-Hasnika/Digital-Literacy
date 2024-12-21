"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Users, BookOpen, Award, Globe, Code, Video, Database } from "lucide-react";

const programs = [
  {
    title: "Basic Digital Skills",
    description: "Introduction to computers, internet, and basic software applications.",
    icon: Laptop,
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    title: "Online Safety",
    description: "Cybersecurity awareness and safe internet practices.",
    icon: Globe,
    duration: "2 weeks",
    level: "All Levels"
  },
  {
    title: "Digital Communication",
    description: "Email, video conferencing, and professional online communication.",
    icon: Video,
    duration: "3 weeks",
    level: "Beginner"
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital literacy programs designed to meet the needs of rural communities
            at every skill level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group relative overflow-hidden transition-transform transform hover:scale-105">
                <CardHeader>
                  <program.icon className="h-8 w-8 mb-4 text-primary duration-500 group-hover:text-yellow-400" />
                  <CardTitle className="transition-all duration-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-l from-yellow-400 to-red-500 transition-colors">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration: {program.duration}</span>
                    <span className="text-muted-foreground">Level: {program.level}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}