'use client'
import React, { useState, useEffect, useRef } from 'react';
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

const COLORS = {
    primary: '#1E5AA8',
    primaryDark: '#164070',
    bg: '#F5F7FA',
    success: '#2E7D32',
    successBg: '#E8F5E9',
    danger: '#A32D2D',
    dangerBg: '#FCEBEB',
    text: '#1C2733',
    textMuted: '#5B6B7C',
};

function Section({ id, title, icon: Icon, children, registerRef }) {
    const ref = useRef(null);
    useEffect(() => { registerRef(id, ref.current); }, [id, registerRef]);
    return (
        <section
            id={id}
            ref={ref}
            style={{
                background: '#fff',
                borderRadius: 16,
                padding: '28px 30px',
                marginBottom: 20,
                boxShadow: '0 1px 3px rgba(30,90,168,0.08), 0 1px 2px rgba(0,0,0,0.04)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: COLORS.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    <Icon size={18} color={COLORS.primary} strokeWidth={2.2} />
                </div>
                <h2 style={{ fontSize: 19, fontWeight: 700, color: COLORS.text, margin: 0, letterSpacing: '-0.01em' }}>
                    {title}
                </h2>
            </div>
            <div style={{ color: COLORS.textMuted, fontSize: 15, lineHeight: 1.7 }}>
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicy() {
    const [active, setActive] = useState(SECTIONS[0].id);
    const nodeRefs = useRef({});

    const registerRef = (id, node) => { nodeRefs.current[id] = node; };

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

    const scrollTo = (id) => {
        nodeRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const li = { margin: '6px 0' };
    const ul = { paddingLeft: 20, margin: '8px 0' };

    return (
        <div style={{
            background: COLORS.bg,
            minHeight: '100vh',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            color: COLORS.text,
        }}>
            {/* Brand banner — mirrors the app's PDF report header pattern */}
            <div style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`,
                padding: '48px 20px 40px',
                textAlign: 'center',
                color: '#fff',
            }}>
                <div style={{
                    width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                }}>
                    <Building2 size={26} color="#fff" strokeWidth={2} />
                </div>
                <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                    Privacy Policy
                </h1>
                <p style={{ opacity: 0.85, fontSize: 14, marginTop: 8, letterSpacing: '0.02em' }}>
                    Imarat Digital · Last updated: 23 Jul 2026
                </p>
            </div>

            <div style={{
                maxWidth: 980,
                margin: '0 auto',
                padding: '36px 20px 80px',
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                gap: 28,
            }}>
                {/* Sticky nav */}
                <nav style={{ position: 'sticky', top: 24, alignSelf: 'start', display: window.innerWidth < 768 ? 'none' : 'block' }}>
                    <div style={{
                        background: '#fff', borderRadius: 14, padding: 10,
                        boxShadow: '0 1px 3px rgba(30,90,168,0.08)',
                    }}>
                        {SECTIONS.map(({ id, label, icon: Icon }) => {
                            const isActive = active === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                                        textAlign: 'left', padding: '9px 10px', borderRadius: 9,
                                        border: 'none', cursor: 'pointer', marginBottom: 2,
                                        background: isActive ? COLORS.bg : 'transparent',
                                        color: isActive ? COLORS.primary : COLORS.textMuted,
                                        fontWeight: isActive ? 600 : 500,
                                        fontSize: 13.5,
                                        transition: 'background 0.15s, color 0.15s',
                                    }}
                                >
                                    <Icon size={15} strokeWidth={2.2} style={{ flexShrink: 0 }} />
                                    <span>{label}</span>
                                    {isActive && <ChevronRight size={13} style={{ marginLeft: 'auto' }} />}
                                </button>
                            );
                        })}
                    </div>
                </nav>

                {/* Content */}
                <div>
                    <p style={{ color: COLORS.textMuted, fontSize: 15, lineHeight: 1.7, marginBottom: 22 }}>
                        Imarat Digital ("we," "our," or "the app") is a property management application that
                        helps building administrators manage residential units, maintenance payments, expenses,
                        and receipts. This policy explains what information we collect, how we use it, and the
                        choices you have. By using Imarat Digital, you agree to the collection and use of
                        information as described below.
                    </p>

                    <Section id="info-we-collect" title="Information we collect" icon={Database} registerRef={registerRef}>
                        <p><strong style={{ color: COLORS.text }}>Account information</strong></p>
                        <ul style={ul}>
                            <li style={li}>Phone number, used for authentication via OTP verification</li>
                            <li style={li}>Name, email, and password for admin registration</li>
                            <li style={li}>Building and unit details provided during setup</li>
                        </ul>
                        <p><strong style={{ color: COLORS.text }}>Property &amp; financial data</strong></p>
                        <ul style={ul}>
                            <li style={li}>Unit and building information</li>
                            <li style={li}>Maintenance payment records and receipts</li>
                            <li style={li}>Expense records and outstanding dues</li>
                            <li style={li}>Subscription status and payment confirmation records</li>
                        </ul>
                        <p><strong style={{ color: COLORS.text }}>Device information</strong></p>
                        <ul style={ul}>
                            <li style={li}>Push notification tokens, used to deliver payment reminders and subscription alerts</li>
                            <li style={li}>App integrity data collected via Firebase App Check, to verify requests come from a genuine app instance</li>
                        </ul>
                        <p><strong style={{ color: COLORS.text }}>Images</strong></p>
                        <ul style={ul}>
                            <li style={li}>Photos uploaded for receipts or related records, stored in our cloud storage</li>
                        </ul>
                    </Section>

                    <Section id="how-we-use" title="How we use your information" icon={KeyRound} registerRef={registerRef}>
                        <ul style={ul}>
                            <li style={li}>Authenticate your account and secure access to the app</li>
                            <li style={li}>Enable administrators to manage units, payments, expenses, and receipts</li>
                            <li style={li}>Generate reports and PDF summaries for administrators</li>
                            <li style={li}>Send push notifications, such as subscription payment reminders</li>
                            <li style={li}>Maintain the security and integrity of our services</li>
                            <li style={li}>Improve and troubleshoot the app</li>
                        </ul>
                    </Section>

                    <Section id="who-can-access" title="Who can access your data" icon={Users} registerRef={registerRef}>
                        <ul style={ul}>
                            <li style={li}><strong style={{ color: COLORS.text }}>Building administrators</strong> are the primary users of Imarat Digital and manage the data for their building(s)</li>
                            <li style={li}>Tenants do not use the app directly; any tenant-related records are entered and managed by the administrator</li>
                            <li style={li}>We do not sell your personal information to third parties</li>
                            <li style={li}>Data may be shared with service providers who help us operate the app, under confidentiality obligations</li>
                        </ul>
                    </Section>

                    <Section id="third-party" title="Third-party services" icon={Link2} registerRef={registerRef}>
                        <p>Imarat Digital uses the following third-party services to operate:</p>
                        <ul style={ul}>
                            <li style={li}><strong style={{ color: COLORS.text }}>Firebase (Google)</strong> — authentication, cloud database (Firestore), cloud storage, push notifications (Firebase Cloud Messaging), and app integrity verification (App Check)</li>
                        </ul>
                        <p>
                            We do not currently integrate a payment gateway. Subscription payments are handled
                            manually via bank transfer, and payment confirmation is recorded by an administrator
                            within the app.
                        </p>
                    </Section>

                    <Section id="storage-security" title="Data storage & security" icon={Lock} registerRef={registerRef}>
                        <ul style={ul}>
                            <li style={li}>Your data is stored securely using Firebase Cloud Firestore and Firebase Storage</li>
                            <li style={li}>We use Firebase security rules and App Check to restrict access to authorized users and verified app instances only</li>
                            <li style={li}>No method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security</li>
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
                        <ul style={ul}>
                            <li style={li}>Access the personal information we hold about you</li>
                            <li style={li}>Request correction of inaccurate information</li>
                            <li style={li}>Request deletion of your account and data</li>
                            <li style={li}>Withdraw consent to push notifications by disabling them in your device settings</li>
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
                        <div style={{
                            background: COLORS.bg, borderRadius: 12, padding: '14px 16px',
                            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 6,
                        }}>
                            <Mail size={16} color={COLORS.primary} />
                            <span style={{ color: COLORS.text, fontWeight: 600 }}>support@imaratdigital.app</span>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}