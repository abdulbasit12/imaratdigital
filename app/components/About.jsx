import { Building2 } from 'lucide-react'
import Image from 'next/image'
import five from '@/images/5.png'

const POINTS = [
    'Built specifically for residential and multi-unit buildings',
    'No spreadsheets — every receipt and expense lives in one place',
    'Admins get paid, tenants get transparency',
]

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-center bg-[#F5F5F7] px-6 py-20 sm:px-10 lg:px-16"
        >
            <div className='w-[80%]'>
                <div className="flex flex-col items-center gap-14 md:flex-row md:gap-10">
                    <div className="w-full md:w-1/2">
                        <p className="text-[15px] font-medium uppercase tracking-wide text-gray-500">
                            About <span className="font-extrabold text-brand-ink">Imarat Digital</span>
                        </p>
                        <h2 className="mt-2 text-[28px] font-semibold leading-snug text-brand-ink sm:text-[32px]">
                            Property management, simplified
                        </h2>

                        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-600">
                            Imarat Digital replaces the register and the spreadsheet with a
                            single app for building admins. Track units, collect maintenance
                            payments, log expenses, and hand out receipts — all from your
                            phone.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {POINTS.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    <span className="text-[14px] text-gray-600">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: placeholder mockup */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <div className="flex h-[420px] w-[230px] flex-col items-center justify-center rounded-[2.2rem] border-[6px] border-white bg-gray-200 shadow-xl sm:w-[260px]">
                            <Building2 className="h-16 w-16 text-gray-400" strokeWidth={1.25} />
                            <span className="text-[13px] text-gray-400">
                                <Image
                                    src={five}
                                    alt="Imarat Digital dashboard"
                                    className="w-full w-[220px] h-[410px] rounded-[1.8rem]"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}