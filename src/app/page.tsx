"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Scale,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Gavel,
  FileText,
  Heart,
  Award,
  BookOpen,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ─── Intersection Observer Hook ─── */
function useSectionInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/* ─── Navigation Data ─── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ─── Practice Areas Data ─── */
const practiceAreas = [
  {
    icon: Shield,
    title: "Criminal Law",
    description:
      "Comprehensive criminal defense and prosecution services. From bail applications to trial representation, we ensure every client receives a fair and vigorous defense. Our expertise spans cybercrime, white-collar offenses, property disputes, and more.",
    features: [
      "Bail & Anticipatory Bail",
      "Criminal Trial Defense",
      "Cyber Crime Cases",
      "Domestic Violence Cases",
    ],
    color: "from-red-900/20 to-red-800/5",
    iconColor: "text-red-400",
    borderColor: "hover:border-red-400/30",
  },
  {
    icon: FileText,
    title: "Civil Litigation",
    description:
      "Expert handling of civil disputes including property conflicts, contract breaches, recovery suits, and consumer cases. We pursue every legal avenue to protect your rights and secure favorable outcomes through meticulous preparation and strategy.",
    features: [
      "Property Disputes",
      "Contract Enforcement",
      "Consumer Complaints",
      "Recovery Suits",
    ],
    color: "from-amber-900/20 to-amber-800/5",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-400/30",
  },
  {
    icon: Heart,
    title: "Family Law",
    description:
      "Sensitive and compassionate handling of family disputes including divorce, child custody, maintenance, and domestic matters. We approach every case with empathy while fiercely advocating for our clients' best interests and their families' welfare.",
    features: [
      "Divorce & Separation",
      "Child Custody Matters",
      "Maintenance & Alimony",
      "Domestic Disputes",
    ],
    color: "from-purple-900/20 to-purple-800/5",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-400/30",
  },
];

/* ─── Stats Data ─── */
const stats = [
  { number: "15+", label: "Years of Experience", icon: Award },
  { number: "3000+", label: "Cases Handled", icon: FileText },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "500+", label: "Successful Verdicts", icon: CheckCircle2 },
];

/* ─── Testimonials Data ─── */
const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Property Dispute Client",
    text: "Advocate Srinivas Putla handled my complex property case with exceptional expertise. His deep knowledge of civil law and strategic approach helped me secure a favorable judgment. I highly recommend his services to anyone seeking legal counsel.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    role: "Family Law Client",
    text: "During the most difficult time of my life, Advocate Putla provided not just legal support but also emotional guidance. He handled my divorce and custody case with utmost sensitivity and professionalism. Truly a compassionate advocate.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    role: "Criminal Defense Client",
    text: "I was falsely accused in a criminal case, and Advocate Putla fought tirelessly to prove my innocence. His courtroom skills are remarkable, and he left no stone unturned in my defense. I am grateful for his dedication and commitment.",
    rating: 5,
  },
];

/* ─── Main Page Component ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal overflow-x-hidden">
      {/* ─── Navigation ─── */}
      <Navigation
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* ─── Hero Section ─── */}
      <HeroSection />

      {/* ─── Stats Bar ─── */}
      <StatsBar />

      {/* ─── About Section ─── */}
      <AboutSection />

      {/* ─── Practice Areas ─── */}
      <PracticeAreasSection />

      {/* ─── Why Choose Us ─── */}
      <WhyChooseSection />

      {/* ─── Testimonials ─── */}
      <TestimonialsSection />

      {/* ─── Contact Section ─── */}
      <ContactSection />

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION COMPONENT
   ═══════════════════════════════════════════════════════════ */
