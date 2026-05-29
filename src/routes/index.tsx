import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Menu, X, Star } from "lucide-react";
import { WA_LINK, WA_LINK_FLOAT, WhatsAppIcon, WhatsAppButton } from "./-shared";

const BelowFold = React.lazy(() => import("./-below-fold"));

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------------- HEADER ---------------- */
function Header() {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(253,251,248,0.97)",
        borderBottom: "1px solid rgba(228,220,208,0.72)",
        boxShadow: "0 1px 0 rgba(228,220,208,0.5), 0 2px 20px rgba(26,45,90,0.05)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="AudioVoz — Centro Auditivo">
          <img
            src="/images/logo-audiovoz.webp"
            srcSet="/images/logo-audiovoz-200w.webp 200w, /images/logo-audiovoz.webp 846w"
            sizes="(min-width: 768px) 70px, 63px"
            alt="AudioVoz"
            width={846}
            height={433}
            className="h-8 w-auto object-contain md:h-9"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-[15px] font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--av-text)" }}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-semibold text-white md:px-4 md:text-[15px]"
            style={{ backgroundColor: "var(--av-accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--av-accent-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--av-accent)")}
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Fale pelo WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            onClick={() => setOpen((s) => !s)}
            style={{ color: "var(--av-primary)" }}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t lg:hidden" style={{ borderColor: "var(--av-border)" }}>
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-3">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="min-h-[44px] rounded-md px-3 py-2 text-[15px] font-medium"
                style={{ color: "var(--av-text)" }}
              >
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="av-noise relative overflow-hidden text-white"
      style={{
        background: "radial-gradient(ellipse at 28% 62%, #1B3A6C 0%, #0D1D3A 52%, #060B18 100%)",
        minHeight: "580px",
      }}
    >
      {/* ── Background foto — mobile only ── */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <img
          src="/images/jurandy-fonoaudiologo-audiovoz.webp"
          srcSet="/images/jurandy-fonoaudiologo-audiovoz-430w.webp 430w, /images/jurandy-fonoaudiologo-audiovoz-500w.webp 500w, /images/jurandy-fonoaudiologo-audiovoz.webp 768w, /images/jurandy-fonoaudiologo-audiovoz-1080w.webp 1080w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,11,24,0.88) 0%, rgba(10,20,45,0.70) 45%, rgba(6,11,24,0.92) 100%)",
          }}
        />
      </div>

      {/* ── Foto editorial — desktop: sangra à direita, full-height ── */}
      <div
        aria-hidden
        className="av-load-scale absolute inset-y-0 right-0 hidden w-[55%] lg:block"
        style={{ "--d": "0.18s" } as React.CSSProperties}
      >
        <img
          src="/images/jurandy-fonoaudiologo-audiovoz.webp"
          srcSet="/images/jurandy-fonoaudiologo-audiovoz-500w.webp 500w, /images/jurandy-fonoaudiologo-audiovoz.webp 768w, /images/jurandy-fonoaudiologo-audiovoz-1080w.webp 1080w"
          sizes="660px"
          alt=""
          className="h-full w-full object-cover object-[50%_25%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, rgba(0,0,0,0.85) 35%, black 50%), linear-gradient(to top, transparent 0%, black 22%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, rgba(0,0,0,0.85) 35%, black 50%), linear-gradient(to top, transparent 0%, black 22%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Quote card */}
        <div className="absolute bottom-20 left-[14%] right-5">
          <div
            className="av-glass rounded-xl border p-5"
            style={{
              backgroundColor: "rgba(10,20,42,0.60)",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            <p className="font-serif text-[18px] font-semibold leading-snug">
              "Desde 1998, o atendimento começa pela escuta."
            </p>
            <p className="mt-2 text-[13px] text-white/75">
              Jurandy — Fonoaudiólogo fundador · AudioVoz, São Miguel Paulista
            </p>
          </div>
        </div>
      </div>

      {/* ── Glow ambiente — lado do conteúdo ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 5% 55%, rgba(40,90,180,0.55) 0%, transparent 65%)",
        }}
      />
      {/* ── Glow accent — canto superior esquerdo ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-[380px] w-[380px] rounded-full opacity-15"
        style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }}
      />

      {/* ── Conteúdo principal ── */}
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8 md:py-20 lg:py-24">
        <div className="w-full max-w-[560px]">
          <div
            className="av-load inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: "var(--av-accent)" }}
            />
            <span className="text-[13px] font-medium tracking-wide text-white/85">
              Avaliação auditiva em São Miguel Paulista
            </span>
          </div>
          <h1
            className="av-load font-serif mt-5 text-[28px] font-bold leading-[1.15] md:text-[40px] lg:text-[48px]"
            style={{ "--d": "0.22s" } as React.CSSProperties}
          >
            Voltar a ouvir é voltar a participar.
          </h1>
          <p
            className="av-load mt-5 text-[17px] leading-[1.6] text-white/90 md:text-[18px]"
            style={{ "--d": "0.34s" } as React.CSSProperties}
          >
            Às vezes, a dificuldade auditiva afasta das conversas que importam. A AudioVoz está em
            São Miguel Paulista desde 1998 para ajudar você ou alguém da sua família a ter mais
            qualidade de vida.
          </p>

          {/* Trust stats — prova social */}
          <div
            className="av-load mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
            style={{ "--d": "0.44s" } as React.CSSProperties}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#ffd76b" }} />
                ))}
              </div>
              <span className="text-[14px] font-bold text-white">5.0</span>
              <span className="text-[13px] text-white/55">no Google</span>
            </div>
            <span
              aria-hidden
              className="h-[14px] w-px"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            />
            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-bold text-white">+730</span>
              <span className="text-[13px] text-white/55">avaliações</span>
            </div>
            <span
              aria-hidden
              className="h-[14px] w-px"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            />
            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-bold text-white">+3.000</span>
              <span className="text-[13px] text-white/55">pacientes</span>
            </div>
          </div>

          <div
            className="av-load mt-7 flex flex-col items-start gap-3"
            style={{ "--d": "0.58s" } as React.CSSProperties}
          >
            <WhatsAppButton href={WA_LINK} className="w-full md:w-auto">
              Agendar avaliação pelo WhatsApp
            </WhatsAppButton>
            <a href="#servicos" className="text-[14px] text-white underline underline-offset-4">
              Conheça nossos serviços
            </a>
            <p className="text-[13px] text-white/75">
              Uma conversa pelo WhatsApp já é o suficiente para começar — para você ou para alguém da família.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FLOATING WA ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="av-pulse fixed bottom-5 right-5 z-50 inline-flex min-h-[56px] items-center gap-2 rounded-full px-4 py-3 text-[15px] font-semibold text-white shadow-lg md:bottom-7 md:right-7 md:px-5"
      style={{ backgroundColor: "var(--av-wa)" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--av-wa-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--av-wa)")}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--av-bg)" }}>
      <Header />
      <main>
        <Hero />
        <React.Suspense fallback={null}>
          <BelowFold />
        </React.Suspense>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
