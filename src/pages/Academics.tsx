import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { 
  Baby, BookOpen, School, GraduationCap, 
  CheckCircle, Clock, FileText, Award, 
  Users, Lightbulb, Target, TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Baby,
    level: "Pre-Primary",
    grades: "Nursery, LKG, UKG",
    ageGroup: "3-6 years",
    description: "Our early learning program focuses on holistic development through play-based learning, sensory activities, and foundational literacy.",
    subjects: ["Early Literacy", "Numeracy", "Art & Craft", "Music & Movement", "Environmental Awareness"],
    features: [
      "Activity-based learning",
      "Small class sizes",
      "Trained caregivers",
      "Safe play areas",
      "Parent engagement programs"
    ],
    color: "bg-pink-500"
  },
  {
    icon: BookOpen,
    level: "Primary School",
    grades: "Class 1 - 5",
    ageGroup: "6-11 years",
    description: "Building strong foundations in core subjects while encouraging curiosity and creative thinking.",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "Art Education", "Physical Education"],
    features: [
      "CBSE curriculum",
      "Interactive teaching",
      "Regular assessments",
      "Remedial classes",
      "Co-curricular activities"
    ],
    color: "bg-blue-500"
  },
  {
    icon: School,
    level: "Middle School",
    grades: "Class 6 - 8",
    ageGroup: "11-14 years",
    description: "Developing critical thinking and specialized subject knowledge to prepare for higher studies.",
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer", "Art"],
    features: [
      "Subject-specific teachers",
      "Lab-based learning",
      "Projects & presentations",
      "Olympiad preparation",
      "Career awareness"
    ],
    color: "bg-green-500"
  },
  {
    icon: GraduationCap,
    level: "Secondary School",
    grades: "Class 9 - 10",
    ageGroup: "14-16 years",
    description: "Comprehensive board exam preparation with focus on conceptual clarity and application-based learning.",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Applications"],
    features: [
      "Board exam focus",
      "Sample paper practice",
      "Doubt clearing sessions",
      "Parent counseling",
      "Career guidance"
    ],
    color: "bg-purple-500"
  },
];

const methodology = [
  { icon: Users, title: "Student-Centered Learning", description: "Focus on individual learning styles and pace" },
  { icon: Lightbulb, title: "Experiential Learning", description: "Learning by doing through activities and experiments" },
  { icon: Target, title: "Concept-Based Teaching", description: "Emphasis on understanding over rote memorization" },
  { icon: TrendingUp, title: "Continuous Assessment", description: "Regular evaluation for tracking progress" },
];

const assessmentPattern = [
  { type: "Periodic Tests", frequency: "Monthly", weightage: "10%" },
  { type: "Mid-Term Exam", frequency: "October", weightage: "30%" },
  { type: "Annual Exam", frequency: "March", weightage: "40%" },
  { type: "Activities & Projects", frequency: "Throughout", weightage: "20%" },
];

const Academics = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      
      <PageHero
        title="Academics"
        subtitle="Comprehensive CBSE curriculum designed for holistic development"
        breadcrumb="Academics"
      />

      {/* Academic Programs */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Academic Programs</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              From Foundation to <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground">
              Our structured curriculum guides students through their educational journey from early childhood to board examinations
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-medium transition-all"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <program.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-foreground">{program.level}</h3>
                        <p className="text-accent font-semibold">{program.grades}</p>
                        <p className="text-muted-foreground text-sm">Age: {program.ageGroup}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>

                  {/* Subjects */}
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Subjects Offered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Teaching Methodology</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Modern Teaching <span className="text-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground">
              Our teaching methods are designed to make learning engaging, effective, and enjoyable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-strong transition-all group"
              >
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6"
                >
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Pattern */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Assessment Pattern</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Continuous & Comprehensive <span className="text-primary">Evaluation</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our assessment system follows CBSE guidelines and focuses on holistic evaluation of students' 
                academic and co-curricular performance. Regular assessments help identify areas of improvement 
                and ensure continuous progress.
              </p>

              <div className="space-y-4">
                {assessmentPattern.map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.type}</p>
                        <p className="text-muted-foreground text-sm">{item.frequency}</p>
                      </div>
                    </div>
                    <div className="font-heading font-bold text-xl text-accent">{item.weightage}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-hero rounded-3xl p-10 text-primary-foreground"
            >
              <h3 className="font-heading font-bold text-2xl mb-6">Why Our Approach Works</h3>
              
              <ul className="space-y-4">
                {[
                  "Regular feedback to students and parents",
                  "Identification of learning gaps early on",
                  "Balanced focus on academics and activities",
                  "Reduced exam stress through continuous evaluation",
                  "Holistic development tracking",
                  "Parent-teacher collaboration for improvement"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Link to="/admissions">
                <Button variant="heroSolid" size="lg" className="mt-8">
                  Apply for Admission
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Academics;
