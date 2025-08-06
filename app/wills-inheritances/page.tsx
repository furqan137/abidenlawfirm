"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Phone, User, Info, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import VideoBackground from "@/components/video-background";

export default function WillsInheritancesPage() {
  const [language, setLanguage] = useState<"he" | "en">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

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
        wills: "צוואות וירושות",
      },
      hero: {
        title: "צוואות וירושות",
        subtitle: "יש דברים שלא משאירים למקרה - צוואה וייפוי כוח מתמשך נותנים לכם שקט נפשי בידיעה שהרכוש שלכם יחולק בדיוק כפי שאתם רוצים, ללא הפתעות וללא קונפליקטים",
        scrollText: "גלול למטה",
      },
      whatIsSection: {
        title: "דואגים לעתיד המשפחה שלכם? כך תוודאו שהרכוש שלכם יחולק בדיוק כפי שרציתם!",
        leftColumn: [
          "איך",
          "לקבוע",
          "וירושות",
          "צוואות",
          "הרכוש שלכם",
          "לוודא",
          "כדי",
          "יחולק",
          "בדיוק",
          "לפי",
          "שתכננתם",
          "צוואה",
          "עריכת",
          "המדינה",
          "חוק",
          "לפי",
          "משפחתיים",
          "סכסוכים",
          "למנוע",
          "יכול",
          "צוואה",
          "עריכת",
          "משפטי",
          "ליווי",
          "עם",
          "וירושות",
          "צוואות",
          "לוודא",
          "כדי",
          "שהרכוש",
          "שלכם",
          "יועבר",
          "בדיוק",
          "כפי",
          "שרציתם",
          "ללא",
          "טעויות",
          "וללא",
          "ויכוחים",
          "החלוקה",
          "צוואה",
          "לפי",
          "החוק",
          "יקבע",
          "מה",
          "יקרה",
          "ובקונפליקטים",
          "בסכסוכים",
          "ליצור",
          "עלול",
          "צוואה",
          "בקרת",
          "לכם",
          "נותנת",
          "מראש",
          "תיתן",
          "שקט",
          "נפשי",
          "מלא",
          "לכם",
          "יקר",
          "של",
          "שהעתיד",
          "שתכננתם",
          "כפי",
          "בדיוק",
          "מובטח",
        ],
      },
      cta: {
        title: "העתיד של יקיריכם לא צריך להישאר באוויר",
        subtitle: "השאירו פרטים ונחזור אליכם לוודא שהרכוש שלכם יחולק בדיוק לפי רצונכם",
        name: "שם*",
        phone: "טלפון*",
        email: "אימייל",
        send: "שליחה",
      },
      whyImportant: {
        title: "למה חשוב לערוך צוואה?",
        description: "עריכת צוואה מבטיחה שהרכוש והנכסים של אדם יחולקו לפי רצונו לאחר מותו. ללא צוואה, חלוקת הירושה תיקבע על פי חוק הירושה, מה שעלול להוביל לחלוקות לא רצויות או לסכסוכים בין יורשים.",
      },
      info: {
        title: "מה חשוב לדעת על צוואות",
        description: "צוואה היא מסמך משפטי שבו אדם מורה כיצד יחולק רכושו לאחר מותו",
      },
      faq: [
        {
          question: "מהי צוואה?",
          answer: "צוואה היא מסמך משפטי שבו אדם מורה כיצד יחולק רכושו לאחר מותו",
        },
        {
          question: "באילו מקרים חשובה צוואה בכתב?",
          answer: "צוואה בכתב חשובה בכל מקרה שבו אדם רוצה לוודא שרכושו יחולק לפי רצונו המדויק",
        },
        {
          question: "האם צוואה היא הדרך הבטוחה ביותר לוודא שהעיזבון יחולק?",
          answer: "כן, צוואה היא הדרך הבטוחה והמדויקת ביותר להבטיח חלוקה לפי רצון המנוח",
        },
        {
          question: "אילו סוגי צוואות קיימים?",
          answer: "קיימים מספר סוגי צוואות: צוואה בכתב יד, צוואה בעדים, צוואה בפני רשות, וצוואה בעל פה",
        },
        {
          question: "למה לערוך צוואה בכתב?",
          answer: "צוואה בכתב מבטיחה שהרצון שלכם יישמר ויוגן משפטית",
        },
        {
          question: "מה קורה אם אדם נפטר ללא צוואה?",
          answer: "אם אדם נפטר ללא צוואה, חלוקת הירושה תיקבע על פי חוק הירושה",
        },
        {
          question: "האם צוואה בכתב יד נחשבת תקפה?",
          answer: "כן, צוואה בכתב יד נחשבת תקפה אם היא עומדת בתנאים הקבועים בחוק",
        },
        {
          question: "האם ניתן להוריש רכוש לאנשים שאינם בני משפחה?",
          answer: "כן, ניתן להוריש רכוש לכל אדם או ארגון לפי רצון המנוח",
        },
        {
          question: "האם ניתן לשנות צוואה שכבר נחתמה?",
          answer: "כן, ניתן לשנות צוואה בכל עת על ידי עריכת צוואה חדשה",
        },
        {
          question: "מה היתרון של הפקדת צוואה ברשם הירושות?",
          answer: "הפקדת צוואה ברשם הירושות מבטיחה שהמסמך יישמר ויהיה נגיש בעת הצורך",
        },
      ],
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
        wills: "Wills and inheritances",
      },
      hero: {
        title: "Wills and inheritances",
        subtitle: "Some things are not left to chance - a will and a durable power of attorney give you peace of mind knowing that your property will be divided exactly as you want, without surprises and without conflicts",
        scrollText: "SCROLL DOWN",
      },
      whatIsSection: {
        title: "Worried about your family's future? This way you'll ensure that your property will be divided exactly as you wanted!",
        leftColumn: [
          "how",
          "Determine",
          "And inheritances",
          "Wills",
          "your",
          "The property",
          "Make sure",
          "To",
          "you",
          "after",
          "according to",
          "Underway",
          "That everything",
          "Tidy",
          "and not",
          "your",
          "The desire",
          "Will",
          "Editing",
          "The country",
          "legal",
          "Family",
          "Disputes",
          "prevent",
          "can",
          "stable",
          "Future",
          "and ensure",
          "And inheritances",
          "For your loved ones. Wills",
          "Make sure",
          "your",
          "The way",
          "they",
          "and the assets",
          "that the property",
          "exactly",
          "Will arrive",
          "that you have accumulated",
          "without",
          "Want",
          "that you",
          "For people",
          "Arguments",
          "And without",
          "Surprises",
          "The division",
          "Will",
          "without",
          "Unnecessary",
          "The law",
          "according to",
          "Will be determined",
          "Will",
          "Editing",
          "Disputes",
          "create",
          "which may",
          "what",
          "control",
          "In the family",
          "and conflicts",
          "You know",
          "to you",
          "Gives",
          "in advance",
          "Tidy",
          "so",
          "mental",
          "And quiet",
          "Full",
          "to you",
          "Dear",
          "of",
          "That the future",
          "That you planned",
          "as",
          "exactly",
          "promised",
        ],
      },
      cta: {
        title: "The future of your loved ones shouldn't be left up in the air",
        subtitle: "Leave your details and we will get back to you to ensure that your property is distributed exactly according to your wishes",
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
      whyImportant: {
        title: "Why is it important to make a will?",
        description: "Making a will ensures that a person's property and assets are distributed according to their wishes after their death. Without a will, the distribution of the inheritance will be determined by inheritance law, which can lead to unwanted distributions or disputes between heirs.",
      },
      info: {
        title: "What is important to know about wills",
        description: "A will is a legal document in which a person instructs how their property will be distributed after their death",
      },
      faq: [
        {
          question: "What is a will?",
          answer: "A will is a legal document in which a person instructs how their property will be distributed after their death",
        },
        {
          question: "In what cases is a written will important?",
          answer: "A written will is important in any case where a person wants to ensure their property is distributed according to their exact wishes",
        },
        {
          question: "Is a will the safest way to ensure that your estate is distributed?",
          answer: "Yes, a will is the safest and most accurate way to ensure distribution according to the deceased's wishes",
        },
        {
          question: "What types of wills exist?",
          answer: "There are several types of wills: handwritten will, witnessed will, will before authority, and oral will",
        },
        {
          question: "Why make a written will?",
          answer: "A written will ensures your wishes are preserved and legally protected",
        },
        {
          question: "What happens if a person dies without a will?",
          answer: "If a person dies without a will, the distribution of the inheritance will be determined by inheritance law",
        },
        {
          question: "Is a handwritten will considered valid?",
          answer: "Yes, a handwritten will is considered valid if it meets the conditions set by law",
        },
        {
          question: "Can property be bequeathed to non-family members?",
          answer: "Yes, property can be bequeathed to any person or organization according to the deceased's wishes",
        },
        {
          question: "Is it possible to change a will that was previously signed?",
          answer: "Yes, a will can be changed at any time by creating a new will",
        },
        {
          question: "What is the advantage of depositing a will with the inheritance registry?",
          answer: "Depositing a will with the inheritance registry ensures the document is preserved and accessible when needed",
        },
      ],
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
          videoSrc="/videos/bg-video5.mp4"
          fallbackImage="/images/hero-bg.png"
          alt="Hands writing on document"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Floating Icons */}
        <div className="absolute left-8 bottom-8 z-30">
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Info className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute right-8 bottom-8 z-30">
          <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Phone className="w-6 h-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center text-white">
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
            <span className="text-amber-100">{currentContent.breadcrumb.wills}</span>
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

            {/* Right Column - Title */}
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

      {/* Contact Form Section (Top) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {currentContent.cta.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              {currentContent.cta.subtitle}
            </motion.p>
            
            {/* Separator */}
            <div className="border-t border-gray-200 mb-8"></div>
            
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
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {currentContent.cta.send}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Why is it important Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Question Mark Icon */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-8xl font-bold text-white">?</span>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {currentContent.whyImportant.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.whyImportant.description}
              </p>
              
              {/* Phone Icon */}
              <div className="absolute top-0 right-0">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/business-people-signing-contract.jpg"
                alt="Hands holding and reviewing documents"
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
                src="/images/cropped-photo-attractive-young-man-office-working.jpg"
                alt="Man looking at computer screen"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Question Mark Icon */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-48 border-4 border-amber-600 rounded-full flex items-center justify-center relative">
                  <span className="text-8xl font-bold text-amber-600">?</span>
                  <div className="absolute inset-0 border-2 border-dashed border-amber-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - FAQ */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {currentContent.info.title}
              </h3>
              
              <div className="space-y-2">
                {currentContent.faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-right bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <span className="text-gray-900 font-medium">{item.question}</span>
                      {expandedFaq === index ? (
                        <Minus className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-amber-600" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-4 bg-gray-50"
                      >
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Want to ask a question? Click here
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (Bottom) */}
      <ContactSection language={language} />

      <Footer />
    </div>
  );
}
