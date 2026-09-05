import Image from 'next/image'
import { LayoutGrid, Receipt, FileBarChart, Wallet } from 'lucide-react'

const SCREENS = [
    { label: 'Dashboard', image: '/dashboard-screenshot.png' },
    { label: 'Units', icon: LayoutGrid },
    { label: 'Receipts', icon: Receipt },
    { label: 'Reports', icon: FileBarChart },
    { label: 'Payments', icon: Wallet },
]

export default function Screenshots() {
    return (
        <section
            id="screenshots"
            className="w-full bg-[#F5F5F7] px-6 py-20 text-center sm:px-10 lg:px-16"
        >
            <h2 className="text-[26px] text-brand-ink sm:text-[30px]">
                View <span className="font-extrabold">Screenshots</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] text-gray-500">
                A closer look at the screens building admins use every day.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-8">
                {SCREENS.map((screen) => (
                    <div
                        key={screen.label}
                        className="w-[170px] overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-gray-100 shadow-xl sm:w-[190px]"
                    >
                        {screen.image ? (
                            <Image
                                src={screen.image}
                                alt={`Imarat Digital ${screen.label} screen`}
                                width={774}
                                height={1496}
                                className="w-full"
                            />
                        ) : (
                            <div className="flex h-[340px] flex-col items-center justify-center gap-3 bg-gray-200 sm:h-[380px]">
                                {screen.icon && (
                                    <screen.icon
                                        className="h-9 w-9 text-gray-400"
                                        strokeWidth={1.5}
                                    />
                                )}
                                <span className="text-[13px] text-gray-400">
                                    {screen.label}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}