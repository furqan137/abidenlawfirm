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

export default function DissolutionPartnershipPage() {
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
        current: "פירוק שותפות נדל״ן",
      },
      hero: {
        title: "פירוק שותפות נדל״ן",
        subtitle: "שותפות בנכס שלא מתקדמת? הגיע הזמן להפריד כוחות - נכון ומשפטי",
        description: "פירוק שותפות הוא הצעד הראשון לחופש כלכלי, עצמאות וניהול שקוף",
        scrollText: "גלול למטה",
      },
      whatIsSection: {
        title: "מה עושים כשרכוש אחד כבר לא מתאים לשניים (או יותר)?",
        leftColumn: [
          "בעלות משותפת",
          "סכסוכים שמתעוררים",
          "הפתרון המשפטי",
          "טעון כלכלית",
          "הפרדת כוחות",
          "חלוקה צודקת",
          "הערכה מקצועית",
          "הליכים משפטיים",
          "הסכמים מחייבים",
          "שקט נפשי",
        ],
        rightColumn: "פירוק שותפות הוא תהליך משפטי שנועד לסיים בעלות משותפת על נכס. זהו פתרון הכרחי כאשר אין הסכמה בין השותפים, כאשר אחד השותפים רוצה למכור את חלקו, או כאשר השותפות כבר לא מתאימה לצרכים של הצדדים. התהליך מבטיח שכל בעלים יקבל את חלקו ויוכל להמשיך הלאה בצורה ברורה ומשפטית.",
      },
      cta: {
        title: "רוצים להפריד כוחות - אבל לעשות את זה נכון",
        subtitle: "השאירו פרטים וננחה אתכם צעד אחר צעד",
        name: "שם*",
        phone: "טלפון*",
        email: "אימייל",
        send: "שליחה",
      },
      info: {
        title: "מה זה פירוק שותפות ולמה זה בכלל חשוב?",
        description: "פירוק שותפות הוא תהליך משפטי שנועד לסיים בעלות משותפת על נכס. זהו פתרון הכרחי כאשר אין הסכמה בין השותפים, כאשר אחד השותפים רוצה למכור את חלקו, או כאשר השותפות כבר לא מתאימה לצרכים של הצדדים. התהליך מבטיח שכל בעלים יקבל את חלקו ויוכל להמשיך הלאה בצורה ברורה ומשפטית.",
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
        current: "Dissolution of a real estate partnership",
      },
      hero: {
        title: "Dissolution of a real estate partnership",
        subtitle: "A partnership in a property that is not progressing? It's time to separate forces - correctly and legally",
        description: "Dissolving a partnership is the first step to financial freedom, independence, and transparent management",
        scrollText: "scroll down",
      },
      whatIsSection: {
        title: "What do you do when one property is no longer suitable for two (or more)?",
        leftColumn: [
          "Shared ownership",
          "Disputes that are awakening",
          "Legal The solution",
          "financial loaded",
          "Separate forces",
          "Fair division",
          "Professional assessment",
          "Legal proceedings",
          "Binding agreements",
          "Peace of mind",
        ],
        rightColumn: "Dissolution of a partnership is a legal process designed to end joint ownership of a property. It is a necessary solution when there is no agreement between the partners, when one partner wants to sell their share, or when the partnership is no longer suitable for the needs of the parties. The process ensures that each owner receives their share and can move forward in a clear and legal manner.",
      },
      cta: {
        title: "Want to separate forces - but do it right",
        subtitle: "Leave details and we will guide you step by step",
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
      info: {
        title: "What is a partnership dissolution and why is it even important?",
        description: "Dissolution of a partnership is a legal process designed to end joint ownership of a property. It is a necessary solution when there is no agreement between the partners, when one partner wants to sell their share, or when the partnership is no longer suitable for the needs of the parties. The process ensures that each owner receives their share and can move forward in a clear and legal manner.",
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
          videoSrc="/videos/bg-video2.mp4"
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
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-4"
          >
            {currentContent.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            {currentContent.hero.description}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
            <span className="text-sm">{currentContent.hero.scrollText}</span>
          </motion.div>
        </div>
      </section>

      {/* What do you do when one property is no longer suitable for two (or more)? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            {currentContent.whatIsSection.title}
          </motion.h2>

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

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {currentContent.whatIsSection.rightColumn}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-lg text-gray-600">{currentContent.cta.title}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              {currentContent.cta.subtitle}
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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

      {/* What is a partnership dissolution and why is it even important? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
            >
              {currentContent.info.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/images/business-people-signing-contract.jpg"
                  alt="Partnership dissolution process"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {currentContent.info.description}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighbor Disputes FAQ Section */}
      <NeighborDisputesFAQ language={language} />

      {/* Final Contact Section */}
      <ContactSection language={language} />

      <Footer />
    </div>
  );
}