function Navigation({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav bg-navy-dark/95 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-gold font-bold text-sm sm:text-base tracking-wide leading-tight">
                ADV. P.S. PUTLA
              </span>
              <span className="text-gold-light/60 text-[10px] sm:text-xs tracking-widest uppercase">
                Senior Advocate
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/80 hover:text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav bg-navy-dark/98 border-t border-gold/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-sm rounded-full"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Court building background"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Badge className="bg-gold/15 text-gold border-gold/30 mb-6 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Practicing at Tanuku Court
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Advocate</span>
              <br />
              <span className="gold-gradient-text">
                Putla Srinivas Putla
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Dedicated legal counsel with over 15 years of experience in
              Criminal, Civil, and Family Law. Committed to upholding justice
              and protecting the rights of every client who walks through our doors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-bold rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#practice"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-gold/40 transition-all duration-300 text-sm sm:text-base"
              >
                <Gavel className="w-5 h-5" />
                Practice Areas
              </a>
            </motion.div>

            {/* Quick Practice Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Shield, label: "Criminal Law" },
                { icon: FileText, label: "Civil Law" },
                { icon: Heart, label: "Family Law" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 hidden md:block"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/30 to-gold-dark/10 blur-xl" />
              <div className="absolute -inset-1 rounded-full border-2 border-gold/30" />
              <img
                src="/advocate-portrait.png"
                alt="Advocate Putla Srinivas Putla"
                className="relative w-72 lg:w-80 h-auto rounded-full object-cover shadow-2xl shadow-black/30 border-4 border-gold/20"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy-dark border border-gold/30 rounded-full px-5 py-2 shadow-xl">
                <span className="text-gold font-bold text-sm">
                  15+ Years Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════════════════════ */
function StatsBar() {
  const { ref, isInView } = useSectionInView();
  return (
    <section ref={ref} className="relative z-10 -mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-2xl shadow-2xl shadow-black/20 border border-gold/10 p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT SECTION
   ═══════════════════════════════════════════════════════════ */
function AboutSection() {
  const { ref, isInView } = useSectionInView();
  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/50 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/50 rounded-br-3xl" />
              <div className="relative bg-navy-light rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src="/hero-bg.png"
                  alt="Court of Law"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                    <Scale className="w-8 h-8 text-gold flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Justice for All
                      </p>
                      <p className="text-white/60 text-xs">
                        Practicing at Tanuku District Court
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <Badge className="bg-gold/10 text-gold-dark border-gold/20 mb-4 text-xs font-semibold tracking-wider uppercase">
              About the Advocate
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Committed to{" "}
              <span className="text-gold-dark">Delivering Justice</span>
            </h2>
            <div className="gold-divider w-20 mb-6" />
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-6">
              Advocate Putla Srinivas Putla has been a pillar of legal
              excellence in the Tanuku judicial landscape for over 15 years.
              With a deep-rooted commitment to the principles of justice and
              fairness, he has built a reputation for providing compassionate
              yet assertive legal representation to clients from all walks of
              life.
            </p>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-8">
              Specializing in Criminal Defense, Civil Litigation, and Family
              Law, Advocate Putla combines his extensive courtroom experience
              with a meticulous approach to case preparation. His practice at
              the Tanuku Court has earned him the trust and respect of clients,
              peers, and members of the judiciary alike.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: BookOpen, text: "B.A., LL.B. Graduate" },
                { icon: Award, text: "Bar Council Registered" },
                { icon: MapPin, text: "Based in Tanuku, A.P." },
                { icon: Clock, text: "Available 6 Days a Week" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-charcoal/80 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-white font-semibold rounded-full hover:bg-navy transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRACTICE AREAS SECTION
   ═══════════════════════════════════════════════════════════ */
function PracticeAreasSection() {
  const { ref, isInView } = useSectionInView();
  return (
    <section
      id="practice"
      ref={ref}
      className="py-20 sm:py-28 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <Badge className="bg-gold/10 text-gold-dark border-gold/20 mb-4 text-xs font-semibold tracking-wider uppercase">
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Practice <span className="text-gold-dark">Areas</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive legal services across three major
            practice areas, ensuring expert representation for every aspect of
            your legal needs.
          </p>
        </motion.div>

        {/* Practice Area Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card
                className={`practice-card h-full border border-transparent ${area.borderColor} bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden`}
              >
                {/* Gradient Top Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${area.color}`} />
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}
                  >
                    <area.icon className={`w-7 h-7 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    {area.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm sm:text-base leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <Separator className="mb-6 bg-charcoal/10" />
                  <ul className="space-y-3">
                    {area.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-charcoal/80"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${area.iconColor} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHY CHOOSE US SECTION
   ═══════════════════════════════════════════════════════════ */
function WhyChooseSection() {
  const { ref, isInView } = useSectionInView();
  const reasons = [
    {
      icon: Award,
      title: "Extensive Experience",
      description:
        "Over 15 years of dedicated legal practice in the Tanuku court system, handling thousands of diverse cases with proven success. Our deep familiarity with local court procedures and judicial practices gives clients a significant advantage.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every case is treated with personal attention and care. We understand that legal matters can be stressful, and we ensure our clients are informed, supported, and comfortable throughout the entire legal process. Your peace of mind matters to us.",
    },
    {
      icon: Shield,
      title: "Aggressive Representation",
      description:
        "Whether in negotiations or in the courtroom, we fight tirelessly for our clients' rights. Our advocate is known for his sharp legal acumen, compelling arguments, and unwavering commitment to achieving the best possible outcomes for every client.",
    },
    {
      icon: BookOpen,
      title: "In-Depth Legal Knowledge",
      description:
        "Continuously updated with the latest legal developments, landmark judgments, and amendments. Our comprehensive understanding of criminal, civil, and family law enables us to craft innovative strategies tailored to each unique case.",
    },
    {
      icon: Clock,
      title: "Timely & Transparent",
      description:
        "We value your time and maintain complete transparency in all proceedings. Regular case updates, clear communication about legal options, and honest assessments ensure you are never left wondering about the status of your case.",
    },
    {
      icon: Scale,
      title: "Ethical Practice",
      description:
        "Upholding the highest standards of legal ethics and professional conduct. Our practice is built on integrity, honesty, and a genuine commitment to justice, earning the respect of the judiciary, peers, and clients alike.",
    },
  ];

  return (
    <section
      id="why"
      ref={ref}
      className="py-20 sm:py-28 bg-navy text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <Badge className="bg-gold/15 text-gold border-gold/30 mb-4 text-xs font-semibold tracking-wider uppercase">
            Our Promise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="gold-gradient-text">Adv. Putla Srinivas</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            When you choose our legal services, you are choosing unwavering
            dedication, proven expertise, and a genuine commitment to securing
            the best possible outcome for your case.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/20 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                {reason.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS SECTION
   ═══════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const { ref, isInView } = useSectionInView();
  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <Badge className="bg-gold/10 text-gold-dark border-gold/20 mb-4 text-xs font-semibold tracking-wider uppercase">
            Client Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            What Our <span className="text-gold-dark">Clients Say</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The trust and satisfaction of our clients is the greatest measure of
            our success. Here are some testimonials from people we have had the
            privilege to represent.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="h-full bg-cream border border-charcoal/5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-400">
                <CardContent className="p-6 sm:p-8 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <Separator className="mb-4 bg-charcoal/10" />
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                      <span className="text-navy-dark font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-charcoal/50 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const { ref, isInView } = useSectionInView();
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Adv. Putla Srinivas Putla", "Near Tanuku District Court", "Tanuku, West Godavari Dist.", "Andhra Pradesh - 534211"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["advocate.putla@gmail.com", "srinivas.putla@lawyer.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment Only"],
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-28 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <Badge className="bg-gold/10 text-gold-dark border-gold/20 mb-4 text-xs font-semibold tracking-wider uppercase">
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Contact <span className="text-gold-dark">Us</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need legal advice, want to schedule a consultation, or
            have questions about our services, we are here to help. Reach out
            to us through any of the channels below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-charcoal/60 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm">
              <div className="bg-charcoal/5 h-48 sm:h-56 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gold mx-auto mb-2" />
                  <p className="text-charcoal/50 text-sm font-medium">
                    Tanuku District Court Area
                  </p>
                  <p className="text-charcoal/40 text-xs">
                    West Godavari, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <Card className="bg-white border border-charcoal/10 rounded-2xl shadow-md overflow-hidden">
              <div className="bg-charcoal p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  Request a Consultation
                </h3>
                <p className="text-white/60 text-sm">
                  Fill out the form below and we will get back to you promptly.
                </p>
              </div>
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Practice Area
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Criminal", "Civil", "Family"].map((area) => (
                      <label
                        key={area}
                        className="flex items-center justify-center px-4 py-2.5 border border-charcoal/15 rounded-lg cursor-pointer hover:border-gold hover:bg-gold/5 transition-colors text-sm font-medium text-charcoal/70 has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-gold-dark"
                      >
                        <input
                          type="radio"
                          name="area"
                          value={area}
                          className="sr-only"
                        />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Describe Your Case *
                  </label>
                  <Textarea
                    placeholder="Briefly describe your legal issue..."
                    rows={4}
                    className="border-charcoal/15 focus:border-gold focus:ring-gold/20 resize-none"
                  />
                </div>
                <Button className="w-full bg-charcoal hover:bg-navy text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base h-11">
                  Submit Consultation Request
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-charcoal/40 text-xs text-center">
                  Your information is kept strictly confidential.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Scale className="w-5 h-5 text-navy-dark" />
              </div>
              <div>
                <p className="text-gold font-bold text-sm tracking-wide">
                  ADV. P.S. PUTLA
                </p>
                <p className="text-gold-light/50 text-[10px] tracking-widest uppercase">
                  Senior Advocate
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Providing trusted legal counsel and aggressive representation
              in Criminal, Civil, and Family Law at Tanuku Court, Andhra
              Pradesh.
            </p>
            <div className="flex gap-3">
              {["Facebook", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/30 transition-colors"
                  aria-label={social}
                >
                  <Users className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.title}>
                  <a
                    href="#practice"
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                Tanuku, West Godavari, A.P.
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                advocate.putla@gmail.com
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                Mon-Sat: 9AM - 7PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Advocate Putla Srinivas Putla. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Practicing at Tanuku District Court, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
