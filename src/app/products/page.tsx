"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { products } from "@/products";
import Image from "next/image";
import { formatCOP } from "@/lib/utils";
import Link from "next/link";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Catálogo de Productos
      </h1>

      <div className="mb-10 flex justify-center">
        <Input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-base shadow-sm border border-muted rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none"
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <Card
                key={product.id}
                className="rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] border-0 cursor-pointer bg-white"
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-56 h-56 object-cover rounded-xl border-4 border-primary/30 shadow mb-4"
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                    {product.name}
                  </h3>
                  <span className="text-primary font-extrabold text-base">
                    {formatCOP(product.price)}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-base mt-20">
          No se encontraron productos con ese nombre.
        </div>
      )}
    </main>
  );
}
