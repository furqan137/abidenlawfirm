"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  language: "he" | "en";
}

export default function ContactSection({ language }: ContactSectionProps) {
  const content = {
    he: {
      slogan: "אתם זכאים לליווי צמוד, מקצועי ואישי",
      title: "בעסקה הכי יקרה וחשובה בחיים, אני אהיה שם בשבילכם",
      subtitle: "משלב המשא ומתן ועד למסירה או קבלת המפתח, הרישום בטאבו ועוד הרבה",
      form: {
        email: "אימייל",
        phone: "טלפון*",
        name: "שם*",
        send: "שליחה",
      }
    },
    en: {
      slogan: "You deserve close, professional and personal support",
      title: "In the most expensive and important transaction in life, I will be there for",
      subtitle: "From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more",
      form: {
        email: "Email",
        phone: "Phone*",
        name: "Name*",
        send: "Send",
      }
    }
  };

  const currentContent = content[language];
  const isRTL = language === "he";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-6"
          >
            {currentContent.slogan}
          </motion.p>

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.title.split("you").map((part, index) => 
                index === 0 ? part : <span key={index} className="text-amber-600">you</span>
              )}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {currentContent.subtitle}
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex-1 max-w-xs">
                <Input
                  type="email"
                  placeholder={currentContent.form.email}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex-1 max-w-xs">
                <Input
                  type="tel"
                  placeholder={currentContent.form.phone}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="flex-1 max-w-xs">
                <Input
                  type="text"
                  placeholder={currentContent.form.name}
                  className="w-full px-6 py-4 text-right border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-100 hover:bg-amber-200 text-gray-800 px-8 py-4 rounded-full flex items-center gap-3 font-medium transition-all duration-300 border border-amber-300"
              >
                <ArrowRight className="w-5 h-5" />
                {currentContent.form.send}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 