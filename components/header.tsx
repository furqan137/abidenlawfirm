"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  language: "he" | "en";
  setLanguage: (lang: "he" | "en") => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ language, setLanguage, isMenuOpen, setIsMenuOpen }: HeaderProps) {
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
      sublinks: {
        condominiumRegistration: "רישום דירות",
        realEstateTaxation: "מיסוי נדל״ן",
        purchasingApartmentContractor: "רכישת דירה מקבלן",
        realEstateSalesPurchases: "מכירות ורכישות נדל״ן",
        dissolutionPartnership: "פירוק שותפות נדל״ן",
        neighborDisputes: "סכסוכי שכנים",
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
      sublinks: {
        condominiumRegistration: "Condominium registration",
        realEstateTaxation: "Real estate taxation",
        purchasingApartmentContractor: "Purchasing apartment from contractor",
        realEstateSalesPurchases: "Real estate sales and purchases",
        dissolutionPartnership: "Dissolution of real estate partnership",
        neighborDisputes: "Neighbor disputes",
      },
    },
  };

  const currentContent = content[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left - Phone Number */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            <div className="flex items-center gap-2 text-amber-700 bg-amber-50 px-6 py-3 rounded-full border border-amber-200">
              <Phone className="w-5 h-5" />
              <span className="font-medium">052-709-2731</span>
            </div>
          </motion.div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/articles" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              {currentContent.nav.articles}
            </Link>
            <Link href="/enduring-power-attorney" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              {currentContent.nav.enduring}
            </Link>
            <Link href="/wills-inheritances" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              {currentContent.nav.wills}
            </Link>

            {/* Dropdown for Land and Real Estate */}
            <div className="relative group">
              <Link
                href="/areas-of-expertise"
                className="text-gray-700 hover:text-amber-700 transition-colors font-medium flex items-center gap-1"
              >
                {currentContent.nav.land}
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    href="/areas-of-expertise/condominium-registration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.condominiumRegistration}
                  </Link>
                  <Link
                    href="/areas-of-expertise/real-estate-taxation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.realEstateTaxation}
                  </Link>
                  <Link
                    href="/areas-of-expertise/purchasing-apartment-contractor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.purchasingApartmentContractor}
                  </Link>
                  <Link
                    href="/areas-of-expertise/real-estate-sales-purchases"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.realEstateSalesPurchases}
                  </Link>
                  <Link
                    href="/areas-of-expertise/dissolution-partnership"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.dissolutionPartnership}
                  </Link>
                  <Link
                    href="/areas-of-expertise/neighbor-disputes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                  >
                    {currentContent.sublinks.neighborDisputes}
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-amber-600 font-medium">
              {currentContent.nav.about}
            </Link>
            <Link href="/" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              {currentContent.nav.main}
            </Link>
          </nav>

          {/* Right - Logo and Contact */}
          <div className="flex items-center gap-6">
            {/* ABS Signature Logo */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="text-right">
              <Image src="/images/abs-signature.png" alt="ABS - Adi Ben Harush Attorney" width={160} height={80} className="h-16 w-auto" />
            </motion.div>

            {/* Contact Button */}
            <Link href="/contact" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              {currentContent.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col gap-4">
              <Link href="/articles" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                {currentContent.nav.articles}
              </Link>
              <Link href="/enduring-power-attorney" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                {currentContent.nav.enduring}
              </Link>
              <Link href="/wills-inheritances" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                {currentContent.nav.wills}
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(false)} // Close menu on sublink click
                  className="text-gray-700 hover:text-amber-700 transition-colors font-medium flex items-center gap-1 w-full text-left"
                >
                  {currentContent.nav.land}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="mt-2 space-y-2">
                  <Link
                    href="/areas-of-expertise/condominium-registration"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.condominiumRegistration}
                  </Link>
                  <Link
                    href="/areas-of-expertise/real-estate-taxation"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.realEstateTaxation}
                  </Link>
                  <Link
                    href="/areas-of-expertise/purchasing-apartment-contractor"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.purchasingApartmentContractor}
                  </Link>
                  <Link
                    href="/areas-of-expertise/real-estate-sales-purchases"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.realEstateSalesPurchases}
                  </Link>
                  <Link
                    href="/areas-of-expertise/dissolution-partnership"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.dissolutionPartnership}
                  </Link>
                  <Link
                    href="/areas-of-expertise/neighbor-disputes"
                    className="block pl-4 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {currentContent.sublinks.neighborDisputes}
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-amber-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                {currentContent.nav.about}
              </Link>
              <Link href="/" className="text-gray-700 hover:text-amber-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {currentContent.nav.main}
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}