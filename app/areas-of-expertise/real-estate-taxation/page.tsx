"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NeighborDisputesFAQ from "@/components/neighbor-disputes-faq";
import ContactSection from "@/components/contact-section";

export default function RealEstateTaxationPage() {
  const [language, setLanguage] = useState<"he" | "en">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = language === "he";

  const content = {
    he: {
      breadcrumb: {
        home: "בית",
        land: "קרקע ונדל״ן",
        current: "מיסוי נדל״ן והפרשי הון",
      },
      hero: {
        title: "מיסוי נדל״ן והפרשי הון",
        subtitle: "מכרתם נכס? תכנון מס נכון יכול לחסוך לכם עשרות אלפי שקלים. אנחנו כאן כדי לוודא שלא תשלמו שקל אחד שלא לצורך.",
        scroll: "גלול למטה",
      },
      content: {
        title: "איך מס רווח הון יכול להפוך עסקה מצוינת לעסקה לא רווחית?",
        subtitle: "מכרתם נכס? אל תשלמו לפני התייעצות. השאירו פרטים ונבדוק אם נוכל לחסוך לכם אלפי שקלים.",
        article: `מס שבח הוא מס המוטל על הרווח שנוצר בעת מכירת נכס נדל״ן. כלומר, על ההפרש בין מחיר הקנייה למחיר המכירה. מי שמוכר דירה, קרקע או נכס מסחרי עשוי להיות חייב בתשלום זה – אלא אם מתקיים פטור.

חשוב להבין כיצד מחשבים את המס, מה נחשב הוצאה מוכרת, ומהן הדרכים להפחית את החבות. תכנון מס נכון יכול לחסוך עשרות אלפי שקלים.

אנחנו מתמחים בליווי משפטי צמוד בכל שלבי העסקה, החל משלב התכנון ועד לקבלת אישור מס הכנסה. הניסיון שלנו מוכיח כי תכנון נכון יכול להפוך עסקה לא רווחית לעסקה מצוינת.

השירותים שלנו כוללים:
• חישוב מס מדויק
• הכנת תצהירים
• ליווי בהגשת בקשות פטור
• ערעור על החלטות מס הכנסה
• תכנון מס מתקדם

הניסיון שלנו מוכיח כי תכנון נכון יכול לחסוך עשרות אלפי שקלים. אל תשלמו מס שלא לצורך – התייעצו איתנו לפני המכירה.`,
      },
      form: {
        email: "אימייל",
        phone: "טלפון*",
        name: "שם*",
        send: "שליחה",
      },
      bottom: {
        title: "מהו מס שבח ועל מי הוא חל?",
        description: "מס שבח הוא מס המוטל על הרווח שנוצר בעת מכירת נכס נדל״ן – כלומר, על ההפרש בין מחיר הקנייה למחיר המכירה. מי שמוכר דירה, קרקע או נכס מסחרי עשוי להיות חייב בתשלום זה – אלא אם מתקיים פטור. חשוב להבין כיצד מחשבים את המס, מה נחשב הוצאה מוכרת, ומהן הדרכים להפחית את החבות.",
      },
    },
    en: {
      breadcrumb: {
        home: "Home",
        land: "Land and real estate",
        current: "Real estate taxation and capital gains",
      },
      hero: {
        title: "Real estate taxation and capital gains tax distribution",
        subtitle: "Selling a property? Proper tax planning can save you tens of thousands of shekels. We're here to make sure you don't pay a single shekel unnecessarily.",
        scroll: "scroll down",
      },
      content: {
        title: "How can a capital gains tax turn a great deal into an unprofitable deal?",
        subtitle: "Have you sold a property? Don't pay before consulting. Leave your details and we'll see if we can save you thousands of shekels.",
        article: `Capital gains tax is a tax imposed on the profit generated when selling real estate – that is, on the difference between the purchase price and the sale price. Anyone who sells an apartment, land, or commercial property may be liable for it – unless an exemption exists.

It is important to understand how the tax is calculated, what is considered a recognized expense, and what are the ways to reduce the liability. Proper tax planning can save tens of thousands of shekels.

We specialize in close legal support at all stages of the transaction, from the planning stage to receiving approval from the Tax Authority. Our experience proves that proper planning can turn an unprofitable deal into an excellent one.

Our services include:
• Accurate tax calculation
• Preparation of affidavits
• Support in submitting exemption requests
• Appeals against Tax Authority decisions
• Advanced tax planning

Our experience proves that proper planning can save tens of thousands of shekels. Don't pay unnecessary tax – consult with us before selling.`,
      },
      form: {
        email: "Email",
        phone: "Phone*",
        name: "Name*",
        send: "Send",
      },
      bottom: {
        title: "What is a tax on appreciation and to whom does it apply?",
        description: "Capital gains tax is a tax imposed on the profit generated when selling real estate – that is, on the difference between the purchase price and the sale price. Anyone who sells an apartment, land, or commercial property may be liable for it – unless an exemption exists. It is important to understand how the tax is calculated, what is considered a recognized expense, and what are the ways to reduce the liability.",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div
      className={`min-h-screen bg-white font-sans ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/tax.jpg"
            alt="Real estate taxation"
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

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>

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

      {/* Content and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {currentContent.content.article}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.content.title}
              </h2>
              <p className="text-gray-700 mb-6">
                {currentContent.content.subtitle}
              </p>

              <form className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder={currentContent.form.email}
                    className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder={currentContent.form.phone}
                    className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={currentContent.form.name}
                    className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {currentContent.form.send}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 bg-gray-50">
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
                src="/images/lawyer-professional.jpg"
                alt="Professional lawyer"
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
                {currentContent.bottom.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentContent.bottom.description}
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
