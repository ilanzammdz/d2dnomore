import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/hsp2/ui/accordion";

const FAQS = [
  {
    question: "What is a U-factor, and why does it matter?",
    answer:
      "U-factor measures how well a window prevents heat from escaping — the lower the number, the better the insulation. It's one of the clearest ways to compare energy performance between window lines, alongside solar heat gain coefficient (SHGC).",
  },
  {
    question: "How long does a typical installation take?",
    answer:
      "Most whole-home replacement projects take one to three days depending on the number of windows. New-construction installs are scheduled around your builder's framing timeline.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Most local installers in our network offer flexible financing options, and we'll walk you through them during your free quote.",
  },
  {
    question: "What's the difference between double-pane and triple-pane glass?",
    answer:
      "Triple-pane glass adds a third layer and an extra insulating air (or gas) gap, improving energy efficiency and sound dampening — at a higher upfront cost. It tends to make the most sense in colder climates or noisy areas.",
  },
  {
    question: "Are your windows ENERGY STAR certified?",
    answer:
      "Our EcoGuard Series is ENERGY STAR Most Efficient certified, and most of our other collections meet or exceed ENERGY STAR requirements for their region. Certification details are available for every product line.",
  },
  {
    question: "What kind of warranty comes with the windows?",
    answer:
      "Coverage varies by collection, ranging from a 10-year warranty on our Heritage and Foundation Series up to a limited lifetime warranty on our Summit and Crestline collections.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Questions
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion className="mt-10 w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
