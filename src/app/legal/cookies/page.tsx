// pages/politica-cookies.tsx
import Head from "next/head";

export default function PoliticaCookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | Tu Tienda</title>
        <meta name="description" content="Información sobre el uso de cookies en este sitio web" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

        <section className="mb-6">
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, 
            personalizar contenido, y analizar el tráfico. Al continuar navegando en nuestro sitio, aceptas 
            el uso de cookies bajo los términos de esta política.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. 
            Estas permiten reconocer tu dispositivo, recordar tus preferencias y mejorar tu experiencia como usuario.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. ¿Qué tipos de cookies utilizamos?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web, como recordar el carrito de compras o permitir el envío de formularios.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> (Si usas Google Analytics o similar) Recopilan datos anónimos sobre cómo los visitantes usan el sitio para ayudarnos a mejorar su funcionamiento.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> Algunas páginas pueden incluir contenidos incrustados (como videos de YouTube o integraciones con redes sociales), que podrían establecer cookies propias.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Gestión de Cookies</h2>
          <p>
            Puedes configurar tu navegador para aceptar o rechazar todas o algunas cookies. También puedes eliminar cookies almacenadas anteriormente. 
            Ten en cuenta que la desactivación de cookies puede afectar el funcionamiento del sitio.
          </p>
          <p className="mt-2">
            Para más información sobre cómo gestionar cookies, puedes visitar:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><a className="text-blue-600 underline" href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank">Google Chrome</a></li>
            <li><a className="text-blue-600 underline" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank">Mozilla Firefox</a></li>
            <li><a className="text-blue-600 underline" href="https://support.apple.com/es-es/HT201265" target="_blank">Safari</a></li>
            <li><a className="text-blue-600 underline" href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">Internet Explorer</a></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Cualquier cambio será publicado en esta página con fecha actualizada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Contacto</h2>
          <p>
            Si tienes dudas sobre esta política de cookies, puedes contactarnos en <strong>[tucorreo@ejemplo.com]</strong>.
          </p>
        </section>
      </main>
    </>
  );
}
