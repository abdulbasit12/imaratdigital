import Image from 'next/image'
import Link from 'next/link'
import dashboard from '@/images/dashboard.png'

export default function Hero() {
    return (
        <section id="home" className="flex justify-center relative w-full overflow-hidden bg-linear-to-br from-[#1B1240] to-[#1E5AA8]">
            <div className='w-[80%]'>
                <div className="mx-0 flex w-full flex-col items-center gap-12 px-6 py-16 sm:px-10 md:flex-row md:items-center md:gap-8 md:py-24 lg:px-16 lg:py-28">
                    {/* Left: copy */}
                    <div className="w-full md:w-1/2">
                        <h1 className="font-sans text-[38px] font-light leading-[1.15] text-white sm:text-[50px]">
                            Every unit, every rupee,
                        </h1>
                        <h1 className="font-sans text-[38px] font-extrabold uppercase leading-[1.15] text-white sm:text-[52px]">
                            Tracked in one place
                        </h1>

                        <p className="mt-7 max-w-md text-[16px] leading-relaxed text-white/70">
                            Collect maintenance dues, log expenses, and generate receipts for
                            every unit in your building — without a single spreadsheet.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="#pricing"
                                className="rounded-md bg-white px-7 py-3 text-[14px] font-semibold text-[#1B1240] transition-transform hover:scale-[1.03]"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="#features"
                                className="rounded-md border border-white/60 px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                See How It Works
                            </Link>
                        </div>
                    </div>

                    {/* Right: phone mockup */}
                    <div className="relative flex w-full justify-center md:w-1/2 md:justify-end">
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

                        <div className="relative w-[260px] rotate-[8deg] sm:w-[300px] lg:w-[320px]">
                            {/* Outer body */}
                            <div className="relative rounded-[3rem] bg-linear-to-b from-neutral-100 to-neutral-300 p-[3px] shadow-2xl">
                                <div className="rounded-[2.9rem] bg-neutral-900 p-[10px]">
                                    {/* Screen */}
                                    <div className="relative overflow-hidden rounded-[2.3rem] bg-black">
                                        <Image
                                            src={dashboard}
                                            alt="Imarat Digital dashboard showing unit collection progress"
                                            width={774}
                                            height={1496}
                                            className="w-full"
                                            priority
                                        />
                                        {/* Notch */}
                                        <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
                                        {/* Glass reflection */}
                                        <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/0 via-white/10 to-white/0" />
                                    </div>
                                </div>
                            </div>

                            {/* Side buttons */}
                            <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-neutral-400" />
                            <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-neutral-400" />
                            <div className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-r bg-neutral-400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}