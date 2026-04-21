"use client";

import Image from "next/image";
import { Link, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { button } from "motion/react-m";
// import Link from 'next/dist/client/link'

// ✅ TYPE DEFINE
type Packages = {
  id: string;
  title: string;
  location: string;
  image: string;
  desc: string;
};

// ✅ PROPS TYPE
type Props = {
  item: Packages;
};

const DestinationCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="w-[340px] rounded-3xl overflow-hidden shadow-lg bg-gray-100">

      <div className="relative h-[350px]">
        <Image src={item.image} alt={item.title} fill className="object-cover" />

        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          MOST POPULAR
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md">
          <MapPin size={14} />
          {item.location}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="flex justify-between p-5">
        <button
          onClick={() => router.push(`/packages/${item.id}`)}
          className="bg-[#c8782f] text-white rounded-full border py-2 border-white/35 backdrop-blur px-3 transition duration-300 hover:-translate-y-1 hover:bg-gray/12"
        >
          Detail View
        </button>

          <button
            onClick={() => router.push("/booking")}
            className="bg-[#74706d] text-white rounded-full border py-2 border-white/35 backdrop-blur px-3 transition duration-300 hover:-translate-y-1 hover:bg-gray/12"
          >
            Book Now
          </button>
       
      </div>
    </div>
  );
};

export default DestinationCard;