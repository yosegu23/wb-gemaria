import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/data/products";

const ProductsList = () => {
  const flatProducts = products.flat();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {flatProducts.map((product) => (
        <Card key={product.id} className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{product.brands}</CardTitle>
            <CardDescription>{product.category}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <p className="font-semibold text-lg text-primary">{product.price}</p>
            <span className="text-muted-foreground">{product.name}</span>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Purchase
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
