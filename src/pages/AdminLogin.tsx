import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("adminToken", data.token);
                toast({
                    title: "Success!",
                    description: "Login successful. Redirecting...",
                });
                setTimeout(() => navigate("/admin/dashboard"), 500);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            toast({
                title: "Login Failed",
                description: error instanceof Error ? error.message : "Invalid credentials",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-card rounded-3xl shadow-strong border border-border p-8">
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-4 shadow-accent"
                        >
                            <Lock className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                        <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
                        <p className="text-muted-foreground">
                            Access the admin dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                value={credentials.username}
                                onChange={(e) =>
                                    setCredentials({ ...credentials, username: e.target.value })
                                }
                                required
                                placeholder="Enter admin username"
                                className="border-2 focus:border-primary transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-primary" />
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={credentials.password}
                                onChange={(e) =>
                                    setCredentials({ ...credentials, password: e.target.value })
                                }
                                required
                                placeholder="Enter password"
                                className="border-2 focus:border-primary transition-colors"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-hero hover:opacity-90 transition-opacity shadow-accent py-6"
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        <p>Default credentials:</p>
                        <p className="font-mono">Username: admin | Password: admin123</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
