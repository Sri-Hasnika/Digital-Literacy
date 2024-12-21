"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const impactData = [
  {
    year: 2018,
    students: 100,
    communities: 5,
    employment: 20
  },
  {
    year: 2019,
    students: 500,
    communities: 25,
    employment: 150
  },
  {
    year: 2020,
    students: 2000,
    communities: 100,
    employment: 600
  },
  {
    year: 2021,
    students: 5000,
    communities: 250,
    employment: 1500
  },
  {
    year: 2022,
    students: 10000,
    communities: 500,
    employment: 3000
  },
  {
    year: 2023,
    students: 50000,
    communities: 1000,
    employment: 15000
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Measuring our progress in creating positive change through digital literacy education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Growth Over Time</h3>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={impactData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="hsl(var(--chart-1))" name="Students Reached" />
                      <Bar dataKey="communities" fill="hsl(var(--chart-2))" name="Communities Served" />
                      <Bar dataKey="employment" fill="hsl(var(--chart-3))" name="Employment Outcomes" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}