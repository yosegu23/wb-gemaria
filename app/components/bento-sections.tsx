/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import React from "react";
import { AirVent, Cctv, Refrigerator, Monitor } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ac from "@/public/images/bento-ac.png";
import cctv from "@/public/images/bento-cctv.png";
import Image from "next/image";

export function BentoSection() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "AC (Air Conditioner)",
    description:
      "Sejuk merata, hemat energi, dan udara lebih bersih untuk kenyamanan maksimal.",
    header: (
      <Image src={ac} alt="AC (Air Conditioner)" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <AirVent className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CCTV (Security Camera)",
    description:
      "Pantau rumah dan usaha 24/7 dengan keamanan cerdas dan jangkauan luas.",
    header: (
      <Image src={cctv} alt="CCTV (Security Camera)" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" />
    ),
    className: "md:col-span-1",
    icon: <Cctv className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kulkas (Refrigerator)",
    description:
      "Simpan segar lebih lama dengan kulkas hemat listrik dan desain elegan.",
    header: <Image src={cctv} alt="CCTV (Security Camera)" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" />,
    className: "md:col-span-1",
    icon: <Refrigerator className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TV (Television)",
    description:
      "Gambar tajam, suara jernih, dan koneksi pintar untuk hiburan tanpa batas.",
    header: (
      <Image src={ac} alt="AC (Air Conditioner)" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl" />
    ),
    className: "md:col-span-2",
    icon: <Monitor className="h-4 w-4 text-neutral-500" />,
  },
];
