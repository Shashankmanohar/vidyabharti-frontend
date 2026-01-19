import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const BranchVisitForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        branch: "",
        preferredDate: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBranchChange = (value: string) => {
        setFormData({ ...formData, branch: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://vidyabharti-backend.vercel.app/api/branch-visits", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Success!",
                    description: "Your visit request has been submitted successfully.",
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    branch: "",
                    preferredDate: "",
                    message: "",
                });
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to submit request. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/30 border border-border shadow-medium"
        >
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">
                    Schedule a <span className="text-gradient-primary">Campus Visit</span>
                </h3>
                <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you shortly to confirm your visit.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            Full Name *
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="border-2 focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Email Address *
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="border-2 focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Phone Number *
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 98765 43210"
                            className="border-2 focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Branch Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="branch" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Select Branch *
                        </Label>
                        <Select value={formData.branch} onValueChange={handleBranchChange} required>
                            <SelectTrigger className="border-2 focus:border-primary transition-colors">
                                <SelectValue placeholder="Choose a branch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Main Campus">Main Campus</SelectItem>
                                <SelectItem value="Branch Campus">Branch Campus</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="preferredDate" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Preferred Visit Date *
                        </Label>
                        <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="border-2 focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Additional Message (Optional)
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific questions or requirements?"
                        rows={4}
                        className="border-2 focus:border-primary transition-colors resize-none"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity shadow-accent text-lg py-6"
                >
                    {isSubmitting ? (
                        "Submitting..."
                    ) : (
                        <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Visit Request
                        </>
                    )}
                </Button>
            </form>
        </motion.div>
    );
};
