"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  reason: z.string().min(50, "Please provide at least 50 characters"),
});

export default function Apply() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
    },
  });

  async function onSubmit(values) {
    const { name, email, phone, reason } = values;

    try {
      // Replace these with your EmailJS credentials
      const serviceID = "service_sy6a4ei";
      const templateID = "template_hu62r1d";
      const userID = "iS2_RBSAL8gZJ_J8w";

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, { name, email, phone, reason }, userID);

      form.reset();
      alert.success("Application Submitted! We've sent your application details to the admin.");
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-background rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Apply Now</h1>
          <p className="text-muted-foreground mb-8">
            Join our Digital Literacy Initiative and help make a difference in rural
            communities. Fill out the form below to get started.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to join?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your interest in digital literacy..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}
