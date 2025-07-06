"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/data/products";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ButtonDahua } from "./button-dahua";
import { ButtonHikvision } from "./button-hikvision";
import { ButtonHilook } from "./button-hilook";
import { ButtonKirin } from "./button-kirin";
import { ButtonTurbo } from "./button-turbo";
import { ComboboxCategories } from "./combobox-category";
import Link from "next/link";

const ProductsList = () => {
  const flatProducts = products.flat();

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProducts = flatProducts.filter((product) => {
    const brandMatch = selectedBrand
      ? product.brands.toLowerCase() === selectedBrand.toLowerCase()
      : true;
    const categoryMatch = selectedCategory
      ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return brandMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const shuffledProducts = useMemo(() => {
    return isMounted ? shuffleArray(paginatedProducts) : paginatedProducts;
  }, [isMounted, paginatedProducts]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBrandClick = (brand: string | null) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center gap-4 py-6 flex-wrap">
          <ButtonDahua onClick={() => handleBrandClick("Dahua")} />
          <ButtonHikvision onClick={() => handleBrandClick("Hikvision")} />
          <ButtonHilook onClick={() => handleBrandClick("HiLook")} />
          <ButtonKirin onClick={() => handleBrandClick("Kirin")} />
          <ButtonTurbo onClick={() => handleBrandClick("Turbo")} />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleBrandClick(null)}>
            Show All
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <ComboboxCategories
            onCategorySelect={(val) => {
              setSelectedCategory(val);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 lg:p-8">
        {shuffledProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <Card className="w-full flex justify-between h-auto">
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
                <p className="font-semibold text-lg text-primary">
                  {product.price}
                </p>
                <span className="text-muted-foreground">{product.name}</span>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Purchase
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="p-12">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>
            )}

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={i + 1 === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(i + 1);
                  }}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default ProductsList;
