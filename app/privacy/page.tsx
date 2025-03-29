import Link from "next/link"
import { Music } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Music className="h-6 w-6" />
          <span>MusicRepo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/signin">
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Política de Privacidad</h1>
            <p className="text-muted-foreground mt-2">Última actualización: 29 de marzo de 2025</p>
          </div>
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Introducción</h2>
              <p>
                En MusicRepo, nos tomamos tu privacidad en serio. Esta Política de Privacidad explica cómo recopilamos,
                usamos y protegemos tu información personal cuando utilizas nuestro sitio web y servicios.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">2. Información que Recopilamos</h2>
              <p>Recopilamos los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Información de Cuenta:</strong> Cuando te registras, recopilamos tu nombre, dirección de
                  correo electrónico y contraseña.
                </li>
                <li>
                  <strong>Información de Perfil:</strong> Información que proporcionas en tu perfil de usuario, como una
                  foto de perfil o biografía.
                </li>
                <li>
                  <strong>Contenido:</strong> Archivos de música, partituras, letras y otros materiales que subes al
                  servicio.
                </li>
                <li>
                  <strong>Datos de Uso:</strong> Información sobre cómo utilizas nuestro servicio, incluidos datos de
                  registro y análisis.
                </li>
                <li>
                  <strong>Cookies:</strong> Utilizamos cookies para mejorar tu experiencia y recopilar información sobre
                  cómo utilizas nuestro servicio.
                </li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">3. Cómo Utilizamos tu Información</h2>
              <p>Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar información relacionada</li>
                <li>Enviarte avisos técnicos, actualizaciones y mensajes de soporte</li>
                <li>Responder a tus comentarios y preguntas</li>
                <li>Monitorear y analizar tendencias, uso y actividades</li>
                <li>Detectar, investigar y prevenir transacciones fraudulentas y otras actividades ilegales</li>
                <li>Personalizar tu experiencia</li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">4. Compartiendo tu Información</h2>
              <p>Podemos compartir tu información con:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Proveedores de Servicios:</strong> Terceros que proporcionan servicios en nuestro nombre, como
                  alojamiento, análisis y atención al cliente.
                </li>
                <li>
                  <strong>Requisitos Legales:</strong> Cuando lo exija la ley o para proteger nuestros derechos.
                </li>
                <li>
                  <strong>Transferencias Comerciales:</strong> En relación con una fusión, adquisición o venta de
                  activos.
                </li>
                <li>
                  <strong>Con tu Consentimiento:</strong> Cuando nos hayas dado permiso para compartir tu información.
                </li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">5. Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad apropiadas para proteger tu información personal. Sin embargo, ningún
                método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">6. Tus Derechos</h2>
              <p>Dependiendo de tu ubicación, puedes tener derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a la información personal que tenemos sobre ti</li>
                <li>Corregir información inexacta</li>
                <li>Eliminar tu información personal</li>
                <li>Oponerte o restringir el procesamiento de tu información</li>
                <li>Portabilidad de datos</li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">7. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio
                publicando la nueva Política de Privacidad en esta página.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">8. Contáctanos</h2>
              <p>
                Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos en{" "}
                <a href="mailto:privacidad@musicrepo.com" className="text-primary hover:underline">
                  privacidad@musicrepo.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t px-4 py-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 MusicRepo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

