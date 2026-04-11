"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../components/ui/button";
import { Input } from "../components/ui/input";

import EmailIcon from "../assets/icons/email.png";
import PasswordIcon from "../assets/icons/password.png";
import Link from "next/link";
import { api } from "../config/api";

interface IFormInputs {
  name: string;
  age: number;
  email: string;
  password: string;
  olocomeu: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    try {
      api.post("/api/users/register", {
        name: data.name,
        age: Number(data.age),
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center text-center justify-center">
      <div className="mb-6">
        <h1 className="font-extrabold text-2xl text-primary">CodePlay</h1>
        <span className="uppercase text-xs">Área de Registro</span>
      </div>

      <div className="bg-card py-12 px-10 min-w-[448]">
        <div>
          <div>
            <p className="text-2xl font-bold text-left">Criar conta</p>
            <p className="text-left">
              Preencha seus dados para fazer seu cadastro e começar!
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4 py-4"
        >
          <Input
            label="Name"
            placeholder="Seu nome completo"
            {...register("name")}
          />
          <Input
            label="Age"
            placeholder="Sua idade"
            type="number"
            {...register("age")}
          />
          <Input
            label="Email"
            icon={EmailIcon}
            placeholder="name@neon.com"
            {...register("email")}
          />
          <Input
            label="Password"
            icon={PasswordIcon}
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          />
          <Button>Registrar-me</Button>
        </form>

        <div className="text-sm text-center">
          <span className="text-muted">Já possui uma conta?</span>
          <Link href="/" className="text-primary font-bold ml-1">
            Faça seu login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
