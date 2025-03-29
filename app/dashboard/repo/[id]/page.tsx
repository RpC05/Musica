"use client"

import Link from "next/link"
import { ArrowUpDown, Clock, Download, FileMusic, GitBranch, History, Lock, Music, Search, Share2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RepoPage({ params }: { params: { id: string } }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
              placeholder="Buscar archivos..."
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">mi-sinfonia</h1>
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm">
                <GitBranch className="mr-2 h-4 w-4" /> main
              </Button>
              <Button variant="outline" size="sm">
                <History className="mr-2 h-4 w-4" /> Historial
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" /> Compartir
              </Button>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-muted-foreground">Mi primera composición sinfónica - trabajo en progreso</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" /> Actualizado hace 2 días
              </div>
              <div>5 archivos</div>
            </div>
          </div>
          <Tabs defaultValue="files" className="mb-6">
            <TabsList>
              <TabsTrigger value="files">Archivos</TabsTrigger>
              <TabsTrigger value="collaborators">Colaboradores</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>
            <TabsContent value="files" className="mt-4">
              <div className="rounded-lg border overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ArrowUpDown className="mr-2 h-3 w-3" /> Ordenar
                    </Button>
                  </div>
                  <Button size="sm">
                    <Music className="mr-2 h-4 w-4" /> Subir Archivos
                  </Button>
                </div>
                <div className="divide-y">
                  <div className="flex items-center p-4 hover:bg-muted/50">
                    <FileMusic className="mr-2 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <Link href="#" className="font-medium hover:underline">
                        sinfonia-partitura-completa.pdf
                      </Link>
                      <p className="text-sm text-muted-foreground">Partitura orquestal completa</p>
                    </div>
                    <div className="text-sm text-muted-foreground mr-4">Actualizado hace 2 días</div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </div>
                  <div className="flex items-center p-4 hover:bg-muted/50">
                    <FileMusic className="mr-2 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <Link href="#" className="font-medium hover:underline">
                        primer-movimiento.midi
                      </Link>
                      <p className="text-sm text-muted-foreground">Archivo MIDI del primer movimiento</p>
                    </div>
                    <div className="text-sm text-muted-foreground mr-4">Actualizado hace 1 semana</div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </div>
                  <div className="flex items-center p-4 hover:bg-muted/50">
                    <FileMusic className="mr-2 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <Link href="#" className="font-medium hover:underline">
                        violin-1.pdf
                      </Link>
                      <p className="text-sm text-muted-foreground">Parte de primer violín</p>
                    </div>
                    <div className="text-sm text-muted-foreground mr-4">Actualizado hace 3 días</div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </div>
                  <div className="flex items-center p-4 hover:bg-muted/50">
                    <FileMusic className="mr-2 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <Link href="#" className="font-medium hover:underline">
                        cello.pdf
                      </Link>
                      <p className="text-sm text-muted-foreground">Parte de cello</p>
                    </div>
                    <div className="text-sm text-muted-foreground mr-4">Actualizado hace 5 días</div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </div>
                  <div className="flex items-center p-4 hover:bg-muted/50">
                    <FileMusic className="mr-2 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <Link href="#" className="font-medium hover:underline">
                        notas-director.md
                      </Link>
                      <p className="text-sm text-muted-foreground">Notas de interpretación para el director</p>
                    </div>
                    <div className="text-sm text-muted-foreground mr-4">Actualizado ayer</div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Descargar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="collaborators" className="mt-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium mb-4">Colaboradores del Repositorio</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width="40"
                        height="40"
                        className="rounded-full"
                        alt="Usuario"
                      />
                      <div>
                        <div className="font-medium">Tú (Propietario)</div>
                        <div className="text-sm text-muted-foreground">usuario@ejemplo.com</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">Administrador</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width="40"
                        height="40"
                        className="rounded-full"
                        alt="Usuario"
                      />
                      <div>
                        <div className="font-medium">Ana García</div>
                        <div className="text-sm text-muted-foreground">ana@ejemplo.com</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">Escritura</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button>Añadir Colaborador</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Añadir Colaborador</DialogTitle>
                        <DialogDescription>
                          Invita a un colaborador a tu repositorio. Podrán ver y contribuir según el nivel de permisos
                          que les asignes.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" placeholder="colaborador@ejemplo.com" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="permission" className="text-right">
                            Permisos
                          </Label>
                          <Select defaultValue="write">
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Selecciona un nivel de permisos" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="read">Lectura</SelectItem>
                              <SelectItem value="write">Escritura</SelectItem>
                              <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                          Invitar
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium mb-4">Configuración del Repositorio</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="repo-name" className="block text-sm font-medium mb-1">
                      Nombre del Repositorio
                    </label>
                    <Input id="repo-name" defaultValue="mi-sinfonia" />
                  </div>
                  <div>
                    <label htmlFor="repo-description" className="block text-sm font-medium mb-1">
                      Descripción
                    </label>
                    <Input
                      id="repo-description"
                      defaultValue="Mi primera composición sinfónica - trabajo en progreso"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label htmlFor="repo-visibility" className="block text-sm font-medium">
                      Visibilidad
                    </label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Lock className="h-4 w-4" /> Privado
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button>Guardar Cambios</Button>
                  <Button variant="destructive">Eliminar Repositorio</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t px-4 py-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 MusicRepo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

