import Link from "next/link"
import { Music } from "lucide-react"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold">Términos de Servicio</h1>
            <p className="text-muted-foreground mt-2">Última actualización: 29 de marzo de 2025</p>
          </div>
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Introducción</h2>
              <p>
                Bienvenido a MusicRepo. Estos Términos de Servicio rigen tu uso de nuestro sitio web y servicios. Al
                acceder o utilizar MusicRepo, aceptas estar sujeto a estos Términos.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">2. Definiciones</h2>
              <p>
                <strong>Servicio</strong> se refiere al sitio web y plataforma MusicRepo.
              </p>
              <p>
                <strong>Usuario</strong> se refiere a las personas que acceden o utilizan el Servicio.
              </p>
              <p>
                <strong>Contenido</strong> se refiere a archivos de música, partituras, letras y cualquier otro material
                subido al Servicio.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">3. Registro de Cuenta</h2>
              <p>
                Para utilizar ciertas funciones del Servicio, debes registrarte para obtener una cuenta. Aceptas
                proporcionar información precisa y mantener tu información actualizada.
              </p>
              <p>
                Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las
                actividades que ocurran bajo tu cuenta.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">4. Contenido del Usuario</h2>
              <p>
                Conservas la propiedad de cualquier Contenido que subas al Servicio. Al subir Contenido, otorgas a
                MusicRepo una licencia no exclusiva para usar, mostrar y distribuir tu Contenido en relación con el
                Servicio.
              </p>
              <p>
                Eres el único responsable de tu Contenido y declaras que tienes todos los derechos necesarios para subir
                y compartir tu Contenido.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">5. Actividades Prohibidas</h2>
              <p>Aceptas no:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subir Contenido que infrinja derechos de propiedad intelectual</li>
                <li>Utilizar el Servicio para cualquier propósito ilegal</li>
                <li>Intentar obtener acceso no autorizado a cualquier parte del Servicio</li>
                <li>Interferir con el funcionamiento adecuado del Servicio</li>
                <li>Acosar, abusar o dañar a otros usuarios</li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">6. Terminación</h2>
              <p>
                Podemos terminar o suspender tu cuenta en cualquier momento, sin previo aviso ni responsabilidad, por
                cualquier motivo, incluso si incumples estos Términos.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">7. Cambios en los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Proporcionaremos aviso de
                cambios significativos publicando los Términos actualizados en el Servicio.
              </p>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">8. Contáctanos</h2>
              <p>
                Si tienes alguna pregunta sobre estos Términos, contáctanos en{" "}
                <a href="mailto:soporte@musicrepo.com" className="text-primary hover:underline">
                  soporte@musicrepo.com
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

