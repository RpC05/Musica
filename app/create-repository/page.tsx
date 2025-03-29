import Link from "next/link"
import { FileMusic, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CreateRepositoryPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Crear Nuevo Repositorio</h1>
            <p className="text-muted-foreground">
              Configura un nuevo repositorio para almacenar tus archivos musicales
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="repo-name">Nombre del Repositorio</Label>
              <Input id="repo-name" placeholder="mi-musica-increible" required />
              <p className="text-xs text-muted-foreground">
                Usa letras minúsculas, números y guiones. No se permiten espacios.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descripción (opcional)</Label>
              <Textarea
                id="description"
                placeholder="Una breve descripción de tu repositorio"
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-3">
              <Label>Visibilidad del Repositorio</Label>
              <RadioGroup defaultValue="private">
                <div className="flex items-start space-x-2 border p-4 rounded-md">
                  <RadioGroupItem value="private" id="private" className="mt-1" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="private" className="font-medium">
                      Privado
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Solo tú y las personas con las que compartas pueden acceder a este repositorio
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 border p-4 rounded-md">
                  <RadioGroupItem value="public" id="public" className="mt-1" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="public" className="font-medium">
                      Público
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Cualquiera puede ver este repositorio. Tú eliges quién puede contribuir.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className="pt-4 flex gap-2">
              <Link href="/dashboard">
                <Button>Crear Repositorio</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Cancelar</Button>
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

