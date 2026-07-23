"use client";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">About</p>
          <h2 className="text-3xl text-[#111111] sm:text-4xl">Quietly building between disciplines.</h2>
        </div>
        <div className="space-y-4 text-base leading-8 text-[#111111]/75">
          <p>
            I work at the intersection of data, design, and code, bringing structure to ambiguity and clarity to complex decisions.
          </p>
          <p>
            The goal is not to present three separate identities; it is to show one thoughtful approach that can move fluidly from problem framing to interface delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
