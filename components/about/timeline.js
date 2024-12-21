"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2018",
    title: "Initiative Launch",
    description: "Started with 5 pilot communities and 100 students."
  },
  {
    year: "2019",
    title: "Program Expansion",
    description: "Expanded to 50 communities and launched online learning platform."
  },
  {
    year: "2020",
    title: "Digital Response",
    description: "Adapted to remote learning, reaching 1000+ students virtually."
  },
  {
    year: "2021",
    title: "Partnership Growth",
    description: "Established partnerships with major tech companies and universities."
  },
  {
    year: "2022",
    title: "Research Impact",
    description: "Published groundbreaking research on digital literacy impact."
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Received international awards for community impact."
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tracking our progress in bridging the digital divide and empowering communities.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <span className="text-primary font-bold">{event.year}</span>
                    <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
                    <p className="text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}