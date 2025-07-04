import React from "react";
import Header from "../components/header";
import ProductsList from "../components/products-list";

const ProductsGemaria = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full pt-20 px-10 lg:p-14 flex-col gap-6 lg:gap-14">
        <div className="flex flex-col justify-start items-start w-full lg:w-[921px]">
          <h1 className="scroll-m-20 text-start text-2xl lg:text-4xl font-extrabold tracking-tight text-balance">
            Popular Products at Gemaria Elektronik
          </h1>
          <p className="text-muted-foreground text-sm lg:text-xl text-balance">
            Temukan beragam produk elektronik populer yang telah dipercaya oleh
            ribuan pelanggan kami — dari peralatan rumah tangga hingga teknologi
            terbaru yang membuat hidup lebih praktis dan nyaman.
          </p>
        </div>
        <ProductsList />
      </div>
    </>
  );
};

export default ProductsGemaria;
