import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { FileText, Building2, MessageSquare, CheckCircle2, ArrowRight, Download, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const steps = [
  { icon: FileText, step: "01", title: "Online Inquiry", description: "Fill out the inquiry form with basic details about your child and preferred class" },
  { icon: Building2, step: "02", title: "Campus Visit", description: "Schedule a visit to explore our facilities, meet faculty, and understand our approach" },
  { icon: MessageSquare, step: "03", title: "Interaction Session", description: "Brief interaction to understand your child's learning needs and assess readiness" },
  { icon: CheckCircle2, step: "04", title: "Final Enrollment", description: "Complete documentation, pay fees, and secure your child's admission" },
];

const eligibility = [
  { class: "Nursery", age: "3+ years as on 31st March" },
  { class: "LKG", age: "4+ years as on 31st March" },
  { class: "UKG", age: "5+ years as on 31st March" },
  { class: "Class 1", age: "6+ years as on 31st March" },
  { class: "Class 2-10", age: "As per CBSE norms + TC from previous school" },
];

const documents = [
  "Birth Certificate (Original + Copy)",
  "Aadhar Card of Student",
  "4 Passport Size Photographs",
  "Transfer Certificate (for Class 2 onwards)",
  "Previous Year's Report Card",
  "Aadhar Card of Parents",
  "Address Proof"
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: "", phone: "", email: "", childName: "", grade: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you within 24 hours.");
    setFormData({ parentName: "", phone: "", email: "", childName: "", grade: "", message: "" });
  };

  return (
    <main className="overflow-hidden">
      <Header />
      <PageHero title="Admissions" subtitle="Begin your child's journey towards excellence" breadcrumb="Admissions" />

      {/* Process Steps */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Admission Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Simple Steps to <span className="text-primary">Join Us</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all relative">
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Step {step.step}</span>
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 mt-2">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Age Eligibility</h3>
              <div className="space-y-3">
                {eligibility.map((item) => (
                  <div key={item.class} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-semibold text-foreground">{item.class}</span>
                    <span className="text-muted-foreground text-sm">{item.age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Required Documents</h3>
              <ul className="space-y-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-10 shadow-strong">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-2 text-center">Admission Inquiry Form</h3>
            <p className="text-muted-foreground text-center mb-8">Fill out the form and we'll contact you within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Input required placeholder="Parent's Name *" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="bg-secondary" />
                <Input required type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-secondary" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-secondary" />
                <Input required placeholder="Child's Name *" value={formData.childName} onChange={(e) => setFormData({...formData, childName: e.target.value})} className="bg-secondary" />
              </div>
              <select required value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} className="w-full h-11 px-3 rounded-lg bg-secondary border border-border text-foreground">
                <option value="">Select Class *</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">LKG</option>
                <option value="ukg">UKG</option>
                {[...Array(10)].map((_, i) => <option key={i} value={`class-${i+1}`}>Class {i+1}</option>)}
              </select>
              <Textarea placeholder="Any message (optional)" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-secondary" rows={3} />
              <Button type="submit" size="lg" className="w-full">Submit Inquiry <ArrowRight className="w-4 h-4" /></Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Admissions;
