import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const loginSchema = z.object({
    email: z.string().email("Email noto'g'ri formatda"),
    password: z.string().min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });

    const onSubmit = (data: LoginForm) => {
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

        if (!savedUser.email) {
            setError("email", { message: "Avval ro'yxatdan o'ting" });
            toast.error("Ma'lumot topilmadi");
            return;
        }

        if (data.email === savedUser.email && data.password === savedUser.password) {
            localStorage.setItem("isLoggedIn", "true");
            toast.success(`${savedUser.userName} — xush kelibsiz`);
            navigate("/");
        } else {
            setError("password", { message: "Email yoki parol noto'g'ri" });
            toast.error("Email yoki parol noto'g'ri");
        }
    };

    return (
        <div className="bg-muted/40 flex flex-col min-h-screen items-center justify-center bg-[linear-gradient(49deg,rgba(255,136,0,1)0%,rgba(247,245,245,1)50%,rgba(247,245,245,1)38%,rgba(255,136,0,1)100%)]">
            <h1 className="font-exo text-[70px] font-[700] text-[#FF782D]">EduPress</h1>
            <Card className="w-full max-w-md rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@example.com" className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""} {...register("email")} />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="******" className={errors.password ? "border-red-500 focus-visible:ring-red-500" : ""} {...register("password")} />
                            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                        </div>

                        <Button type="submit" className="w-full bg-[#FF782D]" disabled={isSubmitting}>
                            Login
                        </Button>

                        <p className="text-center text-sm">
                            Akkountingiz yo'qmi?{" "}
                            <a href="/register" className="text-blue-600 hover:underline">
                                Register
                            </a>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
