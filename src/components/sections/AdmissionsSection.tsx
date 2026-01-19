import { motion } from "framer-motion";
import { FileText, Building2, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Online Inquiry",
    description: "Fill out the inquiry form with basic details about your child",
  },
  {
    icon: Building2,
    step: "02",
    title: "Campus Visit",
    description: "Schedule a visit to explore our facilities and meet our faculty",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Interaction / Test",
    description: "Brief interaction session to understand your child's learning needs",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Final Enrollment",
    description: "Complete documentation and secure your child's admission",
  },
];

export const AdmissionsSection = () => {
  return (
    <section id="admissions" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Admission Process</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Simple Steps to Join Our
            <span className="text-accent"> School Family</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Begin your child's journey towards academic excellence with our 
            straightforward admission process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-primary-foreground/20" />
              )}
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 text-center relative">
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </span>
                
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 border border-primary-foreground/20">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="heroSolid" size="xl" className="group">
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
