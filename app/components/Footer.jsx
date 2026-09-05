import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import logo from '@/images/logo.png'

const SOCIAL_LINKS = [
    { icon: faFacebookF, label: 'Facebook', href: '#' },
    { icon: faInstagram, label: 'Instagram', href: '#' },
    { icon: faLinkedinIn, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
    return (
        <footer className="w-full bg-white px-6 py-12 text-center sm:px-10 lg:px-16">
            <div className="flex items-center justify-center gap-2.5">
                <Image
                    src={logo}
                    alt="Imarat Digital"
                    width={30}
                    height={30}
                    className="rounded-[8px]"
                />
                <span className="text-lg font-extrabold uppercase tracking-wide text-brand">
                    Imarat Digital
                </span>
            </div>

            <div className="mt-6 flex justify-center gap-3">
                {SOCIAL_LINKS.map(({ icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-brand hover:text-brand"
                    >
                        <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                    </a>
                ))}
            </div>

            <p className="mt-6 text-[13px] text-gray-400">
                © {new Date().getFullYear()} Decode Nexus System. All rights reserved.
            </p>
        </footer >
    )
}