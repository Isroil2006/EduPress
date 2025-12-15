import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const registerSchema = z
    .object({
        userName: z.string().min(3, "Ism kamida 3 belgidan iborat bo'lishi kerak"),
        email: z.string().email("Email noto'g'ri formatda"),
        password: z.string().min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak"),
        confirmPassword: z.string().min(6, "Parolni qayta kiriting"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Parollar bir xil emas",
        path: ["confirmPassword"],
    });

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
    });

    const onSubmit = (data: RegisterForm) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login", { replace: true });
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="bg-muted/40 flex flex-col min-h-screen items-center justify-center bg-[linear-gradient(49deg,rgba(255,136,0,1)0%,rgba(247,245,245,1)50%,rgba(247,245,245,1)38%,rgba(255,136,0,1)100%)]">
            <h1 className="font-exo text-[70px] font-[700] text-[#FF782D]">EduPress</h1>
            <Card className="w-full max-w-md rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* email  */}
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@example.com" {...register("email")} className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""} />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* username  */}
                        <div className="space-y-1">
                            <Label htmlFor="userName">Ism</Label>
                            <Input id="userName" placeholder="Ismingiz" {...register("userName")} className={errors.userName ? "border-red-500 focus-visible:ring-red-500" : ""} />
                            {errors.userName && <p className="text-sm text-red-500">{errors.userName.message}</p>}
                        </div>

                        {/* password  */}
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>

                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} placeholder="******" {...register("password")} className={errors.password ? "pr-10 border-red-500 focus-visible:ring-red-500" : "pr-10"} />

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* confirm password  */}
                        <div className="space-y-1">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>

                            <div className="relative">
                                <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="******" {...register("confirmPassword")} className={errors.confirmPassword ? "pr-10 border-red-500 focus-visible:ring-red-500" : "pr-10"} />

                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                        </div>

                        <Button type="submit" className="w-full bg-[#FF782D]" disabled={isSubmitting}>
                            Register
                        </Button>

                        <p className="text-center text-sm">
                            Akkountingiz bormi?{" "}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Login
                            </a>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
