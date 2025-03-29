import Link from "next/link"
import { ArrowRight, FileMusic, Github, Music, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Music className="h-6 w-6" />
          <span>MusicRepo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Características
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Precios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/explore">
            Explorar
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/signin">
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Tu Plataforma de Repositorios Musicales
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Almacena, comparte y colabora en partituras, letras y más. Como GitHub, pero para música.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg">
                      Comenzar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/explore">
                    <Button size="lg" variant="outline">
                      Explorar Repositorios
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-2 border-b pb-2">
                      <FileMusic className="h-5 w-5 text-primary" />
                      <div className="font-medium">beethoven/sinfonia-no-5</div>
                    </div>
                    <div className="flex-1 overflow-auto p-2">
                      <div className="grid gap-2">
                        <div className="rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">sinfonia-no-5.pdf</div>
                          <div className="text-sm text-muted-foreground">
                            Partitura completa - Actualizado hace 2 días
                          </div>
                        </div>
                        <div className="rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">primer-movimiento.midi</div>
                          <div className="text-sm text-muted-foreground">Archivo MIDI - Actualizado hace 1 semana</div>
                        </div>
                        <div className="rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">violin-1.pdf</div>
                          <div className="text-sm text-muted-foreground">Parte de violín - Actualizado hace 3 días</div>
                        </div>
                        <div className="rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">cello.pdf</div>
                          <div className="text-sm text-muted-foreground">Parte de cello - Actualizado hace 5 días</div>
                        </div>
                        <div className="rounded-md border p-2 hover:bg-muted">
                          <div className="font-medium">notas.md</div>
                          <div className="text-sm text-muted-foreground">
                            Notas de interpretación - Actualizado ayer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Características</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Todo lo que necesitas para almacenar, compartir y colaborar en tus proyectos musicales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3">
                  <FileMusic className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Almacena Archivos Musicales</h3>
                <p className="text-center text-muted-foreground">
                  Sube y almacena partituras, archivos MIDI, letras y más en tus repositorios.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Colabora</h3>
                <p className="text-center text-muted-foreground">
                  Invita a colaboradores para trabajar juntos en tus proyectos musicales con control de versiones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary p-3">
                  <Github className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Control de Versiones</h3>
                <p className="text-center text-muted-foreground">
                  Realiza un seguimiento de los cambios en tus archivos musicales a lo largo del tiempo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Precios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elige el plan que mejor se adapte a ti.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <h3 className="text-2xl font-bold">Gratis</h3>
                <p className="mt-2 text-muted-foreground">Perfecto para aficionados y proyectos pequeños.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    10 repositorios privados
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Repositorios públicos ilimitados
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Herramientas básicas de colaboración
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    1GB de almacenamiento
                  </li>
                </ul>
                <Link href="/signup" className="mt-8">
                  <Button className="w-full">Comenzar</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="mt-2 text-muted-foreground">Para músicos y compositores profesionales.</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="ml-1 text-muted-foreground">/mes</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Repositorios privados ilimitados
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Herramientas avanzadas de colaboración
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    10GB de almacenamiento
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Soporte prioritario
                  </li>
                </ul>
                <Link href="/signup" className="mt-8">
                  <Button className="w-full" variant="outline">
                    Suscribirse
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 MusicRepo. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

