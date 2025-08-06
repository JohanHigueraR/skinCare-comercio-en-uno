// pages/terminos-condiciones.tsx
import Head from "next/head";

export default function TerminosCondiciones() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | Tu Tienda</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Objeto del Sitio</h2>
          <p>
            Este sitio web tiene como objetivo la comercialización de productos físicos mediante
            la modalidad de comercio electrónico con pago contra entrega (PCE). Los productos
            ofrecidos son suministrados por terceros proveedores, y el sitio actúa como revendedor.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Aceptación de Términos</h2>
          <p>
            Al acceder, navegar o realizar una compra a través de este sitio web, el usuario acepta
            expresamente estos términos y condiciones. Si no está de acuerdo, deberá abstenerse de
            utilizar el sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Registro y Veracidad de la Información</h2>
          <p>
            Al realizar un pedido, el usuario garantiza que la información proporcionada (nombre,
            dirección, teléfono, etc.) es verídica y actualizada. No nos hacemos responsables por
            entregas fallidas debido a datos incorrectos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Modalidad de Pago</h2>
          <p>
            Todas las compras se procesan mediante la modalidad <strong>pago contra entrega</strong>. El cliente
            se compromete a recibir el producto y realizar el pago al momento de la entrega física.
          </p>
          <p className="mt-2">
            Negarse a recibir el producto injustificadamente puede dar lugar a restricciones futuras en
            nuestros sistemas de venta.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Disponibilidad y Stock</h2>
          <p>
            Los productos están sujetos a disponibilidad. En caso de que un producto solicitado no se
            encuentre disponible, se notificará al usuario para ofrecer una alternativa o cancelar el
            pedido sin costo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Precios y Descuentos</h2>
          <p>
            Todos los precios están expresados en pesos colombianos e incluyen impuestos cuando aplique.
            Nos reservamos el derecho de modificar los precios sin previo aviso. Las promociones están
            sujetas a disponibilidad y condiciones específicas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Proceso de Envío</h2>
          <p>
            El tiempo estimado de entrega será informado al usuario luego de confirmar el pedido.
            El envío se realiza a través de operadores logísticos independientes. Una vez despachado,
            se enviará la información de seguimiento al cliente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">8. Garantía del Producto</h2>
          <p>
            La garantía de los productos ofrecidos depende directamente del proveedor o fabricante.
            En caso de recibir un producto defectuoso, el cliente deberá reportarlo en un máximo de
            5 días hábiles después de la entrega, a través de los canales de contacto indicados en el
            sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">9. Derecho de Retracto</h2>
          <p>
            El cliente podrá ejercer su derecho de retracto conforme al artículo 47 de la Ley 1480 de 2011
            (Estatuto del Consumidor). Para ello, debe notificar su decisión dentro de los cinco (5) días
            hábiles siguientes a la entrega del producto. Aplica únicamente si el producto no ha sido usado
            ni alterado y se conserva en condiciones originales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">10. Limitación de Responsabilidad</h2>
          <p>
            No nos responsabilizamos por daños indirectos, pérdida de datos, pérdidas económicas o cualquier
            otra consecuencia derivada del uso de los productos o servicios ofrecidos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">11. Propiedad Intelectual</h2>
          <p>
            Todos los contenidos, imágenes, textos, logotipos y elementos del sitio web son propiedad
            del responsable o se usan con autorización. Está prohibida su reproducción total o parcial
            sin autorización previa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">12. Legislación Aplicable</h2>
          <p>
            Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier
            controversia será resuelta por los tribunales competentes del país.
          </p>
        </section>
      </main>
    </>
  );
}
