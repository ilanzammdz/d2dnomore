"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Eye, Clock, Users, FileText } from "lucide-react";

const LAST_UPDATED = "July 8, 2026";
const COMPANY = "D2D No More, LLC";
const CONTACT_EMAIL = "legal@d2dnomore.io";

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.2)" }}
      >
        <Icon className="w-4 h-4 text-blue-400" />
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: "rgba(37,99,235,0.04)",
        border: "1px solid rgba(37,99,235,0.12)",
      }}
    >
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-white/60 text-sm leading-relaxed mb-3 last:mb-0">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-white/60 text-sm leading-relaxed flex items-start gap-2">
      <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  );
}

function UnsubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(
          "Your opt-out request has been received and will be processed within 10 business days. You will receive a confirmation to the email address provided."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please email us directly at " + CONTACT_EMAIL);
      }
    } catch {
      setStatus("error");
      setMessage("Unable to submit request. Please email " + CONTACT_EMAIL + " directly.");
    }
  };

  return (
    <div
      className="rounded-2xl p-6 md:p-8 mt-6"
      style={{
        background: "linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(37,99,235,0.03) 100%)",
        border: "1px solid rgba(96,165,250,0.2)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-4 h-4 text-blue-400" />
        <span className="text-white font-semibold text-sm">Email Opt-Out Request</span>
      </div>
      <p className="text-white/50 text-xs mb-5 leading-relaxed">
        Enter the email address you wish to remove from all D2D No More marketing communications. This request covers email, SMS, and automated calling campaigns.
      </p>

      {status === "success" ? (
        <div
          className="rounded-xl p-4 text-sm"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
        >
          <p className="text-green-400 font-semibold mb-1">Request Received</p>
          <p className="text-white/60 text-xs leading-relaxed">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-blue-500"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-opacity disabled:opacity-50"
            style={{ background: "linear-gradient(90deg,#1D4ED8,#2563EB)" }}
          >
            {status === "loading" ? "Submitting…" : "Unsubscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-red-400 text-xs mt-3">{message}</p>
      )}

      <p className="text-white/30 text-xs mt-4">
        You may also submit opt-out requests in writing to: {CONTACT_EMAIL}. All opt-out requests are honored within 10 business days in compliance with CAN-SPAM, TCPA, and applicable state law.
      </p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(180deg,#04081A 0%,#050C1A 50%,#04081A 100%)" }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right,rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.04) 1px,transparent 1px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to D2D No More
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", color: "rgba(147,197,253,0.75)" }}
          >
            <ShieldCheck className="w-3 h-3" />
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">
            <strong className="text-white/60">{COMPANY}</strong> &nbsp;·&nbsp; Last Updated: {LAST_UPDATED}
          </p>
          <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-2xl">
            This Privacy Policy describes how {COMPANY} (&ldquo;D2D No More,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, and protects your personal information in compliance with the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act, the Federal Trade Commission Act (FTC Act), and applicable state privacy laws.
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* 1. Information We Collect */}
          <Section>
            <SectionHeader icon={Eye} title="1. Information We Collect" />
            <P>We collect information you provide directly to us and information gathered automatically through your use of our services:</P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li><strong className="text-white/80">Contact Information:</strong> Name, email address, phone number, mailing address, and business name.</Li>
              <Li><strong className="text-white/80">Communications:</strong> Records of phone calls, text messages, emails, and chat interactions.</Li>
              <Li><strong className="text-white/80">Payment Information:</strong> Credit/debit card details processed through our secure payment processor. We do not store full card numbers.</Li>
              <Li><strong className="text-white/80">Usage Data:</strong> IP address, browser type, device identifiers, pages visited, time spent, and referral sources via cookies and analytics tools.</Li>
              <Li><strong className="text-white/80">Lead & Campaign Data:</strong> Information associated with leads generated through our services, including prospect contact details submitted by partners.</Li>
              <Li><strong className="text-white/80">Business Information:</strong> Company details, industry type, service area, and marketing preferences provided by partners.</Li>
            </ul>
          </Section>

          {/* 2. How We Use Your Information */}
          <Section>
            <SectionHeader icon={FileText} title="2. How We Use Your Information" />
            <P>We use the information we collect to:</P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>Provide, operate, and improve our marketing and lead generation services.</Li>
              <Li>Process payments and manage billing, including automated charges as authorized.</Li>
              <Li>Send marketing communications including emails, SMS messages, and automated calls — only with your prior express written consent as required by the TCPA.</Li>
              <Li>Qualify, route, and record leads for our partner clients.</Li>
              <Li>Maintain records of all communications and transactions for compliance and dispute resolution.</Li>
              <Li>Detect and prevent fraud, chargebacks, and abuse of our services.</Li>
              <Li>Comply with legal obligations and enforce our Terms and Conditions.</Li>
            </ul>
          </Section>

          {/* 3. TCPA Compliance */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="3. TCPA Compliance & Consent" />
            <P>
              D2D No More strictly complies with the Telephone Consumer Protection Act, 47 U.S.C. § 227, and its implementing regulations at 47 C.F.R. Part 64.
            </P>
            <ul className="flex flex-col gap-2 mb-4">
              <Li>
                <strong className="text-white/80">Prior Express Written Consent:</strong> We obtain prior express written consent before placing any autodialed or prerecorded marketing calls or text messages to your mobile or residential number. This consent is not a condition of purchase.
              </Li>
              <Li>
                <strong className="text-white/80">Do Not Call Registry:</strong> We maintain internal Do Not Call lists and honor the National Do Not Call Registry. Requests to be added to our internal DNC list are processed within 30 days.
              </Li>
              <Li>
                <strong className="text-white/80">Calling Hours:</strong> Outbound calls are placed only between 8:00 AM and 9:00 PM in the recipient&apos;s local time zone, as required by law.
              </Li>
              <Li>
                <strong className="text-white/80">Identification:</strong> All outbound calls clearly identify D2D No More as the calling party and include our contact information.
              </Li>
              <Li>
                <strong className="text-white/80">SMS Opt-Out:</strong> Reply STOP to any SMS message to immediately opt out. Opt-outs via SMS are processed in real time.
              </Li>
            </ul>
            <P>
              If you are a consumer who believes you have been contacted without proper consent, please contact us immediately at {CONTACT_EMAIL}. We take all TCPA compliance complaints seriously and will investigate promptly.
            </P>
          </Section>

          {/* 4. FTC Compliance */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="4. FTC Compliance" />
            <P>
              We operate in compliance with the Federal Trade Commission Act (15 U.S.C. §§ 41–58), the CAN-SPAM Act (15 U.S.C. § 7701 et seq.), and FTC regulations regarding unfair or deceptive acts and practices.
            </P>
            <ul className="flex flex-col gap-2">
              <Li>All commercial email communications include a valid physical postal address and a clearly visible, functional unsubscribe mechanism.</Li>
              <Li>Subject lines and email content accurately represent the content of the message. We do not use deceptive headers or misleading sender information.</Li>
              <Li>Unsubscribe requests via email are honored within 10 business days.</Li>
              <Li>We do not share, sell, or lease email lists in violation of CAN-SPAM requirements.</Li>
              <Li>Material connections between D2D No More and any endorsers, affiliates, or partners are disclosed clearly and conspicuously.</Li>
            </ul>
          </Section>

          {/* 5. Partners & Data Sharing */}
          <Section>
            <SectionHeader icon={Users} title="5. Partners & Data Sharing" />
            <P>
              D2D No More works with home service provider partners to deliver leads and marketing services. In connection with these services:
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>Lead contact information collected through campaigns is shared with the partner client who contracted D2D No More to generate those leads.</Li>
              <Li>Partners acknowledge that lead data shared with them must be handled in compliance with applicable privacy laws, including the TCPA, CAN-SPAM, and state privacy statutes.</Li>
              <Li>We do not sell personal information to unaffiliated third parties for their own marketing purposes.</Li>
              <Li>We may share information with service providers (payment processors, analytics platforms, communication tools) who assist us in operating our business, subject to confidentiality agreements.</Li>
              <Li>We may disclose information as required by law, court order, or government regulation, or to protect the rights and safety of D2D No More, our partners, and the public.</Li>
            </ul>
            <P>
              Partners who participate in our lead generation program are bound by our Partner Terms within the Terms and Conditions. Partners may not resell, sublicense, or redistribute lead data provided by D2D No More without express written authorization.
            </P>
          </Section>

          {/* 6. Data Retention */}
          <Section>
            <SectionHeader icon={Clock} title="6. Data Retention" />
            <P>
              D2D No More retains all lead records, communication logs, campaign data, and transaction records for a minimum period of <strong className="text-white/80">five (5) years</strong> from the date of collection, in accordance with industry standards and applicable law.
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li><strong className="text-white/80">Active Customers:</strong> Full access to your lead records and campaign data is available at no charge while you maintain an active account with D2D No More.</Li>
              <Li>
                <strong className="text-white/80">Post-Cancellation Data Access:</strong> Following account cancellation or termination, customers may request access to their historical records under the following terms:
                <ul className="flex flex-col gap-1 mt-2 ml-4">
                  <Li><strong className="text-white/70">Standard Request:</strong> Provided free of charge within 3 to 4 weeks of the written request.</Li>
                  <Li><strong className="text-white/70">Expedited Request:</strong> A fee of <strong className="text-white/80">$50.00 per record</strong> will be charged prior to fulfillment. Expedited requests are processed within 5 business days.</Li>
                </ul>
              </Li>
              <Li>After the 5-year retention period, records may be securely deleted in accordance with our data destruction policy.</Li>
            </ul>
            <P>
              To submit a data access request, email {CONTACT_EMAIL} with the subject line &ldquo;Data Access Request&rdquo; and include your business name, account number, and the type of records requested.
            </P>
          </Section>

          {/* 7. Cookies & Tracking */}
          <Section>
            <SectionHeader icon={Eye} title="7. Cookies & Tracking Technologies" />
            <P>
              Our website uses cookies, web beacons, and similar tracking technologies to analyze traffic, improve user experience, and support marketing efforts.
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li><strong className="text-white/80">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</Li>
              <Li><strong className="text-white/80">Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics). Data is aggregated and anonymized.</Li>
              <Li><strong className="text-white/80">Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance. Require your consent where applicable.</Li>
            </ul>
            <P>
              You may disable non-essential cookies through your browser settings. Note that disabling cookies may impact the functionality of certain features on our website.
            </P>
          </Section>

          {/* 8. Your Rights */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="8. Your Privacy Rights" />
            <P>
              Depending on your state of residence, you may have the following rights regarding your personal information:
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li><strong className="text-white/80">Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you.</Li>
              <Li><strong className="text-white/80">Right to Delete:</strong> Request deletion of personal information we hold about you, subject to legal retention requirements.</Li>
              <Li><strong className="text-white/80">Right to Opt-Out:</strong> Opt out of marketing communications at any time using the form below or by contacting us directly.</Li>
              <Li><strong className="text-white/80">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</Li>
              <Li><strong className="text-white/80">California Residents (CCPA/CPRA):</strong> California consumers have additional rights including the right to know about data sharing, opt-out of sale, and the right to limit use of sensitive personal information.</Li>
            </ul>
            <P>
              To exercise any of these rights, contact us at {CONTACT_EMAIL} or use the opt-out form below. We will respond to verifiable consumer requests within 45 days.
            </P>
          </Section>

          {/* 9. Unsubscribe */}
          <Section>
            <SectionHeader icon={Mail} title="9. Opt-Out & Unsubscribe" />
            <P>
              You have the right to opt out of marketing communications from D2D No More at any time. This includes email newsletters, promotional SMS messages, and autodialed marketing calls. Opt-out requests do not affect transactional or service-related communications required to fulfill your account obligations.
            </P>
            <P>
              To opt out, you may: (1) click &ldquo;Unsubscribe&rdquo; in any marketing email; (2) reply STOP to any SMS; (3) call us to request removal; or (4) use the form below.
            </P>
            <UnsubscribeForm />
          </Section>

          {/* 10. Data Security */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="10. Data Security" />
            <P>
              D2D No More employs industry-standard technical, administrative, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encrypted data storage, secure payment processing (PCI-DSS compliant), access controls, and regular security assessments.
            </P>
            <P>
              No method of transmission over the Internet or electronic storage is 100% secure. In the event of a data breach affecting your personal information, we will notify affected individuals as required by applicable federal and state law.
            </P>
          </Section>

          {/* 11. Children */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="11. Children&apos;s Privacy" />
            <P>
              Our services are intended for business-to-business use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us at {CONTACT_EMAIL} and we will promptly delete it.
            </P>
          </Section>

          {/* 12. Changes */}
          <Section>
            <SectionHeader icon={FileText} title="12. Changes to This Policy" />
            <P>
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. When we make material changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page and, where required by law, notify you by email or prominent notice on our website. Your continued use of our services after the effective date of any change constitutes your acceptance of the revised policy.
            </P>
          </Section>

          {/* 13. Contact */}
          <Section>
            <SectionHeader icon={Mail} title="13. Contact Us" />
            <P>For privacy-related inquiries, data requests, or to report a compliance concern:</P>
            <div className="mt-2 space-y-1">
              <p className="text-white/70 text-sm"><strong className="text-white/90">Company:</strong> {COMPANY}</p>
              <p className="text-white/70 text-sm"><strong className="text-white/90">Email:</strong> {CONTACT_EMAIL}</p>
              <p className="text-white/70 text-sm"><strong className="text-white/90">Website:</strong> d2dnomore.io</p>
            </div>
          </Section>

          {/* Footer links */}
          <div className="flex flex-wrap gap-4 pt-4 pb-8">
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Terms &amp; Conditions →
            </Link>
            <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
