import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BranchCard } from "@/components/sections/BranchCard";
import { BranchVisitForm } from "@/components/sections/BranchVisitForm";
import { Building2 } from "lucide-react";

const branches = [
    {
        name: "Main Campus",
        address: "123 Education Street, Knowledge Park, City - 123456",
        phone: "+91 9934763185",
        email: "main@vidyabharti.edu.in",
        mapUrl: "https://maps.google.com",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    },
    {
        name: "Branch Campus",
        address: "456 Learning Avenue, Academic Zone, City - 654321",
        phone: "+91 9876543210",
        email: "branch@vidyabharti.edu.in",
        mapUrl: "https://maps.google.com",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    },
];

const Branches = () => {
    return (
        <main className="overflow-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-secondary/50">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjZiMzUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

                <div className="container relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-hero mb-6 shadow-accent"
                        >
                            <Building2 className="w-10 h-10 text-primary-foreground" />
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-gradient-primary">Branches</span>
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Visit our state-of-the-art campuses designed to provide the best learning environment
                            for your child's holistic development and academic excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </section>

            {/* Branches Grid */}
            <section className="py-20 bg-background">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {branches.map((branch, index) => (
                            <BranchCard key={branch.name} {...branch} index={index} />
                        ))}
                    </div>

                    {/* Visit Request Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-20"
                    >
                        <BranchVisitForm />
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                            Can't Decide Which Campus?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Schedule a visit to both our campuses and experience our world-class facilities,
                            meet our dedicated faculty, and see why parents trust us with their children's education.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-hero text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-accent">
                                Schedule a Visit
                            </a>
                            <a href="/admissions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                                Apply for Admission
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Branches;
