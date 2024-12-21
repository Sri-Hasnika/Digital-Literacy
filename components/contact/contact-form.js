"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  
  function onSubmit(values) {
    const emailParams = {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    };

   
    emailjs
      .send(
        "service_sy6a4ei",
        "template_qh13jjl", 
        emailParams,
        "iS2_RBSAL8gZJ_J8w" 
      )
      .then(
        (response) => {
          alert( "We'll get back to you as soon as possible.");

        },
        (error) => {
          toast({
            title: "Error",
            description: "There was an issue sending your message. Please try again.",
          });
        }
      );
      form.reset();
  }

  return (

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Message subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </Form>
    </motion.div>
  );
}
