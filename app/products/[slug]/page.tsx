/* eslint-disable @typescript-eslint/no-unused-vars */
import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import type { StaticImageData } from "next/image";
import Header from "@/app/components/header";
import { Button } from "@/components/ui/button";
import { Footer7 } from "@/components/ui/footer-ui";

type Product = {
  id: number;
  slug: string;
  name: string;
  image: StaticImageData;
  price: string;
  brands: string;
  category: string;
  description: string;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
  return products.flat().map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.flat().find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <>
      <Header />
      <div className="p-8 w-full mx-auto flex flex-row justify-between">
        <div className="relative w-full h-64 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-xl max-w-3xl"
          />
        </div>
        <div className="flex-col p-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg font-semibold text-primary mb-2">
            {product.price}
          </p>
          <p className="text-muted-foreground mb-1">Brand: {product.brands}</p>
          <p className="text-muted-foreground mb-1">
            Category: {product.category}
          </p>
          <p className="text-muted-foreground">
            Description: {product.description}
          </p>
          <div className="py-8">
            <Button>Purchase</Button>
          </div>
        </div>
      </div>
      <Footer7 />
    </>
  );
}
