import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  CalendarCheck,
  Star,
  Users,
  MapPin,
  MessageCircle,
  Wrench,
  Ear,
  Heart,
  Sparkles,
  Accessibility,
  Activity,
  Mic,
  Stethoscope,
  HeadphonesIcon,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_LINK =
  "https://wa.me/5511953852353?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20da%20AudioVoz%20S%C3%A3o%20Miguel%20Paulista%20e%20gostaria%20de%20agendar%20minha%20audiometria%20gr%C3%A1tis.%20Pode%20me%20orientar%3F";
const WA_LINK_VISIT =
  "https://wa.me/5511953852353?text=Ol%C3%A1!%20Quero%20visitar%20a%20unidade%20de%20S%C3%A3o%20Miguel%20Paulista.%20Pode%20me%20orientar%3F";
const WA_LINK_FLOAT =
  "https://wa.me/5511953852353?text=Ol%C3%A1!%20Encontrei%20a%20AudioVoz%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20em%20S%C3%A3o%20Miguel%20Paulista.%20Pode%20me%20orientar%3F";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.4.633-1.003 3.66 3.747-.984.835.732zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  );
}

function Section({
  id,
  className = "",
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className} style={style}>
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">{children}</div>
    </section>
  );
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif font-semibold text-[22px] leading-tight md:text-[32px] lg:text-[36px] ${className}`}
      style={{ color: "var(--av-text)" }}
    >
      {children}
    </h2>
  );
}

function WhatsAppButton({
  href,
  children,
  className = "",
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg font-semibold text-white transition-colors ${
        large ? "px-10 py-[18px] text-[17px]" : "px-8 py-4 text-[16px]"
      } ${className}`}
      style={{ backgroundColor: "var(--av-accent)" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--av-accent-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--av-accent)")}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{children}</span>
    </a>
  );
}

