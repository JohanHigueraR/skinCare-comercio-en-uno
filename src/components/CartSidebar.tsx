"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
import { formatCOP } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function CartSidebar() {
  const {
    products,
    sidebarOpen,
    setSidebarOpen,
    setModalOpen,
    setQuantity,
    removeProduct,
  } = useCartStore();

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <Sheet open={sidebarOpen} modal={false}>
      <SheetContent side="right" className="p-0">
        <SheetHeader className="border-b border-border bg-muted shadow-sm">
          <SheetTitle>Tu carrito</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4 bg-background">
          {products.length === 0 ? (
            <div className="text-center text-muted-foreground mt-10">
              No has agregado productos.
            </div>
          ) : (
            products.map((product) => (
              <Card
                key={product.id}
                className="mb-4 border border-border shadow-sm rounded-xl"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-lg border border-border"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-primary text-sm leading-tight">
                      {product.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {formatCOP(product.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="rounded-full w-7 h-7 text-base font-bold"
                      onClick={() =>
                        setQuantity(
                          product.id,
                          Math.max(1, product.quantity - 1)
                        )
                      }
                    >
                      -
                    </Button>
                    <span className="px-2 font-semibold text-base text-primary bg-background rounded border border-border">
                      {product.quantity}
                    </span>
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="rounded-full w-7 h-7 text-base font-bold"
                      onClick={() =>
                        setQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-2 text-destructive hover:bg-destructive/10"
                    onClick={() => removeProduct(product.id)}
                  >
                    <span className="text-lg">🗑️</span>
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="px-6 py-4 border-t border-border bg-muted shadow-inner">
          <div className="mb-3 text-center text-lg font-bold text-primary">
            Total a pagar:
            <span className="ml-2 bg-muted px-3 py-1 rounded-lg shadow-sm border border-border text-primary">
              {formatCOP(total)}
            </span>
          </div>
          <Button
            className="bg-primary text-primary-foreground font-bold w-full py-4 text-lg rounded-xl shadow-lg hover:bg-primary/90 transition"
            onClick={() => {
              setSidebarOpen(false);
              setModalOpen(true);
            }}
          >
            Mostrar carrito
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
