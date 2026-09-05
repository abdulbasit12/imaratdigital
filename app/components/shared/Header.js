'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '@/images/logo.png'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Support', href: '#support' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeHref, setActiveHref] = useState('#home')

    return (
        <header className="sticky top-0 z-50 flex justify-center w-full bg-gradient-to-r from-[#1B1240] to-[#1E5AA8]">
            <div className="flex h-[72px] w-[80%] items-center justify-between px-6 sm:px-10 lg:px-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src={logo}
                        alt="Imarat Digital"
                        width={32}
                        height={32}
                        className="rounded-[8px]"
                        priority
                    />
                    <span className="font-sans text-lg font-bold uppercase tracking-wide text-white">
                        Imarat Digital
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-9 md:flex">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeHref === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveHref(link.href)}
                                className={`pb-1 text-[13px] font-semibold uppercase tracking-wider transition-colors ${isActive
                                    ? 'border-b-2 border-white text-white'
                                    : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className="relative block h-4 w-5">
                        <span
                            className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''
                                }`}
                        />
                        <span
                            className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-white transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                                }`}
                        />
                    </span>
                </button>
            </div>

            {/* Mobile panel */}
            {menuOpen && (
                <div className="border-t border-white/10 px-6 py-4 sm:px-10 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    setActiveHref(link.href)
                                    setMenuOpen(false)
                                }}
                                className={`text-[13px] font-semibold uppercase tracking-wider ${activeHref === link.href ? 'text-white' : 'text-white/70'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}