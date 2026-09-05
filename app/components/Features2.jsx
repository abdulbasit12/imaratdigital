import Image from 'next/image'
import { Bell, ShieldCheck, FileText, UploadCloud } from 'lucide-react'
import seven from '@/images/7.png'

const FEATURES = [
    {
        icon: Bell,
        title: 'Real-Time Notifications',
        description: 'Admins get notified the moment a payment is due — no manual follow-ups needed.',
    },
    {
        icon: ShieldCheck,
        title: 'Secure by Design',
        description: 'Firebase-backed security rules keep every building\u2019s data isolated and protected.',
    },
    {
        icon: FileText,
        title: 'Instant PDF Reports',
        description: 'Generate a collection or expense report and share it in a couple of taps.',
    },
    {
        icon: UploadCloud,
        title: 'Bulk Data Import',
        description: 'Already tracking units in a spreadsheet? Import everything in one go.',
    },
]

export default function Features() {
    return (
        <section id="features" className="w-full flex items-center flex-col bg-gradient-to-br from-[#1B1240] to-[#1E5AA8]">
            {/* Banner */}
            <div className="w-[80%] flex flex-col justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
                <h2 className="text-[26px] font-semibold text-white sm:text-[30px]">
                    Everything a building admin actually needs
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                    No clutter, no features you'll never touch — just the tools for
                    running a building day to day.
                </p>
            </div>

            {/* Phone + feature list */}
            <div className="flex flex-col w-full justify-center bg-white items-center gap-14 px-6 py-20 sm:px-10 md:flex-row md:items-center md:gap-16 lg:px-16">
                <div className='w-[80%] flex flex-row'>
                    <div className="flex justify-center md:w-2/5">
                        <div className="w-[230px] rotate-[-6deg] rounded-[2.2rem] border-[6px] border-gray-100 bg-white shadow-2xl sm:w-[250px]">
                            <Image
                                src={seven}
                                alt="Imarat Digital dashboard"
                                width={774}
                                height={1496}
                                className="w-full rounded-[1.8rem]"
                            />
                        </div>
                    </div>

                    <div className="w-full space-y-10 md:w-3/5">
                        {FEATURES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex items-start gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-semibold text-brand-ink">
                                        {title}
                                    </h3>
                                    <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-gray-500">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}