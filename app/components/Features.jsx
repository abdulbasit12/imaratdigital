import { Building2, Wallet, FileBarChart, Headset } from 'lucide-react'

const HIGHLIGHTS = [
    {
        icon: Building2,
        title: 'Multi-Unit Management',
        description: 'Manage anywhere from 10 to 100+ units across your buildings from a single dashboard.',
    },
    {
        icon: Wallet,
        title: 'Dues Collection',
        description: 'Track maintenance payments and outstanding dues automatically, unit by unit.',
    },
    {
        icon: FileBarChart,
        title: 'Detailed Reports',
        description: 'Generate PDF reports for collections, expenses, and dues in a few taps.',
    },
    {
        icon: Headset,
        title: '24/7 Support',
        description: 'Get help whenever you need it, included on the Recommended and Premium plans.',
    },
]

export default function FeatureHighlights() {
    return (
        <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
                {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex flex-col items-center text-center">
                        <Icon className="h-9 w-9 text-brand" strokeWidth={1.75} />
                        <span className="mt-4 h-0.5 w-8 bg-brand" />
                        <h3 className="mt-4 text-[17px] font-semibold text-brand-ink">
                            {title}
                        </h3>
                        <p className="mt-2 max-w-[240px] text-[14px] leading-relaxed text-gray-500">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}