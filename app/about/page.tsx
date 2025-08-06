
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  const [language, setLanguage] = useState<"he" | "en">("en"); // Default to English
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
        home: "Home",
        about: "Adi Ben Harush Attorney at Law",
      },
      hero: {
        subtitle: "About me",
        title: "Adi Ben Harush, Attorney at Law",
      },
      bio: {
        intro:
          "For years, I have been involved in the real estate field, including consulting and assisting in the sale and purchase of apartments, plots of land, commercial properties, and properties in general. As an attorney specializing in the field of real estate.",
        experience:
          "During my years of work, I gained additional experience in dealing with contractors. I worked at a law firm that represented contractors and large projects of leading construction companies in Israel in general and in Holon in particular.",
        specialization:
          "In addition, I specialize in complex real estate transactions such as: partnership dissolution transactions, registration of condominiums, amendment of a condominium order as a result of construction additions and various changes, real estate taxation, capital gains tax calculation and capital gains tax distribution, and more.",
        expertise:
          "Throughout my years, I have specialized especially in the field of real estate and real estate taxation, paying attention to the smallest details and broadening the field in depth, including advanced training courses and new updates such as in the Arrangements Law.",
        additional:
          "In addition, I have gained experience in the field of wills and inheritances, and have undergone training and been certified to issue a durable power of attorney.",
      },
      firmSection: {
        subtitle: "Experience and uncompromising service that leads to results",
        title: "About the firm",
        description:
          "In every transaction, at every scale, close, thorough, professional and, no less importantly, attentive and personal legal support is provided.",
        services:
          "In addition, the firm provides ancillary services such as drafting wills, inheritances and enduring powers of attorney. The vision is to enable customers to maximize their rights and options in every agreement, action or transaction.",
        fullServices:
          "The firm provides solutions for all types of transactions, sales, purchases, purchases from contractors, purchases from real estate agencies, mortgage companies, gift transactions (transfer without consideration), plots of land, stores, estate distribution agreements, agreements between heirs, partnership agreements, dissolution of partnership, transfers in the event of divorce, loan agreements, receivership and rental agreements.",
        experience: "257+",
        experienceLabel: "Properties and transactions I handled",
        clients: "350+",
        clientsLabel: "Satisfied customers",
      },
      values: {
        subtitle: "credo",
        title: "Reliability, professionalism and service",
        intro:
          "The firm's clients are my most important asset, and I make sure to give them the best service. In every transaction, I make sure to conduct thorough checks of the legal status of the property. Because I have conducted hundreds of transactions in these segments, My firm operates according to the core principles of reliability, professionalism, and service.",
        availability: {
          title: "availability",
          description:
            "I am always available for my clients, for any questions, help or consultation. I handle each and every one of my clients personally and devotedly.",
        },
        thoroughness: {
          title: "thoroughness",
          description:
            "Handling each transaction or case thoroughly, paying close attention to the details and acting in the best possible manner for the client in order to maximize his rights granted to him by law.",
        },
        transparency: {
          title: "transparency",
          description:
            "To give the client all the information related to the transaction, in the most transparent and clear way. The advice I give to the client, and to accompany the client even in difficult moments.",
        },
      },
      support: {
        title: "You deserve close, professional and personal support",
        subtitle: "In the most expensive and important transaction in life, I will be there for you",
        description:
          "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      },
      contact: {
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
    },
    en: {
      nav: {
        articles: "Articles",
        enduring: "Enduring Power of Attorney",
        wills: "Wills and inheritances",
        land: "Land and real estate",
        about: "about",
        main: "main",
        contact: "Contact us",
      },
      breadcrumb: {
        home: "Home",
        about: "Adi Ben Harush Attorney at Law",
      },
      hero: {
        subtitle: "About me",
        title: "Adi Ben Harush, Attorney at Law",
      },
      bio: {
        intro:
          "For years, I have been involved in the real estate field, including consulting and assisting in the sale and purchase of apartments, plots of land, commercial properties, and properties in general. As an attorney specializing in the field of real estate.",
        experience:
          "During my years of work, I gained additional experience in dealing with contractors. I worked at a law firm that represented contractors and large projects of leading construction companies in Israel in general and in Holon in particular.",
        specialization:
          "In addition, I specialize in complex real estate transactions such as: partnership dissolution transactions, registration of condominiums, amendment of a condominium order as a result of construction additions and various changes, real estate taxation, capital gains tax calculation and capital gains tax distribution, and more.",
        expertise:
          "Throughout my years, I have specialized especially in the field of real estate and real estate taxation, paying attention to the smallest details and broadening the field in depth, including advanced training courses and new updates such as in the Arrangements Law.",
        additional:
          "In addition, I have gained experience in the field of wills and inheritances, and have undergone training and been certified to issue a durable power of attorney.",
      },
      firmSection: {
        subtitle: "Experience and uncompromising service that leads to results",
        title: "About the firm",
        description:
          "In every transaction, at every scale, close, thorough, professional and, no less importantly, attentive and personal legal support is provided.",
        services:
          "In addition, the firm provides ancillary services such as drafting wills, inheritances and enduring powers of attorney. The vision is to enable customers to maximize their rights and options in every agreement, action or transaction.",
        fullServices:
          "The firm provides solutions for all types of transactions, sales, purchases, purchases from contractors, purchases from real estate agencies, mortgage companies, gift transactions (transfer without consideration), plots of land, stores, estate distribution agreements, agreements between heirs, partnership agreements, dissolution of partnership, transfers in the event of divorce, loan agreements, receivership and rental agreements.",
        experience: "257+",
        experienceLabel: "Properties and transactions I handled",
        clients: "350+",
        clientsLabel: "Satisfied customers",
      },
      values: {
        subtitle: "credo",
        title: "Reliability, professionalism and service",
        intro:
          "The firm's clients are my most important asset, and I make sure to give them the best service. In every transaction, I make sure to conduct thorough checks of the legal status of the property. Because I have conducted hundreds of transactions in these segments, My firm operates according to the core principles of reliability, professionalism, and service.",
        availability: {
          title: "availability",
          description:
            "I am always available for my clients, for any questions, help or consultation. I handle each and every one of my clients personally and devotedly.",
        },
        thoroughness: {
          title: "thoroughness",
          description:
            "Handling each transaction or case thoroughly, paying close attention to the details and acting in the best possible manner for the client in order to maximize his rights granted to him by law.",
        },
        transparency: {
          title: "transparency",
          description:
            "To give the client all the information related to the transaction, in the most transparent and clear way. The advice I give to the client, and to accompany the client even in difficult moments.",
        },
      },
      support: {
        title: "You deserve close, professional and personal support",
        subtitle: "In the most expensive and important transaction in life, I will be there for you",
        description:
          "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      },
      contact: {
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-amber-700">
              {currentContent.breadcrumb.home}
            </Link>
            <span>›</span>
            <span className="text-amber-700">{currentContent.breadcrumb.about}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <p className="text-amber-600 font-medium mb-2">{currentContent.hero.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{currentContent.hero.title}</h1>

              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p>{currentContent.bio.intro}</p>
                <p>{currentContent.bio.experience}</p>
                <p>{currentContent.bio.specialization}</p>
                <p>{currentContent.bio.expertise}</p>
                <p>{currentContent.bio.additional}</p>
              </div>
            </motion.div>

            {/* Right Side - Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <Image
                  src="/images/lawyer-professional.jpg"
                  alt="Adi Ben Harush, Attorney at Law"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Firm Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Statistics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* AB Logo and Statistics */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-6xl font-bold text-amber-600 mb-4">AB</div>
                  <div className="text-xl font-bold text-gray-900">עדי בן הרוש עורכת דין</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{currentContent.firmSection.experience}</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {currentContent.firmSection.experienceLabel}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{currentContent.firmSection.clients}</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {currentContent.firmSection.clientsLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <p className="text-amber-600 font-medium mb-2">{currentContent.firmSection.subtitle}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{currentContent.firmSection.title}</h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{currentContent.firmSection.description}</p>
                <p>{currentContent.firmSection.services}</p>
                <p className="text-sm">{currentContent.firmSection.fullServices}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-600 font-medium mb-2">{currentContent.values.subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{currentContent.values.title}</h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">{currentContent.values.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{currentContent.values.availability.title}</h3>
              <p className="text-gray-700 leading-relaxed">{currentContent.values.availability.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{currentContent.values.thoroughness.title}</h3>
              <p className="text-gray-700 leading-relaxed">{currentContent.values.thoroughness.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{currentContent.values.transparency.title}</h3>
              <p className="text-gray-700 leading-relaxed">{currentContent.values.transparency.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg mb-6"
            >
              {currentContent.support.title}
            </motion.p>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {currentContent.support.subtitle}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 mb-12 leading-relaxed"
            >
              {currentContent.support.description}
            </motion.p>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Input placeholder={currentContent.contact.name} className="rounded-full text-center" />
                <Input placeholder={currentContent.contact.phone} className="rounded-full text-center" />
                <Input placeholder={currentContent.contact.email} className="rounded-full text-center" />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 flex items-center gap-2">
                  {currentContent.contact.send}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
