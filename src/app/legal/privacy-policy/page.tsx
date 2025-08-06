// pages/politica-privacidad.tsx
import Head from "next/head";

export default function PoliticaPrivacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Tu Tienda</title>
        <meta name="description" content="Política de privacidad de la tienda en línea" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

        <p className="mb-6">
          En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia, informamos que los datos personales recolectados a través de este sitio web serán tratados conforme a los principios de legalidad, finalidad, libertad, veracidad, transparencia, seguridad y confidencialidad.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Responsable del Tratamiento</h2>
          <ul className="list-disc list-inside">
            <li><strong>Nombre del responsable:</strong> [Tu nombre o razón social]</li>
            <li><strong>Correo electrónico:</strong> [tucorreo@ejemplo.com]</li>
            <li><strong>Ciudad:</strong> [Ciudad - País]</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Datos recolectados</h2>
          <p>Recolectamos los siguientes datos personales mediante formularios de contacto o compra:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Teléfono celular</li>
            <li>Dirección de entrega</li>
            <li>Producto solicitado</li>
            <li>Observaciones o notas adicionales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Finalidad del Tratamiento</h2>
          <p>Los datos personales se recolectan con las siguientes finalidades:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Gestionar el pedido solicitado por el usuario</li>
            <li>Contactar al usuario para confirmación del pedido</li>
            <li>Realizar el envío físico del producto</li>
            <li>Brindar soporte postventa</li>
            <li>Cumplir obligaciones legales o contractuales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Transferencia a terceros</h2>
          <p>
            En algunos casos, compartimos los datos con aliados logísticos o proveedores para garantizar la entrega del pedido. Estos terceros están sujetos a obligaciones de confidencialidad y solo usarán los datos para los fines acordados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Derechos del titular de los datos</h2>
          <p>El usuario puede en cualquier momento ejercer los siguientes derechos:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar la eliminación de sus datos cuando considere que no se están utilizando adecuadamente</li>
            <li>Revocar la autorización otorgada para su uso</li>
          </ul>
          <p className="mt-2">
            Para ejercer estos derechos, puede contactarnos a través del correo <strong>[tucorreo@ejemplo.com]</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Medidas de Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas razonables para proteger la información personal contra pérdida, mal uso, acceso no autorizado o alteración.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Vigencia</h2>
          <p>
            Esta política rige a partir del [Fecha de publicación] y permanecerá vigente hasta que sea modificada por el responsable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
          <p>
            Para cualquier duda o solicitud relacionada con el tratamiento de datos personales,
            puedes contactarnos al correo <strong>[tucorreo@ejemplo.com]</strong>.
          </p>
        </section>
      </main>
    </>
  );
}
