'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import eight from '@/images/8.png'

const FAQS = [
    {
        question: 'Is there a free trial?',
        answer: 'Yes — every new account gets the first month free, no card required upfront.',
    },
    {
        question: 'How do I pay for my subscription?',
        answer: 'Via bank transfer. Your subscription screen shows the account details with tap-to-copy fields, and your plan is activated once the admin confirms payment.',
    },
    {
        question: "What happens if I go over my plan's unit limit?",
        answer: "You'll be prompted to upgrade to the next tier — your existing data stays untouched either way.",
    },
    {
        question: 'Is my building\u2019s data secure?',
        answer: 'Yes. Every building\u2019s data is isolated with Firebase security rules, and access is protected with App Check.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="flex w-full justify-center bg-white px-6 py-20 sm:px-10 lg:px-16">
            <div className="flex w-[80%] flex-col items-center gap-14 md:flex-row md:items-center md:gap-16">
                {/* Accordion */}
                <div className="w-full md:w-3/5">
                    <h2 className="text-[15px] font-medium uppercase tracking-wide text-gray-400">
                        Question <span className="font-extrabold text-brand-ink">Section</span>
                    </h2>
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-gray-500">
                        Answers to what building admins ask us most.
                    </p>

                    <div className="mt-8 space-y-3">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-md border border-gray-100 bg-gray-50"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-[15px] font-medium text-brand-ink">
                                            {faq.question}
                                        </span>
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-ink shadow-sm">
                                            {isOpen ? (
                                                <Minus className="h-3.5 w-3.5" />
                                            ) : (
                                                <Plus className="h-3.5 w-3.5" />
                                            )}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <p className="px-5 pb-4 text-[14px] leading-relaxed text-gray-500">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Phone mockup */}
                <div className="flex w-full justify-center md:w-2/5">
                    <div className="w-[220px] rotate-[6deg] rounded-[2.2rem] border-[6px] border-gray-100 bg-white shadow-2xl sm:w-[240px]">
                        <Image
                            src={eight}
                            alt="Imarat Digital dashboard"
                            width={774}
                            height={1496}
                            className="w-full rounded-[1.8rem]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}