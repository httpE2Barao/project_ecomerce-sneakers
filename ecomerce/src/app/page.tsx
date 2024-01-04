"use client";
import { useState } from "react";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { ProductPoster } from "./components/poster";
import { ProductInfo } from "./components/info";

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <ProductPoster />
      <ProductInfo />
    </>
  )
}
