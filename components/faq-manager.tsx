"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQManagerProps {
  language: "he" | "en";
}

export default function FAQManager({ language }: FAQManagerProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const content = {
    he: {
      mainTitle: "שאלות ותשובות",
      sectionTitle: 'מה חשוב לדעת לפני ביצוע עסקת נדל"ן?',
      questionButton: "רוצים לשאול שאלה? לחצו כאן",
      faqs: [
        {
          question: "מה ניתן ללמוד מניסוח טאבו וחישוב מס רכוש?",
          answer: "מניסוח הטאבו ניתן ללמוד על מעמד הזכויות לדירה, גודלה ומה הצמדות יש לה, כגון חניה, מחסן, חצר, גג וכו'. בנוסף, כדאי לבקש חשבון מס רכוש, כדי ללמוד מה שטח הדירה ומה מחיר מס הרכוש שתצטרך לשלם."
        },
        {
          question: "מה תפקידו של עורך דין בעסקת מכירה?",
          answer: "עורך הדין מלווה את כל תהליך המכירה, בודק את המסמכים, מכין את החוזה ודואג להעברת הבעלות בטוחה."
        },
        {
          question: "למה לשכור עורך דין נפרד לכל צד ולא עורך דין אחד שייצג?",
          answer: "ייצוג נפרד מבטיח אינטרסים מנוגדים ומונע ניגוד עניינים שעלול לפגוע באחד הצדדים."
        },
        {
          question: 'למה חשוב לשכור עורך דין המתמחה במיסוי נדל"ן?',
          answer: 'התמחות במיסוי נדל"ן מבטיחה ידע מעמיק בחוקי המס הרלוונטיים וחיסכון משמעותי במסים.'
        },
        {
          question: "מהו חלוקת מס?",
          answer: "חלוקת מס היא הליך חוקי לחלוקת נטל המס בין הצדדים לעסקה בהתאם לחוק."
        },
        {
          question: "האם כדאי לחתום על מזכר הבנות?",
          answer: "מזכר הבנות חשוב להגנה על הצדדים אך יש לחתום עליו רק לאחר ייעוץ משפטי מקצועי."
        },
        {
          question: "מתי לבקש אישור עקרוני למשכנתא?",
          answer: "יש לבקש אישור עקרוני לפני חתימה על הסכם המכירה כדי לוודא יכולת מימון."
        },
        {
          question: "מומלץ לקבל הערכת שווי מוקדמת",
          answer: "הערכת שווי מוקדמת חשובה לקביעת מחיר הוגן ולמניעת מחלוקות עתידיות."
        }
      ]
    },
    en: {
      mainTitle: "Questions and Answers",
      sectionTitle: "What is important to know before making a real estate transaction?",
      questionButton: "Want to ask a question? Click here",
      faqs: [
        {
          question: "What can be learned from drafting taboos and calculating property taxes?",
          answer: "From the drafter of the taboo, you can learn about the status of the rights to the apartment, its size, and what attachments it has, such as parking, storage, yard, roof, etc. In addition, it is worth requesting a property tax bill, in order to learn what the area of the apartment is and what the property tax price you will have to pay."
        },
        {
          question: "What is the role of a lawyer in a sales transaction?",
          answer: "The lawyer accompanies the entire sales process, checks the documents, prepares the contract and ensures safe transfer of ownership."
        },
        {
          question: "Why hire a separate lawyer for each side and not one lawyer to represent?",
          answer: "Separate representation ensures conflicting interests and prevents conflicts of interest that could harm one party."
        },
        {
          question: "Why is it important to hire a lawyer who specializes in real estate taxation?",
          answer: "Specialization in real estate taxation ensures deep knowledge of relevant tax laws and significant tax savings."
        },
        {
          question: "What is a tax distribution?",
          answer: "Tax distribution is a legal process for dividing tax burden between transaction parties according to law."
        },
        {
          question: "Is it worth signing a memorandum of understanding?",
          answer: "A memorandum of understanding is important for protecting parties but should only be signed after professional legal consultation."
        },
        {
          question: "When should you request in-principle approval for a mortgage?",
          answer: "In-principle approval should be requested before signing the sales agreement to ensure financing capability."
        },
        {
          question: "It's recommended to get an early appraisal",
          answer: "Early appraisal is important for determining fair price and preventing future disputes."
        }
      ]
    }
  };

  const currentContent = content[language];
  const isRTL = language === "he";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Decorative Question Mark */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Question Mark */}
              <div className="w-64 h-64 border-8 border-amber-600 rounded-full flex items-center justify-center relative">
                <div className="text-9xl font-bold text-amber-600">?</div>
              </div>
              
              {/* Decorative Curved Lines */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-600 rounded-tl-full opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-600 rounded-br-full opacity-60"></div>
              
              {/* Decorative Dots */}
              <div className="absolute -top-8 -left-8">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-amber-600 rounded-full opacity-40"></div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-amber-600 rounded-full opacity-40"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-${isRTL ? 'right' : 'left'}`}
          >
            {/* Main Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-sm font-medium mb-2"
            >
              {currentContent.mainTitle}
            </motion.p>

            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
            >
              {currentContent.sectionTitle}
            </motion.h2>

            {/* FAQ Accordion */}
            <div className="space-y-4 mb-8">
              {currentContent.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border border-amber-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 text-right flex items-center justify-between hover:bg-amber-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 flex-1 mr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-amber-600 text-xl font-bold"
                    >
                      {expandedFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.div>
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-amber-50 border-t border-amber-200"
                    >
                      <div className="p-4 text-right">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex justify-end"
            >
              <Button className="bg-amber-100 hover:bg-amber-200 text-gray-800 px-6 py-3 rounded-full border border-amber-300 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {currentContent.questionButton}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
