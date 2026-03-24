"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { faqData } from '@/assets/data';

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex justify-between items-center p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <span className="text-lg md:text-xl font-semibold text-primary text-left leading-relaxed">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <HiChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ModernizedFAQ() {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI solutions and processes
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <FAQItem 
              key={faq.id || idx} 
              question={faq.question} 
              answer={faq.answer}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}