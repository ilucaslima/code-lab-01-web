"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import EmailIcon from "@/src/assets/icons/email.png";
import PasswordIcon from "@/src/assets/icons/password.png";
import Link from "next/link";
import { api } from "../../config/api";
import { toast } from "react-toastify";
import {
  IRegisterUserSchema,
  registerUserSchema,
} from "../../schema/users/register";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit = async (data: IRegisterUserSchema) => {
    setIsLoading(true);
    await api
      .post("/api/users/register", {
        name: data.name,
        age: Number(data.age),
        email: data.email,
        password: data.password,
      })
      .then(() => {
        toast.success("Usuário registrado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao registrar usuário. Tente novamente.");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Age"
            placeholder="Sua idade"
            type="number"
            error={errors.age?.message}
            {...register("age")}
          />
          <Input
            label="Email"
            icon={EmailIcon}
            placeholder="name@neon.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            icon={PasswordIcon}
            placeholder="Digite sua senha"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Button disabled={isLoading}>
            {isLoading ? <ClipLoader size={16} /> : "Registrar-me"}
          </Button>
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
