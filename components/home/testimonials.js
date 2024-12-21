"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const surveyResponses = [
  {
    id: 1,
    quote: "Learning to use the internet has opened new opportunities for us. Now, I can help my children with their studies online.",
    author: "Sita Devi",
    role: "Homemaker",
    image: "https://www.indiaspend.com/h-upload/old_images/344720-62025.jpg",
  },
  {
    id: 2,
    quote: "This initiative taught me how to use a smartphone effectively. I can now stay connected with my relatives and access useful information.",
    author: "Ramu",
    role: "Farmer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMRaAilDsFiXFxHTyJkcF7Sl71nFcYX4pRg&s",
  },
  

];

export default function SurveyTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Survey Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the insights we gathered from our survey in the village, which inspired us to create this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {surveyResponses.map((response, index) => (
            <motion.div
              key={response.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-6 text-muted-foreground">{response.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={response.image}
                      alt={response.author}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{response.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {response.role}
                      </div>
                    </div>
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