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
  Calendar,
  Sparkles,
  Tag,
  Timer,
  ChevronUp,
  ExternalLink,
  Lock,
  LogOut,
  Trash2,
  Eye,
  EyeOff,
  Globe,
  Languages,
  Send,
  Loader2,
  RefreshCw,
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
  { label: "Legal Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ─── Practice Areas Data ─── */
const practiceAreas = [
  {
    icon: Shield,
    title: "Criminal Law",
    description:
      "Comprehensive criminal defense and prosecution services by Advocate Putla Srinivas. From bail applications to trial representation, we ensure every client receives a fair and vigorous defense at Tanuku Court. Our expertise spans cybercrime, white-collar offenses, property disputes, and more.",
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
      "Expert handling of civil disputes including property conflicts, contract breaches, recovery suits, and consumer cases by Advocate Putla Srinivas. We pursue every legal avenue to protect your rights and secure favorable outcomes through meticulous preparation and strategy at the Tanuku Court.",
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
      "Sensitive and compassionate handling of family disputes including divorce, child custody, maintenance, and domestic matters by Advocate Putla Srinivas. We approach every case with empathy while fiercely advocating for our clients' best interests and their families' welfare.",
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
    text: "Advocate Putla Srinivas handled my complex property case with exceptional expertise. His deep knowledge of civil law and strategic approach helped me secure a favorable judgment at Tanuku Court. I highly recommend his services to anyone seeking legal counsel.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    role: "Family Law Client",
    text: "During the most difficult time of my life, Advocate Putla Srinivas provided not just legal support but also emotional guidance. He handled my divorce and custody case with utmost sensitivity and professionalism at Tanuku Court. Truly a compassionate advocate.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    role: "Criminal Defense Client",
    text: "I was falsely accused in a criminal case, and Advocate Putla Srinivas fought tirelessly to prove my innocence at Tanuku Court. His courtroom skills are remarkable, and he left no stone unturned in my defense. I am grateful for his dedication and commitment to justice.",
    rating: 5,
  },
];

/* ─── SEO Blog Data ─── */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  keywords: string[];
  readTime: string;
  date: string;
  content: string;
}

