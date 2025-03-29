import Link from "next/link"
import { Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <Link href="/" className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <Music className="h-8 w-8" />
          <span>MusicRepo</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Restablecer Contraseña</h1>
            <p className="text-muted-foreground">
              Ingresa tu email para recibir un enlace de restablecimiento de contraseña
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="nombre@ejemplo.com" type="email" required />
            </div>
            <Button className="w-full">Enviar Enlace de Restablecimiento</Button>
          </div>
          <div className="text-center text-sm">
            ¿Recuerdas tu contraseña?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Iniciar sesión
            </Link>
          </div>
          <div className="text-center text-sm">
            <Link href="/" className="text-muted-foreground hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

