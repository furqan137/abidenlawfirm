"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Page() {
  const [language, setLanguage] = useState<"he" | "en">("en"); // Default to English
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = language === "he";

  const content = {
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
      },
      hero: {
        title: "Areas of expertise",
      },
      services: [
        {
          id: "real-estate-taxation",
          title: "Real estate taxation and capital gains tax distribution",
          image: "/images/tax.jpg",
        },
        {
          id: "purchasing-apartment-contractor",
          title: "Purchasing an apartment from a contractor",
          image: "/images/purchase.jpg",
        },
        {
          id: "real-estate-sales-purchases",
          title: "Real estate sales and purchases",
          image: "/images/real-estate-sales.jpg",
        },
        {
          id: "dissolution-partnership",
          title: "Dissolution of a real estate partnership",
          image: "/images/dissolution.jpg",
        },
        {
          id: "neighbor-disputes",
          title: "Neighbor disputes and tenants refusing to pay",
          image: "/images/neighbors.jpg",
        },
        {
          id: "condominium-registration",
          title: "Condominium registration",
          image: "/images/condo.jpg",
        },
        {
          id: "enduring-power-attorney",
          title: "Enduring Power of Attorney",
          image: "/images/hero-bg.png",
        },
        {
          id: "wills-inheritances",
          title: "Wills and inheritances",
          image: "/images/neighbors.jpg",
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
  };

  const currentContent = content[language as "en"];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <Header language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-8 pb-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-amber-700">
              {currentContent.breadcrumb.home}
            </Link>
            <span>›</span>
            <span className="text-amber-700">{currentContent.breadcrumb.land}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{currentContent.hero.title}</h1>
            <Button className="bg-amber-100 text-amber-700 font-semibold rounded-full px-6 py-2 shadow-none cursor-default" disabled>
              For all office services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentContent.services.map((service: {id: string, title: string, image: string}, index: number) => (
              <Link key={service.id} href={`/areas-of-expertise/${service.id}`} className="group block relative">
                <div className="rounded-3xl overflow-hidden shadow-md bg-white h-72 flex flex-col justify-end relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="relative z-20 p-5 flex flex-col justify-end h-full">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 right-4 z-30">
                    <div className="w-10 h-10 bg-amber-300 rounded-full flex items-center justify-center shadow-lg">
                      <Pencil className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-white">
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
  );
}