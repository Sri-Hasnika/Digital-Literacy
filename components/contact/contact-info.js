"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@digitalliteracy.org", "support@digitalliteracy.org"]
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564086!2d-122.08374688447536!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614308918936!5m2!1sen!2sus"
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