import Link from "next/link";
import { ArrowLeft, FileText, CreditCard, Users, ShieldCheck, AlertTriangle, Clock } from "lucide-react";

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

function HighlightBox({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "amber" | "red" }) {
  const styles = {
    blue: { background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" },
    amber: { background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.18)" },
    red: { background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)" },
  };
  return (
    <div className="rounded-xl p-4 mt-3" style={styles[color]}>
      {children}
    </div>
  );
}

export default function TermsPage() {
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
            <FileText className="w-3 h-3" />
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-white/40 text-sm">
            <strong className="text-white/60">{COMPANY}</strong> &nbsp;·&nbsp; Last Updated: {LAST_UPDATED}
          </p>
          <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-2xl">
            Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before using the services provided by {COMPANY} (&ldquo;D2D No More,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our services, submitting payment information, or executing any agreement with D2D No More, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* 1. Acceptance */}
          <Section>
            <SectionHeader icon={FileText} title="1. Acceptance of Terms" />
            <P>
              These Terms constitute a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;Partner,&rdquo; or &ldquo;you&rdquo;) and {COMPANY}. By engaging our services, submitting a payment method, or signing any service agreement, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional agreements specific to your service plan.
            </P>
            <P>
              If you do not agree to these Terms, you may not use our services. We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.
            </P>
          </Section>

          {/* 2. Services */}
          <Section>
            <SectionHeader icon={FileText} title="2. Description of Services" />
            <P>
              D2D No More provides AI-powered marketing services for home service providers, including but not limited to:
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>Digital marketing campaign creation and management</Li>
              <Li>Lead generation and qualification</Li>
              <Li>AI Chat Bot deployment and management</Li>
              <Li>AI Search Optimization (AI SEO)</Li>
              <Li>AI Voice Agent services</Li>
              <Li>Brand kit creation and creative design</Li>
              <Li>Landing page development</Li>
              <Li>Weekly campaign performance reviews</Li>
            </ul>
            <P>
              Specific services included in your plan are defined in your service agreement and/or the applicable plan description at the time of enrollment.
            </P>
          </Section>

          {/* 3. Partner Program */}
          <Section>
            <SectionHeader icon={Users} title="3. Partner Program" />
            <P>
              D2D No More operates a partner program for home service companies who engage us to generate and deliver qualified leads. By participating as a Partner, you agree to the following:
            </P>
            <ul className="flex flex-col gap-2 mb-4">
              <Li>You are a licensed, insured business operating legally within your jurisdiction.</Li>
              <Li>Lead data provided by D2D No More is for your exclusive use in contacting prospective customers for your own business. You may not resell, sublicense, redistribute, or transfer lead data to any third party without our express written consent.</Li>
              <Li>You agree to contact all leads in compliance with the TCPA, CAN-SPAM Act, FTC regulations, and all applicable federal and state laws.</Li>
              <Li>You are solely responsible for your communications and relationships with leads following delivery. D2D No More is not liable for outcomes arising from Partner&apos;s use of lead data.</Li>
              <Li>Partners must maintain a valid payment method on file for the duration of the engagement.</Li>
            </ul>
            <HighlightBox color="blue">
              <p className="text-white/70 text-xs leading-relaxed">
                <strong className="text-blue-300">Partner Data Handling:</strong> All lead records generated through D2D No More campaigns remain the intellectual property of D2D No More until delivered to the Partner. Once delivered, Partners hold a limited, non-exclusive license to use lead contact information for their direct marketing purposes only.
              </p>
            </HighlightBox>
          </Section>

          {/* 4. Payment Terms */}
          <Section>
            <SectionHeader icon={CreditCard} title="4. Payment Terms" />
            <P>
              D2D No More offers three payment structures for lead generation services. Your selected payment plan will be confirmed in writing at the time of enrollment. All plans require a valid credit or debit card on file prior to service commencement. <strong className="text-white/80">There is no upfront charge for lead generation services under any plan.</strong>
            </P>

            <div className="flex flex-col gap-4 mt-4">

              {/* Plan A: Net 8 */}
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black tracking-widest uppercase text-blue-400">Plan A</span>
                  <span className="text-white font-bold">Net 8 — Post-Service Billing</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  <Li>Services are rendered and leads are delivered during the service period.</Li>
                  <Li>On the <strong className="text-white/80">8th calendar day</strong> following the start of each service period, the total outstanding balance is automatically charged to the card on file.</Li>
                  <Li>There is no upfront charge. You are billed in arrears for services delivered in the preceding 7 days.</Li>
                  <Li>Failure to maintain a valid payment method may result in immediate suspension of services.</Li>
                </ul>
              </div>

              {/* Plan B: Daily */}
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black tracking-widest uppercase text-blue-400">Plan B</span>
                  <span className="text-white font-bold">Daily Pay-As-You-Go</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  <Li>Charges are calculated based on services delivered each calendar day.</Li>
                  <Li>Your card on file is automatically charged each day for the previous day&apos;s activity.</Li>
                  <Li>There is no upfront charge. You are billed only for services actually delivered.</Li>
                  <Li>Days with no activity incur no charge.</Li>
                </ul>
              </div>

              {/* Plan C: Prepay Monthly */}
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black tracking-widest uppercase text-blue-400">Plan C</span>
                  <span className="text-white font-bold">Prepay Monthly — 50-Lead Threshold</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  <Li>Client prepays for a monthly package with a <strong className="text-white/80">minimum of 50 qualified leads</strong> per billing cycle.</Li>
                  <Li>Upon reaching the 50-lead threshold within a billing cycle, the card on file is automatically charged again for the next 50-lead block.</Li>
                  <Li>Charges recur automatically each time the lead threshold is met, with no manual approval required.</Li>
                  <Li>Unused leads at the end of a billing cycle do not carry over and are not refundable unless otherwise stated in a separate written agreement.</Li>
                </ul>
              </div>
            </div>

            <HighlightBox color="amber">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-yellow-300">Important:</strong> By providing a payment method and engaging D2D No More&apos;s services, you expressly authorize D2D No More to charge your card automatically on the 8th day of each service period (Net 8), daily (Daily Pay-As-You-Go), or upon reaching each 50-lead threshold (Prepay Monthly), as applicable to your selected plan — without requiring additional authorization for each charge.
              </p>
            </HighlightBox>
          </Section>

          {/* 5. Billing Authorization */}
          <Section>
            <SectionHeader icon={CreditCard} title="5. Billing Authorization & Card on File" />
            <P>
              By submitting a payment method to D2D No More, you represent and warrant that you are the authorized cardholder or have explicit authorization from the cardholder to use the payment method. You authorize D2D No More to charge the card on file for:
            </P>
            <ul className="flex flex-col gap-2 mb-4">
              <Li>All charges arising under your selected payment plan (Net 8, Daily, or Prepay Monthly).</Li>
              <Li>Any outstanding balances not settled within the payment terms.</Li>
              <Li>Amounts associated with fraudulent credits — credits applied to your account that are later determined to have been obtained through misrepresentation, manipulation, or abuse of our credit policies.</Li>
              <Li>Amounts recovered in connection with chargebacks or payment disputes that were not submitted through D2D No More&apos;s formal dispute resolution process (see Section 9).</Li>
              <Li>Any fees for expedited data record requests following account cancellation (see Section 10).</Li>
            </ul>
            <HighlightBox color="red">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-red-400">Chargeback Policy:</strong> If you initiate a chargeback with your card issuer without first following D2D No More&apos;s dispute resolution process, you acknowledge that D2D No More may contest the chargeback and that the outstanding amount, plus any chargeback fees incurred by D2D No More, may be recovered by charging the card on file or through collections. Initiating unauthorized chargebacks may result in immediate termination of services.
              </p>
            </HighlightBox>
          </Section>

          {/* 6. Lead Qualification & Credits */}
          <Section>
            <SectionHeader icon={Users} title="6. Lead Qualification & Credits" />
            <P>
              D2D No More defines a &ldquo;qualified lead&rdquo; as a prospective customer contact that meets the criteria specified in your service agreement (e.g., valid contact information, geographic service area, expressed interest in the relevant service category, homeowner or decision-maker status). Specific qualification criteria are defined in your individual campaign brief.
            </P>
            <ul className="flex flex-col gap-2 mb-4">
              <Li>Leads that do not meet the agreed-upon qualification criteria are eligible for a credit to your account for future lead purchases.</Li>
              <Li>Credit requests must be submitted within <strong className="text-white/80">72 hours</strong> of lead delivery with supporting documentation (e.g., call recording, notes demonstrating the lead did not qualify).</Li>
              <Li>Credits are applied to your account balance and may be used toward future lead purchases. Credits have no cash value and are non-transferable.</Li>
              <Li>D2D No More reserves the right to review and approve or deny credit requests at its sole discretion.</Li>
              <Li>Abuse of the credit request process, including submission of fraudulent or bad-faith credit requests, may result in denial of future credits and/or termination of the account.</Li>
            </ul>
            <HighlightBox color="blue">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-blue-300">Note:</strong> Credits are applied to your partner account for future lead purchases only. Credits do not reduce current outstanding balances unless expressly agreed upon in writing by D2D No More.
              </p>
            </HighlightBox>
          </Section>

          {/* 7. No Refunds */}
          <Section>
            <SectionHeader icon={AlertTriangle} title="7. No Refund Policy" />
            <P>
              <strong className="text-white/90">All services provided by D2D No More are non-refundable.</strong> This includes, but is not limited to, marketing campaign fees, lead generation charges, AI service subscriptions, brand kit development, creative services, and any other deliverables or services rendered.
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>Payments made for services already rendered are final and non-refundable under any circumstances.</Li>
              <Li>Prepaid amounts for services not yet rendered may be eligible for account credit (not a cash refund) at D2D No More&apos;s sole discretion and only upon formal written request and account review.</Li>
              <Li>No refunds will be issued due to dissatisfaction with lead quality, lead conversion rates, campaign performance, or business outcomes.</Li>
              <Li>Cancellation of services does not entitle the Client to a refund of any amounts previously paid.</Li>
            </ul>
            <P>
              The non-refundable nature of our services reflects the significant upfront costs associated with campaign build-out, creative development, platform setup, and ongoing labor. By engaging our services, you acknowledge and accept this policy.
            </P>
          </Section>

          {/* 8. No Guarantees */}
          <Section>
            <SectionHeader icon={AlertTriangle} title="8. No Express Guarantee of Results" />
            <P>
              <strong className="text-white/90">D2D No More makes no express or implied guarantees regarding the results, outcomes, or performance of any service.</strong> Marketing results are inherently variable and depend on factors beyond our control, including market conditions, competition, seasonal demand, response rates, and Client actions.
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>We do not guarantee a specific number of leads, appointments, conversions, sales, revenue, or return on investment.</Li>
              <Li>We do not guarantee that leads delivered will result in closed business, signed contracts, or revenue for the Client.</Li>
              <Li>Past performance of campaigns for other clients is not a guarantee or prediction of future performance.</Li>
              <Li>Any projections, estimates, or case studies shared by D2D No More are illustrative only and do not constitute a guarantee.</Li>
            </ul>
            <P>
              SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, D2D NO MORE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </P>
          </Section>

          {/* 9. Dispute Resolution */}
          <Section>
            <SectionHeader icon={FileText} title="9. Dispute Resolution Process" />
            <P>
              D2D No More is committed to resolving billing and service disputes fairly and promptly. <strong className="text-white/80">All disputes must follow the process outlined below before any chargeback, reversal, or third-party escalation is initiated.</strong>
            </P>
            <div className="flex flex-col gap-3 mt-3">
              <div className="rounded-xl p-4" style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.12)" }}>
                <p className="text-white font-semibold text-sm mb-1">Step 1 — Written Notice</p>
                <p className="text-white/55 text-xs leading-relaxed">Submit a written dispute to {CONTACT_EMAIL} with subject line &ldquo;Billing Dispute — [Your Account Name].&rdquo; Include your account details, the disputed charge(s), the amount, the date, and a description of the issue.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.12)" }}>
                <p className="text-white font-semibold text-sm mb-1">Step 2 — Review Period</p>
                <p className="text-white/55 text-xs leading-relaxed">D2D No More will acknowledge your dispute within 3 business days and complete a full review within 10 business days. We may request supporting documentation during this period.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.12)" }}>
                <p className="text-white font-semibold text-sm mb-1">Step 3 — Resolution</p>
                <p className="text-white/55 text-xs leading-relaxed">We will provide a written resolution. If the dispute is upheld, a credit will be applied to your account. If denied, a detailed explanation will be provided. If you remain unsatisfied following this process, disputes will be resolved through binding arbitration under the rules of the American Arbitration Association (AAA).</p>
              </div>
            </div>
            <HighlightBox color="amber">
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-yellow-300">Failure to Follow This Process:</strong> Initiating a chargeback or payment reversal with your card issuer or bank without first completing Steps 1 and 2 above constitutes a breach of these Terms. D2D No More reserves the right to recover disputed amounts plus applicable fees and to terminate services immediately.
              </p>
            </HighlightBox>
          </Section>

          {/* 10. Data Records */}
          <Section>
            <SectionHeader icon={Clock} title="10. Lead Records & Data Access" />
            <P>
              D2D No More maintains all lead records, campaign data, communication logs, and associated data for a minimum of <strong className="text-white/80">five (5) years</strong> from the date of generation.
            </P>
            <ul className="flex flex-col gap-2 mb-4">
              <Li><strong className="text-white/80">Active Customers:</strong> Full access to all lead records and campaign data through the D2D No More platform is included at no charge while your account is active and in good standing.</Li>
              <Li>
                <strong className="text-white/80">Post-Cancellation Access:</strong> Following account cancellation or termination, data access is available under the following terms:
                <ul className="flex flex-col gap-1 mt-2 ml-4">
                  <Li><strong className="text-white/70">Standard Request (Free):</strong> Submitted in writing to {CONTACT_EMAIL}; fulfilled within 3 to 4 weeks of the request date.</Li>
                  <Li><strong className="text-white/70">Expedited Request ($50 per record):</strong> Fee is charged to the card on file (or invoiced if no card is available) prior to fulfillment. Expedited requests are fulfilled within 5 business days of payment receipt.</Li>
                </ul>
              </Li>
              <Li>Record requests must specify the account name, date range, and type of data requested. D2D No More reserves the right to redact information that is subject to confidentiality obligations or does not belong to the requesting party.</Li>
              <Li>After the 5-year retention period, records may be permanently deleted. D2D No More is not obligated to retain records beyond this period.</Li>
            </ul>
          </Section>

          {/* 11. Cancellation */}
          <Section>
            <SectionHeader icon={FileText} title="11. Cancellation Policy" />
            <P>
              Either party may cancel services by providing written notice to the other party. Upon cancellation:
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>All outstanding balances become immediately due and payable.</Li>
              <Li>The card on file may be charged for any outstanding balance at the time of cancellation.</Li>
              <Li>Active campaigns will be paused within 2 business days of cancellation notice.</Li>
              <Li>Access to the D2D No More platform will be maintained for 14 days post-cancellation to allow for data export, after which access will be terminated.</Li>
              <Li>No refunds will be issued for unused prepaid periods or services already committed.</Li>
              <Li>Credits held in your account at the time of cancellation expire 30 days after the cancellation date and hold no cash value.</Li>
            </ul>
          </Section>

          {/* 12. Limitation of Liability */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="12. Limitation of Liability" />
            <P>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL D2D NO MORE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOST DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF OUR SERVICES.
            </P>
            <P>
              D2D NO MORE&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO D2D NO MORE IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </P>
          </Section>

          {/* 13. Governing Law */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="13. Governing Law & Arbitration" />
            <P>
              These Terms are governed by and construed in accordance with the laws of the United States and applicable state law, without regard to conflict of law provisions.
            </P>
            <P>
              Any dispute arising out of or relating to these Terms, the Privacy Policy, or D2D No More&apos;s services that cannot be resolved through the dispute process in Section 9 shall be submitted to final and binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration shall be conducted in English. Judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction.
            </P>
            <P>
              <strong className="text-white/80">Class Action Waiver:</strong> You agree that any arbitration or legal proceedings shall be conducted solely on an individual basis. You waive any right to bring or participate in any class action, class arbitration, or representative proceeding against D2D No More.
            </P>
          </Section>

          {/* 14. TCPA Notice */}
          <Section>
            <SectionHeader icon={ShieldCheck} title="14. TCPA Compliance Notice for Partners" />
            <P>
              Partners who use D2D No More&apos;s AI Voice Agent, AI Chat Bot, or any automated communication tool to contact leads are solely responsible for ensuring compliance with the Telephone Consumer Protection Act (47 U.S.C. § 227) and its regulations, including:
            </P>
            <ul className="flex flex-col gap-2 mb-3">
              <Li>Obtaining prior express written consent before placing autodialed or prerecorded calls or texts to wireless numbers.</Li>
              <Li>Maintaining internal Do Not Call lists and honoring opt-out requests promptly.</Li>
              <Li>Complying with all federal and state calling hour restrictions.</Li>
              <Li>Providing required caller identification disclosures on all outbound calls.</Li>
            </ul>
            <P>
              D2D No More disclaims all liability for TCPA violations arising from Partner&apos;s independent use of leads or communication tools following delivery.
            </P>
          </Section>

          {/* 15. Contact */}
          <Section>
            <SectionHeader icon={FileText} title="15. Contact & Legal Notices" />
            <P>
              All legal notices, billing disputes, and formal communications must be submitted in writing to:
            </P>
            <div className="mt-2 space-y-1">
              <p className="text-white/70 text-sm"><strong className="text-white/90">Company:</strong> {COMPANY}</p>
              <p className="text-white/70 text-sm"><strong className="text-white/90">Legal & Billing:</strong> {CONTACT_EMAIL}</p>
              <p className="text-white/70 text-sm"><strong className="text-white/90">Website:</strong> d2dnomore.io</p>
            </div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              These Terms, together with the Privacy Policy and any executed service agreements, constitute the entire agreement between you and D2D No More and supersede all prior agreements, representations, and understandings. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </Section>

          {/* Footer links */}
          <div className="flex flex-wrap gap-4 pt-4 pb-8">
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Privacy Policy →
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
