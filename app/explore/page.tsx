import Link from "next/link"
import { FileMusic, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExplorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <FileMusic className="h-6 w-6" />
          <span>MusicRepo</span>
        </Link>
        <div className="w-full flex-1 md:w-auto md:flex-none ml-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar repositorios..."
              className="w-full md:w-[300px] pl-8 rounded-md bg-muted"
            />
          </div>
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Panel
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
            />
            <span className="sr-only">Menú de usuario</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Explorar Repositorios</h1>
          </div>
          <Tabs defaultValue="trending" className="mb-6">
            <TabsList>
              <TabsTrigger value="trending">Tendencias</TabsTrigger>
              <TabsTrigger value="popular">Populares</TabsTrigger>
              <TabsTrigger value="recent">Actualizados Recientemente</TabsTrigger>
            </TabsList>
            <TabsContent value="trending" className="mt-4">
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      archivo-clasico/coleccion-beethoven
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección completa de las obras de Beethoven con anotaciones
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 1.2k
                    </div>
                    <div>Actualizado hace 3 días</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      colectivo-jazz/estandares
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección completa de estándares de jazz con diagramas de acordes y partituras
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 876
                    </div>
                    <div>Actualizado hace 1 semana</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      proyecto-bandas-sonoras/analisis-hans-zimmer
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Análisis y transcripciones de bandas sonoras de Hans Zimmer
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 543
                    </div>
                    <div>Actualizado hace 2 días</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      obras-corales/motetes-renacimiento
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección de motetes renacentistas con notación moderna y notas de interpretación
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 321
                    </div>
                    <div>Actualizado hace 5 días</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      tabs-guitarra/clasicos-rock
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Tablaturas precisas y diagramas de acordes para canciones clásicas de rock
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 298
                    </div>
                    <div>Actualizado ayer</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="popular" className="mt-4">
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      archivo-partituras/clasicos-piano
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección completa de piezas clásicas para piano con digitaciones
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 3.4k
                    </div>
                    <div>Actualizado hace 2 semanas</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      archivo-clasico/coleccion-beethoven
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección completa de las obras de Beethoven con anotaciones
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 1.2k
                    </div>
                    <div>Actualizado hace 3 días</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      partituras-orquestales/sinfonias-mahler
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Partituras completas y partes para todas las sinfonías de Mahler con análisis
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 987
                    </div>
                    <div>Actualizado hace 1 mes</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="recent" className="mt-4">
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      tabs-guitarra/clasicos-rock
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Tablaturas precisas y diagramas de acordes para canciones clásicas de rock
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 298
                    </div>
                    <div>Actualizado ayer</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      proyecto-bandas-sonoras/analisis-hans-zimmer
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Análisis y transcripciones de bandas sonoras de Hans Zimmer
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 543
                    </div>
                    <div>Actualizado hace 2 días</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="#" className="font-medium hover:underline">
                      archivo-clasico/coleccion-beethoven
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Colección completa de las obras de Beethoven con anotaciones
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4" /> 1.2k
                    </div>
                    <div>Actualizado hace 3 días</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Clásica</h3>
                  <p className="text-sm text-muted-foreground">
                    Partituras orquestales, música de cámara y obras instrumentales solistas
                  </p>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Jazz</h3>
                  <p className="text-sm text-muted-foreground">Lead sheets, diagramas de acordes y transcripciones</p>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Rock & Pop</h3>
                  <p className="text-sm text-muted-foreground">
                    Tablaturas de guitarra, acordes y arreglos para banda completa
                  </p>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Cine & TV</h3>
                  <p className="text-sm text-muted-foreground">
                    Partituras y arreglos de películas, series de TV y videojuegos
                  </p>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Coral</h3>
                  <p className="text-sm text-muted-foreground">
                    Arreglos corales, partituras vocales y obras a cappella
                  </p>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">Educativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Materiales didácticos, ejercicios y métodos de enseñanza
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t px-4 py-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 MusicRepo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

