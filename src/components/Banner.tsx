import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Banner() {
  return (
    <Card className="bg-muted text-center shadow-sm rounded-none border-0">
      <CardContent className="py-12 px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text- mb-4 leading-tight">
          ¡Descubre los mejores productos para tu piel!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-6">
          Cuida, protege y resalta tu belleza natural con nuestra exclusiva selección de productos de skincare de alta calidad.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-base md:text-lg font-semibold shadow transition">
          ¡Compra ahora y siente la diferencia!
        </Button>
      </CardContent>
    </Card>
  );
}

export default Banner;
