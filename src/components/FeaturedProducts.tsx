import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/products";
import Image from "next/image";
import { formatCOP } from "@/lib/utils";
import Link from "next/link";

function FeaturedProducts() {
  return (
    <div className="w-full border-b border-border shadow-sm bg-background">
      <section className="max-w-7xl mx-auto px-4 py-12 ">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Productos destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="w-full"
            >
              <Card className="rounded-2xl cursor-pointer shadow-sm transition-transform hover:scale-105 border bg-card text-card-foreground">
                <CardContent className="w-full flex flex-col items-center p-6">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={224}
                    height={224}
                    className="w-56 h-56 object-cover rounded-xl border border-border shadow mb-4"
                  />
                  <h3 className="text-lg font-semibold text-foreground text-center mb-1">
                    {product.name}
                  </h3>
                  <span className="text-primary font-bold text-base">
                    {formatCOP(product.price)}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-md text-base"
          >
            <a href="/catalogo">Ver todos</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProducts;