const seoBlogPosts: BlogPost[] = [
  {
    id: "bail-guide-tanuku",
    title: "How to Get Bail in Tanuku Court: Complete Legal Guide by Advocate Putla Srinivas",
    excerpt:
      "Comprehensive guide on bail procedures at Tanuku Court, Andhra Pradesh. Learn about regular bail, anticipatory bail, and how an experienced criminal lawyer can help secure your release quickly.",
    category: "Criminal Law",
    keywords: ["bail lawyer tanuku", "anticipatory bail", "criminal lawyer tanuku court", "bail procedure andhra pradesh"],
    readTime: "6 min read",
    date: "May 10, 2026",
    content: `
      <h2>Understanding Bail Proceedings at Tanuku Court</h2>
      <p>Bail is a legal mechanism that allows an accused person to be released from custody while their case is being tried. At Tanuku Court in West Godavari District, bail applications are heard under the Code of Criminal Procedure (CrPC). Whether you are facing charges under Section 420, Section 498A, Section 307, or any other criminal provision, understanding your bail rights is the first step toward securing your freedom.</p>
      
      <h2>Types of Bail Available</h2>
      <p>There are three main types of bail available under Indian law. <strong>Regular Bail</strong> is filed after arrest and is governed by Sections 437 and 439 of the CrPC. <strong>Anticipatory Bail</strong> under Section 438 is sought when a person apprehends arrest. <strong>Default Bail</strong> is a statutory right that accrues if the police fail to file a chargesheet within the stipulated period of 60 or 90 days.</p>
      <p>Advocate Putla Srinivas has successfully obtained bail for hundreds of clients across all categories at Tanuku Court, Bhimavaram Court, and other courts in West Godavari District. His thorough preparation, knowledge of precedent cases, and persuasive arguments have earned him a reputation as one of the most effective bail lawyers in the region.</p>
      
      <h2>Factors That Affect Bail Decisions</h2>
      <p>Judges consider several factors when deciding bail applications: the nature and gravity of the offense, the evidence available, the likelihood of the accused tampering with witnesses, the criminal history of the accused, and the potential for the accused to flee from justice. A well-prepared bail application that addresses each of these concerns significantly improves your chances of getting bail.</p>
      
      <h2>Why You Need Advocate Putla Srinivas for Your Bail Application</h2>
      <p>With over 15 years of practice at Tanuku Court, Advocate Putla Srinivas understands the nuances of bail proceedings inside and out. He prepares comprehensive bail applications, gathers supporting documents, and presents compelling arguments before the Hon'ble Judge. His approach is strategic, thorough, and designed to secure the fastest possible release for his clients.</p>
      
      <h2>Contact Advocate Putla Srinivas for Bail Assistance</h2>
      <p>If you or a loved one needs bail assistance at Tanuku Court or any court in West Godavari District, do not delay. Time is critical in bail matters. Contact <strong>Advocate Putla Srinivas</strong> immediately at <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for a confidential consultation. Your freedom matters, and we are here to fight for it.</p>
    `,
  },
  {
    id: "property-disputes-guide",
    title: "Property Dispute Resolution in West Godavari: Legal Rights & Remedies by Putla Srinivas",
    excerpt:
      "Expert legal guide on resolving property disputes in West Godavari District, Andhra Pradesh. Learn about title verification, partition suits, and how a civil lawyer can protect your property rights.",
    category: "Civil Law",
    keywords: ["property dispute lawyer west godavari", "land dispute tanuku", "civil advocate andhra pradesh", "property registration lawyer"],
    readTime: "7 min read",
    date: "May 5, 2026",
    content: `
      <h2>Common Property Disputes in West Godavari District</h2>
      <p>Property disputes are among the most common and complex legal issues in West Godavari District, Andhra Pradesh. The fertile agricultural lands, urban expansion in areas like Tanuku, Bhimavaram, and Tadepalligudem, and inheritance disputes have led to a surge in property-related litigation. Common disputes include boundary disagreements, title defects, illegal encroachments, inheritance conflicts, and buyer-seller disputes.</p>
      
      <h2>Your Legal Rights Under Andhra Pradesh Property Law</h2>
      <p>Under the Transfer of Property Act, 1882, and the Registration Act, 1908, property owners in Andhra Pradesh have specific rights that protect their ownership. Whether it is agricultural land, residential property, or commercial real estate, understanding your rights is the first step toward resolving any dispute. Key protections include the right to peaceful enjoyment of property, the right to seek eviction of encroachers, and the right to claim partition of ancestral property.</p>
      
      <h2>How Advocate Putla Srinivas Handles Property Cases</h2>
      <p>Advocate Putla Srinivas has resolved numerous property disputes across West Godavari District through both litigation and negotiation. His approach includes thorough title verification, examination of revenue records and patta documents, survey of the disputed property, and preparation of compelling civil suits. He handles cases related to specific performance of agreements, declaration of title, permanent injunction, partition suits, and recovery of possession.</p>
      
      <h2>Important Documents for Property Cases</h2>
      <p>When pursuing a property dispute case at Tanuku Court, having the right documentation is crucial. Essential documents include the registered sale deed, title deed, patta passbook, encumbrance certificate, tax receipts, survey maps, and prior settlement deeds. Advocate Putla Srinivas meticulously collects and verifies all necessary documents to build a strong case for his clients.</p>
      
      <h2>Consult Advocate Putla Srinivas for Property Disputes</h2>
      <p>Property matters require expert legal guidance. Do not risk your valuable assets by delaying legal action. Contact <strong>Advocate Putla Srinivas</strong> at <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for expert property dispute resolution services at Tanuku Court. Visit our office at Satyavaram, Maruteru, Penumantra Mandal, West Godavari District, Andhra Pradesh.</p>
    `,
  },
  {
    id: "divorce-custody-guide",
    title: "Divorce & Child Custody in Andhra Pradesh: Complete Guide by Advocate Putla Srinivas",
    excerpt:
      "Step-by-step guide to filing for divorce and child custody in Andhra Pradesh family courts. Learn about mutual consent divorce, contested divorce, maintenance rights, and custody procedures.",
    category: "Family Law",
    keywords: ["divorce lawyer tanuku", "child custody advocate andhra pradesh", "family court lawyer west godavari", "maintenance case lawyer"],
    readTime: "8 min read",
    date: "April 28, 2026",
    content: `
      <h2>Filing for Divorce in Andhra Pradesh Family Court</h2>
      <p>Divorce proceedings in Andhra Pradesh are governed by the Hindu Marriage Act, 1955, the Special Marriage Act, 1954, and other personal laws. The family court at Tanuku has jurisdiction over divorce petitions filed by residents of Tanuku and surrounding areas in West Godavari District. There are two main types of divorce: mutual consent divorce (Section 13B of the Hindu Marriage Act) and contested divorce based on specific grounds such as cruelty, desertion, adultery, or irretrievable breakdown of marriage.</p>
      
      <h2>Mutual Consent Divorce vs Contested Divorce</h2>
      <p>Mutual consent divorce is the fastest route when both spouses agree to separate. It typically takes 6 to 18 months and involves filing a joint petition, a mandatory 6-month cooling-off period, and a final hearing. Contested divorce, on the other hand, can take significantly longer depending on the complexity of the case and the grounds cited. Advocate Putla Srinivas handles both types with equal expertise, guiding clients through every step with compassion and professionalism.</p>
      
      <h2>Child Custody Laws in India</h2>
      <p>The welfare of the child is the paramount consideration in all custody disputes under the Guardian and Wards Act, 1890. Courts in Andhra Pradesh consider factors such as the child's age and gender, the moral and physical welfare of the child, the financial capacity of each parent, and the child's own preference if they are old enough to express one. Both mothers and fathers have equal rights to seek custody, and joint custody arrangements are becoming increasingly common.</p>
      
      <h2>Maintenance and Alimony Rights</h2>
      <p>Under Section 125 of the CrPC and the relevant provisions of the Hindu Marriage Act and Hindu Adoptions and Maintenance Act, a spouse can claim maintenance from the other. The amount of maintenance depends on factors including the income and financial status of both parties, the standard of living enjoyed during the marriage, and the needs of the children. Advocate Putla Srinivas ensures that his clients receive fair and adequate maintenance to support themselves and their children.</p>
      
      <h2>Get Compassionate Legal Help from Advocate Putla Srinivas</h2>
      <p>Family matters are deeply personal and emotional. You need an advocate who understands not just the law but also your feelings. <strong>Advocate Putla Srinivas</strong> provides sensitive, compassionate, and effective legal representation in all family law matters. Call <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for a confidential consultation at Tanuku Court.</p>
    `,
  },
  {
    id: "domestic-violence-act",
    title: "Domestic Violence Act Protection: Your Rights in Andhra Pradesh Explained by Putla Srinivas",
    excerpt:
      "Understanding the Protection of Women from Domestic Violence Act 2005 in Andhra Pradesh. Learn about restraining orders, residence orders, and monetary relief available to victims of domestic abuse.",
    category: "Criminal Law",
    keywords: ["domestic violence lawyer tanuku", "DV act advocate west godavari", "protection order andhra pradesh", "women rights lawyer"],
    readTime: "6 min read",
    date: "April 20, 2026",
    content: `
      <h2>What Constitutes Domestic Violence Under the Law</h2>
      <p>The Protection of Women from Domestic Violence Act, 2005 (PWDVA) provides comprehensive protection to women facing physical, emotional, verbal, sexual, or economic abuse within a domestic relationship. The Act covers not just wives but also daughters, sisters, mothers, and women in live-in relationships. If you are in West Godavari District and facing any form of domestic abuse, the law is on your side, and Advocate Putla Srinivas is here to help you assert your rights.</p>
      
      <h2>Types of Relief Available Under the DV Act</h2>
      <p>The DV Act provides several forms of relief: protection orders to prevent the abuser from committing further acts of violence, residence orders ensuring the right to stay in the shared household, monetary relief for expenses and losses suffered, custody orders for children, and compensation for injuries. The family court at Tanuku has the power to grant all these reliefs, and Advocate Putla Srinivas has extensive experience in obtaining favorable orders for his clients.</p>
      
      <h2>Filing a Domestic Violence Complaint at Tanuku Court</h2>
      <p>The process begins with filing a Domestic Incident Report (DIR) with the Protection Officer or directly filing an application under Section 12 of the DV Act before the Magistrate. The court can issue interim relief orders even before the final hearing. Advocate Putla Srinivas guides clients through the entire process, from documentation and evidence collection to representing them in court hearings.</p>
      
      <h2>Contact Advocate Putla Srinivas for DV Act Cases</h2>
      <p>If you or someone you know is a victim of domestic violence, do not suffer in silence. The law provides strong protections, and timely legal action can make all the difference. Contact <strong>Advocate Putla Srinivas</strong> at <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong>. All consultations are kept strictly confidential.</p>
    `,
  },
  {
    id: "consumer-complaint-tanuku",
    title: "How to File a Consumer Complaint in Tanuku: A Step-by-Step Guide by Putla Srinivas",
    excerpt:
      "Complete guide on filing consumer complaints at the Consumer Disputes Redressal Forum in West Godavari. Learn about consumer rights, compensation claims, and how to approach the consumer court.",
    category: "Civil Law",
    keywords: ["consumer court lawyer tanuku", "consumer complaint west godavari", "consumer rights advocate andhra pradesh", "product defect lawyer"],
    readTime: "5 min read",
    date: "April 12, 2026",
    content: `
      <h2>Understanding Your Consumer Rights</h2>
      <p>The Consumer Protection Act, 2019 empowers consumers in India with comprehensive rights including the right to be informed, the right to choose, the right to seek redressal, and the right to consumer education. If you have been sold a defective product, received poor service, or been subjected to unfair trade practices in Tanuku or anywhere in West Godavari District, you have the right to file a complaint and seek compensation.</p>
      
      <h2>Steps to File a Consumer Complaint</h2>
      <p>Filing a consumer complaint involves sending a legal notice to the opposite party, filing the complaint with the relevant Consumer Disputes Redressal Commission (District, State, or National level depending on the claim amount), presenting evidence and arguments at the hearing, and obtaining a favorable order for compensation or relief. Advocate Putla Srinivas has represented numerous consumers in disputes involving defective goods, medical negligence, insurance claims, real estate fraud, and poor service delivery.</p>
      
      <h2>Types of Consumer Disputes</h2>
      <p>Common consumer disputes include defective products and appliances, poor construction quality by builders, medical negligence by hospitals, unfair insurance claim rejection, deficiency in banking and financial services, and misleading advertisements. Each type requires a specific legal strategy, and Advocate Putla Srinivas tailors his approach to maximize the chances of a successful outcome.</p>
      
      <h2>Seek Legal Help from Advocate Putla Srinivas</h2>
      <p>Consumer disputes can be resolved efficiently with the right legal representation. Contact <strong>Advocate Putla Srinivas</strong> at <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for expert guidance on filing and pursuing consumer complaints at Tanuku Consumer Forum.</p>
    `,
  },
  {
    id: "anticipatory-bail-guide",
    title: "Anticipatory Bail Application in Andhra Pradesh: Legal Process Explained by Putla Srinivas",
    excerpt:
      "Detailed explanation of anticipatory bail under Section 438 CrPC in Andhra Pradesh. Learn when to apply, the process, documents needed, and how Advocate Putla Srinivas can protect your liberty.",
    category: "Criminal Law",
    keywords: ["anticipatory bail lawyer tanuku", "section 438 crpc", "preventive bail andhra pradesh", "false case lawyer west godavari"],
    readTime: "6 min read",
    date: "April 5, 2026",
    content: `
      <h2>What is Anticipatory Bail Under Section 438 CrPC?</h2>
      <p>Anticipatory bail, also known as pre-arrest bail, is a legal remedy available under Section 438 of the Code of Criminal Procedure (CrPC). It is a direction issued by the Court that in the event of arrest, the accused shall be released on bail. This is particularly important in cases where there is a reasonable apprehension of arrest on false or fabricated charges. If you are in West Godavari District and fear arrest, Advocate Putla Srinivas can help you obtain anticipatory bail from the Sessions Court or High Court.</p>
      
      <h2>When Should You Apply for Anticipatory Bail?</h2>
      <p>Anticipatory bail should be sought when you have reason to believe that a false FIR may be filed against you, when you have been named in a complaint but not yet arrested, when a rival party has threatened to implicate you in a criminal case, or when police investigations are ongoing and you may be summoned. Time is of the essence in these situations, and early legal intervention can prevent unnecessary harassment and detention.</p>
      
      <h2>The Process of Obtaining Anticipatory Bail</h2>
      <p>The application is filed before the Sessions Court or High Court along with an affidavit detailing the circumstances and grounds for apprehension of arrest. The court may impose conditions such as cooperation with the investigation, not leaving the jurisdiction without permission, and not tampering with evidence. Advocate Putla Srinivas prepares comprehensive applications with strong legal grounds to maximize the chances of obtaining favorable orders.</p>
      
      <h2>Protect Your Freedom with Advocate Putla Srinivas</h2>
      <p>Do not wait until you are arrested. If you anticipate legal trouble, act now. Contact <strong>Advocate Putla Srinivas</strong> at <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for immediate assistance with anticipatory bail applications.</p>
    `,
  },
];

