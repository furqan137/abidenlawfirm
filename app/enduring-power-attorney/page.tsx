"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Menu, X, Plus, Minus, Info, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import VideoBackground from "@/components/video-background"

export default function EnduringPowerAttorneyPage() {
  const [language, setLanguage] = useState<"he" | "en">("en") // Default to English
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0) // First FAQ expanded by default

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
        home: "בית",
        enduring: "ייפוי כוח מתמשך",
      },
      hero: {
        title: "ייפוי כוח מתמשך",
        subtitle: "תכנון לעתיד עם שקט נפשי - גם כשאנחנו לא יודעים מה קורה",
        description: "ייפוי כוח מתמשך עוזר לכם לשלוט, בדיוק כשזה הכי חשוב",
      },
      wordCloud: [
        "עצירה",
        "לא",
        "האנשים",
        "רוב",
        "אתם",
        "עצמכם",
        "שואלים",
        "זה",
        "השאלה",
        "ומצבים",
        "תאונות",
        "מחלות",
        "כל",
        "החיים",
        "של",
        "החלטות",
        "לקבל",
        "יכולת",
        "אתם",
        "מאבדים",
        "רגעים",
        "קריטיים",
        "הכי",
        "ברגעים",
        "שמאפשר",
        "היחידה",
        "הדרך",
        "זה",
        "מי",
        "יחליט",
        "ולוודא",
        "בעסקים",
        "שלכם",
        "גם",
        "שמור",
        "שהכל",
        "יהיה",
        "כשאתם",
        "גם",
        "מביע",
        "הוא",
        "אותם",
        "מסתמך",
        "שאתם",
        "האנשים",
        "עם",
        "זה",
        "על",
        "אפשרי",
        "מחייב",
        "משפטי",
        "מסמך",
        "זה",
        "כשהאדם",
        "רק",
        "גם",
        "לא",
        "חשוב",
        "לא",
        "במשרד",
        "שלנו",
        "האחרון",
        "הרגע",
        "עד",
        "אישי",
        "ליווי",
        "תקבלו",
        "אתם",
        "ומדויק",
        "רגיש",
        "כולל",
        "ולכן",
        "לרגע",
        "לא",
        "תחכו",
        "שאתם",
        "הרגע",
        "עד",
        "יותר",
        "לא",
        "תוכלו",
        "להחליט",
      ],
      cta: {
        title: "מי יחליט בשבילכם כשאתם כבר לא תוכלו יותר?",
        subtitle: "השאירו את הפרטים שלכם ונחזור אליכם לייעוץ ללא התחייבות",
        name: "שם*",
        phone: "טלפון*",
        email: "אימייל",
        send: "שליחה",
      },
      control: {
        title: "שלטו על הגורל שלכם - גם כשאתם מאבדים שליטה",
        description:
          "ייפוי כוח מתמשך מאפשר לכם לקבוע מראש מי יוכל לקבל החלטות בשבילכם. זה לא רק מסמך משפטי, זה הצהרת אמון, אחריות ובעיקר שקט נפשי.",
      },
      faq: {
        title: "מה חשוב לדעת על ייפוי כוח מתמשך",
        questions: [
          {
            question: "מה ההבדל בין ייפוי כוח מתמשך לאפוטרופסות?",
            answer:
              "ייפוי כוח מתמשך מאפשר לכם לקבוע מראש מי יטפל בעניינכם ומתי, ללא מעורבות בית המשפט. אפוטרופסות, לעומת זאת, נפסקת רק לאחר שאדם כבר איבד את כושרו - ואז בית המשפט ממנה אפוטרופוס לפעמים נגד רצון המשפחה.",
          },
          {
            question: "האם אפשר לבחור יותר מבן אדם אחד?",
            answer: "כן, ניתן לבחור מספר אנשים שיפעלו יחד או בנפרד.",
          },
          {
            question: "האם ייפוי הכוח נכנס לתוקף מיד לאחר החתימה?",
            answer: "לא, ייפוי כוח מתמשך נכנס לתוקף רק כאשר האדם כבר לא יכול לקבל החלטות בעצמו.",
          },
          {
            question: "מה קורה אם אדם לא הספיק לעשות ייפוי כוח מתמשך?",
            answer: "אם אדם לא הספיק לעשות ייפוי כוח מתמשך, בית המשפט יצטרך למנות אפוטרופוס.",
          },
          {
            question: "האם אפשר לשנות או לבטל את ייפוי הכוח?",
            answer: "כן, ניתן לשנות או לבטל את ייפוי הכוח בכל עת כל עוד האדם כשיר.",
          },
          {
            question: "כמה זמן לוקח התהליך?",
            answer: "התהליך יכול לקחת מספר שבועות, תלוי במורכבות המקרה.",
          },
          {
            question: "האם המסמך תקף לכל החיים?",
            answer: "כן, המסמך תקף לכל החיים אלא אם כן בוטל במפורש.",
          },
        ],
      },
      support: {
        title: "אתם זוכים לליווי צמוד, מקצועי ואישי",
        subtitle: "בעסקה הכי יקרה וחשובה בחיים, אני אהיה שם בשבילכם",
        description: "משלב המשא ומתן ועד למסירת המפתח או קבלת הקבלה, הרישום בטאבו ועוד הרבה",
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
        enduring: "Enduring Power of Attorney",
      },
      hero: {
        title: "Enduring Power of Attorney",
        subtitle: "Plan for the future with peace of mind - even when we don't know",
        description: "what's coming",
        subtitle2: "A durable power of attorney keeps you in control, just when it",
        description2: "matters most",
      },
      wordCloud: [
        "Stopping",
        "not",
        "The people",
        "majority",
        "you",
        "themselves",
        "you ask",
        "This one",
        "The question",
        "and situations",
        "Accidents",
        "Diseases",
        "every",
        "Life",
        "of",
        "Decisions",
        "get",
        "Ability",
        "you",
        "From us",
        "moments",
        "Critical",
        "most",
        "In moments",
        "which allows",
        "he",
        "continual",
        "power",
        "Beautification",
        "The unit",
        "Legal",
        "The way",
        "who",
        "decide",
        "in advance",
        "plan",
        "to you",
        "and make sure",
        "in your business",
        "Will treat",
        "also",
        "Saved",
        "your",
        "That the will",
        "When you",
        "him",
        "express",
        "able",
        "not",
        "The trial",
        "house",
        "my hands",
        "in a guardian",
        "The people",
        "with",
        "your",
        "in words",
        "this is",
        "On them",
        "reliant",
        "that you",
        "possible",
        "Binding",
        "legal",
        "document",
        "fit",
        "When the person",
        "only",
        "add",
        "wait",
        "not",
        "Important",
        "Therefore",
        "in our office",
        "The last one",
        "for a moment",
        "personal",
        "Escort",
        "get",
        "You will be able to",
        "And accurate",
        "sensitive",
        "Including",
        "And therefore",
        "for a moment",
        "not",
        "wait",
        "that you",
        "The moment",
        "when you can no longer decide",
      ],
      cta: {
        title: "Who will decide for you when you can no longer?",
        subtitle: "Leave your details and we will get back to you for a no-obligation consultation",
        name: "name*",
        phone: "phone*",
        email: "Email",
        send: "sending",
      },
      control: {
        title: "Control your own destiny - even when you lose control",
        description:
          "A durable power of attorney is designed to ensure that in times when you are unable to make decisions for yourself, someone you trust will make them for you. It is not just a legal document, it is a statement of confidence, responsibility, and choice",
      },
      faq: {
        title: "What is important to know about a durable power of attorney",
        questions: [
          {
            question: "What is the difference between a durable power of attorney and guardianship?",
            answer:
              "A durable power of attorney allows you to decide in advance who will handle your affairs and when, without involving the court. Guardianship, on the other hand, is only carried out after a person has already lost their capacity - and then the court appoints a guardian sometimes against the family's wishes.",
          },
          {
            question: "Is it possible to choose more than one proxy?",
            answer: "Yes, it is possible to choose several people who will act together or separately.",
          },
          {
            question: "Does the power of attorney take effect immediately after signing?",
            answer: "No, a durable power of attorney only takes effect when the person can no longer make decisions for themselves.",
          },
          {
            question: "What happens if a person did not have time to make a durable power of attorney?",
            answer: "If a person did not have time to make a durable power of attorney, the court will have to appoint a guardian.",
          },
          {
            question: "Is it possible to change or cancel the power of attorney?",
            answer: "Yes, you can change or cancel the power of attorney at any time as long as the person is competent.",
          },
          {
            question: "How long does the process take?",
            answer: "The process can take several weeks, depending on the complexity of the case.",
          },
          {
            question: "Is the document valid for life?",
            answer: "Yes, the document is valid for life unless explicitly canceled.",
          },
        ],
      },
      support: {
        title: "You deserve close, professional and personal support",
        subtitle: "In the most expensive and important transaction in life, I will be there for you",
        description: "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Video */}
        <VideoBackground
          videoSrc="/videos/bg-video6.mp4"
          fallbackImage="/images/enduring-hero-bg.png"
          alt="Enduring Power of Attorney Background"
          className="object-cover object-center"
        />

        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm text-amber-200 mb-8"
          >
            <Link href="/" className="hover:text-amber-100">
              {currentContent.breadcrumb.home}
            </Link>
            <span>›</span>
            <span className="text-amber-100">{currentContent.breadcrumb.enduring}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            {currentContent.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-4"
          >
            {currentContent.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-4"
          >
            {currentContent.hero.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            {currentContent.hero.subtitle2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            {currentContent.hero.description2}
          </motion.p>
        </div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-8 z-30"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Info className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-8 z-30"
        >
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Word Cloud Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Scattered Words */}
            <div className="relative min-h-[600px]">
              {currentContent.wordCloud.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`absolute text-gray-600 font-medium select-none ${
                    Math.random() > 0.8 ? "text-amber-600 font-bold" : ""
                  }`}
                  style={{
                    left: `${Math.random() * 60 + 10}%`,
                    top: `${Math.random() * 60 + 10}%`,
                    fontSize: `${Math.random() * 0.4 + 0.9}rem`,
                    transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  {currentContent.cta.title}
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96">
                <Image
                  src="/images/grandfather-holding-head-blood-pressure-headache.jpg"
                  alt="Elderly man holding head"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{currentContent.control.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{currentContent.control.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Question Mark Icon */}
              <div className="relative w-full h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                <div className="text-9xl font-bold text-amber-600 opacity-20">?</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-amber-700">?</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{currentContent.faq.title}</h2>

              <div className="space-y-4">
                {currentContent.faq.questions.map((faq, index) => (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {expandedFaq === index ? (
                          <Minus className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
                        ) : (
                          <Plus className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
                        )}
                      </button>

                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Ask Question Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 py-3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Want to ask a question? Click here
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-4"
          >
            {currentContent.support.title}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            {currentContent.support.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-8"
          >
            {currentContent.support.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder={currentContent.cta.name} className="text-right rounded-full" />
                  <Input placeholder={currentContent.cta.phone} className="text-right rounded-full" />
                  <Input placeholder={currentContent.cta.email} className="text-right rounded-full" />
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                    {currentContent.cta.send}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
