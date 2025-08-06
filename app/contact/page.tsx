
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
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
        contact: "צור קשר",
      },
      hero: {
        title: "צור קשר",
      },
      support: {
        title: "אתם זכאים לליווי צמוד, מקצועי ואישי",
        subtitle: "בעסקה הכי יקרה וחשובה בחיים, אני אהיה שם בשבילכם",
        description: "משלב המשא ומתן ועד למסירה או קבלת המפתח, הרישום ברשם המקרקעין ועוד הרבה",
      },
      contact: {
        writeToMe: "כתבו לי",
        email: "adiben.adv@gmail.com",
        callMe: "התקשרו אליי",
        phone: "052-709-2731",
        address: "כתובת",
        addressText: "רחוב סעדיה גאון 6, חולון",
        form: {
          name: "שם*",
          phone: "טלפון*",
          email: "אימייל",
          message: "הודעה",
          send: "שליחה",
        },
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
        contact: "Contact Us",
      },
      hero: {
        title: "Contact us",
      },
      support: {
        title: "You deserve close, professional and personal support",
        subtitle: "In the most expensive and important transaction in life, I will be there for you",
        description: "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      },
      contact: {
        writeToMe: "Write to me",
        email: "adiben.adv@gmail.com",
        callMe: "Call me",
        phone: "052-709-2731",
        address: "address",
        addressText: "Saadia Gaon St., Holon 6",
        form: {
          name: "name*",
          phone: "phone*",
          email: "Email",
          message: "message",
          send: "sending",
        },
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

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
                <Image
            src="/images/cropped-photo-attractive-young-man-office-working.jpg"
            alt="Hands holding pen and calculator"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />

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
            <span className="text-amber-100">{currentContent.breadcrumb.contact}</span>
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

          {/* Support Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl leading-relaxed">
            {currentContent.support.title}
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
            {currentContent.support.subtitle}
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
            {currentContent.support.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Direct Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Write to me */}
              <div className="flex items-center gap-4">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {currentContent.contact.writeToMe}
                  </h3>
                  <a 
                    href={`mailto:${currentContent.contact.email}`}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {currentContent.contact.email}
                  </a>
                </div>
              </div>

              {/* Call me */}
              <div className="flex items-center gap-4">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {currentContent.contact.callMe}
                  </h3>
                  <a 
                    href={`tel:${currentContent.contact.phone}`}
                    className="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {currentContent.contact.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {currentContent.contact.address}
                  </h3>
                  <p className="text-gray-700">
                    {currentContent.contact.addressText}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <form className="space-y-4">
                      <div>
                  <Input
                          type="text"
                          placeholder={currentContent.contact.form.name}
                    className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                  <Input
                          type="tel"
                          placeholder={currentContent.contact.form.phone}
                    className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    <div>
                  <Input
                        type="email"
                        placeholder={currentContent.contact.form.email}
                    className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={currentContent.contact.form.message}
                    className="w-full px-6 py-4 text-right border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all min-h-[120px] resize-none"
                      />
                    </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="w-5 h-5" />
                        {currentContent.contact.form.send}
                      </motion.button>
                  </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
