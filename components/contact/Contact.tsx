"use client";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[#111111]/10 bg-[#f7f5f0] px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">Contact</p>
          <h2 className="text-3xl text-[#111111] sm:text-4xl">Open to thoughtful product work and collaborative builds.</h2>
        </div>
        <a
          href="mailto:hello@example.com"
          className="inline-flex rounded-full border border-[#111111]/15 px-5 py-3 text-sm uppercase tracking-[0.3em] text-[#111111] transition hover:bg-[#111111] hover:text-[#f7f5f0]"
        >
          hello@example.com
        </a>
      </div>
    </section>
  );
}
