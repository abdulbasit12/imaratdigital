'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Building2, ShieldCheck, KeyRound, Database, Bell, Users,
    Link2, Lock, Clock, UserCog, Baby, RefreshCcw, Mail, ChevronRight
} from 'lucide-react';

const SECTIONS = [
    { id: 'info-we-collect', label: 'Information we collect', icon: Database },
    { id: 'how-we-use', label: 'How we use your information', icon: KeyRound },
    { id: 'who-can-access', label: 'Who can access your data', icon: Users },
    { id: 'third-party', label: 'Third-party services', icon: Link2 },
    { id: 'storage-security', label: 'Data storage & security', icon: Lock },
    { id: 'retention', label: 'Data retention', icon: Clock },
    { id: 'your-rights', label: 'Your choices & rights', icon: UserCog },
    { id: 'children', label: "Children's privacy", icon: Baby },
    { id: 'changes', label: 'Changes to this policy', icon: RefreshCcw },
    { id: 'contact', label: 'Contact us', icon: Mail },
];

function Section({ id, title, icon: Icon, children, registerRef }) {
    const ref = useRef(null);
    useEffect(() => { registerRef(id, ref.current); }, [id, registerRef]);
    return (
        <section
            id={id}
            ref={ref}
            className="mb-5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(30,18,64,0.08),0_1px_2px_rgba(0,0,0,0.04)] sm:p-7"
        >
            <div className="mb-3.5 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#F5F7FA]">
                    <Icon size={18} className="text-[#1E5AA8]" strokeWidth={2.2} />
                </div>
                <h2 className="m-0 text-[18px] font-bold tracking-tight text-brand-ink sm:text-[19px]">
                    {title}
                </h2>
            </div>
            <div className="space-y-2 text-[14.5px] leading-relaxed text-gray-500 sm:text-[15px]">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicy() {
    const [active, setActive] = useState(SECTIONS[0].id);
    const nodeRefs = useRef({});
    const navItemRefs = useRef({});
    const navContainerRef = useRef(null);

    const registerRef = useCallback((id, node) => { nodeRefs.current[id] = node; }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
        );
        Object.values(nodeRefs.current).forEach((node) => node && observer.observe(node));
        return () => observer.disconnect();
    }, []);

    // Scroll the active pill into view WITHIN the nav strip only —
    // never scrollIntoView here, it bubbles to the page and causes
    // the whole document to scroll horizontally.
    useEffect(() => {
        const container = navContainerRef.current;
        const item = navItemRefs.current[active];
        if (!container || !item) return;

        const targetLeft =
            item.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;

        container.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: 'smooth',
        });
    }, [active]);

    const scrollTo = (id) => {
        nodeRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const ul = 'list-disc space-y-1.5 pl-5';

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#F5F7FA] font-sans text-brand-ink">
            {/* Brand banner */}
            <div className="bg-gradient-to-br from-[#1B1240] to-[#1E5AA8] px-5 py-12 text-center text-white sm:py-14">
                <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/15">
                    <Building2 size={26} strokeWidth={2} />
                </div>
                <h1 className="text-[26px] font-extrabold tracking-tight sm:text-[30px]">
                    Privacy Policy
                </h1>
                <p className="mt-2 text-[13px] tracking-wide text-white/80 sm:text-[14px]">
                    Imarat Digital · Last updated: 23 Jul 2026
                </p>
            </div>

            <div className="mx-auto max-w-[980px] px-5 py-9 sm:py-11 lg:grid lg:grid-cols-[240px_1fr] lg:gap-7">
                {/* Nav: horizontal scroll strip on mobile/tablet, sticky sidebar on desktop */}
                <nav className="mb-6 min-w-0 lg:sticky lg:top-6 lg:mb-0 lg:block lg:self-start">
                    <div
                        ref={navContainerRef}
                        className="flex max-w-full gap-1.5 overflow-x-auto rounded-2xl bg-white p-2.5 shadow-[0_1px_3px_rgba(30,18,64,0.08)] lg:block lg:max-w-none lg:overflow-visible"
                    >
                        {SECTIONS.map(({ id, label, icon: Icon }) => {
                            const isActive = active === id;
                            return (
                                <button
                                    key={id}
                                    ref={(node) => { navItemRefs.current[id] = node; }}
                                    onClick={() => scrollTo(id)}
                                    className={`mb-0 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[9px] px-3 py-2.5 text-left text-[13px] transition-colors lg:mb-0.5 lg:w-full lg:whitespace-normal ${isActive
                                            ? 'bg-[#F5F7FA] font-semibold text-[#1E5AA8]'
                                            : 'font-medium text-gray-500 hover:text-brand-ink'
                                        }`}
                                >
                                    <Icon size={15} strokeWidth={2.2} className="shrink-0" />
                                    <span>{label}</span>
                                    {isActive && <ChevronRight size={13} className="ml-auto hidden lg:block" />}
                                </button>
                            );
                        })}
                    </div>
                </nav>

                {/* Content */}
                <div className="min-w-0">
                    <p className="mb-5 text-[14.5px] leading-relaxed text-gray-500 sm:text-[15px]">
                        Imarat Digital ("we," "our," or "the app") is a property management application that
                        helps building administrators manage residential units, maintenance payments, expenses,
                        and receipts. This policy explains what information we collect, how we use it, and the
                        choices you have. By using Imarat Digital, you agree to the collection and use of
                        information as described below.
                    </p>

                    <Section id="info-we-collect" title="Information we collect" icon={Database} registerRef={registerRef}>
                        <p><strong className="text-brand-ink">Account information</strong></p>
                        <ul className={ul}>
                            <li>Phone number, used for authentication via OTP verification</li>
                            <li>Name, email, and password for admin registration</li>
                            <li>Building and unit details provided during setup</li>
                        </ul>
                        <p><strong className="text-brand-ink">Property &amp; financial data</strong></p>
                        <ul className={ul}>
                            <li>Unit and building information</li>
                            <li>Maintenance payment records and receipts</li>
                            <li>Expense records and outstanding dues</li>
                            <li>Subscription status and payment confirmation records</li>
                        </ul>
                        <p><strong className="text-brand-ink">Device information</strong></p>
                        <ul className={ul}>
                            <li>Push notification tokens, used to deliver payment reminders and subscription alerts</li>
                            <li>App integrity data collected via Firebase App Check, to verify requests come from a genuine app instance</li>
                        </ul>
                        <p><strong className="text-brand-ink">Images</strong></p>
                        <ul className={ul}>
                            <li>Photos uploaded for receipts or related records, stored in our cloud storage</li>
                        </ul>
                    </Section>

                    <Section id="how-we-use" title="How we use your information" icon={KeyRound} registerRef={registerRef}>
                        <ul className={ul}>
                            <li>Authenticate your account and secure access to the app</li>
                            <li>Enable administrators to manage units, payments, expenses, and receipts</li>
                            <li>Generate reports and PDF summaries for administrators</li>
                            <li>Send push notifications, such as subscription payment reminders</li>
                            <li>Maintain the security and integrity of our services</li>
                            <li>Improve and troubleshoot the app</li>
                        </ul>
                    </Section>

                    <Section id="who-can-access" title="Who can access your data" icon={Users} registerRef={registerRef}>
                        <ul className={ul}>
                            <li><strong className="text-brand-ink">Building administrators</strong> are the primary users of Imarat Digital and manage the data for their building(s)</li>
                            <li>Tenants do not use the app directly; any tenant-related records are entered and managed by the administrator</li>
                            <li>We do not sell your personal information to third parties</li>
                            <li>Data may be shared with service providers who help us operate the app, under confidentiality obligations</li>
                        </ul>
                    </Section>

                    <Section id="third-party" title="Third-party services" icon={Link2} registerRef={registerRef}>
                        <p>Imarat Digital uses the following third-party services to operate:</p>
                        <ul className={ul}>
                            <li><strong className="text-brand-ink">Firebase (Google)</strong> — authentication, cloud database (Firestore), cloud storage, push notifications (Firebase Cloud Messaging), and app integrity verification (App Check)</li>
                        </ul>
                        <p>
                            We do not currently integrate a payment gateway. Subscription payments are handled
                            manually via bank transfer, and payment confirmation is recorded by an administrator
                            within the app.
                        </p>
                    </Section>

                    <Section id="storage-security" title="Data storage & security" icon={Lock} registerRef={registerRef}>
                        <ul className={ul}>
                            <li>Your data is stored securely using Firebase Cloud Firestore and Firebase Storage</li>
                            <li>We use Firebase security rules and App Check to restrict access to authorized users and verified app instances only</li>
                            <li>No method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security</li>
                        </ul>
                    </Section>

                    <Section id="retention" title="Data retention" icon={Clock} registerRef={registerRef}>
                        <p>
                            We retain your information for as long as your account is active or as needed to
                            provide our services. You may request deletion of your account and associated data
                            by contacting us.
                        </p>
                    </Section>

                    <Section id="your-rights" title="Your choices & rights" icon={UserCog} registerRef={registerRef}>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul className={ul}>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your account and data</li>
                            <li>Withdraw consent to push notifications by disabling them in your device settings</li>
                        </ul>
                    </Section>

                    <Section id="children" title="Children's privacy" icon={Baby} registerRef={registerRef}>
                        <p>
                            Imarat Digital is intended for use by building administrators and is not directed at
                            children. We do not knowingly collect personal information from children under 13.
                        </p>
                    </Section>

                    <Section id="changes" title="Changes to this policy" icon={RefreshCcw} registerRef={registerRef}>
                        <p>
                            We may update this policy from time to time. Changes will be posted here with an
                            updated date. Continued use of the app after changes means you accept the revised policy.
                        </p>
                    </Section>

                    <Section id="contact" title="Contact us" icon={Mail} registerRef={registerRef}>
                        <p>If you have questions about this policy or your data, reach us at:</p>
                        <div className="mt-1.5 inline-flex items-center gap-2.5 rounded-xl bg-[#F5F7FA] px-4 py-3.5">
                            <Mail size={16} className="text-[#1E5AA8]" />
                            <span className="font-semibold text-brand-ink">support@imaratdigital.app</span>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}