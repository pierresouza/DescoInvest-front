import { type SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import ilustration from "../assets/ilustration.svg";
import microsoft from "../assets/microsoft.svg";

import { PasswordInput } from "../components/ui/PasswordInput";
import { useAuthUser } from "../zustand/user";

import { Button } from "../components/ui/Button";
import { Banner } from "../components/decorations/Banner";
import { Logo } from "../components/decorations/Logo";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";

import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "../components/ui/Toast";

const loginPageSchema = z.object({
  email: z
    .string()
    .min(1, "O campo não pode está vazio.")
    .email("Forneça um email válido"),
  password: z.string().min(1, "O campo não pode está vazio."),
});

type LoginFields = z.infer<typeof loginPageSchema>;

export default function LoginPage() {
  const handleLoginUser = useAuthUser((store) => store.handleLoginUser);
  const [toast] = useToast();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginFields>({
    resolver: zodResolver(loginPageSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = async (formData) => {
    const dt = formData;
    try {
      await handleLoginUser({
        email: dt.email,
        password: dt.password,
      });
      toast({
        message: "Login efetuado com success",
        type: "success",
      });
      reset();
      navigate("/dashboard");
    } catch (error) {
      setError("root", {
        message:
          "Parece que o e-mail ou senha que você inseriu não estão corretos, por favor verifique e tente novamente",
      });
    }
  };

  return (
    <main className="xl:grid xl:grid-cols-2 min-h-screen xl:relative">
      <Banner className="self-center" />
      <div className="xl:gradient-login-body z-10 self-center justify-self-center">
        <Logo />

        <img src={ilustration} className="hidden xl:block" alt="" />
      </div>
      <div className="z-10 px-4 sm:max-w-md sm:mx-auto xl:shadow-2xl xl:max-w-none xl:mx-0 xl:flex xl:flex-col xl:justify-center bg-white">
        <div className="xl:max-w-sm xl:mx-auto 2xl:max-w-xl xl:w-full">
          <div className="h-[180px] xl:hidden" />
          <div className="mb-10 flex flex-col gap-y-6">
            <Button
              variant="gray"
              stretch
              className="xl:text-lg text-secondary-600 flex justify-center items-center gap-2 hover:bg-opacity-30"
            >
              Continuar com Google <FcGoogle className="text-[20px]" />
            </Button>
            <Button
              variant="gray"
              stretch
              className="xl:text-lg text-secondary-600 flex justify-center items-center gap-2 hover:bg-opacity-30"
            >
              Continuar com Microsoft{" "}
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
            className="text-end mb-14 py-10"
          >
            <div className="flex flex-col gap-y-3 text-left mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {!!errors.email && (
                <p className="text-[0.625rem] text-danger-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-3 text-left mb-4">
              <Label htmlFor="password">Senha</Label>
              <PasswordInput
                id="password"
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {!!errors.password && (
                <p className="text-[0.625rem] text-danger-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            {!!errors.root?.message && (
              <p className="text-[0.625rem] py-2 text-center text-danger-600">
                {errors.root.message}
              </p>
            )}

            <Link
              to="/esqueci-senha"
              className="text-primary-500 inline-flex mb-12 text-sm font-medium hover:underline"
            >
              Esqueci a senha
            </Link>
            <Button
              stretch
              size="large"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Entrar
            </Button>
          </form>
          <p className="text-lg text-secondary-600 text-center">
            Ainda não tem acesso?{" "}
            <Link to="/cadastro" className="text-primary-500 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
