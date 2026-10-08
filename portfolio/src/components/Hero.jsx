import { profile } from "../data/profile";
import Reveal from "./Reveal";
import Galaxy from "./Galaxy";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home" className="marginalia-block relative" aria-label="Pembuka">
      {/* Galaxy Background Bleed */}
      <div className="absolute top-0 left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen h-full overflow-hidden -z-10 bg-black pointer-events-auto">
        <Galaxy 
          transparent={false}
          lightMode={false}
          glowIntensity={1.5}
          density={1.5}
          starSpeed={0.8}
        />
        {/* Gradient overlay to blend into the light theme below */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
      </div>

      <aside className="marginalia-aside relative z-10">
        <p className="marginalia-label !text-accent mix-blend-difference">01 / INTRO</p>
        <p className="marginalia-date mix-blend-difference text-surface/70">Catatan Pembuka</p>
        <p className="marginalia-note mix-blend-difference text-surface/70">
          Dokumentasi personal, rekam jejak akademik, dan kurasi karya.
        </p>
      </aside>

      <div className="marginalia-prose relative z-10 text-surface">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium mix-blend-difference">
            Dokumentasi & Portofolio
          </p>

          <h1 className="marginalia-headline text-surface mix-blend-difference">
            {profile.name}, <em className="accent-clause !text-accent">rekayasa perangkat lunak.</em>
          </h1>

          <p className="marginalia-body text-surface/80 mix-blend-difference">
            {profile.headline}
          </p>

          <p className="marginalia-body text-surface/80 mix-blend-difference">
            Halaman ini disusun dengan struktur editorial ilmiah sebagai ikhtisar
            komprehensif atas kemampuan teknis, rekam jejak studi, serta capaian yang telah
            terverifikasi.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              className="btn-primary !bg-surface !text-ink hover:!bg-white"
              onClick={() => scrollTo("achievement")}
            >
              Jelajahi Arsip Pencapaian
            </button>
            <button
              className="btn-secondary !border-surface/40 !text-surface hover:!bg-surface/10 hover:!border-surface"
              onClick={() => scrollTo("about")}
            >
              Baca Data Pokok
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
