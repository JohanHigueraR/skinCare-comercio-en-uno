"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import CartSidebar from "@/components/CartSidebar";
import ModalCart from "@/components/ModalCart";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { products as globalProducts } from "@/products";
import { formatCOP } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProductPage({ params }: Props) {
  const router = useRouter();
  const {
    products,
    sidebarOpen,
    setSidebarOpen,
    setModalOpen,
    setQuantity,
    removeProduct,
    addProduct,
  } = useCartStore();
  const { slug } = use(params);
  const [quantity, setLocalQuantity] = useState(1);

  const product = globalProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Producto no encontrado
        </h1>
        <p className="text-gray-600">
          El producto que buscas no existe o fue removido.
        </p>
        <Button className="bg-green-700 mt-4 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-800 w-full max-w-md">
          Volver al inicio
        </Button>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <Card className="rounded-3xl shadow-xl border-0 bg-white">
        <CardContent className="p-8 flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full max-w-xs h-80 object-cover rounded-2xl border-2 border-primary/30 shadow-md"
            />
          </div>

          {/* Detalles */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center md:text-left">
              {product.name}
            </h1>

            <span className="text-primary font-extrabold text-2xl mb-2">
              {formatCOP(product.price)}
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-gray-400 line-through text-lg ml-2">
                    {formatCOP(product.originalPrice)}
                  </span>
                )}
            </span>

            <p className="text-base text-muted-foreground mb-4 text-center md:text-left">
              {product.shortDescription}
            </p>

            <Button
              disabled
              className="mb-4 bg-primary/90 text-white px-6 py-2 rounded-full font-medium shadow-md text-sm cursor-default border-0"
            >
              <span className="flex items-center gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 12l6 6L20 6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {product.delivery?.type || "Pago contra entrega"}
              </span>
            </Button>

            <span className="block text-xs text-muted-foreground mb-4">
              {product.delivery?.time} - {product.delivery?.locations}
            </span>

            <ul className="mb-6 text-muted-foreground text-sm list-disc list-inside w-full">
              {product.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="mb-6 text-sm text-muted-foreground w-full space-y-1">
              <p>
                <strong>Cómo usar:</strong> {product.howToUse}
              </p>
              <p>
                <strong>Advertencias:</strong> {product.warnings}
              </p>
            </div>

            <Button
              onClick={() => {
                const exists = products.find((p) => p.id === product.slug);
                if (!exists) {
                  addProduct({
                    id: product.slug,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                  }, 1);
                }
                setModalOpen(true);
              }}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary/90 w-full max-w-md"
            >
              Realizar pedido
            </Button>
          </div>
        </CardContent>
      </Card>
      <CartSidebar />
      <ModalCart />
    </main>
  );
}
