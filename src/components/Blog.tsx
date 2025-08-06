import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const tips = [
  {
    title: "¿Por qué es importante limpiar tu rostro diariamente?",
    description:
      "La limpieza facial elimina impurezas, exceso de grasa y residuos de maquillaje, ayudando a prevenir imperfecciones y mantener la piel saludable.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Hidrata tu piel todos los días",
    description:
      "La hidratación es clave para una piel suave y luminosa. Usa cremas adecuadas para tu tipo de piel y aplica después de limpiar el rostro.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "No olvides el protector solar",
    description:
      "El protector solar previene el envejecimiento prematuro y protege contra daños causados por el sol. Úsalo todos los días, incluso si está nublado.",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b5?auto=format&fit=crop&w=400&q=80",
  },
];

function Blog() {
  return (
    <div className="bg-muted w-full border-b border-border shadow-sm " >
      <section className="max-w-7xl mx-auto px-4 py-16 ">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Consejos para el cuidado de la piel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-sm border bg-card text-card-foreground transition-transform hover:scale-[1.02]"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-40 h-40 object-cover rounded-xl border border-border shadow mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
