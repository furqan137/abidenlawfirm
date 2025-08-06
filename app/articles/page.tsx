"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ArticlesPage() {
  const [language, setLanguage] = useState<"he" | "en">("en") // Default to English
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isRTL = language === "he"

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
        articles: "Articles",
      },
      hero: {
        title: "Articles",
      },
      articles: [
        {
          id: "enduring-power-attorney",
          title: "Enduring Power of Attorney: Everything You Need to Know",
          excerpt:
            "A durable power of attorney allows you to decide in advance who will handle your affairs if you lose your capacity. The legal document gives you complete control, and prevents bureaucratic procedures and the appointment of a guardian in the future.",
          image: "/images/hero-bg.png",
          date: "05/05/2024",
          views: 20,
        },
        {
          id: "wills-inheritances",
          title: "Wills and inheritances: everything you need to know",
          excerpt:
            "A well-organized will ensures that your property is transferred exactly as you wished - and prevents family disputes. In the guide you will find explanations, types of wills, heirs rights and tips for valid legal drafting.",
          image: "/images/neighbors.jpg",
          date: "05/05/2024",
          views: 20,
        },
        {
          id: "real-estate-buying-selling",
          title: "Selling and purchasing real estate – how to do it legally",
          excerpt:
            "The process of buying or selling real estate includes critical inspections, contracts, taxation, and close legal support. This guide will help you understand the risks – and make every transaction with peace of mind.",
          image: "/images/real-estate-sales.jpg",
          date: "19/04/2024",
          views: 20,
        },
      ],
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
        articles: "Articles",
      },
      hero: {
        title: "Articles",
      },
      articles: [
        {
          id: "enduring-power-attorney",
          title: "Enduring Power of Attorney: Everything You Need to Know",
          excerpt:
            "A durable power of attorney allows you to decide in advance who will handle your affairs if you lose your capacity. The legal document gives you complete control, and prevents bureaucratic procedures and the appointment of a guardian in the future.",
          image: "/images/hero-bg.png",
          date: "05/05/2024",
          views: 20,
        },
        {
          id: "wills-inheritances",
          title: "Wills and inheritances: everything you need to know",
          excerpt:
            "A well-organized will ensures that your property is transferred exactly as you wished - and prevents family disputes. In the guide you will find explanations, types of wills, heirs rights and tips for valid legal drafting.",
          image: "/images/neighbors.jpg",
          date: "05/05/2024",
          views: 20,
        },
        {
          id: "real-estate-buying-selling",
          title: "Selling and purchasing real estate – how to do it legally",
          excerpt:
            "The process of buying or selling real estate includes critical inspections, contracts, taxation, and close legal support. This guide will help you understand the risks – and make every transaction with peace of mind.",
          image: "/images/real-estate-sales.jpg",
          date: "19/04/2024",
          views: 20,
        },
      ],
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
  }

  const currentContent = content[language]

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
      <section className="relative min-h-[320px] flex flex-col justify-center items-center overflow-hidden bg-white">
        {/* Background handshake image */}
        <div className="absolute inset-0">
          <Image
            src="/images/business-people-signing-contract.jpg"
            alt="Handshake background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4 mt-8"
          >
            <Link href="/" className="hover:text-amber-700">
              {currentContent.breadcrumb.home}
            </Link>
            <span>›</span>
            <span className="text-amber-700">{currentContent.breadcrumb.articles}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
          >
            {currentContent.hero.title}
          </motion.h1>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left column: two articles stacked */}
            <div className="flex flex-col gap-8 md:col-span-2">
              {[0, 1].map((idx) => (
                <Link key={currentContent.articles[idx].id} href={`/articles/${currentContent.articles[idx].id}`} className="block group">
                  <Card className="flex flex-row items-stretch h-48 group hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative w-40 min-w-[10rem] h-full">
                      <Image
                        src={currentContent.articles[idx].image}
                        alt={currentContent.articles[idx].title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="flex-1 flex flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                          <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {currentContent.articles[idx].date}</span>
                          <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {currentContent.articles[idx].views}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors leading-tight">
                          {currentContent.articles[idx].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{currentContent.articles[idx].excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {/* Right column: one large article */}
            <div className="flex flex-col h-full">
              <Link href={`/articles/${currentContent.articles[2].id}`} className="block group h-full">
                <Card className="flex flex-col h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative w-full h-48 md:h-80">
                    <Image
                      src={currentContent.articles[2].image}
                      alt={currentContent.articles[2].title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col justify-between p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {currentContent.articles[2].date}</span>
                      <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {currentContent.articles[2].views}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors leading-tight">
                      {currentContent.articles[2].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">{currentContent.articles[2].excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-2">{currentContent.support.title}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {currentContent.support.subtitle}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {currentContent.support.description}
          </p>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-3xl mx-auto">
            <Input placeholder={currentContent.contact.name} className="rounded-full text-center" />
            <Input placeholder={currentContent.contact.phone} className="rounded-full text-center" />
            <Input placeholder={currentContent.contact.email} className="rounded-full text-center" />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 flex items-center gap-2">
              {currentContent.contact.send}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
