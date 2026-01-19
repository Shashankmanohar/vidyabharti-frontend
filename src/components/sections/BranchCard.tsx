import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BranchCardProps {
    name: string;
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
    image: string;
    index: number;
}

export const BranchCard = ({
    name,
    address,
    phone,
    email,
    mapUrl,
    image,
    index
}: BranchCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-secondary/30 border border-border shadow-medium hover:shadow-strong transition-all duration-500"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={image}
                    alt={`${name} Campus`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

                {/* Branch Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3
                        className="text-3xl font-bold text-primary-foreground mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                    >
                        {name}
                    </motion.h3>
                    <div className="h-1 w-20 bg-gradient-hero rounded-full" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 group/item">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Address
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                            {address}
                        </p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 group/item">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all duration-300">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Phone
                        </p>
                        <a
                            href={`tel:${phone}`}
                            className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                        >
                            {phone}
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 group/item">
                    <div className="p-2.5 rounded-xl bg-secondary text-secondary-foreground group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                            Email
                        </p>
                        <a
                            href={`mailto:${email}`}
                            className="text-sm text-foreground hover:text-primary transition-colors font-medium break-all"
                        >
                            {email}
                        </a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex gap-3">
                    <Button
                        asChild
                        className="flex-1 bg-gradient-hero hover:opacity-90 transition-opacity shadow-accent"
                    >
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-2 hover:bg-secondary hover:border-primary transition-all"
                    >
                        <a href={`tel:${phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </a>
                    </Button>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-hero opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
        </motion.div>
    );
};
