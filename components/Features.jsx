"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileChartColumn, FileUser, ChartLine, FileChartLine } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FileChartColumn,
    title: "AI Quiz Generator",
    description: "Create personalized quizzes on any topic with our advanced AI engine that adapts to your knowledge level and learning pace.",
  },
  {
    icon: FileChartLine,
    title: "Learning Analytics",
    description: "Receive detailed performance analysis and personalized recommendations to improve your knowledge gaps with curated resources.",
  },
  {
    icon: FileUser,
    title: "AI Resume Builder",
    description: "Create professional resumes with AI assistance that highlights your strengths and matches industry standards for maximum impact.",
  },
  {
    icon: ChartLine,
    title: "Industry Analytics",
    description: "Get real-time insights into industry trends, in-demand skills, and job market analytics to stay competitive.",
  },
];

const Features = () => {
  return (
    <section className="py-16" id="features">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text glow  text-purple-600">Powered by AI</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our adaptive learning platform leverages cutting-edge AI to personalize your educational journey and career development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
