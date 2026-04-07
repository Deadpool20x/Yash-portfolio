"use client";

import { useState } from "react";
import { CONTACT_LINKS } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "email") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }
  if (icon === "github") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

const FORM_FIELDS = [
  { label: "NAME *", id: "name", type: "text", placeholder: "Your name", required: true, isTextarea: false },
  { label: "EMAIL *", id: "email", type: "email", placeholder: "your@email.com", required: true, isTextarea: false },
  { label: "SUBJECT", id: "subject", type: "text", placeholder: "What's this about?", required: false, isTextarea: false },
  { label: "MESSAGE *", id: "message", type: "text", placeholder: "Tell me about your project...", required: true, isTextarea: true },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  }

  return (
    <section id="contact" className="border-b-[3px] border-ink">
      <SectionHeader
        title=">_ CONTACT // TRANSMIT_DATA"
        count="SECTION_06 / 06"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — contact info */}
        <RevealWrapper className="border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink p-6 sm:p-8 lg:p-12">
          <h2
            className="font-bold tracking-[-2px] leading-none mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Let&apos;s build something{" "}
            <span className="bg-yellow px-1">bold.</span>
          </h2>
          <p className="text-[1rem] text-[#444] mb-8 leading-relaxed">
            I&apos;m currently available for internships and freelance work, and
            open to full-time opportunities after graduation. If you have a
            project that refuses to be boring — let&apos;s talk.
          </p>

          <div className="space-y-4">
            {CONTACT_LINKS.map((item, i) => {
              const inner = (
                <div className="flex items-center gap-4">
                  <span className="text-[1.2rem] flex-shrink-0 flex items-center justify-center w-8">
                    <ContactIcon icon={item.icon} />
                  </span>
                  <div>
                    <div className="font-mono text-[0.68rem] text-[#666] uppercase tracking-widest">
                      {item.label}
                    </div>
                    <div className="text-[0.88rem] font-semibold break-all">
                      {item.value}
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block border-[3px] border-ink px-5 py-4 shadow-brutal text-ink no-underline transition-all duration-100 hover:bg-yellow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={i}
                  className="block border-[3px] border-ink px-5 py-4 shadow-brutal"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </RevealWrapper>

        {/* Right — contact form */}
        <RevealWrapper delay={0.1} className="p-6 sm:p-8 lg:p-12">
          <div className="font-mono text-[0.72rem] text-[#999] mb-6 uppercase tracking-[2px]">
            START_TRANSMISSION
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {FORM_FIELDS.map((field) => (
              <div key={field.id} className="mb-5">
                <label
                  htmlFor={field.id}
                  className="block font-mono text-[0.7rem] font-bold uppercase tracking-widest mb-1.5"
                >
                  {field.label}
                </label>
                {field.isTextarea ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={4}
                    className="w-full border-[3px] border-ink px-4 py-3 font-sans text-[0.9rem] bg-paper outline-none shadow-[3px_3px_0_#0a0a0a] focus:shadow-[5px_5px_0_#FFD600] transition-shadow duration-100 resize-y"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border-[3px] border-ink px-4 py-3 font-sans text-[0.9rem] bg-paper outline-none shadow-[3px_3px_0_#0a0a0a] focus:shadow-[5px_5px_0_#FFD600] transition-shadow duration-100"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ink text-yellow border-[3px] border-ink px-4 py-4 font-mono text-[0.85rem] font-bold uppercase tracking-[2px] shadow-brutal transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg hover:bg-red disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "TRANSMITTING..." : "TRANSMIT MESSAGE →"}
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-yellow border-[3px] border-ink font-mono text-[0.82rem] font-bold">
              ✓ MESSAGE_RECEIVED // I&apos;ll get back to you within 24h.
            </div>
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}
