"use client";

import { Star, Quote, MapPin } from "lucide-react";

type Testimonial = {
  desc: string;
  name: string;
  initials: string;
  location: string;
};

type Props = {
  item: Testimonial;
  index?: number;
};

const TestimonialCard: React.FC<Props> = ({ item, index = 0 }) => {
  const isGreen = index === 1;

  return (
    <div
      className={`relative rounded-2xl p-6 max-w-sm
      backdrop-blur-lg border border-white/20
      shadow-lg transition-all duration-300
      hover:scale-105 hover:shadow-2xl
      ${isGreen ? "bg-green-200/30" : "bg-orange-200/30"}`}
    >
      {/* Stars */}
      <div className="flex gap-1 text-black mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="black" />
        ))}
      </div>

      {/* Quote */}
      <div
        className={`absolute top-6 right-6 ${
          isGreen ? "bg-green-600" : "bg-orange-500"
        } p-3 rounded-full text-white`}
      >
        <Quote size={18} />
      </div>

      <p className="text-gray-800 text-sm my-8 italic">
        "{item.desc}"
      </p>

      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold ${
            isGreen ? "bg-green-600" : "bg-orange-500"
          }`}
        >
          {item.initials}
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-900">
            {item.name}
          </h4>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <MapPin size={12} /> {item.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialCardSection() {
  const testimonials: Testimonial[] = [
    {
      desc: "The cultural immersion was incredible.",
      name: "Maria Klein",
      initials: "MK",
      location: "Germany • Rajasthan",
    },
    {
      desc: "Perfect balance of adventure and comfort.",
      name: "James Davidson",
      initials: "JD",
      location: "UK • Kerala",
    },
    {
      desc: "Exceptional attention to detail.",
      name: "Sophie Laurent",
      initials: "SL",
      location: "France • Rishikesh",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-10">

      <div>
        <div className="flex justify-center items-center mb-5">
          <span className="text-black border text-xl font-bold border-gray-400 px-6 py-2 rounded-full">
            Testimonials
          </span>
        </div>

        <h1 className="text-4xl font-bold my-4 text-center">
          What Our Travelers Say
        </h1>

        <h4 className="text-xl text-center text-gray-600">
          Real experiences from real travelers.
        </h4>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}