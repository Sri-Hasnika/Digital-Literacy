"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 5551234567", "+91 5557654321"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contactdigitalliteracy@gmail.com", "supportdigitalliteracy@gmail.com"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <item.icon className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail) => (
                  <p key={detail} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">Find Us</h3>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7608.689546764641!2d78.38282767439179!3d17.538764398428086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sus!4v1734784126182!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}