function useRevealOnScroll() {
  React.useEffect(() => {
    let io: IntersectionObserver | undefined;
    let raf1: number;
    let raf2: number;

    // Double-RAF: garante que o browser pintou o estado opacity:0
    // antes do observer disparar — sem isso a CSS transition é ignorada
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const els = document.querySelectorAll<Element>('.av-reveal');
        io = new IntersectionObserver(
          (entries) => entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              io!.unobserve(e.target);
            }
          }),
          { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach(el => io!.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      io?.disconnect();
    };
  }, []);
}

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
      className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur"
      style={{ borderColor: "var(--av-border)" }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="AudioVoz — Centro Auditivo">
          <img
            src="/images/logo-official.png"
            alt="AudioVoz"
            className="h-8 w-auto object-contain md:h-9"
          />
          <span
            className="hidden text-[12px] font-medium uppercase tracking-wider sm:inline"
            style={{ color: "var(--av-text-2)" }}
          >
            Centro Auditivo
          </span>
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
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#0F1E38", minHeight: "580px" }}
    >
      {/* ── Background foto — mobile only ── */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <img src="/images/audiovoz-sm.jpg" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,20,45,0.80) 0%, rgba(10,20,45,0.65) 45%, rgba(10,20,45,0.85) 100%)" }} />
      </div>

      {/* ── Foto editorial — desktop: sangra à direita, full-height ── */}
      <div
        aria-hidden
        className="av-load-scale absolute inset-y-0 right-0 hidden w-[50%] lg:block"
        style={{ '--d': '0.18s' } as React.CSSProperties}
      >
        <img
          src="/images/audiovoz-sm.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Badge Google */}
        <div className="absolute right-5 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13px] font-medium backdrop-blur">
          <Star className="h-3.5 w-3.5 shrink-0" style={{ color: "#ffd76b" }} />
          <span>Nota 5 no Google · 733 avaliações</span>
        </div>
        {/* Quote card */}
        <div className="absolute bottom-6 left-[15%] right-5">
          <div
            className="rounded-xl border border-white/15 p-5 backdrop-blur"
            style={{ backgroundColor: "rgba(15,30,56,0.65)" }}
          >
            <p className="font-serif text-[18px] font-semibold leading-snug">
              "Desde 1998, o atendimento começa pela escuta."
            </p>
            <p className="mt-2 text-[13px] text-white/80">
              Jurandy — Fonoaudiólogo fundador · AudioVoz, São Miguel Paulista
            </p>
          </div>
        </div>
      </div>

      {/* ── Luz sutil no canto superior esquerdo ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }}
      />

      {/* ── Conteúdo principal ── */}
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8 md:py-20 lg:py-24">
        <div className="w-full max-w-[560px]">
          <p className="av-load text-[14px] font-medium text-white/80">
            Clínica de saúde auditiva em São Miguel Paulista
          </p>
          <span
            className="av-load mt-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold text-white"
            style={{ borderColor: "rgba(224,90,26,0.85)", backgroundColor: "rgba(224,90,26,0.28)", '--d': '0.1s' } as React.CSSProperties}
          >
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" /> Teste e audiometria grátis
          </span>
          <h1 className="av-load font-serif mt-5 text-[28px] font-bold leading-[1.15] md:text-[40px] lg:text-[48px]"
            style={{ '--d': '0.22s' } as React.CSSProperties}>
            Cuidado auditivo especializado aqui em São Miguel Paulista.
          </h1>
          <p className="av-load mt-5 text-[17px] leading-[1.6] text-white/90 md:text-[18px]"
            style={{ '--d': '0.34s' } as React.CSSProperties}>
            A AudioVoz está no seu bairro. Atendimento fonoaudiológico, audiometria e aparelhos auditivos — de quem cuida da audição de famílias da Zona Leste desde 1998.
          </p>
          <ul className="av-load mt-5 grid gap-2" style={{ '--d': '0.46s' } as React.CSSProperties}>
            {[
              "Clínica auditiva em São Miguel Paulista e Zona Leste",
              "Teste e audiometria grátis",
              "Audiometria, fonoterapia e aparelhos auditivos",
              "Atendimento para adultos, idosos e crianças",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium text-white">
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0" style={{ color: "rgba(255,255,255,0.9)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="av-load mt-7 flex flex-col items-start gap-3" style={{ '--d': '0.58s' } as React.CSSProperties}>
            <WhatsAppButton href={WA_LINK} className="w-full md:w-auto">
              Agende sua audiometria grátis — São Miguel Paulista
            </WhatsAppButton>
            <a href="#servicos" className="text-[14px] text-white underline underline-offset-4">
              Conheça nossos serviços em São Miguel
            </a>
            <p className="text-[13px] text-white/75">
              O primeiro passo pode ser simples: agende seu teste auditivo gratuito.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- TRUST BLOCK ---------------- */
function TrustBlock() {
  const items = [
    { icon: Clock, text: "Cuidando da audição de famílias desde 1998" },
    { icon: CalendarCheck, text: "Teste e audiometria grátis" },
    { icon: Star, text: "Nota 5 no Google com 733 avaliações" },
    { icon: Users, text: "Atendemos adultos, idosos e crianças" },
    { icon: MapPin, text: "Atendemos São Miguel Paulista e Zona Leste" },
    { icon: MessageCircle, text: "Agendamento pelo WhatsApp" },
    { icon: Wrench, text: "Ajustes vitalícios e garantia de 2 anos" },
  ];
  return (
    <Section className="py-14 md:py-20">
      <div className="av-reveal mx-auto max-w-3xl text-center">
        <H2>Por que tantas famílias escolhem a AudioVoz?</H2>
        <p className="mt-5 text-[16px] leading-[1.65] md:text-[17px]" style={{ color: "var(--av-text-2)" }}>
          A AudioVoz acompanha a saúde auditiva de famílias de São Miguel Paulista e da Zona Leste desde 1998 — mais de 25 anos com fonoaudiólogo fundador à frente e atendimento que começa pela escuta. Reconhecida no Google por quem passou por aqui e fez questão de recomendar.
        </p>
      </div>
      <div
        className="mt-10 rounded-2xl py-10 px-6 md:px-10"
        style={{ backgroundColor: "var(--av-card)", border: "1px solid var(--av-border)" }}
      >
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
          {items.map(({ icon: Icon, text }, i) => (
            <li key={text} className="av-reveal flex flex-col items-center text-center" style={{ '--d': `${i * 0.07}s` } as React.CSSProperties}>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(224,90,26,0.10)", color: "var(--av-accent)" }}
              >
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-[13px] font-semibold leading-snug" style={{ color: "var(--av-text)" }}>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------------- CTA MID ---------------- */
function CtaMid() {
  return (
    <section className="py-8 md:py-12">
      <div className="av-reveal mx-auto flex max-w-[640px] flex-col items-center px-5 text-center">
        <WhatsAppButton href={WA_LINK} className="w-full md:w-auto md:min-w-[360px]">
          Agende sua audiometria grátis
        </WhatsAppButton>
        <p className="mt-3 text-[14px]" style={{ color: "var(--av-text-2)" }}>
          Fale pelo WhatsApp · São Miguel Paulista · Sem compromisso.
        </p>
      </div>
    </section>
  );
}

/* ---------------- AUDIENCE ---------------- */
function Audience() {
  const cards = [
    {
      icon: Ear,
      title: "Adultos com dificuldade auditiva",
      text:
        "Você percebe que está pedindo para repetir mais do que antes? Ou que a televisão ficou alta demais? Qualquer sinal de dificuldade auditiva merece atenção. A AudioVoz está aqui para orientar você, desde a primeira conversa.",
    },
    {
      icon: Heart,
      title: "Familiares de idosos",
      text:
        "Seu pai ou sua mãe está com dificuldade para ouvir e você quer ajudar? Sabemos que essa situação pode ser delicada. A AudioVoz atende famílias nesse momento com cuidado, paciência e orientação clara sobre as melhores opções.",
    },
    {
      icon: Sparkles,
      title: "Crianças",
      text:
        "O desenvolvimento auditivo é fundamental para a fala e o aprendizado. Se você tem alguma preocupação com a audição do seu filho, a AudioVoz oferece atendimento com atenção às necessidades de cada criança e à tranquilidade de cada família.",
    },
    {
      icon: HeadphonesIcon,
      title: "Quem já usa aparelho auditivo",
      text:
        "Já usa aparelho auditivo e precisa de ajuste, manutenção ou uma nova avaliação? A AudioVoz também cuida de quem já está em acompanhamento — com ajustes vitalícios e o mesmo cuidado de sempre.",
    },
    {
      icon: Accessibility,
      title: "Pessoas com necessidades específicas",
      text:
        "A AudioVoz tem experiência com atendimento para pessoas com necessidades específicas, incluindo pessoas autistas. Cada atendimento é conduzido com respeito, atenção e no ritmo de cada pessoa.",
    },
  ];
  return (
    <section id="para-quem" className="relative overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--av-primary)" }}>
      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* Accent glow — top right */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-15" style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }} />
      {/* Light glow — bottom left */}
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full opacity-10" style={{ background: "radial-gradient(closest-side, #4A90D9, transparent 70%)" }} />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-semibold text-[22px] leading-tight text-white md:text-[32px] lg:text-[36px]">
            A AudioVoz atende quem precisa de atenção auditiva — em qualquer fase da vida.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
            Adultos, idosos, crianças ou quem já usa aparelho auditivo. Cada atendimento começa pela escuta.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.slice(0, 3).map((c, i) => (
            <div key={c.title} className="av-reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <AudienceCard {...c} />
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[820px] lg:grid-cols-2">
          {cards.slice(3).map((c, i) => (
            <div key={c.title} className="av-reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <AudienceCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <article
      className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
    >
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: "rgba(224,90,26,0.22)", color: "#fda869" }}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-serif mt-4 text-[20px] font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.65] text-white/70">
        {text}
      </p>
    </article>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const cards = [
    {
      icon: Activity,
      title: "Audiometria",
      text:
        "Avaliação da capacidade auditiva realizada com equipamento adequado e interpretação profissional. Um passo importante para entender como está sua audição e quais são as melhores opções de cuidado.",
    },
    {
      icon: Mic,
      title: "Fonoterapia",
      text:
        "Acompanhamento fonoaudiológico para diferentes necessidades — incluindo reabilitação auditiva, fala e desenvolvimento da linguagem. Realizado por profissional especializado com atenção individualizada.",
    },
    {
      icon: Ear,
      title: "Aparelhos Auditivos",
      text:
        "Seleção e adaptação de aparelhos auditivos com base na avaliação auditiva de cada pessoa. A indicação leva em conta suas necessidades reais — não apenas o produto disponível. Garantia de 2 anos e ajustes vitalícios incluídos.",
    },
    {
      icon: Wrench,
      title: "Aparelhos Auditivos Sob Medida",
      text:
        "Aparelhos desenvolvidos com adaptação individual para garantir conforto, eficiência e adequação ao perfil auditivo de cada paciente. Parcele em até 12x sem juros.",
    },
    {
      icon: Stethoscope,
      title: "Atendimento Fonoaudiológico",
      text:
        "Consulta e orientação fonoaudiológica para adultos, idosos e crianças. A equipe escuta sua necessidade e indica o caminho mais adequado — sem pressa e sem pressão.",
    },
  ];
  return (
    <Section id="servicos" className="py-14 md:py-20" style={{ backgroundColor: "var(--av-card)" }}>
      <div className="av-reveal mx-auto max-w-3xl text-center">
        <H2>O que oferecemos</H2>
        <p className="mt-4 text-[16px] md:text-[17px]" style={{ color: "var(--av-text-2)" }}>
          Serviços de saúde auditiva com orientação especializada em cada etapa.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.slice(0, 3).map((c, i) => (
          <div key={c.title} className="av-reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
            <ServiceCard {...c} index={i} />
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[820px] lg:grid-cols-2">
        {cards.slice(3).map((c, i) => (
          <div key={c.title} className="av-reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
            <ServiceCard {...c} index={i + 3} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article
      className="relative overflow-hidden rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(26,74,110,0.12)]"
      style={{
        backgroundColor: "var(--av-bg)",
        border: "1px solid var(--av-border)",
        borderTop: "3px solid var(--av-accent)",
      }}
    >
      {/* Número decorativo */}
      <span
        className="pointer-events-none absolute right-4 top-3 select-none font-mono text-[52px] font-bold leading-none"
        style={{ color: "rgba(26,45,90,0.055)" }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className="inline-flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ backgroundColor: "rgba(224,90,26,0.10)", color: "var(--av-accent)" }}
      >
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="font-serif mt-4 text-[20px] font-semibold" style={{ color: "var(--av-text)" }}>
        {title}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.65]" style={{ color: "var(--av-text-2)" }}>
        {text}
      </p>
    </article>
  );
}

/* ---------------- ABOUT + JURANDY (fundidas) ---------------- */
function About() {
  return (
    <Section id="sobre" className="py-14 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
        <div className="av-reveal order-2 lg:order-1">
          <H2 className="text-center lg:text-left">Quem somos</H2>
          <p className="mt-5 text-[16px] leading-[1.7] md:text-[17px]" style={{ color: "var(--av-text)" }}>
            A AudioVoz nasceu de um propósito simples: oferecer cuidado auditivo de verdade. Não somos uma loja de aparelhos — somos uma clínica de saúde auditiva. E por trás dessa visão está Jurandy, fonoaudiólogo fundador à frente da clínica desde 1998.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] md:text-[17px]" style={{ color: "var(--av-text)" }}>
            Reconhecido na Zona Leste, ele conduz a AudioVoz com uma visão clara: antes de indicar qualquer solução, é preciso escutar a pessoa, entender sua necessidade e orientar com responsabilidade.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] md:text-[17px]" style={{ color: "var(--av-text)" }}>
            É essa forma de atendimento — próxima, cuidadosa e sem pressa — que guia a AudioVoz em São Miguel Paulista e em Guarulhos.
          </p>
          <p
            className="mt-6 border-l-2 pl-4 text-[15px] italic"
            style={{ borderColor: "var(--av-accent)", color: "var(--av-text-2)" }}
          >
            Não vendemos produto. Oferecemos cuidado. A diferença aparece desde a primeira conversa.
          </p>
        </div>
        <div className="av-reveal order-1 lg:order-2" style={{ '--d': '0.15s' } as React.CSSProperties}>
          <div
            className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-xl"
            style={{ border: "3px solid var(--av-border)", aspectRatio: "1 / 1" }}
          >
            <img
              src="/images/jurandy-foto.png"
              alt="Jurandy, fonoaudiólogo fundador da AudioVoz, na unidade de São Miguel Paulista"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-4"
              style={{ background: "linear-gradient(to top, rgba(15,30,56,0.85) 0%, transparent 100%)" }}
            >
              <p className="text-[14px] font-semibold text-white">
                Jurandy — Fonoaudiólogo fundador
              </p>
              <p className="text-[13px] text-white/80">AudioVoz desde 1998</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      title: "Você entra em contato",
      text:
        "Mande uma mensagem pelo WhatsApp. Pode ser uma dúvida ou um pedido de agendamento do teste auditivo gratuito. A equipe responde e escuta o que você precisa.",
    },
    {
      title: "Você agenda seu teste e audiometria grátis",
      text:
        "Sem custo, sem compromisso com qualquer compra. A AudioVoz oferece teste e audiometria grátis para que você possa entender como está sua audição antes de qualquer decisão.",
    },
    {
      title: "Você recebe orientação clara",
      text:
        "A equipe indica qual atendimento faz mais sentido para você ou para o familiar que precisa de cuidado — e tira todas as dúvidas antes de qualquer decisão.",
    },
    {
      title: "O atendimento acontece na unidade mais próxima de você",
      text:
        "São Miguel Paulista ou Guarulhos — você escolhe a unidade mais conveniente. O cuidado é o mesmo nas duas.",
    },
  ];
  return (
    <Section className="py-14 md:py-20">
      <div className="av-reveal mx-auto max-w-3xl text-center">
        <H2>Simples, claro e no seu ritmo.</H2>
        <p className="mt-4 text-[16px] leading-[1.65] md:text-[17px]" style={{ color: "var(--av-text-2)" }}>
          Do primeiro contato até o atendimento — sem complicação e no ritmo que faz sentido pra você.
        </p>
      </div>
      <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="av-reveal relative flex flex-col items-start lg:items-center lg:text-center"
            style={{ '--d': `${i * 0.12}s` } as React.CSSProperties}>
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[16px] font-bold text-white shrink-0"
              style={{ backgroundColor: "var(--av-primary)" }}
            >
              {i + 1}
            </span>
            <h3 className="font-serif mt-4 text-[18px] font-semibold" style={{ color: "var(--av-text)" }}>
              {s.title}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.65]" style={{ color: "var(--av-text-2)" }}>
              {s.text}
            </p>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-5 hidden h-px lg:block"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--av-border) 50%, transparent 50%)",
                  backgroundSize: "8px 1px",
                  backgroundRepeat: "repeat-x",
                  left: "calc(50% + 28px)",
                  right: "calc(-50% + 28px)",
                  zIndex: 0,
                }}
              />
            )}
          </li>
        ))}
      </ol>
      <div className="mt-12 flex flex-col items-center gap-3">
        <WhatsAppButton href={WA_LINK}>
          Agende sua audiometria grátis
        </WhatsAppButton>
        <p className="text-[13px]" style={{ color: "var(--av-text-2)" }}>
          Fale pelo WhatsApp · São Miguel Paulista · Sem compromisso
        </p>
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  {
    name: "Celia Alves",
    context: "Filha de paciente",
    text: "Fomos muito bem acolhidos... Trataram meu pai com empatia. É muito bom ver o sorriso no rosto do meu pai, que voltou a ouvir e agora pode interagir com todos a sua volta.",
  },
  {
    name: "Rosely Lima",
    context: "Filha de paciente — 85 anos",
    text: "Venho agradecer pelo atendimento excelente. Foi muito gratificante ao presenciar a minha mãe ouvindo tudo — ela reviveu com 85 anos tendo aparelho auditivo. Ela disse que agora está vivendo.",
  },
  {
    name: "Lea Belo",
    context: "Cliente fiel",
    text: "Já é o segundo aparelho que compro pra minha mãe na AudioVoz com o Jurandir. Um profissional competente, ético e acima de tudo humano. Não tem outro lugar — pode confiar, é sem dúvidas um profissional escasso no mercado.",
  },
  {
    name: "Roberto Beserra da Silva",
    context: "Primeiro aparelho auditivo",
    text: "O que me fez escolher a AudioVoz foi o atendimento humanizado do Jurandy. Ele explicou em detalhes o aparelho ideal para meu caso e avaliou a questão financeira. Ele não me viu somente como um cliente na questão de fechar a venda.",
  },
  {
    name: "Valéria Hosana",
    context: "Filha de paciente",
    text: "O Jurandir consegue captar a necessidade do paciente de forma que nos traz segurança em estar neste lugar, num momento não tão fácil. Obrigada AudioVoz, por proporcionar ao meu pai a capacidade de ouvir melhor.",
  },
  {
    name: "Neusa",
    context: "2º aparelho auditivo",
    text: "A AudioVoz me devolveu o prazer de ouvir os sons da vida. Adquiri o segundo aparelho auditivo — só tenho a agradecer ao Jurandy e sua equipe pelo excelente atendimento. Muito obrigada!",
  },
  {
    name: "Josiane",
    context: "Filha de paciente",
    text: "Atendimento humanizado. O Dr. Jurandir foi muito atencioso com as necessidades da minha mãe — conversamos muito, não nos deixou sair de lá com nenhuma dúvida. Muito grata pelo atendimento de vocês!",
  },
  {
    name: "Lenira Silva",
    context: "Cliente há mais de 30 anos",
    text: "Sempre fomos muito bem atendidos. Meu esposo já comprou 2 aparelhos. Conhecemos eles há mais de 30 anos — sempre atenciosos.",
  },
];

function Testimonials() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const isDragging = React.useRef(false);
  const dragStartX = React.useRef(0);
  const dragScrollLeft = React.useRef(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scrollTo = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -288 : 288, behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = 'grabbing';
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.2;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden py-14 md:py-20">
      {/* Background image */}
      <img
        src="/images/clientes-audiovoz-fotos.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Overlay escuro */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(10,20,45,0.86) 0%, rgba(26,45,90,0.80) 50%, rgba(10,20,45,0.90) 100%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        {/* Header */}
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-semibold text-[22px] leading-tight text-white md:text-[32px] lg:text-[36px]">
            O que dizem nossos pacientes
          </h2>
          <div
            className="mt-4 inline-flex items-center gap-3 rounded-full px-5 py-2.5"
            style={{ backgroundColor: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#fbbf24" }} />
              ))}
            </div>
            <span className="text-[14px] font-medium text-white">
              733 avaliações — <span style={{ color: "#fda869" }}>100% positivas</span>
            </span>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
            style={{ borderColor: "rgba(255,255,255,0.28)", backgroundColor: "rgba(255,255,255,0.10)", color: "white" }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
            aria-label="Próximo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
            style={{ borderColor: "rgba(255,255,255,0.28)", backgroundColor: "rgba(255,255,255,0.10)", color: "white" }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="av-reveal av-carousel -mx-5 mt-4 overflow-x-auto px-5 pb-3 md:-mx-8 md:px-8"
          style={{ cursor: 'grab' }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex w-[272px] flex-col rounded-2xl p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.96)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#fbbf24" }} />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-[14px] leading-[1.65]" style={{ color: "var(--av-text)" }}>
                  "{t.text}"
                </p>
                <div className="mt-4 border-t pt-3" style={{ borderColor: "var(--av-border)" }}>
                  <p className="text-[13px] font-semibold" style={{ color: "var(--av-primary)" }}>{t.name}</p>
                  <p className="text-[11px]" style={{ color: "var(--av-text-2)" }}>{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section id="localizacao" className="relative overflow-hidden py-14 md:py-20 text-white" style={{ backgroundColor: "var(--av-primary)" }}>
      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* Accent glow — bottom right */}
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full opacity-20" style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }} />
      {/* Light glow — top left */}
      <div aria-hidden className="pointer-events-none absolute -left-28 -top-28 h-[400px] w-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(closest-side, #4A90D9, transparent 70%)" }} />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[22px] font-semibold leading-tight md:text-[32px] lg:text-[36px]">
            A AudioVoz está aqui, em São Miguel Paulista.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Main: São Miguel */}
          <article
            className="av-reveal rounded-2xl border p-6 md:p-8"
            style={{ borderColor: "rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[13px] font-medium">
              <MapPin className="h-3.5 w-3.5" /> Matriz
            </span>
            <h3 className="font-serif mt-3 text-[22px] font-semibold md:text-[26px]">
              AudioVoz — São Miguel Paulista
            </h3>
            <p className="mt-3 text-[16px] text-white/90">
              Av. Nordestina, Nº 210 - Vila Americana, São Paulo - SP, CEP: 08011-000
            </p>
            <div className="mt-3 grid gap-1 text-[15px] text-white/90">
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp: (11) 95385-2353
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Telefone: (11) 2297-4323
              </p>
            </div>
            <p className="mt-5 text-[15px] leading-[1.65] text-white/85">
              A matriz da AudioVoz fica na Av. Nordestina, na Vila Americana — no coração de São Miguel Paulista.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://maps.google.com/?q=Av.+Nordestina,+210+-+Vila+Americana,+São+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MapPin className="h-4 w-4" /> Como chegar
              </a>
              <a
                href={WA_LINK_VISIT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" /> Falar pelo WhatsApp
              </a>
            </div>
          </article>

          {/* Secondary: Guarulhos */}
          <article
            className="av-reveal rounded-2xl border p-6"
            style={{ '--d': '0.12s', borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.03)" } as React.CSSProperties}
          >
            <p className="text-[13px] uppercase tracking-wide text-white/60">Também atendemos em</p>
            <h3 className="font-serif mt-1 text-[20px] font-semibold">Guarulhos</h3>
            <p className="mt-3 text-[15px] text-white/85">
              Carrefour Vila Rios — Av. Benjamin Harris Hunicutt, S/N - Pinheiros, Guarulhos - SP
            </p>
            <p className="mt-3 flex items-center gap-2 text-[15px] text-white/90">
              <WhatsAppIcon className="h-4 w-4" /> (11) 91761-4652
            </p>
          </article>
        </div>

        <p className="mt-10 text-center text-[14px] text-white/80">
          Prefere falar antes de vir? Mande uma mensagem pelo WhatsApp — a equipe responde e orienta você.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    ["A audiometria é gratuita?", "Sim. A AudioVoz oferece teste e audiometria grátis. Para confirmar disponibilidade de horário e unidade, fale com a equipe pelo WhatsApp e agende sua avaliação."],
    ["Preciso agendar o teste auditivo gratuito?", "Sim, recomendamos entrar em contato pelo WhatsApp para combinar o melhor horário. A equipe te orienta sobre tudo que você precisa saber antes de vir."],
    ["O teste gratuito está disponível nas duas unidades?", "Para confirmar a disponibilidade em cada unidade — São Miguel Paulista ou Guarulhos — fale com a equipe pelo WhatsApp. Eles te orientam sobre o melhor horário e local."],
    ["Como saber se preciso de uma avaliação auditiva?", "Se você percebe que está pedindo para as pessoas repetirem com mais frequência, que o volume da televisão aumentou, ou que está com dificuldade em ambientes com barulho — esses podem ser sinais de que vale a pena conversar com um profissional. A equipe da AudioVoz pode orientar você sobre os próximos passos pelo WhatsApp."],
    ["Vocês atendem crianças?", "Sim. A AudioVoz oferece atendimento para crianças com atenção às necessidades de cada faixa etária. Se você tem alguma preocupação com a audição ou a fala do seu filho, entre em contato pelo WhatsApp e a equipe orienta você sobre como funciona o atendimento."],
    ["Vocês atendem pessoas autistas ou com necessidades específicas?", "A AudioVoz tem experiência com atendimento para pessoas com necessidades específicas. Cada caso é conduzido com cuidado, respeito e no ritmo de cada pessoa. Entre em contato pelo WhatsApp para que a equipe possa orientar sobre como funciona o atendimento para cada situação."],
    ["Como funciona o primeiro contato?", "Muito simples. Mande uma mensagem pelo WhatsApp explicando o que você está buscando — pode ser uma dúvida, um pedido de orientação ou um agendamento. A equipe responde, entende sua necessidade e indica o próximo passo mais adequado para você."],
    ["Vocês trabalham com aparelhos auditivos sob medida?", "Sim. A AudioVoz oferece aparelhos auditivos com adaptação individual, desenvolvidos com base na avaliação auditiva de cada pessoa. A indicação é feita com atenção ao perfil auditivo real — não ao produto padrão."],
    ["Vocês atendem em São Miguel Paulista?", "Sim. Nossa unidade matriz em São Miguel Paulista fica na Av. Nordestina, Nº 210 - Vila Americana, São Paulo — estamos na região desde 1998. Mande uma mensagem pelo WhatsApp: (11) 95385-2353."],
    ["Quanto custa o atendimento?", "O teste e a audiometria são grátis. Para os demais serviços — como fonoterapia, adaptação de aparelhos auditivos ou consultas específicas — os valores variam. Para aparelhos auditivos, a AudioVoz oferece parcelamento em até 12x sem juros. Entre em contato pelo WhatsApp e a equipe orienta você sobre as opções disponíveis."],
    ["Os aparelhos têm garantia?", "Sim. Os aparelhos auditivos da AudioVoz têm garantia de 2 anos. Além disso, os ajustes são vitalícios — a equipe acompanha você durante todo o uso do aparelho, sem custo adicional para os ajustes."],
    ["Vocês aceitam convênio?", "Para informações sobre convênios e formas de atendimento, entre em contato com a equipe pelo WhatsApp. A equipe pode te orientar sobre as opções disponíveis."],
    ["Posso falar pelo WhatsApp antes de decidir qualquer coisa?", "Pode, e é exatamente assim que funciona. Não precisa ter tudo decidido antes de entrar em contato. A equipe está aqui para escutar e orientar você no ritmo que faz sentido para a sua situação."],
    ["Há quanto tempo a AudioVoz atende na região?", "Desde 1998. São mais de 25 anos cuidando da saúde auditiva de famílias em São Miguel Paulista, na Zona Leste, e em Guarulhos. A trajetória da clínica é reconhecida no Google por quem foi atendido — e fez questão de recomendar."],
  ];
  return (
    <Section id="faq" className="py-14 md:py-20">
      <div className="av-reveal mx-auto max-w-3xl">
        <H2 className="text-center">Perguntas frequentes</H2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {items.map(([q, a], idx) => (
            <AccordionItem
              key={q}
              value={`item-${idx}`}
              className="border-b"
              style={{ borderColor: "var(--av-border)" } as React.CSSProperties}
            >
              <AccordionTrigger className="py-5 text-left font-sans text-[16px] font-semibold hover:no-underline md:text-[17px]" style={{ color: "var(--av-text)" }}>
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[16px] leading-[1.65]" style={{ color: "var(--av-text-2)" }}>
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
      <img
        src="/images/frente-audiovoz.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,20,45,0.88) 0%, rgba(26,45,90,0.80) 50%, rgba(10,20,45,0.92) 100%)" }} />
      <div className="av-reveal relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-serif text-[28px] font-bold leading-tight md:text-[36px]">
          Cuide da sua audição aqui em São Miguel Paulista.
        </h2>
        <p className="mt-5 text-[17px] leading-[1.65] text-white/90">
          A AudioVoz oferece teste e audiometria grátis. Agende pelo WhatsApp e venha entender como está sua audição — com orientação clara, acolhedora e sem custo para o teste.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton href={WA_LINK} large>
            Agende sua audiometria grátis — São Miguel Paulista
          </WhatsAppButton>
        </div>
        <p className="mt-4 text-[13px] text-white/75">
          Estamos aqui, pertinho. Agende seu teste gratuito pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "var(--av-footer)" }}>
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-3">
        <div>
          <a href="#top" aria-label="AudioVoz — Centro Auditivo">
            <img
              src="/images/logo-official.png"
              alt="AudioVoz"
              className="h-10 w-auto object-contain md:h-12"
              loading="lazy"
            />
          </a>
          <p className="mt-3 text-[14px] leading-[1.65]" style={{ color: "#A0AEC0" }}>
            Cuidando da audição de famílias desde 1998.
          </p>
        </div>
        <div className="space-y-6 text-[14px]">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "#A0AEC0" }}>
              São Miguel Paulista (Matriz)
            </p>
            <p className="mt-2 leading-[1.65]">
              Av. Nordestina, Nº 210 - Vila Americana, São Paulo - SP, CEP: 08011-000
            </p>
            <p className="mt-1">WhatsApp: (11) 95385-2353</p>
            <p>Tel: (11) 2297-4323</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "#A0AEC0" }}>
              Guarulhos (Filial)
            </p>
            <p className="mt-2 leading-[1.65]">
              Carrefour Vila Rios — Av. Benjamin Harris Hunicutt, S/N - Pinheiros, Guarulhos - SP, CEP: 07124-000
            </p>
            <p className="mt-1">WhatsApp: (11) 91761-4652</p>
          </div>
        </div>
        <div className="space-y-3 text-[14px]">
          <p className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "#A0AEC0" }}>
            Contato
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> contato@audiovozsp.com.br
          </p>
          <p className="flex items-center gap-2">
            <Instagram className="h-4 w-4" /> @audiovoz
          </p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-[1200px] px-5 py-5 text-center text-[13px] md:px-8" style={{ color: "#A0AEC0" }}>
          © AudioVoz — Centro Auditivo | Desde 1998
        </div>
      </div>
    </footer>
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
  useRevealOnScroll();
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--av-bg)" }}>
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <CtaMid />
        <Audience />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <Location />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
