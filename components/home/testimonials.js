"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "The Digital Literacy Initiative has transformed our community. Our children now have access to world-class educational resources.",
    author: "Sarah Johnson",
    role: "Community Leader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    quote: "Thanks to this program, I learned essential digital skills that helped me start my own online business.",
    author: "Michael Chen",
    role: "Program Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    quote: "The initiative's impact on rural education is remarkable. It's bridging the digital divide one community at a time.",
    author: "Dr. Emily Rodriguez",
    role: "Education Researcher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about how the Digital Literacy Initiative
            has impacted their lives and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
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