/* ─── Admin State Types ─── */
interface AdminBlog {
  id: string;
  title: string;
  titleTe: string | null;
  slug: string;
  excerpt: string;
  excerptTe: string | null;
  content: string;
  contentTe: string | null;
  category: string;
  keywords: string[];
  readTime: string;
  language: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  date?: string;
}

/* ─── Main Page Component ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Admin state
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal overflow-x-hidden">
      {/* ─── Structured Data (JSON-LD) for SEO ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Advocate Putla Srinivas",
            description:
              "Senior Advocate Putla Srinivas practicing Criminal Law, Civil Litigation, and Family Law at Tanuku Court, West Godavari District, Andhra Pradesh with over 15 years of experience.",
            url: "https://advocateputlasrinivas.com",
            telephone: "+919000696403",
            email: "srinuputla789@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Satyavaram, Maruteru, Penumantra Mandal",
              addressLocality: "Tanuku Court",
              addressRegion: "West Godavari District, Andhra Pradesh",
              postalCode: "534211",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "16.75",
              longitude: "81.69",
            },
            areaServed: [
              "Tanuku",
              "West Godavari District",
              "Andhra Pradesh",
              "Bhimavaram",
              "Tadepalligudem",
              "Palakollu",
              "Narasapuram",
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I contact Advocate Putla Srinivas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact Advocate Putla Srinivas by calling 9000696403 or emailing srinuputla789@gmail.com. The office is located near Tanuku Court, Satyavaram, Maruteru, Penumantra Mandal, West Godavari District, Andhra Pradesh - 534211.",
                },
              },
              {
                "@type": "Question",
                name: "What types of cases does Advocate Putla Srinivas handle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Advocate Putla Srinivas handles Criminal Law cases (bail, criminal defense, cyber crime), Civil Litigation (property disputes, consumer complaints, recovery suits), and Family Law (divorce, child custody, maintenance, domestic violence) at Tanuku Court, West Godavari District, Andhra Pradesh.",
                },
              },
              {
                "@type": "Question",
                name: "What are the office hours of Advocate Putla Srinivas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Advocate Putla Srinivas is available Monday to Saturday, 9:00 AM to 7:00 PM at Tanuku Court. Sunday appointments are available by prior arrangement.",
                },
              },
            ],
          }),
        }}
      />

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

      {/* ─── Legal Blog Section ─── */}
      <BlogSection />

      {/* ─── Testimonials ─── */}
      <TestimonialsSection />

      {/* ─── Contact Section ─── */}
      <ContactSection />

      {/* ─── Admin Login Modal ─── */}
      <AdminLoginModal
        show={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={(token) => {
          setAdminToken(token);
          setAdminLoggedIn(true);
          setShowAdminLogin(false);
          setShowAdminPanel(true);
        }}
      />

      {/* ─── Admin Panel (Full Screen Overlay) ─── */}
      {adminLoggedIn && showAdminPanel && (
        <AdminPanel
          token={adminToken}
          onLogout={() => {
            setAdminToken("");
            setAdminLoggedIn(false);
            setShowAdminPanel(false);
          }}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {/* ─── Footer ─── */}
      <Footer onAdminClick={() => setShowAdminLogin(true)} />
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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-navy-dark" />
            </div>
            <div className="flex flex-col">
              <span className="text-gold font-bold text-sm sm:text-base tracking-wide leading-tight">
                ADV. PUTLA SRINIVAS
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
              href="tel:+919000696403"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
            >
              Call: 9000696403
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
                  href="tel:+919000696403"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold text-sm rounded-full"
                >
                  Call: 9000696403
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
          alt="Tanuku Court Building - Advocate Putla Srinivas practices law here"
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
                Putla Srinivas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Dedicated legal counsel with over 15 years of experience in
              Criminal, Civil, and Family Law at Tanuku Court. Committed to
              upholding justice and protecting the rights of every client who
              walks through our doors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="tel:+919000696403"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-bold rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                Call 9000696403
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
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/30 to-gold-dark/10 blur-xl" />
              <div className="absolute -inset-1 rounded-full border-2 border-gold/30" />
              <img
                src="/advocate-portrait.png"
                alt="Advocate Putla Srinivas - Criminal, Civil & Family Lawyer at Tanuku Court"
                className="relative w-72 lg:w-80 h-auto rounded-full object-cover shadow-2xl shadow-black/30 border-4 border-gold/20"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy-dark border border-gold/30 rounded-full px-5 py-2 shadow-xl">
                <span className="text-gold font-bold text-sm">
                  Putla Srinivas
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
    <section id="about" ref={ref} className="py-20 sm:py-28 bg-white">
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
                  alt="Tanuku Court - Where Advocate Putla Srinivas Practices Law"
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
                        Advocate Putla Srinivas — Tanuku District Court
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
              <strong>Advocate Putla Srinivas</strong> has been a pillar of legal
              excellence in the Tanuku judicial landscape for over 15 years. With a
              deep-rooted commitment to the principles of justice and fairness, he
              has built a reputation for providing compassionate yet assertive legal
              representation to clients from all walks of life.
            </p>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-8">
              Specializing in Criminal Defense, Civil Litigation, and Family Law,
              <strong> Putla Srinivas</strong> combines his extensive courtroom
              experience at Tanuku Court with a meticulous approach to case
              preparation. His practice has earned him the trust and respect of
              clients, peers, and members of the judiciary alike across West
              Godavari District.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: BookOpen, text: "B.A., LL.B. Graduate" },
                { icon: Award, text: "Bar Council Registered" },
                {
                  icon: MapPin,
                  text: "Tanuku Court, West Godavari",
                },
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
              href="tel:+919000696403"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-white font-semibold rounded-full hover:bg-navy transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              Call 9000696403
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
    <section id="practice" ref={ref} className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Advocate Putla Srinivas provides comprehensive legal services across
            three major practice areas at Tanuku Court, ensuring expert
            representation for every aspect of your legal needs.
          </p>
        </motion.div>

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
                        <CheckCircle2
                          className={`w-4 h-4 ${area.iconColor} flex-shrink-0`}
                        />
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
        "Over 15 years of dedicated legal practice at Tanuku Court by Advocate Putla Srinivas, handling thousands of diverse cases with proven success. Deep familiarity with local court procedures and judicial practices gives clients a significant advantage.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every case is treated with personal attention and care by Advocate Putla Srinivas. Legal matters can be stressful, and we ensure our clients are informed, supported, and comfortable throughout the entire legal process at Tanuku Court.",
    },
    {
      icon: Shield,
      title: "Aggressive Representation",
      description:
        "Whether in negotiations or in the courtroom at Tanuku Court, Advocate Putla Srinivas fights tirelessly for his clients' rights. Known for his sharp legal acumen, compelling arguments, and unwavering commitment to achieving the best possible outcomes.",
    },
    {
      icon: BookOpen,
      title: "In-Depth Legal Knowledge",
      description:
        "Advocate Putla Srinivas is continuously updated with the latest legal developments, landmark judgments, and amendments. His comprehensive understanding of criminal, civil, and family law enables him to craft innovative strategies tailored to each unique case.",
    },
    {
      icon: Clock,
      title: "Timely & Transparent",
      description:
        "We value your time and maintain complete transparency in all proceedings. Regular case updates, clear communication about legal options, and honest assessments ensure you are never left wondering about the status of your case at Tanuku Court.",
    },
    {
      icon: Scale,
      title: "Ethical Practice",
      description:
        "Advocate Putla Srinivas upholds the highest standards of legal ethics and professional conduct. Built on integrity, honesty, and a genuine commitment to justice, earning the respect of the judiciary, peers, and clients across West Godavari District.",
    },
  ];

  return (
    <section id="why" ref={ref} className="py-20 sm:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="gold-gradient-text">Advocate Putla Srinivas</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            When you choose the legal services of Advocate Putla Srinivas at
            Tanuku Court, you are choosing unwavering dedication, proven
            expertise, and a genuine commitment to securing the best possible
            outcome for your case.
          </p>
        </motion.div>

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
   BLOG SECTION (DATABASE-DRIVEN)
   ═══════════════════════════════════════════════════════════ */
function BlogSection() {
  const { ref, isInView } = useSectionInView();
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);
  const [dbBlogs, setDbBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewLanguage, setViewLanguage] = useState<"en" | "te">("en");

  // Fetch published blogs from database on mount
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success && data.blogs) {
          setDbBlogs(data.blogs);
        }
      } catch {
        console.log("Using fallback blogs");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Fallback to static blogs if DB is empty
  const displayBlogs = dbBlogs.length > 0 ? dbBlogs : seoBlogPosts;
  const filteredBlogs =
    selectedCategory === "All"
      ? displayBlogs
      : displayBlogs.filter((b) => b.category === selectedCategory);

  const categories = [
    "All",
    ...Array.from(new Set(displayBlogs.map((b) => b.category))),
  ];

  return (
    <section id="blog" ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <Badge className="bg-gold/10 text-gold-dark border-gold/20 mb-4 text-xs font-semibold tracking-wider uppercase">
            Legal Knowledge Hub
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Legal <span className="text-gold-dark">Blog</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Expert legal articles by <strong>Advocate Putla Srinivas</strong> on
            Criminal Law, Civil Litigation, Family Law, and more. Stay informed
            about your legal rights and the latest developments at Tanuku Court.
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <button
              onClick={() => setViewLanguage("en")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewLanguage === "en" ? "bg-charcoal text-white" : "bg-charcoal/5 text-charcoal/50"}`}
            >
              English
            </button>
            <button
              onClick={() => setViewLanguage("te")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${viewLanguage === "te" ? "bg-charcoal text-white" : "bg-charcoal/5 text-charcoal/50"}`}
            >
              <Languages className="w-3.5 h-3.5" />
              Telugu
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-charcoal text-white shadow-md"
                  : "bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              itemScope
              itemType="https://schema.org/BlogPosting"
              className="flex flex-col"
            >
              <Card className="practice-card h-full bg-cream border border-charcoal/5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-400 overflow-hidden flex flex-col">
                <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className="bg-gold/10 text-gold-dark border-gold/20 text-xs font-semibold"
                      itemProp="articleSection"
                    >
                      {blog.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-charcoal/40 text-xs">
                      <Timer className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl font-bold text-charcoal mb-3 leading-snug hover:text-gold-dark transition-colors cursor-pointer line-clamp-3"
                    itemProp="headline"
                    onClick={() =>
                      setExpandedBlog(
                        expandedBlog === blog.id ? null : blog.id
                      )
                    }
                  >
                    {viewLanguage === "te" && blog.titleTe ? blog.titleTe : blog.title}
                  </h3>

                  {/* Excerpt / Content */}
                  <AnimatePresence mode="wait">
                    {expandedBlog === blog.id ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-charcoal/70 text-sm leading-relaxed flex-1 overflow-hidden"
                        itemProp="articleBody"
                        dangerouslySetInnerHTML={{ __html: (viewLanguage === "te" && blog.contentTe) ? blog.contentTe : blog.content }}
                      />
                    ) : (
                      <motion.div
                        key="excerpt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-charcoal/60 text-sm leading-relaxed flex-1 line-clamp-4"
                        itemProp="description"
                      >
                        {viewLanguage === "te" && blog.excerptTe ? blog.excerptTe : blog.excerpt}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Meta info */}
                  <div className="mt-4 flex items-center gap-2 text-charcoal/40 text-xs">
                    <Calendar className="w-3 h-3" />
                    <time itemProp="datePublished">{blog.date}</time>
                  </div>

                  {/* Keywords Tags */}
                  {blog.keywords && blog.keywords.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {blog.keywords.slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-charcoal/5 rounded text-[10px] text-charcoal/40"
                          itemProp="keywords"
                        >
                          <Tag className="w-2 h-2" />
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}

                  <Separator className="my-4 bg-charcoal/10" />

                  {/* Read More / Collapse Toggle */}
                  <button
                    onClick={() =>
                      setExpandedBlog(
                        expandedBlog === blog.id ? null : blog.id
                      )
                    }
                    className="inline-flex items-center gap-1 text-gold-dark text-sm font-semibold hover:text-gold transition-colors mt-auto"
                  >
                    {expandedBlog === blog.id ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read Full Article <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        )}
        {/* SEO Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-charcoal/40 text-xs mt-10"
        >
          All legal blog articles are authored by <strong>Advocate Putla Srinivas</strong> and
          optimized for search engines to help people in West Godavari District
          find reliable legal information.
        </motion.p>
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
    <section id="testimonials" ref={ref} className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The trust and satisfaction of clients is the greatest measure of
            success for Advocate Putla Srinivas. Here are testimonials from
            people represented at Tanuku Court.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="h-full bg-white border border-charcoal/5 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-400">
                <CardContent className="p-6 sm:p-8 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <Separator className="mb-4 bg-charcoal/10" />
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
      details: [
        "Advocate Putla Srinivas",
        "Tanuku Court",
        "Satyavaram, Maruteru,",
        "Penumantra Mandal",
        "West Godavari District,",
        "Andhra Pradesh - 534211",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9000696403"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["srinuputla789@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment Only"],
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Contact <span className="text-gold-dark">Advocate Putla Srinivas</span>
          </h2>
          <div className="gold-divider w-20 mx-auto mb-6" />
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need legal advice, want to schedule a consultation at
            Tanuku Court, or have questions about our services, Advocate Putla
            Srinivas is here to help. Reach out today.
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
                    Tanuku Court Area
                  </p>
                  <p className="text-charcoal/40 text-xs">
                    Satyavaram, Maruteru, Penumantra Mandal,
                    <br />
                    West Godavari District, Andhra Pradesh
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
            <Card className="bg-cream border border-charcoal/10 rounded-2xl shadow-md overflow-hidden">
              <div className="bg-charcoal p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  Request a Consultation
                </h3>
                <p className="text-white/60 text-sm">
                  Fill out the form and Advocate Putla Srinivas will get back to
                  you promptly.
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
                      className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="+91 XXXXX XXXXX"
                      className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11 bg-white"
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
                    className="border-charcoal/15 focus:border-gold focus:ring-gold/20 h-11 bg-white"
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
                        className="flex items-center justify-center px-4 py-2.5 border border-charcoal/15 rounded-lg cursor-pointer hover:border-gold hover:bg-gold/5 transition-colors text-sm font-medium text-charcoal/70 has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-gold-dark bg-white"
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
                    className="border-charcoal/15 focus:border-gold focus:ring-gold/20 resize-none bg-white"
                  />
                </div>
                <Button className="w-full bg-charcoal hover:bg-navy text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg text-sm sm:text-base h-11">
                  Send to Advocate Putla Srinivas
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
/* ═══════════════════════════════════════════════════════════
   ADMIN LOGIN MODAL
   ═══════════════════════════════════════════════════════════ */
function AdminLoginModal({
  show,
  onClose,
  onLogin,
}: {
  show: boolean;
  onClose: () => void;
  onLogin: (token: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        onLogin(data.token);
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Connection error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal flex items-center justify-center">
                <Lock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg">Super Admin</h3>
                <p className="text-charcoal/50 text-xs">Advocate Putla Srinivas</p>
              </div>
            </div>
            <button onClick={onClose} className="text-charcoal/40 hover:text-charcoal">
              <X className="w-5 h-5" />
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Username</label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="h-11"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="h-11"
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
            <Button
              onClick={handleLogin}
              disabled={loading || !username || !password}
              className="w-full bg-charcoal hover:bg-navy text-white h-11 font-semibold"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════
   ADMIN PANEL
   ═══════════════════════════════════════════════════════════ */
function AdminPanel({
  token,
  onLogout,
  onClose,
}: {
  token: string;
  onLogout: () => void;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("Criminal Law");
  const [researchDepth, setResearchDepth] = useState<"normal" | "deep">("normal");
  const [generating, setGenerating] = useState(false);
  const [previewBlog, setPreviewBlog] = useState<Record<string, string> | null>(null);
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");

  // Fetch admin blogs
  async function fetchBlogs() {
    setLoadingBlogs(true);
    try {
      const res = await fetch("/api/admin/blogs", {
        headers: { "x-admin-token": token },
      });
      const data = await res.json();
      if (data.success) setBlogs(data.blogs);
    } catch {
      console.error("Failed to fetch blogs");
    } finally {
      setLoadingBlogs(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function generateBlog() {
    if (!topic.trim()) return;
    setGenerating(true);
    setPreviewBlog(null);
    setStatusMsg("");
    try {
      const res = await fetch("/api/admin/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, category, researchDepth }),
      });
      const data = await res.json();
      if (data.success && data.blog) {
        setPreviewBlog(data.blog);
        setStatusMsg(data.researchUsed ? "Blog generated with web research data." : "Blog generated from AI knowledge.");
      } else {
        setStatusMsg("Error: " + (data.error || "Generation failed"));
      }
    } catch {
      setStatusMsg("Connection error. Try again.");
    } finally {
      setGenerating(false);
    }
  }

  async function publishBlog(blog: Record<string, string>) {
    setStatusMsg("Publishing...");
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify({
          ...blog,
          isPublished: true,
          language: "both",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPreviewBlog(null);
        setTopic("");
        setStatusMsg("Blog published successfully!");
        fetchBlogs();
      } else {
        setStatusMsg("Error: " + (data.error || "Publish failed"));
      }
    } catch {
      setStatusMsg("Connection error.");
    }
  }

  async function togglePublish(blogId: string, currentStatus: boolean) {
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });
      const data = await res.json();
      if (data.success) fetchBlogs();
    } catch {
      console.error("Failed to toggle publish");
    }
  }

  async function deleteBlog(blogId: string) {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: "DELETE",
        headers: { "x-admin-token": token },
      });
      const data = await res.json();
      if (data.success) fetchBlogs();
    } catch {
      console.error("Failed to delete");
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white overflow-auto"
      >
        {/* Admin Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-charcoal/10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <Scale className="w-4 h-4 text-gold-dark" />
              </div>
              <h1 className="font-bold text-charcoal">Admin Panel — Advocate Putla Srinivas</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-3 py-2 text-sm text-charcoal/60 hover:text-charcoal border border-charcoal/10 rounded-lg"
              >
                View Website
              </button>
              <button
                onClick={onLogout}
                className="px-3 py-2 text-sm text-red-500 hover:text-red-700 border border-red-200 hover:border-red-300 rounded-lg flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Tabs */}
          <div className="flex gap-1 mb-8 border-b border-charcoal/10">
            <button
              onClick={() => setActiveTab("create")}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "create" ? "border-gold text-gold-dark" : "border-transparent text-charcoal/50 hover:text-charcoal"
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-1.5" />
              Create Blog
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "manage" ? "border-gold text-gold-dark" : "border-transparent text-charcoal/50 hover:text-charcoal"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-1.5" />
              Manage Blogs
            </button>
          </div>

          {/* Status Message */}
          {statusMsg && (
            <div className={`mb-6 px-4 py-3 rounded-lg text-sm border ${statusMsg.includes("Error") ? "bg-red-50 border-red-200 text-red-600" : "bg-green-50 border-green-200 text-green-700"}`}>
              {statusMsg}
            </div>
          )}

          {/* ─── Create Tab ─── */}
          {activeTab === "create" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Side */}
              <div className="space-y-6">
                <Card className="border border-charcoal/10 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold" />
                      AI Blog Generator
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Blog Topic *</label>
                        <Textarea
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          placeholder="e.g., How to file for anticipatory bail in Andhra Pradesh, Property registration process in West Godavari, Child custody rights for fathers in India..."
                          rows={3}
                          className="resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Category</label>
                          <div className="flex flex-wrap gap-2">
                            {["Criminal Law", "Civil Law", "Family Law", "Legal Rights", "Property Law", "Court Procedures"].map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                                  category === cat ? "bg-gold/10 border-gold text-gold-dark" : "border-charcoal/15 text-charcoal/50"
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Research Depth</label>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setResearchDepth("normal")}
                              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${researchDepth === "normal" ? "bg-gold/10 border-gold text-gold-dark" : "border-charcoal/15 text-charcoal/50"}`}
                            >
                              Standard
                            </button>
                            <button
                              onClick={() => setResearchDepth("deep")}
                              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${researchDepth === "deep" ? "bg-gold/10 border-gold text-gold-dark" : "border-charcoal/15 text-charcoal/50"}`}
                            >
                              Deep Research
                            </button>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={generateBlog}
                        disabled={generating || !topic.trim()}
                        className="w-full bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold h-11 hover:shadow-lg disabled:opacity-50"
                      >
                        {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                        {generating ? "AI is researching & writing... (30-60s)" : "Generate SEO Blog with AI"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Side */}
              <div>
                {previewBlog ? (
                  <Card className="border border-charcoal/10 rounded-xl overflow-hidden">
                    <div className="bg-charcoal p-4 flex items-center justify-between">
                      <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gold" />
                        English Preview
                      </h3>
                      <Badge className="bg-gold/20 text-gold text-xs">{previewBlog.category || category}</Badge>
                    </div>
                    <CardContent className="p-6 max-h-[60vh] overflow-y-auto">
                      <h2 className="text-xl font-bold text-charcoal mb-2">{previewBlog.title}</h2>
                      <p className="text-charcoal/60 text-sm mb-4 italic">{previewBlog.excerpt}</p>
                      <Separator className="my-4" />
                      {previewBlog.keywords && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {Array.isArray(previewBlog.keywords)
                            ? previewBlog.keywords.map((kw: string) => (
                                <Badge key={kw} className="bg-gold/10 text-gold-dark text-[10px] border-0">{kw}</Badge>
                              ))
                            : null}
                        </div>
                      )}
                      <div
                        className="prose prose-sm text-charcoal/70 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: previewBlog.content }}
                      />
                      {previewBlog.titleTe && (
                        <>
                          <div className="bg-navy/5 rounded-xl p-4 mt-6 border border-navy/10">
                            <h4 className="font-semibold text-navy text-sm flex items-center gap-2 mb-2">
                              <Languages className="w-4 h-4 text-gold" />
                              Telugu Translation Available
                            </h4>
                            <p className="text-navy/70 text-xs font-medium">{previewBlog.titleTe}</p>
                          </div>
                        </>
                      )}
                    </CardContent>
                    <div className="border-t border-charcoal/10 p-4 bg-cream/50">
                      <Button
                        onClick={() => publishBlog(previewBlog)}
                        className="w-full bg-charcoal hover:bg-navy text-white font-semibold h-11"
                      >
                        <Send className="w-4 h-4" />
                        Publish Blog to Website
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <div className="border-2 border-dashed border-charcoal/15 rounded-xl h-full flex items-center justify-center p-8 text-center">
                    <div>
                      <FileText className="w-12 h-12 text-charcoal/20 mx-auto mb-4" />
                      <p className="text-charcoal/40 text-sm font-medium">Blog preview will appear here</p>
                      <p className="text-charcoal/30 text-xs mt-1">Enter a topic and click Generate</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ─── Manage Tab ─── */}
          {activeTab === "manage" && (
            <div>
              {loadingBlogs ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-6 h-6 text-gold animate-spin" />
                </div>
              ) : blogs.length === 0 ? (
                <div className="text-center py-20">
                  <FileText className="w-12 h-12 text-charcoal/20 mx-auto mb-4" />
                  <p className="text-charcoal/40 text-sm">No blogs created yet.</p>
                  <button
                    onClick={() => setActiveTab("create")}
                    className="text-gold-dark text-sm font-medium mt-2 hover:underline"
                  >
                    Create your first blog
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="flex items-center gap-4 p-4 bg-cream rounded-xl border border-charcoal/5 hover:border-gold/20 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-charcoal text-sm truncate">{blog.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-gold/10 text-gold-dark text-[10px] border-0">{blog.category}</Badge>
                          <span className="text-charcoal/40 text-xs">{blog.readTime}</span>
                          <span className="text-charcoal/30 text-xs">{new Date(blog.createdAt).toLocaleDateString("en-IN")}</span>
                          <Badge className={`text-[10px] border-0 ${blog.isPublished ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                            {blog.isPublished ? "Published" : "Draft"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {blog.titleTe && (
                          <Badge className="bg-purple-50 text-purple-600 text-[10px] border-0 flex items-center gap-1">
                            <Languages className="w-3 h-3" /> Telugu
                          </Badge>
                        )}
                        <button
                          onClick={() => togglePublish(blog.id, blog.isPublished)}
                          className={`p-2 rounded-lg transition-colors ${blog.isPublished ? "text-green-500 hover:bg-green-50" : "text-gray-400 hover:bg-gray-50"}`}
                          title={blog.isPublished ? "Unpublish" : "Publish"}
                        >
                          {blog.isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => deleteBlog(blog.id)}
                          className="p-2 rounded-lg text-red-400 hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer({ onAdminClick }: { onAdminClick: () => void }) {
  return (
    <footer className="bg-navy-dark text-white mt-auto">
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
                  ADV. PUTLA SRINIVAS
                </p>
                <p className="text-gold-light/50 text-[10px] tracking-widest uppercase">
                  Senior Advocate
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Advocate Putla Srinivas — Providing trusted legal counsel and
              aggressive representation in Criminal, Civil, and Family Law at
              Tanuku Court, West Godavari District, Andhra Pradesh.
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
              {/* Hidden Admin Access */}
              <button
                onClick={onAdminClick}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Admin"
                title="Admin"
              >
                <Lock className="w-3.5 h-3.5 text-white/20" />
              </button>
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
              Contact Advocate Putla Srinivas
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                Tanuku Court, Satyavaram, Maruteru, Penumantra Mandal, W.G. Dist., A.P.
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +91 9000696403
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                srinuputla789@gmail.com
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                Mon-Sat: 9AM - 7PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Advocate Putla Srinivas. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Practicing at Tanuku District Court, West Godavari District, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
