/* eslint-disable @next/next/no-img-element */
"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressve-blur";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo/logo_gemaria.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import dahua from "@/public/logo-brands/dahua.svg";
import hikvision from "@/public/logo-brands/hikvision.svg";
import hilook from "@/public/logo-brands/hilook.svg";
import kirin from "@/public/logo-brands/kirin.svg";
import lg from "@/public/logo-brands/lg.svg";
import polytron from "@/public/logo-brands/polytron.svg";
import sharp from "@/public/logo-brands/sharp.svg";
import turbo from "@/public/logo-brands/turbo.svg";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Testimonials", href: "#" },
];

const brandLogos = [
  { src: dahua, alt: "Dahua", height: 20 },
  { src: hikvision, alt: "Hikvision", height: 20 },
  { src: hilook, alt: "HiLook", height: 20 },
  { src: kirin, alt: "Kirin", height: 20 },
  { src: lg, alt: "LG", height: 20 },
  { src: polytron, alt: "Polytron", height: 20 },
  { src: sharp, alt: "Sharp", height: 20 },
  { src: turbo, alt: "Turbo", height: 20 },
];

const HeroSection = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2">
                  <Image
                    src={logo}
                    alt="Gemaria Elektronik Logo"
                    width={75}
                    height={75}
                    className="h-10 w-10"
                  />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-[#600003] block duration-150 hover:font-semibold">
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild size="sm">
                    <Link href="#">
                      <span>Contact</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col">
        <div>
          <div className="pb-18 pt-4 md:pb-32 lg:pb-24 lg:pt-8">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
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
                    <Link href="#link">
                      <span className="text-nowrap">Contact Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                className="z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                alt="Abstract Object"
                height="4000"
                width="3000"
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
