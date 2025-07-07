"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressve-blur";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const brandLogos = [
  { src: "/logo-brands/dahua.svg", alt: "Dahua", height: 20 },
  { src: "/logo-brands/hikvision.svg", alt: "Hikvision", height: 20 },
  { src: "/logo-brands/hilook.svg", alt: "HiLook", height: 20 },
  { src: "/logo-brands/kirin.svg", alt: "Kirin", height: 20 },
  { src: "/logo-brands/lg.svg", alt: "LG", height: 20 },
  { src: "/logo-brands/polytron.svg", alt: "Polytron", height: 20 },
  { src: "/logo-brands/sharp.svg", alt: "Sharp", height: 20 },
  { src: "/logo-brands/turbo.svg", alt: "Turbo", height: 20 },
  { src: "/logo-brands/cosmos.svg", alt: "Cosmos", height: 20 },
  { src: "/logo-brands/gea.svg", alt: "GEA", height: 20 },
  { src: "/logo-brands/miyako.svg", alt: "Miyako", height: 20 },
  { src: "/logo-brands/rinnai.svg", alt: "Rinnai", height: 20 },
  { src: "/logo-brands/rsa.svg", alt: "RSA", height: 20 },
  { src: "/logo-brands/tcl.svg", alt: "TCL", height: 20 },
];

const HeroSection = () => {
  return (
    <>
      <main className="flex flex-col">
        <div>
          <div className="pb-18 pt-4 md:pb-32 lg:pb-24 lg:pt-8">
            <div className="relative mx-auto flex max-w-6xl flex-col lg:flex-row px-6">
              <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-4 max-w-6xl text-pretty text-3xl font-medium md:text-3xl lg:mt-16 xl:text-4xl">
                  Gemaria Elektronik – Pusat Perlengkapan Elektronik Keluarga
                  Modern.
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-lg">
                  Nikmati pengalaman belanja elektronik yang praktis, aman, dan
                  terpercaya hanya di Gemaria Elektronik.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="https://wa.me/6287722887555" target="_blank">
                      <span className="text-nowrap">Contact Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/hero-banner.png"
                alt="Electronic"
                width={500}
                height={500}
                className="flex"
              />
            </div>
          </div>
        </div>
        <div className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Trusted Patners of Brands</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider gap={112}>
                  {brandLogos.map((brand, index) => (
                    <div className="flex" key={index}>
                      <Image
                        className="mx-auto w-fit dark:invert"
                        src={brand.src}
                        alt={brand.alt}
                        height={brand.height}
                        width={brand.height * 2}
                        style={{ height: brand.height, width: "auto" }}
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
