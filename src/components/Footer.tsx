import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function Footer() {
  return (
    <footer className="bg-primary/70 text-white shadow-lg border-t border-border">
      <Card className="max-w-7xl mx-auto border-0 rounded-none shadow-none bg-transparent">
        <CardContent className="py-10 px-4 flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-center md:text-left text-white">
            <h3 className="text-lg font-bold mb-2">Servicio al Cliente</h3>
            <a
              href="mailto:comercioenuno.clientes@gmail.com"
              className="hover:underline text-sm font-medium"
            >
              comercioenuno.clientes@gmail.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left text-sm text-white ">
            <a
              href="/legal/notice"
              className="hover:underline hover:text-muted"
            >
              Aviso legal
            </a>
            <a
              href="/legal/privacy-policy"
              className="hover:underline hover:text-muted"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className=" text-white hover:underline hover:text-muted"
            >
              Envíos y devoluciones
            </a>
            <a
              href="/legal/terms"
              className=" text-white hover:underline hover:text-muted"
            >
              Términos y condiciones
            </a>
            <a
              href="/legal/cookies"
              className=" text-white hover:underline hover:text-muted"
            >
              Política de cookies
            </a>
          </div>
        </CardContent>

        <div className="text-center text-xs text-white pb-6">
          &copy; {new Date().getFullYear()} SkinCare Shop. Todos los derechos
          reservados.
        </div>
      </Card>
    </footer>
  );
}

export default Footer;
