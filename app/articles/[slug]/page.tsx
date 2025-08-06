"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Calendar, Eye, Plus, Minus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [language, setLanguage] = useState<"he" | "en">("en") // Default to English
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const isRTL = language === "he"

  const articles = {
    "enduring-power-attorney": {
      he: {
        title: "ייפוי כוח מתמשך – מה זה ולמי זה חשוב",
        date: "08/08/2024",
        views: 1,
        content: {
          intro:
            "ייפוי כוח מתמשך הוא מסמך משפטי המעניק לאדם את היכולת לשלוט בעתידו – גם אם יום אחד יאבד את כושר השיפוט שלו. בניגוד לאפוטרופוס שממונה על ידי בית המשפט, ייפוי כוח מתמשך מוכן מראש ביוזמת האדם עצמו, בזמן שהוא עדיין בהכרה מלאה ושפוי.",
          sections: [
            {
              title: "למה בכלל לעשות ייפוי כוח מתמשך?",
              content:
                "אובדן כושר קבלת החלטות יכול להתרחש עקב מחלה, תאונה או ירידה קוגניטיבית. ללא ייפוי כוח, המשפחה נאלצת למנות אפוטרופוס, תהליך מסורבל ולעיתים רגיש משפחתית. ייפוי כוח מתמשך מאפשר לכם להחליט מי יטפל בענייניכם, באילו תנאים ובאיזה אופן בדיוק – מראש, בזמן שאתם עדיין בשליטה.",
            },
            {
              title: "אילו תחומים ניתן לווסת בייפוי כוח מתמשך?",
              content:
                "עניינים רכושיים – ניהול חשבונות בנק, נכסים, השקעות, תשלומים וחובות. ייפוי הכוח יכול להיות מורשה לבצע פעולות כמו מכירת נכס, טיפול בשכירות או טיפול בהליכי רישום דירות בטאבו. עניינים אישיים – רווחה, דיור, תעסוקה, פנאי ואיכות חיים. עניינים רפואיים – החלטות על טיפולים, בדיקות, אשפוז והנחיות מקדימות להצלת חיים.",
              bulletPoints: ["Property matters", "Personal matters", "Medical matters"],
            },
            {
              title: "מי יכול לעשות ייפוי כוח מתמשך?",
              content:
                "כל אדם מעל גיל 18, שהוא כשיר משפטית ומבין את משמעות המסמך. המסמך הוכן באופן בלעדי בנוכחות עורך דין שעבר הסמכה מיוחדת מטעם האפוטרופוס הכללי.",
            },
            {
              title: "איך התהליך בפועל מתבצע?",
              content:
                "התהליך כולל מספר שלבים: 1. פגישה עם עורך דין מוסמך, 2. הגדרת הצרכים והרצונות, 3. הכנת המסמך, 4. חתימה בנוכחות עורך דין, 5. הפקדה אצל האפוטרופוס הכללי.",
              numberedSteps: true,
            },
            {
              title: "מתי ייפוי הכוח נכנס לתוקף?",
              content:
                "ייפוי כוח מתמשך נכנס לתוקף רק כאשר האדם כבר לא יכול לקבל החלטות בעצמו. עד אז, האדם שומר על השליטה המלאה בענייניו.",
            },
            {
              title: "האם ניתן לשנות או לבטל ייפוי כוח מתמשך?",
              content:
                "כן, ניתן לשנות או לבטל ייפוי כוח מתמשך בכל עת כל עוד האדם כשיר. השינוי או הביטול חייבים להיעשות בכתב ובנוכחות עורך דין.",
            },
            {
              title: "מה ההבדל בין אפוטרופסות לייפוי כוח מתמשך?",
              content:
                "ייפוי כוח מתמשך נקבע מראש על ידי האדם עצמו, בעוד שאפוטרופסות נקבעת על ידי בית המשפט לאחר אובדן כושר. ייפוי כוח מתמשך מאפשר שליטה רבה יותר ומניעת הליכים משפטיים מיותרים.",
            },
            {
              title: "למי זה חשוב במיוחד?",
              content:
                "ייפוי כוח מתמשך חשוב במיוחד למספר קבוצות:",
              bulletPoints: [
                "Adults over 60 years old",
                "People with chronic illnesses or genetic predisposition", 
                "Parents of children with special needs",
                "Anyone who wants to maintain their independence and prevent future family struggles"
              ],
            },
            {
              title: "מה חשוב לדעת לפני החתימה?",
              content:
                "לפני החתימה על ייפוי כוח מתמשך חשוב לדעת:",
              bulletPoints: [
                "Choose a trusted person as your proxy",
                "Clearly define the scope of authority",
                "Consider appointing a backup proxy",
                "Review and update the document regularly"
              ],
            },
          ],
          faq: [
            {
              question: "Is it possible to appoint more than one proxy?",
              answer: "Yes, you can appoint multiple proxies who can act together or separately, depending on your preferences."
            },
            {
              question: "Is a durable power of attorney also valid for carrying out real estate transactions?",
              answer: "Yes, if specifically authorized in the document, the proxy can handle real estate transactions."
            },
            {
              question: "Can the powers of the proxy be limited?",
              answer: "Yes, you can limit the proxy's powers to specific areas or actions as you see fit."
            },
            {
              question: "What happens if the proxy is unable to act?",
              answer: "You can appoint a backup proxy who will take over if the primary proxy is unable to act."
            },
            {
              question: "Is the document valid abroad?",
              answer: "The validity abroad depends on the laws of the specific country and may require additional procedures."
            }
          ],
          tableOfContents: [
            "ייפוי כוח מתמשך – מה זה ולמי זה חשוב",
            "למה בכלל לעשות ייפוי כוח מתמשך?",
            "אילו תחומים ניתן לווסת בייפוי כוח מתמשך?",
            "מי יכול לעשות ייפוי כוח מתמשך?",
            "איך התהליך בפועל מתבצע?",
            "מתי ייפוי הכוח נכנס לתוקף?",
            "האם ניתן לשנות או לבטל ייפוי כוח מתמשך?",
            "מה ההבדל בין אפוטרופסות לייפוי כוח מתמשך?",
            "למי זה חשוב במיוחד?",
            "מה חשוב לדעת לפני החתימה?",
            "מה חשוב לדעת על ייפוי כוח מתמשך?",
          ],
        },
      },
      en: {
        title: "Enduring Power of Attorney: Everything You Need to Know",
        date: "08/08/2024",
        views: 1,
        content: {
          intro:
            "A durable power of attorney is a legal document that gives a person the ability to control their future - even if they one day lose their capacity to make decisions. Unlike a court-appointed guardian, a durable power of attorney is prepared in advance on the person's own initiative, while they are still competent and sane.",
          sections: [
            {
              title: "Why even make a durable power of attorney?",
              content:
                "Loss of decision-making capacity can occur due to illness, accident, or cognitive decline. Without a power of attorney, the family is forced to appoint a guardian, a cumbersome and sometimes family-sensitive process. A durable power of attorney allows you to decide who will handle your affairs, under what conditions, and exactly how – in advance, while you are still in control.",
            },
            {
              title: "What areas can be regulated by a durable power of attorney?",
              content:
                "Property matters – management of bank accounts, assets, investments, payments and debts. The power of attorney can be authorized to perform actions such as selling a property, handling rentals, or handling condominium registration procedures in the Land Registry. Personal matters – welfare, housing, employment, leisure and quality of life. Medical matters – decisions about treatments, tests, hospitalization, and life-saving advance directives.",
              bulletPoints: ["Property matters", "Personal matters", "Medical matters"],
            },
            {
              title: "Who can make a durable power of attorney?",
              content:
                "Any person over the age of 18, who is legally competent and understands the meaning of the document. The document was prepared exclusively in the presence of a lawyer who has undergone special certification on behalf of the General Guardian.",
            },
            {
              title: "How is the process actually carried out?",
              content:
                "The process includes several steps: 1. Meeting with a certified lawyer, 2. Defining needs and wishes, 3. Preparing the document, 4. Signing in the presence of a lawyer, 5. Depositing with the General Guardian.",
              numberedSteps: true,
            },
            {
              title: "When does the power of attorney take effect?",
              content:
                "A durable power of attorney takes effect only when the person can no longer make decisions for themselves. Until then, the person maintains full control over their affairs.",
            },
            {
              title: "Is it possible to change or cancel a lasting power of attorney?",
              content:
                "Yes, you can change or cancel a durable power of attorney at any time as long as the person is competent. The change or cancellation must be done in writing and in the presence of a lawyer.",
            },
            {
              title: "What is the difference between guardianship and a durable power of attorney?",
              content:
                "A durable power of attorney is determined in advance by the person themselves, while guardianship is determined by the court after loss of capacity. A durable power of attorney allows for greater control and prevents unnecessary legal proceedings.",
            },
            {
              title: "Who is this especially important to?",
              content:
                "A durable power of attorney is especially important for several groups:",
              bulletPoints: [
                "Adults over 60 years old",
                "People with chronic illnesses or genetic predisposition", 
                "Parents of children with special needs",
                "Anyone who wants to maintain their independence and prevent future family struggles"
              ],
            },
            {
              title: "What is important to know before signing?",
              content:
                "Before signing a durable power of attorney, it's important to know:",
              bulletPoints: [
                "Choose a trusted person as your proxy",
                "Clearly define the scope of authority",
                "Consider appointing a backup proxy",
                "Review and update the document regularly"
              ],
            },
          ],
          faq: [
            {
              question: "Is it possible to appoint more than one proxy?",
              answer: "Yes, you can appoint multiple proxies who can act together or separately, depending on your preferences."
            },
            {
              question: "Is a durable power of attorney also valid for carrying out real estate transactions?",
              answer: "Yes, if specifically authorized in the document, the proxy can handle real estate transactions."
            },
            {
              question: "Can the powers of the proxy be limited?",
              answer: "Yes, you can limit the proxy's powers to specific areas or actions as you see fit."
            },
            {
              question: "What happens if the proxy is unable to act?",
              answer: "You can appoint a backup proxy who will take over if the primary proxy is unable to act."
            },
            {
              question: "Is the document valid abroad?",
              answer: "The validity abroad depends on the laws of the specific country and may require additional procedures."
            }
          ],
          tableOfContents: [
            "Enduring Power of Attorney – What is it and who is it important to",
            "Why even make a durable power of attorney?",
            "What areas can be regulated by a durable power of attorney?",
            "Who can make a durable power of attorney?",
            "How is the process actually carried out?",
            "When does the power of attorney take effect?",
            "Is it possible to change or cancel a lasting power of attorney?",
            "What is the difference between guardianship and a durable power of attorney?",
            "Who is this especially important to?",
            "What is important to know before signing?",
            "What is important to know about a durable power of attorney?",
          ],
        },
      },
    },
    "wills-inheritances": {
      he: {
        title: "צוואות וירושות: כל מה שצריך לדעת",
        date: "08/08/2024",
        views: 740,
        content: {
          intro:
            "צוואה היא מסמך משפטי המאפשר לאדם לקבוע כיצד יחולק רכושו לאחר מותו. צוואה מסודרת מבטיחה שהרכוש יועבר בדיוק כפי שרציתם – ומונעת סכסוכים משפחתיים. במדריך זה תמצאו הסברים, סוגי צוואות, זכויות יורשים וטיפים לניסוח משפטי תקף.",
          sections: [
            {
              title: "?למה בכלל לעשות צוואה",
              content:
                "צוואה מאפשרת לכם לשלוט בחלוקת הרכוש שלכם לאחר מותכם. ללא צוואה, החוק קובע מי יירש את רכושכם, דבר שעלול לגרום לסכסוכים משפחתיים וחלוקה שלא תמיד משקפת את רצונכם. צוואה מסודרת מבטיחה שהרכוש יועבר לאנשים הנכונים, בדרך הנכונה ובזמן הנכון.",
            },
            {
              title: "?מה זה ירושה לפי חוק",
              content:
                "כאשר אדם נפטר ללא צוואה, החוק קובע מי יירש את רכושו. בדרך כלל, בן או בת הזוג והילדים יורשים את הרכוש. אם אין ילדים, ההורים או האחים יורשים. חוק הירושה קובע את סדר הירושה המדויק ואת חלקו של כל יורש.",
            },
            {
              title: "?אילו סוגי צוואות קיימים",
              content:
                "קיימים מספר סוגי צוואות:",
              bulletPoints: [
                "צוואה בכתב יד – נכתבת בכתב ידו של המצווה",
                "צוואה בעדים – נחתמת בפני שני עדים",
                "צוואה בפני רשות – נערכת בפני נוטריון או בית משפט",
                "צוואה בעל פה – במקרים חריגים בלבד"
              ],
            },
            {
              title: "?מי יכול לעשות צוואה",
              content:
                "כל אדם מעל גיל 18, שהוא כשיר משפטית ומבין את משמעות הצוואה. חשוב שהמצווה יהיה בהכרה מלאה ויעשה את הצוואה מרצון חופשי, ללא לחץ או השפעה בלתי הוגנת.",
            },
            {
              title: "?איך עושים צוואה",
              content:
                "תהליך עריכת צוואה כולל מספר שלבים:",
              numberedSteps: true,
            },
            {
              title: "?מתי הצוואה נכנסת לתוקף",
              content:
                "צוואה נכנסת לתוקף רק לאחר מות המצווה. עד אז, המצווה יכול לשנות או לבטל את הצוואה בכל עת. לאחר המוות, הצוואה מוגשת לבית המשפט לאישור ולחלוקת הרכוש.",
            },
            {
              title: "?האם אפשר לשנות או לבטל צוואה",
              content:
                "כן, ניתן לשנות או לבטל צוואה בכל עת כל עוד המצווה חי. השינוי או הביטול חייבים להיעשות באותה צורה שבה נעשתה הצוואה המקורית.",
            },
            {
              title: "?מה ההבדל בין צוואה לירושה",
              content:
                "צוואה היא מסמך שמכין אדם בחייו וקובע כיצד יחולק רכושו לאחר מותו. ירושה היא התהליך המשפטי של חלוקת הרכוש לאחר המוות, בין אם יש צוואה ובין אם לא.",
            },
            {
              title: "?למי זה חשוב במיוחד",
              content:
                "צוואה חשובה במיוחד למספר קבוצות:",
              bulletPoints: [
                "אנשים עם רכוש משמעותי",
                "משפחות עם ילדים מנישואים קודמים",
                "אנשים עם נכסים עסקיים",
                "כל מי שרוצה לשלוט בחלוקת רכושו"
              ],
            },
            {
              title: "?מה חשוב לדעת לפני עריכת צוואה",
              content:
                "לפני עריכת צוואה חשוב לדעת:",
              bulletPoints: [
                "בחרו יורשים אמינים ומוכשרים",
                "הגדירו בבירור את הרכוש והחלוקה",
                "שקלו מינוי מנהל עיזבון",
                "עדכנו את הצוואה באופן קבוע"
              ],
            },
          ],
          faq: [
            {
              question: "?האם אפשר להוריש רכוש רק לאחד הילדים",
              answer: "כן, צוואה מאפשרת לכם להוריש רכוש למי שתרצו, כולל ילד אחד בלבד. עם זאת, חשוב לשקול את ההשלכות המשפחתיות."
            },
            {
              question: "?האם צוואה תקפה גם בחו\"ל",
              answer: "תוקף הצוואה בחו\"ל תלוי בחוקי המדינה הספציפית וייתכן שיידרשו הליכים נוספים."
            },
            {
              question: "?מה קורה אם הצוואה לא ברורה",
              answer: "צוואה לא ברורה עלולה לגרום לסכסוכים משפחתיים. חשוב לנסח את הצוואה בצורה ברורה ומפורשת."
            },
            {
              question: "?האם אפשר להוריש נכסים עסקיים",
              answer: "כן, ניתן להוריש נכסים עסקיים בצוואה, אך ייתכן שיידרשו הליכים מיוחדים לחלוקתם."
            },
            {
              question: "?מה ההבדל בין צוואה לירושה",
              answer: "צוואה היא מסמך שמכין אדם בחייו, בעוד שירושה היא התהליך המשפטי של חלוקת הרכוש לאחר המוות."
            }
          ],
          tableOfContents: [
            "?למה בכלל לעשות צוואה",
            "?מה זה ירושה לפי חוק",
            "?אילו סוגי צוואות קיימים",
            "?מי יכול לעשות צוואה",
            "?איך עושים צוואה",
            "?מתי הצוואה נכנסת לתוקף",
            "?האם אפשר לשנות או לבטל צוואה",
            "?מה ההבדל בין צוואה לירושה",
            "?למי זה חשוב במיוחד",
            "?מה חשוב לדעת לפני עריכת צוואה",
            "?מה חשוב לדעת על צוואות וירושות",
          ],
        },
      },
      en: {
        title: "Wills and inheritances: everything you need to know",
        date: "08/08/2024",
        views: 740,
        content: {
          intro:
            "A will is a legal document that allows a person to determine how their property will be distributed after their death. A well-organized will ensures that your property is transferred exactly as you wished - and prevents family disputes. In this guide you will find explanations, types of wills, heirs' rights and tips for valid legal drafting.",
          sections: [
            {
              title: "?Why even make a will",
              content:
                "A will allows you to control the distribution of your property after your death. Without a will, the law determines who will inherit your property, which can cause family disputes and distribution that doesn't always reflect your wishes. A well-organized will ensures that the property is transferred to the right people, in the right way and at the right time.",
            },
            {
              title: "?What is inheritance according to law",
              content:
                "When a person dies without a will, the law determines who will inherit their property. Usually, the spouse and children inherit the property. If there are no children, the parents or siblings inherit. The Inheritance Law determines the exact order of inheritance and the share of each heir.",
            },
            {
              title: "?What types of wills exist",
              content:
                "There are several types of wills:",
              bulletPoints: [
                "Handwritten will – written in the testator's own handwriting",
                "Witnessed will – signed in the presence of two witnesses",
                "Authority will – drawn up before a notary or court",
                "Oral will – only in exceptional cases"
              ],
            },
            {
              title: "?Who can make a will",
              content:
                "Any person over the age of 18, who is legally competent and understands the meaning of the will. It is important that the testator be fully conscious and make the will of their own free will, without pressure or undue influence.",
            },
            {
              title: "?How to make a will",
              content:
                "The process of making a will includes several steps:",
              numberedSteps: true,
            },
            {
              title: "?When does the will take effect",
              content:
                "A will takes effect only after the testator's death. Until then, the testator can change or cancel the will at any time. After death, the will is submitted to court for approval and distribution of property.",
            },
            {
              title: "?Is it possible to change or cancel a will",
              content:
                "Yes, you can change or cancel a will at any time as long as the testator is alive. The change or cancellation must be done in the same way as the original will.",
            },
            {
              title: "?What is the difference between a will and inheritance",
              content:
                "A will is a document that a person prepares during their lifetime and determines how their property will be distributed after their death. Inheritance is the legal process of distributing property after death, whether there is a will or not.",
            },
            {
              title: "?Who is this especially important to",
              content:
                "A will is especially important for several groups:",
              bulletPoints: [
                "People with significant property",
                "Families with children from previous marriages",
                "People with business assets",
                "Anyone who wants to control the distribution of their property"
              ],
            },
            {
              title: "?What is important to know before making a will",
              content:
                "Before making a will, it's important to know:",
              bulletPoints: [
                "Choose reliable and capable heirs",
                "Clearly define the property and distribution",
                "Consider appointing an executor",
                "Update the will regularly"
              ],
            },
          ],
          faq: [
            {
              question: "?Is it possible to bequeath property to only one of the children",
              answer: "Yes, a will allows you to bequeath property to whomever you want, including only one child. However, it's important to consider the family implications."
            },
            {
              question: "?Is a will valid abroad",
              answer: "The validity of a will abroad depends on the laws of the specific country and may require additional procedures."
            },
            {
              question: "?What happens if the will is unclear",
              answer: "An unclear will can cause family disputes. It's important to draft the will clearly and explicitly."
            },
            {
              question: "?Is it possible to bequeath business assets",
              answer: "Yes, you can bequeath business assets in a will, but special procedures may be required for their distribution."
            },
            {
              question: "?What is the difference between a will and inheritance",
              answer: "A will is a document that a person prepares during their lifetime, while inheritance is the legal process of distributing property after death."
            }
          ],
          tableOfContents: [
            "?Why even make a will",
            "?What is inheritance according to law",
            "?What types of wills exist",
            "?Who can make a will",
            "?How to make a will",
            "?When does the will take effect",
            "?Is it possible to change or cancel a will",
            "?What is the difference between a will and inheritance",
            "?Who is this especially important to",
            "?What is important to know before making a will",
            "?What is important to know about wills and inheritances",
          ],
        },
      },
    },
    "real-estate-buying-selling": {
      en: {
        title: "Selling and purchasing real estate – how to do it legally",
        date: "19/04/2024",
        views: 20,
        content: {
          intro:
            "A real estate transaction is one of the biggest decisions most people will make in their lives – whether it is a residential apartment, land, or an investment property. But behind every property there is a whole legal world that requires representation, checks, and negotiations and rights. Mistakes in the process can be costly – and sometimes irreversible.",
          sections: [
            {
              title: "Selling and purchasing real estate – not just a financial matter, but also a legal process",
              content:
                "A real estate transaction is one of the biggest decisions most people will make in their lives – whether it is a residential apartment, land, or an investment property. But behind every property there is a whole legal world that requires representation, checks, and negotiations and rights. Mistakes in the process can be costly – and sometimes irreversible.",
            },
            {
              title: "What are the important steps in any real estate transaction?",
              content:
                "• Preliminary inspections of the property (taboo draft, encumbrances, foreclosures, permits, etc.)\n• Proper tax planning – including checking the seller's and buyer's tax status\n• Close support until the transaction is completed and the property is registered.",
              bulletPoints: [
                "Preliminary inspections of the property (taboo draft, encumbrances, foreclosures, permits, etc.)",
                "Proper tax planning – including checking the seller's and buyer's tax status",
                "Close support until the transaction is completed and the property is registered"
              ],
            },
            {
              title: "Why is it important to perform early tests?",
              content:
                "Before committing, it's important to make sure that the property actually belongs to the seller, that it has no debts, foreclosures, construction violations, or problematic future plans. These are details that can be discovered with the help of a lawyer specializing in real estate, and can completely change the face of the transaction.",
            },
            {
              title: "How is a proper sales contract conducted?",
              content:
                "The contract sets out the timetables, the consideration, the conditions, and the guarantees and the sanctions. It's important to ensure that the contract protects your side – for example, in the event of a delay in delivery, a problem with payments, or the discovery of defects. Improper sales contracts can leave you exposed.",
            },
            {
              title: "What are the important aspects of real estate taxation?",
              content:
                "A real estate transaction is sometimes accompanied by capital gains tax, purchase tax, or property improvement levy. The seller or buyer is not always aware of this in real time. Proper tax planning in advance may save high sums and grief. For more in-depth information, also read the guide on real estate taxation and the distribution of capital gains.",
            },
            {
              title: "Why is legal support critical in real estate transactions?",
              content:
                "A real estate attorney represents your interests, checks all risks, and protects you against the other party, against the authorities, and the banks, and supervises the registration in the land registry, coordination with the bank and seller, and management of all property rights.",
            },
            {
              title: "Common mistakes to avoid:",
              content:
                "• Signing a memorandum of understanding without consultation\n• Transferring funds before receiving guarantees\n• Not checking a 'taboo' wording\n• Reliance on verbal agreements\n• Failure to meet suspensive conditions",
              bulletPoints: [
                "Signing a memorandum of understanding without consultation",
                "Transferring funds before receiving guarantees",
                "Not checking a 'taboo' wording",
                "Reliance on verbal agreements",
                "Failure to meet suspensive conditions"
              ],
            },
            {
              title: "When to contact a lawyer?",
              content:
                "Even before you find a buyer or a property to purchase, a real estate lawyer can help you avoid big mistakes, warn you against risks, and guide you through the process from start to finish.",
            },
            {
              title: "What is the difference between purchasing an apartment from a contractor and purchasing second-hand?",
              content:
                "Purchasing from a contractor requires a different approach – with emphasis on the Sales Law, delivery date, guarantees according to the law, banking support, and checking the regulations of the future condominium. For the full picture, read the Guide to Buying an Apartment from a Contractor.",
            },
            {
              title: "Is a power of attorney needed in real estate transactions?",
              content:
                "Absolutely. Irrevocable power of attorneys are often used to allow the attorney to complete the transaction even if the parties are unavailable. If you plan to use an enduring power of attorney, it is important to read the complete guide to enduring power of attorney.",
            },
          ],
          faq: [
            {
              question: "Do you need a lawyer in a real estate transaction?",
              answer: "Yes. A lawyer is a mandatory element by law in every real estate transaction in Israel, and his role is critical to ensuring the success of the process."
            },
            {
              question: "What is a taboo wording and why is it important to check it?",
              answer: "The taboo is the official land registry. The wording must be checked to ensure there are no encumbrances, foreclosures, or other issues."
            },
            {
              question: "How long does a typical real estate transaction take?",
              answer: "Most transactions take between a few weeks to a few months, depending on the complexity."
            },
            {
              question: "Is it worth signing a memorandum of understanding?",
              answer: "It is not recommended to sign a memorandum of understanding without legal advice, as it may be binding."
            },
            {
              question: "What do I do if defects are discovered after purchase?",
              answer: "The contract should include provisions for dealing with defects discovered after the transaction."
            },
            {
              question: "Is it possible to regret after signing?",
              answer: "In some cases, yes, but it depends on the contract and the stage of the transaction."
            },
            {
              question: "What is important to check about the seller or buyer?",
              answer: "Check the identity, financial stability, and legal status of the other party."
            },
            {
              question: "Does the lawyer have to be involved throughout?",
              answer: "Yes, the lawyer should be involved from the beginning to the end of the process."
            },
            {
              question: "How is registration in the land registry actually carried out?",
              answer: "Registration is carried out by submitting the required documents to the land registry office."
            },
            {
              question: "Can I do the transaction myself without a lawyer?",
              answer: "It is not recommended. The law requires a lawyer for most real estate transactions in Israel."
            }
          ],
          tableOfContents: [
            "Selling and purchasing real estate – not just a financial matter, but also a legal process",
            "What are the important steps in any real estate transaction?",
            "Why is it important to perform early tests?",
            "How is a proper sales contract conducted?",
            "What are the important aspects of real estate taxation?",
            "Why is legal support critical in real estate transactions?",
            "Common mistakes to avoid:",
            "When to contact a lawyer?",
            "What is the difference between purchasing an apartment from a contractor and purchasing second-hand?",
            "Is a power of attorney needed in real estate transactions?",
            "What is important to know before selling or buying real estate?",
          ],
        },
      },
    },
  }

  const currentArticle = articles[params.slug as keyof typeof articles]
  const currentContent = currentArticle?.[language]

  if (!currentContent) {
    return <div>Article not found</div>
  }

  const contact = {
    he: {
      title: "לייעוץ חינם",
      subtitle: "מלאו את הפרטים ואני אחזור אליכם בהקדם האפשרי",
      name: "שם*",
      phone: "טלפון*",
      email: "אימייל",
      send: "שליחה",
    },
    en: {
      title: "For a free consultation",
      subtitle: "Fill in your details and I will contact you as soon as possible",
      name: "name*",
      phone: "phone*",
      email: "Email",
      send: "sending",
    },
  }

  const currentContact = contact[language]

  const moreArticles = params.slug === "wills-inheritances" ? [
    {
      id: "enduring-power-attorney",
      title: "Enduring Power of Attorney: Everything You Need to Know",
      image: "/images/hero-bg.png",
      date: "08/08/2024",
      views: 1,
    },
    {
      id: "real-estate-buying-selling",
      title: "Selling and purchasing real estate – how to do it legally",
      image: "/images/real-estate-sales.jpg",
      date: "19/04/2024",
      views: 20,
    },
  ] : [
    {
      id: "wills-inheritances",
      title: "Wills and inheritances: everything you need to know",
      image: "/images/neighbors.jpg",
      date: "08/08/2024",
      views: 740,
    },
    {
      id: "real-estate-buying-selling",
      title: "Selling and purchasing real estate – how to do it legally",
      image: "/images/real-estate-sales.jpg",
      date: "19/04/2024",
      views: 20,
    },
  ]

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
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={params.slug === "wills-inheritances" ? "/images/senior-couple-doing-paperwork.jpg" : "/images/business-people-signing-contract.jpg"}
            alt={params.slug === "wills-inheritances" ? "Senior couple doing paperwork" : "Handshake background"}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
          >
            {currentContent.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentContact.title}</h3>
                  <p className="text-sm text-gray-600">{currentContact.subtitle}</p>
                </div>
                <form className="space-y-4">
                  <Input placeholder={currentContact.name} className="text-center" />
                  <Input placeholder={currentContact.phone} className="text-center" />
                  <Input placeholder={currentContact.email} className="text-center" />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                    {currentContact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg p-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Link href="/" className="hover:text-amber-700">Home</Link>
                <span>›</span>
                <Link href="/articles" className="hover:text-amber-700">Articles</Link>
                <span>›</span>
                <span className="text-amber-700">{currentContent.title}</span>
              </div>

              {/* Date and Views */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {currentContent.date}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {currentContent.views}
                </span>
              </div>

              {/* Article Content */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">{currentContent.content.intro}</p>

                {currentContent.content.sections.map((section, index) => (
                  <div key={index} id={`section-${index}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                    
                    {section.bulletPoints && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        {section.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {section.numberedSteps && (
                      <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        <li>Meeting with a certified lawyer</li>
                        <li>Defining needs and wishes</li>
                        <li>Preparing the document</li>
                        <li>Signing in the presence of a lawyer</li>
                        <li>Depositing with the General Guardian</li>
                      </ol>
                    )}
                  </div>
                ))}

                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What is important to know about a durable power of attorney</h2>
                  <div className="space-y-4">
                    {currentContent.content.faq.map((faq, index) => (
                      <Card key={index} className="shadow-sm">
                        <CardContent className="p-0">
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            {expandedFaq === index ? (
                              <Minus className="w-5 h-5 text-amber-600 flex-shrink-0" />
                            ) : (
                              <Plus className="w-5 h-5 text-amber-600 flex-shrink-0" />
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
                </div>
              </div>
            </article>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {currentContent.content.tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="block text-sm text-gray-600 hover:text-amber-700 transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {moreArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="block group">
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {article.views}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors leading-tight">
                      {article.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-2">You deserve close, professional and personal support</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            In the most expensive and important transaction in life, I will be there for you
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            From the negotiation stage to the delivery or receipt of the key, the registration in the land registry and much more
          </p>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-3xl mx-auto">
            <Input placeholder="Email" className="rounded-full text-center" />
            <Input placeholder="phone*" className="rounded-full text-center" />
            <Input placeholder="name*" className="rounded-full text-center" />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 flex items-center gap-2">
              sending
            </Button>
          </form>
        </div>
      </section>

      {/* Floating Phone Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="w-12 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-full">
          <Phone className="w-5 h-5" />
        </Button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
