"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NeighborDisputesFAQProps {
  language: "he" | "en";
}

export default function NeighborDisputesFAQ({ language }: NeighborDisputesFAQProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const content = {
    he: {
      mainTitle: "שאלות ותשובות",
      sectionTitle: "מה עושים במקרים של סכסוכי שכנים וסירובי תשלום?",
      questionButton: "רוצים לשאול שאלה? לחצו כאן",
      faqs: [
        {
          question: "האם אפשר לחייב שכן להפסיק ליצור רעש?",
          answer: "כן, בהתאם לנסיבות. ניתן לנקוט פעולה עם הרשות המקומית, לשלוח מכתב אזהרה, או להגיש תביעה בגין מטרד."
        },
        {
          question: "מה אפשר לעשות אם דייר לא משלם שכירות?",
          answer: "ניתן לשלוח התראה, להגיש תביעה לבית המשפט, או לנקוט בהליכי פינוי בהתאם לחוק."
        },
        {
          question: "האם לוועד הבית יש סמכות לנקוט פעולה משפטית?",
          answer: "כן, לוועד הבית יש סמכויות מסוימות, אך יש להתייעץ עם עורך דין לגבי הפעולות המותרות."
        },
        {
          question: "האם אפשר למנוע משכן לבצע שינויים בנכס?",
          answer: "זה תלוי בסוג השינויים ובתקנון הבית המשותף. יש לבחון כל מקרה לגופו."
        },
        {
          question: "מה עדיף - לתבוע או לנסות לגשר?",
          answer: "בדרך כלל עדיף לנסות גישור תחילה, אך במקרים מסוימים תביעה היא הדרך היעילה ביותר."
        }
      ]
    },
    en: {
      mainTitle: "Questions and Answers",
      sectionTitle: "What do you do in cases of neighbor disputes and refusals to pay?",
      questionButton: "Want to ask a question? Click here",
      faqs: [
        {
          question: "Can a neighbor be forced to stop making noise?",
          answer: "Yes, depending on the circumstances. It is possible to take action with the local authority, send a warning letter, or file a lawsuit for nuisance."
        },
        {
          question: "What can be done if a tenant does not pay the rent?",
          answer: "You can send a warning, file a lawsuit in court, or take eviction proceedings according to the law."
        },
        {
          question: "Does the House Committee have the authority to take legal action?",
          answer: "Yes, the House Committee has certain powers, but you should consult with a lawyer about the permitted actions."
        },
        {
          question: "Can a neighbor be stopped from making changes to the property?",
          answer: "This depends on the type of changes and the building's bylaws. Each case must be examined individually."
        },
        {
          question: "What is better - to sue or to try to mediate?",
          answer: "Usually it's better to try mediation first, but in certain cases, a lawsuit is the most effective way."
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
                    className={`w-full p-4 text-right flex items-center justify-between transition-colors ${
                      expandedFaq === index 
                        ? 'bg-amber-600 text-white' 
                        : 'hover:bg-amber-50 text-gray-900'
                    }`}
                  >
                    <span className="font-semibold flex-1 mr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-xl font-bold ${
                        expandedFaq === index ? 'text-white' : 'text-amber-600'
                      }`}
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
                      className="bg-white border-t border-amber-200"
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