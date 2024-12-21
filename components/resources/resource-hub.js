"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Video, Book, Download } from "lucide-react";

const resources = [
  {
    title: "Digital Basics Guide",
    type: "PDF",
    category: "Guides",
    description: "Complete guide to basic computer and internet usage.",
    icon: FileText,
    downloadUrl: "https://unesdoc.unesco.org/in/rest/annotationSVC/DownloadWatermarkedAttachment/attach_import_6396a9f3-da0b-4c56-adbe-4d3578ddbd1d?_=389207eng.pdf&to=38&from=1#pdfjs.action=download"
  },
  {
    title: "Online Safety Tutorial",
    type: "Video",
    category: "Tutorials",
    description: "Learn about internet safety and cybersecurity basics.",
    icon: Video,
    downloadUrl: "https://example.com/online-safety-tutorial.mp4"
  },
  {
    title: "Digital Skills Workbook",
    type: "PDF",
    category: "Workbooks",
    description: "Practice exercises for essential digital skills.",
    icon: Book,
    downloadUrl: "https://example.com/digital-skills-workbook.pdf"
  },
  {
    title: "Programming 101",
    type: "PDF",
    category: "Guides",
    description: "Beginner's guide to programming concepts and syntax.",
    icon: FileText,
    downloadUrl: "https://example.com/programming-101.pdf"
  },
  {
    title: "Data Privacy Essentials",
    type: "Video",
    category: "Tutorials",
    description: "Essential tips for protecting your data online.",
    icon: Video,
    downloadUrl: "https://example.com/data-privacy-essentials.mp4"
  },
  {
    title: "Excel Skills Workbook",
    type: "PDF",
    category: "Workbooks",
    description: "Exercises to master Excel formulas and functions.",
    icon: Book,
    downloadUrl: "https://example.com/excel-skills-workbook.pdf"
  },
  {
    title: "Web Development Basics",
    type: "PDF",
    category: "Guides",
    description: "Step-by-step guide to starting with web development.",
    icon: FileText,
    downloadUrl: "https://example.com/web-development-basics.pdf"
  },
  {
    title: "Cybersecurity Best Practices",
    type: "Video",
    category: "Tutorials",
    description: "Video tutorial on staying secure in a digital world.",
    icon: Video,
    downloadUrl: "https://example.com/cybersecurity-best-practices.mp4"
  }
];

const categories = ["All", "Guides", "Tutorials", "Workbooks"];

export default function ResourceHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Resource Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our collection of digital literacy resources, tutorials, and guides.
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <Input
            type="search"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
          
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <resource.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{resource.type}</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
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
