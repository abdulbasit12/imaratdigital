'use client'

import { Phone, Globe, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Support() {
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        // TODO: wire this up to your form handler / API route
        setSubmitted(true)
    }

    return (
        <section
            id="support"
            className="w-full bg-[#F5F5F7] px-6 py-20 sm:px-10 lg:px-16"
        >
            <h2 className="text-center text-[26px] text-brand-ink sm:text-[30px]">
                Get In <span className="font-extrabold">Touch</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-gray-500">
                Questions about a plan, or ran into an issue? Send us a message.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 max-w-2xl space-y-5"
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[14px] text-brand-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        required
                        className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[14px] text-brand-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[14px] text-brand-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <textarea
                    placeholder="Your message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 text-[14px] text-brand-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
                />
                <button
                    type="submit"
                    className="w-full rounded-md bg-brand py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-ink"
                >
                    Submit
                </button>
                {submitted && (
                    <p className="text-center text-[14px] text-green-600">
                        Thanks — we'll get back to you shortly.
                    </p>
                )}
            </form>

            {/* Contact info card */}
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 rounded-lg bg-white p-8 shadow-md sm:grid-cols-3">
                <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200">
                        <Phone className="h-5 w-5 text-brand-ink" strokeWidth={1.75} />
                    </span>
                    <span className="text-[14px] text-gray-600">+92 315 8472043</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200">
                        <Globe className="h-5 w-5 text-brand-ink" strokeWidth={1.75} />
                    </span>
                    <span className="text-[14px] text-gray-600">www.denexsys.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200">
                        <MapPin className="h-5 w-5 text-brand-ink" strokeWidth={1.75} />
                    </span>
                    <span className="text-[14px] text-gray-600">Karachi, Pakistan</span>
                </div>
            </div>
        </section>
    )
}