'use client'

import { useState } from 'react'

const PLANS = [
    {
        name: 'Free',
        monthly: 0,
        yearly: 0,
        features: ['Up to 10 units', '1 attachment per expense', 'Limited reports'],
        highlighted: false,
    },
    {
        name: 'Recommended',
        monthly: 499,
        yearly: 4990,
        features: [
            'Up to 50 units',
            '2 attachments per expense',
            'All reports',
            '24/7 support',
        ],
        highlighted: true,
    },
    {
        name: 'Premium',
        monthly: 899,
        yearly: 8990,
        features: [
            '100+ units',
            '4 attachments per expense',
            'All reports',
            '24/7 support',
        ],
        highlighted: false,
    },
]

export default function Pricing() {
    const [yearly, setYearly] = useState(true)

    return (
        <section
            id="pricing"
            className="w-full bg-[#EDEDF0] px-6 py-20 text-center sm:px-10 lg:px-16"
        >
            <h2 className="text-[26px] text-brand-ink sm:text-[30px]">
                Simple, <span className="font-extrabold">Transparent Pricing</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-gray-500">
                First month free on every plan. Upgrade anytime as your building
                grows.
            </p>

            {/* Toggle */}
            <div className="mt-8 flex justify-center">
                <div className="relative inline-flex rounded-full bg-gray-200 p-1">
                    <button type="button" onClick={() => setYearly(false)} className={`relative z-10 rounded-full px-6 py-2 text-[14px] font-semibold transition-colors ${!yearly ? 'text-white' : 'text-gray-500 hover:text-brand-ink'}`} >
                        <label>Monthly</label>
                    </button>
                    <button type="button" onClick={() => setYearly(true)} className={`relative z-10 flex items-center flex-col gap-2 rounded-full px-6 py-2 text-[14px] font-semibold transition-colors ${yearly ? 'text-white' : 'text-gray-500 hover:text-brand-ink'}`}>
                        <label>Yearly</label>
                    </button>
                    <span className={`absolute inset-y-1 w-1/2 rounded-full bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] transition-transform duration-300 ${yearly ? 'translate-x-full' : 'translate-x-0'}`} />
                </div>
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
                {PLANS.map((plan) => {
                    const price = yearly ? plan.yearly : plan.monthly
                    const period = plan.monthly === 0 ? '' : yearly ? '/year' : '/month'

                    return (
                        <div
                            key={plan.name}
                            className={`flex w-full max-w-[300px] flex-col overflow-hidden rounded-lg bg-white shadow-md ${plan.highlighted ? 'md:shadow-2xl' : ''
                                }`}
                        >
                            <div className="px-8 py-8">
                                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-500">
                                    {plan.name}
                                </h3>
                                <span className="mx-auto mt-3 block h-0.5 w-8 bg-brand" />
                            </div>

                            <div
                                className={`py-9 ${plan.highlighted
                                        ? 'bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] text-white'
                                        : 'bg-gray-100 text-brand-ink'
                                    }`}
                            >
                                <span className="align-top text-[20px] font-semibold">Rs</span>
                                <span className="text-[42px] font-extrabold">{price}</span>
                                {period && (
                                    <span
                                        className={`text-[14px] ${plan.highlighted ? 'text-white/70' : 'text-gray-500'
                                            }`}
                                    >
                                        {period}
                                    </span>
                                )}
                            </div>

                            <ul className="flex-1">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="border-b border-gray-100 px-8 py-4 text-[14px] text-gray-600"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* <div className="px-8 py-8">
                                <button
                                    type="button"
                                    className={`w-full rounded-md py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                                        plan.highlighted
                                            ? 'bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] text-white hover:opacity-90'
                                            : 'bg-gray-100 text-brand-ink hover:bg-gray-200'
                                    }`}
                                >
                                    Sign Up
                                </button>
                            </div> */}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}