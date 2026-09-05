import Image from 'next/image'
import Link from 'next/link'
import dashboard from '@/images/dashboard.png'

export default function Hero() {
    return (
        <section id="home" className="flex justify-center relative w-full overflow-hidden bg-linear-to-br from-[#1B1240] to-[#1E5AA8]" >
            <div className='w-[80%]'>
                <div className="mx-0 flex w-full flex-col items-center gap-12 px-6 py-16 sm:px-10 md:flex-row md:items-center md:gap-8 md:py-24 lg:px-16 lg:py-28">
                    {/* Left: copy */}
                    <div className="w-full md:w-1/2">
                        <h1 className="font-sans text-[34px] font-light leading-tight text-white sm:text-[42px]">
                            Every unit, every rupee,
                        </h1>
                        <h1 className="font-sans text-[34px] font-extrabold uppercase leading-tight text-white sm:text-[46px]">
                            Tracked in one place
                        </h1>

                        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
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
                    <div className="relative flex w-full justify-center md:w-1/2">
                        <div className="absolute h-[380px] w-[380px] rounded-full bg-white/10 blur-3xl" />

                        <div className="relative w-[230px] rotate-[6deg] rounded-[2.2rem] border-[6px] border-white/90 bg-white shadow-2xl sm:w-[260px]">
                            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-white/90" />
                            <Image
                                src={dashboard}
                                alt="Imarat Digital dashboard showing unit collection progress"
                                width={774}
                                height={1496}
                                className="w-full mt-3 rounded-[1.8rem]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}