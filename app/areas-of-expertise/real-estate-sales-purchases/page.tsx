"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Phone, User, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import NeighborDisputesFAQ from "@/components/neighbor-disputes-faq";
import VideoBackground from "@/components/video-background";

export default function RealEstateSalesPurchasesPage() {
  const [language, setLanguage] = useState<"he" | "en">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = language === "he";

  const content = {
    he: {
      nav: {
        articles: "מאמרים",
        enduring: "ייפוי כוח מתמשך",
        wills: "צוואות וירושות",
        land: "קרקע ונדל״ן",
        about: "אודות",
        main: "ראשי",
        contact: "צור קשר",
      },
      breadcrumb: {
        home: "בית",
        land: "קרקע ונדל״ן",
        current: "מכירות ורכישות נדל״ן",
      },
      hero: {
        title: "מכירות ורכישות נדל״ן",
        subtitle: "עסקת נדל״ן היא אחת העסקאות החשובות והמורכבות בחיים. ליווי משפטי מקצועי יכול להבטיח עסקה בטוחה ומוצלחת",
        scrollText: "גלול למטה",
      },
      whatIsSection: {
        title: "מה כל כך מסובך במכירה או רכישה של נדל״ן - ולמה חשוב ליווי משפטי?",
        leftColumn: [
        "מכירות",
        "רכישות",
        "נדל״ן",
        "עסקאות",
        "משפטי",
        "ליווי",
        "ייעוץ",
        "ייצוג",
        "נכסים",
        "משא ומתן",
        "חתימה",
        "חוזים",
        "בדיקת",
        "זכויות",
        "טאבו",
        "עליה",
        "במחיר",
        "הסכמים",
        "תנאים",
        "משפטיים",
        "בטוח",
        "עסקה",
        "ניהול",
        "סיכונים",
        "תכנון",
        "מקצועי",
      ],
      },
      cta: {
        title: "יש מי שיטפל בעסקה שלכם",
        subtitle: "השאירו פרטים ונחזור אליכם עם ליווי משפטי אישי",
        name: "שם*",
        phone: "טלפון*",
        email: "אימייל",
        send: "שליחה",
      },
      info: {
        title: "עסקת נדל״ן דורשת ליווי משפטי מקצועי",
        description: "עסקת נדל״ן כוללת בדיקת זכויות קניין, הכנת חוזים, משא ומתן על תנאים, וייצוג מול רשויות. עורך דין מקצועי יוודא שהעסקה בטוחה ומוגנת משפטית בכל שלב.",
      },
      finalCta: {
        title: "אתם זכאים לליווי צמוד, מקצועי ואישי",
        subtitle: "בעסקה הכי יקרה וחשובה בחיים, אני אהיה שם בשבילכם",
        description: "משלב המשא ומתן ועד למסירה או קבלת המפתח, הרישום ברשם המקרקעין ועוד הרבה",
      },
    },
    en: {
      nav: {
        articles: "Articles",
        enduring: "Enduring Power of Attorney",
        wills: "Wills and inheritances",
        land: "Land and real estate",
        about: "About",
        main: "Main",
        contact: "Contact us",
      },
      breadcrumb: {
        home: "Home",
        land: "Land and real estate",
        current: "Real estate sales and purchases",
      },
      hero: {
        title: "Real estate sales and purchases",
        subtitle: "A real estate transaction is one of the most important and complex transactions in life. Professional legal guidance can ensure a safe and successful deal.",
        scrollText: "SCROLL DOWN",
      },
      whatIsSection: {
        title: "What's so complicated about selling or buying real estate - and why is legal guidance important?",
        leftColumn: [
        "Sales",
        "Purchases",
        "Real estate",
        "Transactions",
        "Legal",
          "Guidance",
        "Consultation",
        "Representation",
        "Properties",
        "Negotiation",
        "Signing",
        "Contracts",
          "Checking",
        "Rights",
        "Land registry",
        "Price increase",
        "Agreements",
        "Terms",
        "Legal",
        "Safe",
        "Deal",
        "Management",
        "Risks",
        "Planning",
        "Professional",
      ],
      },
      cta: {
        title: "There is someone who will take care of your transaction",
        subtitle: "Leave your details and we will get back to you with personal legal support",
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
      info: {
        title: "A real estate transaction requires professional legal guidance",
        description: "A real estate transaction includes checking property rights, preparing contracts, negotiating terms, and representing before authorities. A professional lawyer will ensure the transaction is safe and legally protected at every stage.",
      },
      finalCta: {
        title: "You deserve close, professional and personal support",
        subtitle: "In the most expensive and important transaction in life, I will be there for you",
        description: "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div
      className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <VideoBackground
          videoSrc="/videos/bg-video4.mp4"
          fallbackImage="/images/hero-bg.png"
          alt="Handshake background"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Floating Icons */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Info className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30">
          <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Phone className="w-6 h-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          {/* Contact Us Link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/contact" className="text-white hover:text-amber-200 transition-colors">
              {currentContent.nav.contact}
            </Link>
          </motion.div>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm text-amber-200 mb-8"
          >
            <Link href="/" className="hover:text-amber-100">
              {currentContent.breadcrumb.home}
            </Link>
            <span>›</span>
            <Link href="/areas-of-expertise" className="hover:text-amber-100">
              {currentContent.breadcrumb.land}
            </Link>
            <span>›</span>
            <span className="text-amber-100">{currentContent.breadcrumb.current}</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            {currentContent.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            {currentContent.hero.subtitle}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
            <span className="text-sm font-medium">{currentContent.hero.scrollText}</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section (Word Cloud / Scattered Text) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Word Cloud */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {currentContent.whatIsSection.leftColumn.map((item, index) => {
                  const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
                  const colors = ['text-gray-600', 'text-gray-700', 'text-gray-800', 'text-amber-600', 'text-amber-700'];
                  const positions = [
                    'absolute top-4 left-4', 'absolute top-8 right-8', 'absolute top-16 left-12',
                    'absolute top-24 right-16', 'absolute top-32 left-8', 'absolute top-40 right-4',
                    'absolute top-48 left-20', 'absolute top-56 right-12', 'absolute top-64 left-16',
                    'absolute top-72 right-20', 'absolute top-80 left-4', 'absolute top-88 right-8',
                    'absolute top-96 left-12', 'absolute top-104 right-16', 'absolute top-112 left-8',
                    'absolute top-120 right-4', 'absolute top-128 left-20', 'absolute top-136 right-12',
                    'absolute top-144 left-16', 'absolute top-152 right-20', 'absolute top-160 left-4',
                    'absolute top-168 right-8', 'absolute top-176 left-12', 'absolute top-184 right-16',
                    'absolute top-192 left-8', 'absolute top-200 right-4', 'absolute top-208 left-20'
                  ];
                  
                  const size = sizes[index % sizes.length];
                  const color = colors[index % colors.length];
                  const position = positions[index % positions.length];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`${position} ${size} ${color} font-medium cursor-default hover:scale-110 transition-transform duration-200`}
                    >
                      {item}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Title Only */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-96"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center leading-tight">
                {currentContent.whatIsSection.title}
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-200 mx-4"></div>

      {/* Contact Form Section (Top) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-4"
            >
              {currentContent.cta.title}
            </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
              {currentContent.cta.subtitle}
          </motion.h2>
            <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
              <div className="flex-1 max-w-xs">
                <Input
                  type="email"
                  placeholder={currentContent.cta.email}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex-1 max-w-xs">
                <Input
                  type="tel"
                  placeholder={currentContent.cta.phone}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="flex-1 max-w-xs">
                <Input
                  type="text"
                  placeholder={currentContent.cta.name}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                {currentContent.cta.send}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Two Images */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/business-people-signing-contract.jpg"
                  alt="Hands holding and pointing at documents"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src="/images/man-working-documents.png"
                  alt="Hands pointing at tablet screen"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            {/* Right Side - Text Block */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {currentContent.info.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.info.description}
              </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <NeighborDisputesFAQ language={language} />

      {/* Contact Form Section (Bottom) */}
      <ContactSection language={language} />

      <Footer />
    </div>
  );
}