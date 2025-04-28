"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="glass-card bg-white/5 border border-white/10 hover:border-purple-600 hover:shadow-[0_0_20px_#8b5cf6aa] transition-all duration-300 flex flex-col items-center text-center p-6 rounded-2xl min-h-[350px] md:min-h-[300px]">
      <CardContent className="flex flex-col items-center text-center p-0 flex-1 w-full">
        <div className="rounded-full bg-gradient-to-br from-purple-600 to-purple-400 p-4 w-16 h-16 flex items-center justify-center mb-6">
          <Icon className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-purple-400">{title}</h3>
        <p className="text-white/70 text-sm md:text-base">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
