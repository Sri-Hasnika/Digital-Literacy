"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe that digital literacy is a fundamental right in today's world. Our mission is to empower rural communities with the digital skills they need to thrive in the modern economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
              alt="Team Meeting"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Why Digital Literacy Matters</h2>
            <p className="text-muted-foreground mb-6">
              In an increasingly digital world, the ability to use technology effectively has become essential for education, employment, and daily life. However, many rural communities lack access to digital resources and training.
            </p>
            <p className="text-muted-foreground">
              Through our initiative, we're working to bridge this digital divide by providing comprehensive training, resources, and support to communities that need it most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}