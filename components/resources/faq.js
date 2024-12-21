"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is digital literacy?",
    answer: "Digital literacy refers to the ability to use digital technology, communication tools, and networks to locate, evaluate, create, and communicate information. It includes basic computer skills, internet usage, and understanding digital safety."
  },
  {
    question: "Who can participate in your programs?",
    answer: "Our programs are open to all residents of rural communities, regardless of their current digital skill level. We offer courses for beginners through advanced learners."
  },
  {
    question: "How long do the programs take to complete?",
    answer: "Program duration varies depending on the course and skill level. Basic courses typically run for 4-8 weeks, while more advanced programs may take 12 weeks or longer."
  },
  {
    question: "Is there a cost to participate?",
    answer: "Most of our programs are offered free of charge to eligible participants from rural communities, thanks to our partnerships and funding support."
  },
  {
    question: "Do I need my own computer to participate?",
    answer: "While having access to a computer is helpful, we provide computer access at our digital centers for participants who need it. Some programs can also be accessed via smartphone."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our digital literacy programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}