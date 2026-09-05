import Image from 'next/image'

export default function DownloadCTA() {
    return (
        <section className="w-full bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] px-6 py-20 text-center sm:px-10 lg:px-16">
            <h2 className="text-[26px] font-extrabold uppercase tracking-wide text-white sm:text-[32px]">
                Download the app
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/70">
                Available now on Android. Set up your building in minutes.
            </p>

            <div className="mt-8 flex justify-center">
                <a
                    href="https://play.google.com/store/apps/details?id=com.ems.imaratdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.04]"
                >
                    <Image
                        src="/google-play-badge.png"
                        alt="Get it on Google Play"
                        width={200}
                        height={60}
                    />
                </a>
            </div>
        </section >
    )
}