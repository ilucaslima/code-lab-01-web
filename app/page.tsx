import EmailIcon from "./assets/icons/email.png";
import PasswordIcon from "./assets/icons/password.png";

import { Input } from "@/app/components/ui/input";
import Button from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center">
      <div className="mb-6">
        <h1 className="font-extrabold text-2xl text-primary">CodePlay</h1>
        <span className="uppercase text-xs">Labotório de Software</span>
      </div>

      <div className="bg-card py-12 px-10 min-w-[448]">
        <div>
          <div>
            <p className="text-2xl font-bold text-left">Bem vindo de volta</p>
            <p className="text-left">
              Faça seu login para acessar a plataforma
            </p>
          </div>
        </div>

        <form className="flex flex-col w-full gap-4 py-4">
          <Input label="Email" icon={EmailIcon} placeholder="name@neon.com" />
          <Input
            label="Password"
            icon={PasswordIcon}
            placeholder="Digite sua senha"
            type="password"
          />
          <Button>Entrar</Button>
        </form>

        <div className="text-sm text-center">
          <span className="text-muted">Não tem uma conta?</span>
          <Link href="/register" className="text-primary font-bold ml-1">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
