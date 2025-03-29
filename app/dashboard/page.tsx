import Link from "next/link"
import { FileMusic, Lock, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
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
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <div className="relative">
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
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Tus Repositorios</h1>
            <Link href="/create-repository">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nuevo Repositorio
              </Button>
            </Link>
          </div>
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="private">Privados</TabsTrigger>
              <TabsTrigger value="public">Públicos</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/dashboard/repo/1" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">mi-sinfonia</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Mi primera composición sinfónica</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 2 días
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/2" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">sonata-piano</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Sonata para piano en Sol menor</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 1 semana
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/3" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">coleccion-jazz</h3>
                      <span className="text-xs text-muted-foreground">Público</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Colección de estándares de jazz</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 3 días
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/4" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">tabs-guitarra</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Mi colección de tablaturas para guitarra</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado ayer
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/5" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">arreglos-coro</h3>
                      <span className="text-xs text-muted-foreground">Público</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Arreglos corales para varias canciones</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 5 días
                    </div>
                  </div>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="private" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/dashboard/repo/1" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">mi-sinfonia</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Mi primera composición sinfónica</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 2 días
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/2" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">sonata-piano</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Sonata para piano en Sol menor</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 1 semana
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/4" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">tabs-guitarra</h3>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Mi colección de tablaturas para guitarra</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado ayer
                    </div>
                  </div>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="public" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/dashboard/repo/3" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">coleccion-jazz</h3>
                      <span className="text-xs text-muted-foreground">Público</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Colección de estándares de jazz</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 3 días
                    </div>
                  </div>
                </Link>
                <Link href="/dashboard/repo/5" className="block">
                  <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">arreglos-coro</h3>
                      <span className="text-xs text-muted-foreground">Público</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Arreglos corales para varias canciones</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      Actualizado hace 5 días
                    </div>
                  </div>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Actividad Reciente</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    width="24"
                    height="24"
                    className="rounded-full"
                    alt="Usuario"
                  />
                  <span className="font-medium">Tú</span>
                  <span className="text-sm text-muted-foreground">actualizaste</span>
                  <Link href="/dashboard/repo/1" className="font-medium hover:underline">
                    mi-sinfonia
                  </Link>
                  <span className="text-sm text-muted-foreground ml-auto">hace 2 días</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Añadida nueva parte de violín y actualizadas notas del director
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    width="24"
                    height="24"
                    className="rounded-full"
                    alt="Usuario"
                  />
                  <span className="font-medium">Tú</span>
                  <span className="text-sm text-muted-foreground">creaste</span>
                  <Link href="/dashboard/repo/5" className="font-medium hover:underline">
                    arreglos-coro
                  </Link>
                  <span className="text-sm text-muted-foreground ml-auto">hace 5 días</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Creado un nuevo repositorio público para arreglos corales
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    width="24"
                    height="24"
                    className="rounded-full"
                    alt="Usuario"
                  />
                  <span className="font-medium">JuanPérez</span>
                  <span className="text-sm text-muted-foreground">comentó en</span>
                  <Link href="/dashboard/repo/3" className="font-medium hover:underline">
                    coleccion-jazz
                  </Link>
                  <span className="text-sm text-muted-foreground ml-auto">hace 1 semana</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "¡Gran colección! Sugiero añadir 'Take Five' de Dave Brubeck."
                </p>
              </div>
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

