"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Info, Phone, Plus, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQManager from "@/components/faq-manager";
import ContactSection from "@/components/contact-section";

export default function Page() {
  const [language, setLanguage] = useState<"he" | "en">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const isRTL = language === "he";

  const content = {
    he: {
      nav: {
        home: "בית",
        about: "אודות",
        services: "שירותים",
        articles: "מאמרים",
        contact: "צור קשר",
      },
      hero: {
        title: "ליווי משפטי צמוד, מקצועי ואישי",
        titleHighlight: "בכל תחומי המקרקעין",
        subtitle:
          'משרד הבוטיק של עדי בן הרוש מתמחה בנדל"ן, עם מומחיות במכירה ורכישת נכסים, מיסוי מקרקעין, צוואות, ירושות וייפוי כוח מתמשך.',
        cta1: "למידע נוסף",
        cta2: "לייעוץ ללא התחייבות",
      },
      expertise: {
        title: "תחומי התמחות",
        subtitle: "שירותי המשרד",
        viewAll: "לכל שירותי המשרד",
        areas: [
          {
            title: "רישום דירות",
            subtitle: "במקרקעין",
            image: "/images/condo.jpg",
            link: "/services/condominium-registration",
          },
          {
            title: "מיסוי נדל״ן",
            subtitle: "והפרשי הון",
            image: "/images/tax.jpg",
            link: "/services/real-estate-taxation",
          },
          {
            title: "רכישת דירה",
            subtitle: "מקבלן",
            image: "/images/purchase.jpg",
            link: "/services/purchasing-apartment-contractor",
          },
          {
            title: "מכירות ורכישות",
            subtitle: "נדל״ן",
            image: "/images/real-estate-sales.jpg",
            link: "/services/real-estate-sales-purchases",
          },
          {
            title: "ייפוי כוח",
            subtitle: "מתמשך",
            image: "/images/neighbors.jpg",
            link: "/enduring-power-attorney",
          },
          {
            title: "צוואות",
            subtitle: "וירושות",
            image: "/images/dissolution.jpg",
            link: "/wills-inheritances",
          },
          {
            title: "פירוק שותפות",
            subtitle: "נדל״ן",
            image: "/images/dissolution.jpg",
            link: "/services/dissolution-partnership",
          },
          {
            title: "סכסוכי שכנים",
            subtitle: "ודיירים",
            image: "/images/neighbors.jpg",
            link: "/services/neighbor-disputes",
          },
        ],
      },
      about: {
        subtitle: "ניסיון ושירות ללא פשרות המובילים לתוצאות",
        title: "אודות המשרד",
        description: 'משרד בוטיק עם מומחיות ושנות ניסיון בכל תחומי הנדל"ן',
        paragraph1: "בכל עסקה, בכל שלב, צמוד, יסודי, מקצועי ולא פחות חשוב, קשוב ותשומת לב אישית מוענקת",
        paragraph2: "בנוסף, המשרד מעניק שירותים נלווים כגון ניסוח צוואות, ירושות וייפוי כוח מתמשך",
        paragraph3: "החזון הוא לאפשר ללקוחות למקסם את זכויותיהם ואפשרויותיהם בכל הסכם, פעולה או עסקה",
        paragraph4: "המשרד מעניק פתרונות לכל סוגי העסקאות, מכירות, רכישות, רכישות מקבלנים, רכישות מסוכנויות נדל״ן, חברות משכנתא, עסקאות מתנה, מגרשים, חנויות, הסכמי חלוקת עיזבון, הסכמים בין יורשים, הסכמי שותפות, פירוק שותפות, העברות במקרה של גירושין, הסכמי הלוואה, הסכמי קבלנות והסכמי שכירות",
        stats: {
          properties: "257+",
          propertiesLabel: "נכסים ועסקאות שטיפלתי",
          clients: "350+",
          clientsLabel: "לקוחות מרוצים",
        },
        cta: "למידע נוסף",
      },

      support: {
        header: "אתם זכאים לליווי צמוד, מקצועי ואישי",
        title: "בעסקה הכי יקרה וחשובה בחיים, אני אהיה שם בשבילכם",
        subtitle: "משלב המשא ומתן ועד למסירה או קבלת המפתח, הרישום בטאבו ועוד הרבה",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        articles: "Articles",
        contact: "Contact",
      },
      hero: {
        title: "Close, professional and personal",
        titleHighlight: "legal support in all areas of real estate",
        subtitle:
          "Adi Ben Harush's boutique office specializes in real estate, with expertise in the sale and purchase of properties, real estate taxation, wills, inheritances and durable power of attorney.",
        cta1: "For more information",
        cta2: "For a free consultation",
      },
      expertise: {
        title: "Areas of expertise",
        subtitle: "Office services",
        viewAll: "For all office services",
        areas: [
          {
            title: "Condominium",
            subtitle: "registration",
            image: "/images/condo.jpg",
            link: "/services/condominium-registration",
          },
          {
            title: "Real estate taxation",
            subtitle: "and capital gains tax distribution",
            image: "/images/tax.jpg",
            link: "/services/real-estate-taxation",
          },
          {
            title: "Purchasing an apartment",
            subtitle: "from a contractor",
            image: "/images/purchase.jpg",
            link: "/services/purchasing-apartment-contractor",
          },
          {
            title: "Real estate sales",
            subtitle: "and purchases",
            image: "/images/real-estate-sales.jpg",
            link: "/services/real-estate-sales-purchases",
          },
          {
            title: "Enduring Power of",
            subtitle: "Attorney",
            image: "/images/neighbors.jpg",
            link: "/enduring-power-attorney",
          },
          {
            title: "Wills",
            subtitle: "and inheritances",
            image: "/images/dissolution.jpg",
            link: "/wills-inheritances",
          },
          {
            title: "Dissolution of a",
            subtitle: "real estate partnership",
            image: "/images/dissolution.jpg",
            link: "/services/dissolution-partnership",
          },
          {
            title: "Neighbor disputes",
            subtitle: "and tenants refusing to pay",
            image: "/images/neighbors.jpg",
            link: "/services/neighbor-disputes",
          },
        ],
      },
      about: {
        subtitle: "Experience and uncompromising service that leads to results",
        title: "About the firm",
        description: "A boutique office with expertise and years of experience in all areas of real estate",
        paragraph1:
          "In every transaction, at every scale, close, thorough, professional and, no less importantly, attentive and personal legal support is provided",
        paragraph2:
          "In addition, the firm provides ancillary services such as drafting wills, inheritances and enduring powers of attorney",
        paragraph3:
          "The vision is to enable customers to maximize their rights and options in every agreement, action or transaction",
        paragraph4:
          "The firm provides solutions for all types of transactions, sales, purchases, purchases from contractors, purchases from real estate agencies, mortgage companies, gift transactions, plots of land, stores, estate distribution agreements, agreements between heirs, partnership agreements, dissolution of partnership, transfers in the event of divorce, loan agreements, receivership and rental agreements",
        stats: {
          properties: "257+",
          propertiesLabel: "Properties and transactions I handled",
          clients: "350+",
          clientsLabel: "Satisfied customers",
        },
        cta: "More information",
      },

      support: {
        header: "You deserve close, professional and personal support",
        title: "In the most expensive and important transaction in life, I will be there for you",
        subtitle: "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Phone Number Button - Top Left */}
                <div className="absolute -top-4 -left-4 z-20">
                  <div className="bg-amber-50 border border-amber-200 rounded-full px-6 py-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-700" />
                    <span className="text-gray-800 font-medium">052-709-2731</span>
                  </div>
                </div>
                
                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/hero-lawyer.jpg"
                    alt="Adi Ben Harush - Attorney at Law"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                  
                  {/* Curved Golden Decorative Line */}
                  <div className="absolute top-0 right-0 w-2 h-full bg-amber-600 rounded-full transform translate-x-1/2"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right order-1 lg:order-2"
            >
              {/* Top Right Branding */}
              <div className="flex items-center justify-end gap-2 mb-8">
                <div className="text-2xl font-light text-gray-900">AB</div>
                <div className="text-sm text-gray-700">עדי בן הרוש עורכת דין</div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Close, professional and personal{" "}
                <span className="text-amber-600">legal support</span>
              </h1>
              
              {/* Sub-heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                in all{" "}
                <span className="text-amber-600">areas of real estate</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl ml-auto">
                Adi Ben Harush's boutique office specializes in real estate, with expertise in the sale and purchase of properties, real estate taxation, wills, inheritances and durable power of attorney.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  size="lg"
                  className="bg-amber-100 hover:bg-amber-200 text-gray-800 px-8 py-3 rounded-full border border-amber-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {currentContent.hero.cta1}
                </Button>
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  {currentContent.hero.cta2}
                </Button>
              </div>
              
              {/* Bottom Right Decorative Element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-amber-600 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Header with Button and Title */}
          <div className="flex items-center justify-between mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <Link href="/areas-of-expertise">
                <Button 
                  variant="outline" 
                  className="border-amber-200 text-gray-800 hover:bg-amber-50 px-6 py-3 rounded-full bg-white flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-amber-600 rotate-180" />
                  For all office services
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Areas of expertise</h2>
            </motion.div>
            
            <div className="w-48"></div> {/* Spacer for balance */}
          </div>
          
          {/* Service Cards Grid - 3x3 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Card 1: Real estate taxation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/real-estate-taxation">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/tax.jpg" 
                      alt="Real estate taxation" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                        <Info className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Real estate taxation and capital gains tax distribution
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 2: Purchasing apartment from contractor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/purchasing-apartment-contractor">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/purchase.jpg" 
                      alt="Purchasing apartment from contractor" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Purchasing an apartment from a contractor
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 3: Real estate sales and purchases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/real-estate-sales-purchases">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/real-estate-sales.jpg" 
                      alt="Real estate sales and purchases" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Real estate sales and purchases
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 4: Dissolution of a real estate partnership */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/dissolution-partnership">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/dissolution.jpg" 
                      alt="Dissolution of a real estate partnership" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Dissolution of a real estate partnership
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 5: Neighbor disputes and tenants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/neighbor-disputes">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/neighbors.jpg" 
                      alt="Neighbor disputes and tenants refusing to pay" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Neighbor disputes and tenants refusing to pay
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 6: Condominium registration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/areas-of-expertise/condominium-registration">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/condo.jpg" 
                      alt="Condominium registration" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Condominium registration
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 7: Enduring Power of Attorney */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/enduring-power-attorney">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/man-dealing-documents.png" 
                      alt="Enduring Power of Attorney" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Enduring Power of Attorney
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 8: Wills and inheritances */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href="/wills-inheritances">
                <Card className="h-80 relative overflow-hidden cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/man-working-documents.png" 
                      alt="Wills and inheritances" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                  <CardContent className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div></div>
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                          Wills and inheritances
                        </h3>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-amber-600 hover:bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 ml-4"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Card 9: Empty space for visual balance */}
            <div className="h-80"></div>
          </div>
          
          {/* Floating Call-to-Action Buttons */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-6 h-6 text-white rotate-45" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 border-4 border-amber-300 rounded-3xl opacity-30"></div>
                <div className="absolute -top-8 -right-8 w-20 h-20">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-amber-400 rounded-full opacity-40"></div>
                    ))}
                  </div>
                </div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/images/office-sign.jpg"
                    alt="Adi Ben Harush Law Office"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {currentContent.about.stats.properties}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {currentContent.about.stats.propertiesLabel}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {currentContent.about.stats.clients}
                    </div>
                    <div className="text-sm text-gray-600 leading-tight">
                      {currentContent.about.stats.clientsLabel}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-amber-600 text-sm font-medium mb-4"
              >
                {currentContent.about.subtitle}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {currentContent.about.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 font-medium mb-6"
              >
                {currentContent.about.description}
              </motion.p>
              <div className="space-y-4 mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {currentContent.about.paragraph1}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {currentContent.about.paragraph2}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {currentContent.about.paragraph3}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="text-gray-700 leading-relaxed text-sm"
                >
                  {currentContent.about.paragraph4}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              >
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-700 hover:bg-amber-50 px-6 py-2 rounded-full flex items-center gap-2 bg-transparent"
                  >
                    <Info className="w-4 h-4" />
                    {currentContent.about.cta}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQManager language={language} />

      {/* Support & Contact Section */}
      <ContactSection language={language} />

       {/* Footer */}
            <Footer />
    </div>
  );
}
