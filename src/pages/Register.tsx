import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Banner } from "../components/decorations/Banner";

import ilustration from "../assets/ilustration.svg";
import microsoft from "../assets/microsoft.svg";

import { FcGoogle } from "react-icons/fc";

import { PasswordInput } from "../components/ui/PasswordInput";
import { Label } from "../components/ui/Label";
import { Logo } from "../components/decorations/Logo";

import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  handleSiginWithGoogle,
  handleSiginWithGitHub,
} from "../../services/firebaseFunctions";
import { cn } from "../functions/twMerge";
import {
  checkValidations,
  containNumber,
  containUppercase,
  containSymbols,
  textValidation,
} from "../functions/validationsPassword";
import { useAuthUser } from "../zustand/user";
import { useToast } from "../components/ui/Toast";

const registerPageSchema = z.object({
  email: z
    .string()
    .min(1, "O campo não pode está vazio.")
    .email("Forneça um email válido!"),
  password: z.string().min(1, "O campo não pode está vazio."),
  confirmPassword: z.string().min(1, "As senha devem ser iguais!"),
});

type RegisterFields = z.infer<typeof registerPageSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    // setError,
    reset,
  } = useForm<RegisterFields>({
    resolver: zodResolver(registerPageSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const Password = watch("password");
  const [toast] = useToast();

  const [validation, setValidation] = useState(false);
  const { handleRegisterUser, isAuth } = useAuthUser((store) => {
    const handleRegisterUser = store.handleRegisterUser;
    const isAuth = store.isAuth;

    return { handleRegisterUser, isAuth };
  });

  const navigate = useNavigate();

  const passwordValidation = checkValidations(Password);
  const popoverTitle = textValidation(passwordValidation);

  const onSubmit: SubmitHandler<RegisterFields> = async (formData) => {
    const dt = formData;
    try {
      await handleRegisterUser({
        email: dt.email,
        password: dt.password,
      });
      toast({
        message: "Registro efetuado com success",
        type: "success",
      });
      reset();
      navigate("/dashboard");
    } catch (error) {
      alert("Algo deu errado, por favor tente novamente mais tarde");
    }
  };

  return (
    <main className="xl:grid xl:grid-cols-2 min-h-screen xl:relative">
      <Banner className="self-center" />
      <div className="xl:gradient-login-body z-10 self-center justify-self-center">
        <Logo />
        <img src={ilustration} className="hidden xl:block" alt="" />
      </div>

      <div className="z-10 bg-white px-4 sm:py-7 py-2 sm:max-w-md sm:mx-auto xl:shadow-2xl xl:max-w-none xl:mx-0 xl:flex xl:flex-col xl:justify-center">
        <div className="xl:max-w-sm xl:mx-auto 2xl:max-w-xl xl:w-full">
          <div className="h-[180px] xl:hidden" />
          <div className="text-secondary-600 flex mb-10 gap-y-6 gap-x-9 flex-col xl:flex-row">
            <Button
              variant="gray"
              stretch
              className="xl:text-base text-secondary-600 flex justify-center items-center gap-2 hover:bg-opacity-30"
              onClick={handleSiginWithGoogle}
            >
              Google <FcGoogle className="text-black text-[20px]" />
            </Button>
            <Button
              variant="gray"
              stretch
              className="xl:text-base text-secondary-600 flex justify-center items-center gap-2 hover:bg-opacity-30"
              onClick={handleSiginWithGitHub}
            >
              Microsoft
              <img src={microsoft} className="w-[16px]" alt="Logo microsoft" />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <hr className="w-full bg-black" />
            <span>Ou</span>
            <hr className="w-full bg-black" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-end mb-14 py-7"
          >
            {isAuth && "Usuario registrado com suceso"}
            <div className="space-y-2 text-left">
              <div className="flex flex-col gap-y-1 pb-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  onChange={() => console.log}
                />
                {!!errors.email && (
                  <p className="text-[0.625rem] text-danger-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-y-1 relative pt-3">
                <Label htmlFor="password">Senha</Label>
                <PasswordInput
                  {...register("password")}
                  id="password"
                  onFocus={() => setValidation(true)}
                  onBlur={() => setValidation(false)}
                />
                {!!errors.password && (
                  <p className="text-[0.625rem] text-danger-600">
                    {errors.password.message}
                  </p>
                )}
                {/* Inside this next div, has the all logic behavior of the popup container that show for the user the validations */}
                <div
                  className={cn(
                    `bg-white   absolute shadow-sm border w-[250px] h-[200px] rounded-xl pl-3 pr-1 justify-start items-center  z-10 top-[-195px] right-[50%] translate-x-[50%] ${
                      validation ? "" : "hidden"
                    }`,
                  )}
                >
                  <h4 className="text-xs  mt-4">{popoverTitle}</h4>
                  <div className="flex justify-start gap-6 items-centers my-6">
                    <span
                      className={cn(
                        "border-b-4 border-grey w-14 duration-500 ",
                        passwordValidation === 1 ? "border-red-600" : "",
                        passwordValidation >= 2 ? "border-warning-300" : "",
                        passwordValidation > 3 ? "border-success-400" : "",
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-b-4 border-grey w-14 duration-500",
                        passwordValidation >= 2 ? "border-warning-300" : "",
                        passwordValidation > 3 ? "border-success-400" : "",
                      )}
                    ></span>
                    <span
                      className={cn(
                        "border-b-4 border-grey w-14 duration-500",
                        passwordValidation > 3 ? "border-success-400" : "",
                      )}
                    ></span>
                  </div>
                  <ul className="flex flex-col gap-3 mt-3 z-10 text-[10px] text-secondary-600 pl-3 justify-startw-full list-disc">
                    <li
                      className={` ${
                        Password.length >= 8
                          ? "text-success-400 line-through"
                          : ""
                      }`}
                    >
                      Deve ter no minimo 8 caracteres
                    </li>
                    <li
                      className={`${
                        containUppercase(Password)
                          ? "text-success-400 line-through"
                          : ""
                      }`}
                    >
                      Deve ter no minimo 1 letra maiuscula
                    </li>
                    <li
                      className={`${
                        containNumber(Password)
                          ? "text-success-400 line-through"
                          : ""
                      }`}
                    >
                      Deve ter no minimo 1 número
                    </li>
                    <li
                      className={`z-20 ${
                        containSymbols(Password)
                          ? "text-success-400 line-through"
                          : ""
                      }`}
                    >
                      Deve ter no minimo 1 simbolo ex: @#$!.
                    </li>
                  </ul>
                  <div className="bg-white absolute shadow-b-sm shadow-r-sm border-b border-r bottom-[-16px] z-0 rounded-sm w-8 h-8  left-[35%] rotate-45 translate-x-[50%]"></div>
                </div>
              </div>

              <div className="flex flex-col gap-y-1 pt-4">
                <Label htmlFor="confirm-password">Confirme sua senha</Label>
                <PasswordInput
                  {...register("confirmPassword")}
                  id="confirm-password"
                />
                {!!errors.confirmPassword && (
                  <p className="text-[0.625rem] text-danger-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              stretch
              className="mt-20"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
          </form>
          <p className="sm:mt-12 mt-16 text-lg text-center text-secondary-600">
            Já tem acesso?{" "}
            <Link
              className="text-primary-500 hover:underline focus-visible:underline"
              to="/login"
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
