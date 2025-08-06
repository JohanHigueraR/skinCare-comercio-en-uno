// pages/aviso-legal.tsx
import Head from "next/head";

export default function AvisoLegal() {
  return (
    <>
      <Head>
        <title>Aviso Legal | Tu Tienda</title>
        <meta name="description" content="Aviso legal de la tienda en línea" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Identificación del Responsable</h2>
          <p>
            Este sitio web opera bajo la figura de revendedor independiente. En adelante, el
            "Sitio", es gestionado por:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Nombre del Responsable:</strong> [Tu nombre o razón social]</li>
            <li><strong>Correo electrónico:</strong> [tucorreo@ejemplo.com]</li>
            <li><strong>Ciudad de operación:</strong> [Ciudad - País]</li>
            <li><strong>WhatsApp de contacto:</strong> [Tu número]</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Objeto del Sitio</h2>
          <p>
            Este sitio tiene como finalidad la promoción y comercialización de productos físicos por
            medio de comercio electrónico bajo la modalidad de <strong>pago contra entrega (PCE)</strong>.
            No fabricamos los productos ofrecidos, sino que actuamos como intermediarios entre el proveedor
            y el cliente final.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Condición de Revendedor</h2>
          <p>
            El sitio actúa como <strong>revendedor</strong> de productos distribuidos por terceros (aliados comerciales,
            plataformas mayoristas o proveedores independientes). Por lo tanto:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>No somos fabricantes ni responsables directos por la calidad intrínseca del producto.</li>
            <li>Respondemos por la adecuada gestión del pedido, envío y atención al cliente hasta la entrega del mismo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Responsabilidad</h2>
          <p>
            El responsable del Sitio no se hace responsable por:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Errores en los datos suministrados por el usuario que impidan la entrega correcta del producto.</li>
            <li>Retrasos atribuibles a operadores logísticos o causas externas como desastres naturales, bloqueos o fallas de terceros.</li>
            <li>El uso indebido que el cliente pueda hacer del producto adquirido.</li>
          </ul>
          <p className="mt-2">
            El cliente acepta que realiza la compra bajo su responsabilidad, y que conoce las condiciones
            de pago, envío y uso del producto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Derechos de Propiedad Intelectual</h2>
          <p>
            Todos los elementos del Sitio (textos, imágenes, logotipos, diseño web, etc.), salvo donde
            se indique expresamente lo contrario, son propiedad del responsable del Sitio o se usan con
            autorización de terceros. Está prohibida su reproducción, distribución o modificación sin
            consentimiento escrito.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Protección de Datos</h2>
          <p>
            Este Sitio recolecta información personal del usuario únicamente para efectos de procesamiento
            del pedido. La información será tratada de forma confidencial conforme a la <strong>Ley 1581 de 2012
            de Protección de Datos Personales en Colombia</strong>.
          </p>
          <p className="mt-2">
            Para más detalles, consulta nuestra <a href="/politica-privacidad" className="text-blue-600 underline">Política de Privacidad</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Legislación Aplicable</h2>
          <p>
            Este sitio se rige por las leyes de la República de Colombia. Cualquier controversia será
            resuelta conforme a la jurisdicción colombiana.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
          <p>
            Para cualquier inquietud legal o relacionada con la operación de este Sitio, puedes comunicarte a:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Correo electrónico:</strong> [tucorreo@ejemplo.com]</li>
            <li><strong>WhatsApp:</strong> [Tu número]</li>
            <li><strong>Ciudad:</strong> [Tu ciudad]</li>
          </ul>
        </section>
      </main>
    </>
  );
}
