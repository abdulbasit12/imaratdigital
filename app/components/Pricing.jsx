import { Check } from 'lucide-react'

const PLANS = [
    {
        name: 'Free',
        price: 'Rs 0',
        period: '',
        features: ['Up to 10 units', '1 attachment per expense', 'Limited reports'],
        highlighted: false,
    },
    {
        name: 'Recommended',
        price: 'Rs 499',
        period: '/month',
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
        price: 'Rs 899',
        period: '/month',
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

            <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row md:items-end">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`w-full max-w-[300px] rounded-lg bg-white shadow-md ${plan.highlighted ? 'md:-translate-y-3 md:shadow-2xl' : ''
                            }`}
                    >
                        <div className="border-b border-gray-100 px-8 py-8">
                            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-gray-500">
                                {plan.name}
                            </h3>
                            <span className="mx-auto mt-3 block h-0.5 w-8 bg-brand" />
                        </div>

                        <div
                            className={`px-8 py-8 ${plan.highlighted
                                    ? 'bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] text-white'
                                    : 'text-brand-ink'
                                }`}
                        >
                            <span className="align-top text-[20px] font-semibold">Rs</span>
                            <span className="text-[42px] font-extrabold">
                                {plan.price.replace('Rs ', '')}
                            </span>
                            {plan.period && (
                                <span
                                    className={`text-[14px] ${plan.highlighted ? 'text-white/70' : 'text-gray-500'
                                        }`}
                                >
                                    {plan.period}
                                </span>
                            )}
                        </div>

                        <ul className="space-y-4 px-8 py-8">
                            {plan.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center justify-center gap-2 text-[14px] text-gray-600"
                                >
                                    <Check className="h-4 w-4 shrink-0 text-brand" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="px-8 pb-8">
                            <button
                                type="button"
                                className={`w-full rounded-md py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${plan.highlighted
                                        ? 'bg-brand text-white hover:bg-brand-ink'
                                        : 'bg-gray-100 text-brand-ink hover:bg-gray-200'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}