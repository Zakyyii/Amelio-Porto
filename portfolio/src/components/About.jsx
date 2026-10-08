import { useState, useMemo } from "react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import FlexCarousel from "./FlexCarousel";
import PixelSwap from "./PixelSwap";

function OrgFlexCarouselGallery({ activity }) {
  // Map activity photos to FlexCarousel items schema
  const carouselItems = useMemo(() => {
    return activity.photos.map((photoObj, idx) => {
      const src = typeof photoObj === "string" ? photoObj : photoObj.src;
      const title = typeof photoObj === "object" ? photoObj.program : `${activity.title} Program ${idx + 1}`;
      const subtitle = typeof photoObj === "object" ? photoObj.desc : `Dokumentasi ${activity.title}`;
      const alt = `${activity.title} - ${title}`;
      return { src, alt, title, subtitle };
    });
  }, [activity]);

  return (
    <div className="mt-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-3 border-b border-hairline gap-2">
        <div>
          <h4 className="font-serif font-semibold text-ink text-base flex items-center gap-2">
            <span>Dokumentasi & Program Kerja {activity.title}</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-xs font-normal">
              Interactive 3D Carousel
            </span>
          </h4>
          <p className="font-serif text-xs text-muted mt-0.5 leading-relaxed">
            {activity.description} — <span className="italic">Geser/gulir untuk menjelajah, klik foto untuk memperbesar & melihat fokus program kerja.</span>
          </p>
        </div>
        <div className="text-left sm:text-right flex-shrink-0">
          <span className="block font-mono text-[10px] tracking-wider uppercase text-accent font-medium">
            {activity.period}
          </span>
          <span className="block font-mono text-[10px] text-muted mt-0.5">
            PERAN: {activity.role}
          </span>
        </div>
      </div>

      {/* Full-width Screen Bleed Container for FlexCarousel */}
      <div className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen overflow-hidden py-4 border-y border-hairline/60 bg-grid-pattern bg-[#faf6f0]">
        <div className="w-full h-[480px] sm:h-[560px] relative">
          <FlexCarousel
            items={carouselItems}
            preset="liquid"
            intro="rise"
            cardHeight={0.55}
            gap={16}
            squeeze={0.2}
            focusOnClick={true}
            captions={true}
            autoplay={true}
            interval={4}
            captureWheel={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [imgError, setImgError] = useState(false);
  const [activeOrg, setActiveOrg] = useState("osis");

  const displayNim = profile.maskNim
    ? profile.nim.slice(0, 4) + "****" + profile.nim.slice(-2)
    : profile.nim;

  const selectedActivity = profile.activities.find(
    (act) => act.id === activeOrg
  );

  return (
    <section id="about" className="marginalia-block" aria-label="Tentang saya">
      <aside className="marginalia-aside">
        <p className="marginalia-label">02 / TENTANG</p>
        <p className="marginalia-date">Biodata & Histori</p>
        <p className="marginalia-note">
          Rincian biografi, riwayat studi formal, dan aktivitas keorganisasian.
        </p>
      </aside>

      <div className="marginalia-prose">
        <Reveal>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-accent mb-3 font-medium">
            Biografi Ringkas
          </p>

          <h2 className="marginalia-headline">
            Latar Belakang &{" "}
            <em className="accent-clause">Perjalanan Akademik.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
            {/* Interactive Photo / Monogram with PixelSwap */}
            <div className="md:col-span-1">
              <div className="relative border border-hairline p-2 bg-[#f5efe4] rounded-xs shadow-2xs group/photobox">
                <PixelSwap
                  firstContent={
                    <div className="w-full h-full relative overflow-hidden rounded-xs bg-[#eae3d5]">
                      {!imgError ? (
                        <img
                          src={profile.photo}
                          alt={`Potret ${profile.name}`}
                          className="w-full h-full object-cover rounded-xs filter grayscale contrast-110"
                          loading="lazy"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border border-hairline rounded-xs">
                          <span className="font-serif text-3xl font-bold text-accent mb-1">
                            {profile.name.charAt(0) || "P"}
                          </span>
                          <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                            Arsip Profil
                          </span>
                        </div>
                      )}
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full relative overflow-hidden rounded-xs bg-[#eae3d5]">
                      <img
                        src={profile.photoAlt || profile.photo}
                        alt={`Potret alternatif ${profile.name}`}
                        className="w-full h-full object-cover rounded-xs filter contrast-105"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to primary photo if alt photo fails
                          e.currentTarget.src = profile.photo;
                        }}
                      />
                    </div>
                  }
                  pixelSize={40}
                  pattern="diagonal"
                  randomness={0.2}
                  duration={1200}
                  pixelDuration={400}
                  trigger="hover"
                  aspectRatio="4 / 5"
                />
                <p className="font-mono text-[10px] text-muted text-center mt-2 tracking-wide">
                  FIG. 01 — SUBJEK PORTOFOLIO (PIXEL SWAP)
                </p>
              </div>
            </div>

            {/* Description & Metadata */}
            <div className="md:col-span-2">
              <p className="marginalia-body mb-6 leading-relaxed">
                {profile.description}
              </p>

              <div className="border-t border-b border-hairline py-4 space-y-3 font-serif text-sm">
                <div className="grid grid-cols-3 gap-2">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-muted">
                    Nama Lengkap
                  </span>
                  <span className="col-span-2 font-medium text-ink">
                    {profile.name}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-muted">
                    NIM
                  </span>
                  <span className="col-span-2 font-mono text-xs text-ink">
                    {displayNim}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-muted">
                    Program Studi
                  </span>
                  <span className="col-span-2 font-medium text-ink">
                    {profile.major}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Riwayat Pendidikan */}
        <Reveal delay={0.1}>
          <div className="pt-6 border-t border-hairline/60">
            <h3 className="font-serif text-xl font-semibold text-ink mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-accent font-normal">
                § 2.1
              </span>
              <span>Riwayat Pendidikan Formal</span>
            </h3>

            <div className="space-y-6">
              {profile.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-hairline/40 last:border-0"
                >
                  <div>
                    <span className="font-mono text-xs text-accent font-medium mr-2">
                      [{edu.level}]
                    </span>
                    <span className="font-serif font-semibold text-ink text-base">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Aktivitas & Organisasi */}
        <Reveal delay={0.15}>
          <div className="pt-10 border-t border-hairline/60 mt-8">
            <h3 className="font-serif text-xl font-semibold text-ink mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-accent font-normal">
                § 2.2
              </span>
              <span>Aktivitas & Keorganisasian</span>
            </h3>

            <p className="marginalia-body mb-6" style={{ maxWidth: "65ch" }}>
              Pilih organisasi di bawah ini untuk menjelajahi galeri program kerja dengan 3D FlexCarousel.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {profile.activities.map((act) => (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => setActiveOrg(act.id)}
                  className={
                    activeOrg === act.id ? "btn-primary" : "btn-secondary"
                  }
                >
                  {act.title}
                </button>
              ))}
            </div>

            {selectedActivity && (
              <OrgFlexCarouselGallery
                key={selectedActivity.id}
                activity={selectedActivity}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
