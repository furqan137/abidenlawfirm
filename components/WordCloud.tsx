"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface WordCloudProps {
  words: string[];
  isRTL?: boolean;
}

export default function WordCloud({ words, isRTL = false }: WordCloudProps) {
  const wordStyles = useMemo(
    () =>
      words.map(() => ({
        left: `${Math.random() * 75 + 12.5}%`,
        top: `${Math.random() * 75 + 12.5}%`,
        fontSize: `${Math.random() * 0.4 + 0.9}rem`,
        rotate: `${Math.random() * 15 - 7.5}deg`,
        highlight: Math.random() > 0.8,
      })),
    [words.length]
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px]">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className={`absolute text-gray-600 font-medium select-none ${
                wordStyles[index].highlight ? "text-amber-600 font-bold" : ""
              }`}
              style={{
                left: wordStyles[index].left,
                top: wordStyles[index].top,
                fontSize: wordStyles[index].fontSize,
                transform: `rotate(${wordStyles[index].rotate})`,
                direction: isRTL ? "rtl" : "ltr",
                textAlign: isRTL ? "right" : "left",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
