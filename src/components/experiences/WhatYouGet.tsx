// components/experience/WhatYouGet.tsx
import { Globe, Utensils, Map, Hotel } from "lucide-react";

const data = [
  { icon: Globe, text: "Local Culture" },
  { icon: Utensils, text: "Authentic Food" },
  { icon: Map, text: "Guided Tours" },
  { icon: Hotel, text: "Comfortable Stays" },
];

export default function WhatYouGet() {
  return (
    <section className="py-16 bg-[#111827] text-white"> 
      <h2 className="text-3xl text-center font-bold mb-10">
        What You’ll Experience
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="text-center">
              <Icon className="w-10 h-10 mx-auto text-yellow-400" />
              <p className="mt-3">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}