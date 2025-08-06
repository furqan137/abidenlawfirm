"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NeighborDisputesFAQ from "@/components/neighbor-disputes-faq";
import ContactSection from "@/components/contact-section";

export default function NeighborDisputesPage() {
  const [language, setLanguage] = useState<"he" | "en">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const isRTL = language === "he";

  const content = {
    he: {
      breadcrumb: {
        home: "בית",
        land: "קרקע ונדל״ן",
        current: "סכסוכי שכנים ודיירים שמסרבים לשלם",
      },
      hero: {
        title: "סכסוכי שכנים ודיירים שמסרבים לשלם",
        subtitle1: "שכן רועש? דייר שלא משלם? הגיע הזמן להפסיק",
        subtitle2: "לסבול בשקט",
        subtitle3: "אנחנו כאן כדי לעזור לכם להחזיר את השלווה - גם לנכס",
        subtitle4: "וגם לנשמה",
        scroll: "גלול למטה",
      },
      wordCloud: [
        "שכנים", "סכסוכים", "רעש", "לקיחת שליטה", "משפטי", "תשלום", 
        "ניהול", "חובות", "דיירים", "פתרון", "ליווי", "הגנה", "זכויות",
        "תביעות", "בית משפט", "הסכמים", "פינוי", "התראות", "מטרד",
        "תקנון", "בית משותף", "ועד בית", "גישור", "פשרה"
      ],
      question: "מה עושים כשחיים ביחד הופך לסיוט מתמשך?",
      info: {
        title: "סכסוכי שכנים - לא חייבים להפוך למלחמה",
        description: "שכן רועש, חיות מחמד, לכלוך, תקנות לא חוקיות, הרחבות בנייה - אלה רק חלק מהבעיות שיכולות להפוך את החיים לגיהינום. אנחנו כאן כדי למנוע הסלמה, להגן על הזכויות שלכם ולהפעיל כלים משפטיים יעילים."
      }
    },
    en: {
      breadcrumb: {
        home: "Home",
        land: "Land and real estate",
        current: "Disputes between neighbors and tenants who refuse to pay",
      },
      hero: {
        title: "Neighbor disputes and tenants refusing to pay",
        subtitle1: "A noisy neighbor? A tenant who doesn't pay? It's time to stop",
        subtitle2: "suffering in silence",
        subtitle3: "We're here to help you restore peace - both to your property and",
        subtitle4: "your soul",
        scroll: "scroll down",
      },
      wordCloud: [
        "Neighbors", "Conflicts", "noise", "taking control", "legal", "payment", 
        "Management", "Debts", "tenants", "solution", "Accompanied", "Protection", "Rights",
        "Lawsuits", "Court", "Agreements", "Eviction", "Warnings", "Nuisance",
        "Bylaws", "Condominium", "House Committee", "Mediation", "Settlement"
      ],
      question: "What do you do when living together becomes an ongoing nightmare?",
      info: {
        title: "Neighboring disputes - don't have to turn into war",
        description: "A noisy neighbor, pets, dirt, illegal regulations, building extensions - these are just some of the problems that can turn life into hell. We're here to prevent escalation, protect your rights and activate effective legal tools."
      }
    },
  };

  const currentContent = content[language];

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/neighbors.jpg"
            alt="Neighbor disputes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-amber-200 flex justify-center gap-2">
            <Link href="/" className="hover:text-amber-100">{currentContent.breadcrumb.home}</Link>
            <span>›</span>
            <Link href="/areas-of-expertise" className="hover:text-amber-100">{currentContent.breadcrumb.land}</Link>
            <span>›</span>
            <span>{currentContent.breadcrumb.current}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {currentContent.hero.title}
          </h1>

          {/* Subtitles */}
          <div className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-2">{currentContent.hero.subtitle1}</p>
            <p className="mb-2">{currentContent.hero.subtitle2}</p>
            <p className="mb-2">{currentContent.hero.subtitle3}</p>
            <p>{currentContent.hero.subtitle4}</p>
          </div>

          {/* Scroll down indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </section>

      {/* Word Cloud and Question Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Word Cloud */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="flex flex-wrap gap-4 text-gray-600 text-xl font-medium leading-loose">
                {currentContent.wordCloud.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Question */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-900"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {currentContent.question}
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/neighbors.jpg"
                alt="Neighbor dispute"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-900"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentContent.info.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.info.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <NeighborDisputesFAQ language={language} />

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Footer */}
      <Footer />
    </div>
  );
}