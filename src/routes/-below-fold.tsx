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
  Baby,
  Sliders,
  Activity,
  CheckCircle2,
  ClipboardList,
  Phone,
  Mail,
  Instagram,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  WA_LINK,
  WA_LINK_VISIT,
  WA_LINK_FLOAT,
  WhatsAppIcon,
  Section,
  H2,
  WhatsAppButton,
} from "./-shared";

function useRevealOnScroll() {
  React.useEffect(() => {
    let io: IntersectionObserver | undefined;
    let raf2: number;

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const els = document.querySelectorAll<Element>(".av-reveal");
        io = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("visible");
                io!.unobserve(e.target);
              }
            }),
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
        );
        els.forEach((el) => io!.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      io?.disconnect();
    };
  }, []);
}

/* ---------------- TRUST BLOCK ---------------- */
function TrustBlock() {
  const items = [
    { icon: Clock, text: "Fonoaudiólogo fundador desde 1998" },
    { icon: MessageCircle, text: "Orientação honesta desde a primeira conversa" },
    { icon: CheckCircle2, text: "Cada rotina auditiva é avaliada com cuidado" },
    { icon: Wrench, text: "Ajustes vitalícios e acompanhamento contínuo" },
    { icon: CalendarCheck, text: "Avaliação auditiva gratuita" },
    { icon: Users, text: "Atendemos adultos, idosos e crianças" },
    { icon: MapPin, text: "Localizada em São Miguel Paulista, na Zona Leste" },
  ];
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "linear-gradient(180deg, #FAF8F4 0%, #F0EAE0 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-28"
        style={{
          background: "linear-gradient(to bottom, rgba(10,22,40,0.20) 0%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <H2>Por que tantas famílias escolhem a AudioVoz?</H2>
          <p
            className="mt-5 text-[16px] leading-[1.65] md:text-[17px]"
            style={{ color: "var(--av-text-2)" }}
          >
            A AudioVoz acompanha a saúde auditiva de famílias da Zona Leste desde 1998 — mais de 25
            anos com fonoaudiólogo fundador à frente e atendimento que começa pela escuta. Reconhecida
            no Google por quem passou por aqui e fez questão de recomendar.
          </p>
        </div>
        <div
          className="mt-10 rounded-2xl px-8 py-12 md:px-12"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(15,31,57,0.07)",
            boxShadow:
              "0 4px 24px rgba(15,31,57,0.07), 0 1px 4px rgba(15,31,57,0.04), inset 0 1px 0 rgba(255,255,255,0.96)",
          }}
        >
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
            {items.map(({ icon: Icon, text }, i) => (
              <li
                key={text}
                className="av-reveal flex flex-col items-center text-center"
                style={{ "--d": `${i * 0.07}s` } as React.CSSProperties}
              >
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(224,90,26,0.12)", color: "var(--av-accent)" }}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <p
                  className="mt-3 text-[14px] font-semibold leading-snug"
                  style={{ color: "var(--av-text)" }}
                >
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AUDIENCE ---------------- */
function Audience() {
  const cards = [
    {
      icon: Users,
      title: "Para quem percebe que alguém próximo está se afastando das conversas",
      text: "Você nota que seu pai, sua mãe ou um familiar está mais quieto, pede para repetir mais, ou evita reuniões? A AudioVoz atende famílias nesse momento — com orientação clara, paciência e cuidado real.",
    },
    {
      icon: Ear,
      title: "Para quem está pedindo para repetir mais do que antes",
      text: "A televisão ficou alta, as conversas cansam mais rápido, os ambientes com barulho ficaram difíceis? Qualquer sinal merece atenção. A AudioVoz está aqui para orientar você desde a primeira conversa.",
    },
    {
      icon: Baby,
      title: "Para famílias preocupadas com a audição ou a fala de uma criança",
      text: "A audição é fundamental para o desenvolvimento da fala e do aprendizado. A AudioVoz oferece atendimento com atenção, acolhimento e no ritmo de cada criança — e com toda a orientação que a família precisa.",
    },
    {
      icon: Sliders,
      title: "Para quem já usa aparelho e precisa de ajuste ou acompanhamento",
      text: "Já usa aparelho auditivo e precisa de ajuste, manutenção ou nova avaliação? A AudioVoz acompanha você com ajustes vitalícios — o mesmo cuidado de sempre, pelo tempo que for necessário.",
    },
  ];
  return (
    <section
      id="para-quem"
      className="relative overflow-hidden py-14 md:py-20"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F4EE 100%)" }}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <H2>
            Para quem percebe que algo mudou — na própria audição ou na de alguém próximo.
          </H2>
          <p className="mt-4 text-[16px] leading-[1.65] md:text-[17px]" style={{ color: "var(--av-text-2)" }}>
            Familiares, pacientes, cônjuges, filhos — o atendimento começa entendendo quem você é
            e o que você ou sua família precisa.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="av-reveal h-full"
              style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
            >
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
      className="av-card-lift h-full rounded-xl p-7"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(15,31,57,0.08)",
      }}
    >
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "rgba(224,90,26,0.10)",
          color: "var(--av-accent)",
        }}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-serif mt-4 text-[20px] font-semibold" style={{ color: "var(--av-text)" }}>{title}</h3>
      <p className="mt-3 text-[16px] leading-[1.65]" style={{ color: "var(--av-text-2)" }}>{text}</p>
    </article>
  );
}

function HearingAidBatteryIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const cards = [
    {
      icon: Activity,
      title: "Avaliação Auditiva",
      text: "O primeiro passo para entender o que está acontecendo, com orientação clara antes de qualquer decisão.",
    },
    {
      icon: Ear,
      title: "Aparelhos Auditivos",
      text: "A indicação leva em conta a rotina, o perfil auditivo e a realidade de cada pessoa — não apenas o produto disponível. Quem volta a ouvir, volta a participar. Garantia de 2 anos, ajustes vitalícios e parcelamento em até 12x sem juros.",
    },
    {
      icon: HearingAidBatteryIcon,
      title: "Modelos para Todo Perfil",
      text: "Opções básicas, discretas e modernas — para cada necessidade e cada estilo de vida. Baterias e acessórios disponíveis na unidade. O modelo certo é o que se adapta à pessoa, não ao contrário.",
    },
  ];
  return (
    <Section
      id="servicos"
      className="py-14 md:py-20"
      style={{ background: "linear-gradient(180deg, #FAF8F4 0%, #F0EAE0 100%)" }}
    >
      <div className="av-reveal mx-auto max-w-3xl text-center">
        <H2>Como ajudamos</H2>
        <p className="mt-4 text-[16px] md:text-[17px]" style={{ color: "var(--av-text-2)" }}>
          Cada serviço tem um propósito: entender, orientar e reconectar — no ritmo de cada pessoa.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="av-reveal h-full"
            style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
          >
            <ServiceCard {...c} index={i} />
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
      className="av-card-lift relative h-full overflow-hidden rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(15,31,57,0.07)",
        borderTop: "3px solid var(--av-accent)",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-3 select-none font-mono text-[52px] font-bold leading-none"
        style={{ color: "rgba(26,45,90,0.055)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="inline-flex h-14 w-14 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "rgba(224,90,26,0.10)",
          color: "var(--av-accent)",
          boxShadow: "0 4px 14px rgba(224,90,26,0.12)",
        }}
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

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "linear-gradient(180deg, #FAF8F4 0%, #F0EAE0 100%)" }}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="av-reveal order-2 lg:order-1">
            <H2 className="text-center lg:text-left">Por trás da AudioVoz</H2>
            <p
              className="mt-5 text-[16px] leading-[1.75] md:text-[17px]"
              style={{ color: "var(--av-text)" }}
            >
              A AudioVoz nasceu de um propósito simples: oferecer cuidado auditivo de verdade. Não
              somos uma loja de aparelhos — somos uma clínica de saúde auditiva. E por trás dessa
              visão está Jurandy, fonoaudiólogo fundador à frente da clínica desde 1998.
            </p>
            <p
              className="mt-5 text-[16px] leading-[1.75] md:text-[17px]"
              style={{ color: "var(--av-text)" }}
            >
              Reconhecido na Zona Leste, ele conduz a AudioVoz com uma visão clara: antes de indicar
              qualquer solução, é preciso escutar a pessoa, entender sua necessidade e orientar com
              responsabilidade.
            </p>
            <p
              className="mt-5 text-[16px] leading-[1.75] md:text-[17px]"
              style={{ color: "var(--av-text)" }}
            >
              É essa forma de atendimento — próxima, cuidadosa e sem pressa — que guia a AudioVoz na
              Zona Leste desde que Jurandy abriu as portas em 1998.
            </p>
            <p
              className="mt-5 text-[16px] leading-[1.75] md:text-[17px]"
              style={{ color: "var(--av-text)" }}
            >
              Muitas pessoas chegam inseguras, sem saber se realmente precisam de um aparelho
              auditivo. O papel da AudioVoz começa exatamente aí: entendendo cada caso com calma,
              sem pressa para vender e sem pressa para decidir.
            </p>
            <blockquote
              className="mt-8 rounded-xl px-5 py-4"
              style={{
                backgroundColor: "rgba(224,90,26,0.07)",
                borderLeft: "3px solid var(--av-accent)",
              }}
            >
              <p
                className="text-[15px] italic leading-[1.75]"
                style={{ color: "var(--av-text-2)" }}
              >
                "Não vendemos produto. Oferecemos cuidado. A diferença está em ouvir a história de cada pessoa antes de indicar qualquer caminho."
              </p>
            </blockquote>
          </div>
          <div
            className="av-reveal order-1 lg:order-2"
            style={{ "--d": "0.15s" } as React.CSSProperties}
          >
            <div
              className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(15,31,57,0.08)",
                aspectRatio: "4 / 5",
                boxShadow: "0 20px 56px rgba(15,31,57,0.13), 0 4px 14px rgba(15,31,57,0.07)",
              }}
            >
              <img
                src="/images/jurandy-fonoaudiologo-sao-miguel.webp"
                srcSet="/images/jurandy-fonoaudiologo-sao-miguel-440w.webp 440w, /images/jurandy-fonoaudiologo-sao-miguel-880w.webp 880w, /images/jurandy-fonoaudiologo-sao-miguel.webp 1080w"
                sizes="(min-width: 768px) 440px, calc(100vw - 40px)"
                alt="Jurandy, fonoaudiólogo fundador da AudioVoz, na unidade de São Miguel Paulista"
                width={1080}
                height={1440}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-5"
                style={{
                  background: "linear-gradient(to top, rgba(15,30,56,0.88) 0%, transparent 100%)",
                }}
              >
                <p className="text-[14px] font-semibold text-white">
                  Jurandy — Fonoaudiólogo fundador
                </p>
                <p className="text-[13px] text-white/75">AudioVoz desde 1998</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Você entra em contato",
      text: "Mande uma mensagem pelo WhatsApp. Pode ser uma dúvida, uma pergunta ou um pedido de agendamento. A equipe responde e escuta o que você precisa.",
    },
    {
      icon: CalendarCheck,
      title: "Você agenda uma avaliação auditiva",
      text: "Sem custo e sem compromisso de compra. A equipe confirma o horário pelo WhatsApp e orienta sobre o que esperar — para você ou para quem você quer cuidar.",
    },
    {
      icon: ClipboardList,
      title: "Você recebe orientação clara",
      text: "A equipe explica o que encontrou, indica o que faz sentido — para você ou para o familiar que precisa de cuidado — e tira todas as dúvidas antes de qualquer decisão.",
    },
    {
      icon: MapPin,
      title: "O atendimento acontece pertinho de você",
      text: "A unidade fica em São Miguel Paulista, na Zona Leste, com fácil acesso. A equipe confirma o horário pelo WhatsApp e você já sabe o que esperar.",
    },
  ];
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{ background: "linear-gradient(180deg, #FAF8F4 0%, #F0EAE0 100%)" }}
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(224,90,26,0.38) 25%, rgba(224,90,26,0.38) 75%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, rgba(255,253,250,0.92) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[440px] w-[440px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(closest-side, #1A2D5A, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <H2>Simples, claro e no seu ritmo</H2>
          <p
            className="mt-4 text-[16px] leading-[1.65] md:text-[17px]"
            style={{ color: "var(--av-text-2)" }}
          >
            Do primeiro contato até o atendimento — sem complicação e no ritmo que faz sentido pra
            você.
          </p>
        </div>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="av-reveal relative flex flex-col items-start lg:items-center lg:text-center"
              style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white shrink-0"
                style={{
                  backgroundColor: "var(--av-primary)",
                  boxShadow: "0 4px 16px rgba(26,45,90,0.22), 0 1px 4px rgba(26,45,90,0.12)",
                }}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <h3
                className="font-serif mt-4 text-[18px] font-semibold"
                style={{ color: "var(--av-text)" }}
              >
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
                      "linear-gradient(to right, rgba(26,45,90,0.15) 50%, transparent 50%)",
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
          <WhatsAppButton href={WA_LINK}>Agendar uma Avaliação Auditiva</WhatsAppButton>
          <p className="text-[13px]" style={{ color: "var(--av-text-2)" }}>
            WhatsApp · São Miguel Paulista · Zona Leste
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  {
    name: "Rosely Lima",
    context: "Filha de paciente — mãe de 85 anos",
    text: "Venho agradecer pelo atendimento excelente. Foi muito gratificante ao presenciar a minha mãe ouvindo tudo — ela reviveu com 85 anos tendo aparelho auditivo. Ela disse que agora está vivendo.",
  },
  {
    name: "Kelly Queiroz",
    context: "Filha de paciente — veio de Itaim Paulista",
    text: "Ver meu pai sorrindo e ficando totalmente realizado... só foi possível porque temos lugares incríveis como esse. Saímos de lá com o aparelho teste no mesmo dia.",
  },
  {
    name: "Celia Alves",
    context: "Filha de paciente",
    text: "Fomos muito bem acolhidos. Trataram meu pai com empatia. É muito bom ver o sorriso no rosto do meu pai, que voltou a ouvir e agora pode interagir com todos à sua volta.",
  },
  {
    name: "Nathalia Gradwool",
    context: "Mãe de paciente — filho de 4 anos",
    text: "Adoramos a experiência. Compramos o aparelho para o meu filho de 4 anos. Tínhamos consultado outras lojas, mas o tratamento na AudioVoz foi único — com muita atenção, cuidado e responsabilidade.",
  },
  {
    name: "Valéria Hosana",
    context: "Filha de paciente",
    text: "Um lugar acolhedor desde a recepção até a finalização. O Jurandir consegue captar a necessidade do paciente de forma que nos traz segurança num momento não tão fácil. Obrigada por proporcionar ao meu pai a capacidade de ouvir melhor.",
  },
  {
    name: "Josiane",
    context: "Filha de paciente",
    text: "Atendimento humanizado. O Dr. Jurandir foi muito atencioso com as necessidades da minha mãe — conversamos muito, não nos deixou sair de lá com nenhuma dúvida. Muito grata pelo atendimento de vocês!",
  },
  {
    name: "Roberto Beserra da Silva",
    context: "Primeiro aparelho auditivo",
    text: "O que me fez escolher a AudioVoz foi o atendimento humanizado do Jurandy. Ele explicou em detalhes o aparelho ideal para meu caso e avaliou a questão financeira. Ele não me viu somente como um cliente na questão de fechar a venda.",
  },
  {
    name: "Amanda Santos",
    context: "Cliente AudioVoz",
    text: "Ele não te empurra o mais caro — ele te mostra o porquê de ter algo de melhor qualidade.",
  },
  {
    name: "Danilo Alkimin",
    context: "Primeiro aparelho auditivo",
    text: "A compra do aparelho mudou minha vida. Agora tenho liberdade para sair — vale a pena vir nessa clínica.",
  },
  {
    name: "Neusa",
    context: "Segundo aparelho auditivo",
    text: "A AudioVoz me devolveu o prazer de ouvir os sons da vida. Adquiri o segundo aparelho auditivo — só tenho a agradecer ao Jurandy e sua equipe pelo excelente atendimento. Muito obrigada!",
  },
  {
    name: "Lea Belo",
    context: "Filha de paciente — segundo aparelho",
    text: "Já é o segundo aparelho que compro pra minha mãe na AudioVoz. Um profissional competente, ético e acima de tudo humano. Não tem outro lugar — pode confiar, é sem dúvidas um profissional escasso no mercado.",
  },
  {
    name: "Elaine Siqueira",
    context: "Filha de paciente",
    text: "Excelente atendimento, desde o primeiro contato pelo WhatsApp. Aparelhos de ótima qualidade e preços justos. Recomendo sem hesitar.",
  },
  {
    name: "Manoel Silva",
    context: "Cliente há mais de 10 anos",
    text: "Meu aparelho durou 10 anos que comprei aqui. Hoje estou comprando mais dois aparelhos. A confiança no atendimento é o que me faz voltar sempre.",
  },
  {
    name: "Edina Alves de Souza",
    context: "Terceiro aparelho auditivo",
    text: "Sou cliente há muitos anos. Hoje peguei meu 3º aparelho feito pela AudioVoz. Atendimento sempre impecável — não tem por que ir em outro lugar.",
  },
  {
    name: "Lenira Silva",
    context: "Cliente há mais de 30 anos",
    text: "Sempre fomos muito bem atendidos. Meu esposo já comprou 2 aparelhos. Conhecemos eles há mais de 30 anos — sempre atenciosos e cuidadosos.",
  },
  {
    name: "Marisa Nacbhar",
    context: "Paciente AudioVoz",
    text: "Dr. Jurandir muito atencioso, explica tudo direitinho, dá condições de pagamento acessível. Gratidão pela volta ao prazer de ouvir o canto de um pássaro.",
  },
  {
    name: "Francisca Maciel",
    context: "Paciente AudioVoz",
    text: "Estou muito feliz — vou passar a ouvir melhor e me sentindo assim mais inserida na sociedade. O cuidado que os profissionais têm com seus pacientes é de verdade.",
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

  const scrollTo = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -288 : 288, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current) * 1.2;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden py-14 md:py-20">
      <img
        src="/images/clientes-audiovoz-sao-miguel.webp"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,12,26,0.94) 0%, rgba(14,26,54,0.82) 35%, rgba(18,32,62,0.78) 65%, rgba(6,12,26,0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(28,60,130,0.55) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <div className="av-reveal mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-semibold text-[22px] leading-tight text-white md:text-[32px] lg:text-[36px]">
            O que dizem famílias que passaram pela AudioVoz
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
            Mais de 730 famílias avaliaram a AudioVoz no Google — histórias de quem voltou a
            participar. Todas com nota máxima.
          </p>
          <div className="mt-7 flex flex-wrap items-start justify-center gap-0">
            {[
              { value: "5.0", label: "nota Google", stars: true },
              { value: "+730", label: "avaliações verificadas", stars: false },
              { value: "+3.000", label: "pacientes atendidos", stars: false },
            ].map((stat, i) => (
              <div
                key={stat.value}
                className="flex flex-col items-center px-6 py-1 text-center"
                style={i < 2 ? { borderRight: "1px solid rgba(255,255,255,0.18)" } : undefined}
              >
                <div className="mb-2 flex h-[22px] items-center justify-center gap-0.5">
                  {stat.stars &&
                    Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" style={{ color: "#fbbf24" }} />
                    ))}
                </div>
                <span className="font-serif text-[44px] font-bold leading-none text-white md:text-[56px]">
                  {stat.value}
                </span>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
            style={{
              borderColor: "rgba(255,255,255,0.28)",
              backgroundColor: "rgba(255,255,255,0.10)",
              color: "white",
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            aria-label="Próximo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
            style={{
              borderColor: "rgba(255,255,255,0.28)",
              backgroundColor: "rgba(255,255,255,0.10)",
              color: "white",
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="av-reveal av-carousel relative mt-4 w-full overflow-x-auto px-5 pb-3 md:px-8"
        style={{ cursor: "grab" }}
      >
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex w-[272px] flex-col rounded-2xl p-5"
              style={{
                backgroundColor: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#fbbf24" }} />
                ))}
              </div>
              <p
                className="mt-3 flex-1 text-[14px] leading-[1.65]"
                style={{ color: "var(--av-text)" }}
              >
                "{t.text}"
              </p>
              <div className="mt-4 border-t pt-3" style={{ borderColor: "var(--av-border)" }}>
                <p className="text-[13px] font-semibold" style={{ color: "var(--av-primary)" }}>
                  {t.name}
                </p>
                <p className="text-[11px]" style={{ color: "var(--av-text-2)" }}>
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="av-reveal relative mt-10 flex flex-col items-center gap-3 px-5 pb-2 text-center md:px-8">
        <WhatsAppButton href={WA_LINK} className="md:min-w-[360px]">
          Falar com a AudioVoz
        </WhatsAppButton>
        <p className="text-[13px] text-white/60">
          WhatsApp · São Miguel Paulista · Zona Leste
        </p>
      </div>
    </section>
  );
}

/* ---------------- MAP MODAL ---------------- */
function MapModal({ onClose }: { onClose: () => void }) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <div
        className="av-backdrop-in fixed inset-0 z-50"
        style={{
          backgroundColor: "rgba(4,8,20,0.72)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Localização AudioVoz São Miguel Paulista"
        className="av-modal-in fixed inset-x-3 top-[5vh] z-50 mx-auto flex max-h-[90vh] flex-col overflow-hidden rounded-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:w-full md:max-w-[660px] md:-translate-x-1/2 md:-translate-y-1/2"
        style={{
          background: "linear-gradient(165deg, #0D1F42 0%, #132648 45%, #0A1830 100%)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.09)",
          border: "1px solid rgba(255,255,255,0.11)",
        }}
      >
        <div
          className="flex shrink-0 items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 shrink-0" style={{ color: "var(--av-accent)" }} />
            <span className="text-[15px] font-semibold text-white">
              AudioVoz — São Miguel Paulista
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar mapa"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative h-[220px] shrink-0 md:h-[280px]">
          <iframe
            title="Localização AudioVoz São Miguel Paulista"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.450866%2C-23.500391%2C-46.434866%2C-23.490391&layer=mapnik&marker=-23.495391%2C-46.442866"
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--av-accent)" }} />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-white/55">
                  Endereço
                </p>
                <p className="mt-1 text-[14px] leading-[1.55] text-white/85">
                  Av. Nordestina, Nº 210
                  <br />
                  Vila Americana — São Paulo, SP
                  <br />
                  CEP: 08011-000
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--av-accent)" }} />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-white/55">
                  Contato
                </p>
                <p className="mt-1 text-[14px] leading-[1.65] text-white/85">
                  WhatsApp: (11) 95385-2353
                  <br />
                  Telefone: (11) 2297-4323
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <a
              href={WA_LINK_VISIT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-lg text-[15px] font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--av-accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--av-accent-hover)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--av-accent)")}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  const [mapOpen, setMapOpen] = React.useState(false);
  return (
    <>
      <section
        id="localizacao"
        className="av-noise relative overflow-hidden py-16 md:py-24 text-white"
        style={{
          background: "linear-gradient(162deg, #0D1F42 0%, #152845 28%, #1B3260 62%, #090E22 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(4,8,20,0.58) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-36 -right-36 h-[520px] w-[520px] rounded-full opacity-18"
          style={{ background: "radial-gradient(closest-side, #E05A1A, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-15"
          style={{ background: "radial-gradient(closest-side, #2A5CB0, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full opacity-12"
          style={{ background: "radial-gradient(closest-side, #1E5A8A, transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="av-reveal mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[22px] font-semibold leading-tight md:text-[32px] lg:text-[36px]">
              A AudioVoz está aqui, em São Miguel Paulista.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <article
              className="av-reveal av-glass rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
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
                A matriz da AudioVoz fica na Av. Nordestina, na Vila Americana — no coração de São
                Miguel Paulista.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setMapOpen(true)}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" /> Como chegar
                </button>
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

            <article
              className="av-reveal av-glass rounded-2xl p-6"
              style={
                {
                  "--d": "0.12s",
                  backgroundColor: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",
                } as React.CSSProperties
              }
            >
              <p className="text-[13px] uppercase tracking-wide text-white/60">
                Também atendemos em
              </p>
              <h3 className="font-serif mt-1 text-[20px] font-semibold">Guarulhos</h3>
              <p className="mt-3 text-[15px] text-white/85">
                Carrefour Vila Rios — Av. Benjamin Harris Hunicutt, S/N - Vila Rio, Guarulhos - SP
              </p>
              <p className="mt-3 flex items-center gap-2 text-[15px] text-white/90">
                <WhatsAppIcon className="h-4 w-4" /> (11) 91761-4652
              </p>
            </article>
          </div>

          <p className="mt-10 text-center text-[14px] text-white/80">
            Prefere falar antes de vir? Mande uma mensagem pelo WhatsApp — a equipe responde e
            orienta você.
          </p>
        </div>
      </section>
      {mapOpen && <MapModal onClose={() => setMapOpen(false)} />}
    </>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    [
      "Preciso decidir algo já na primeira consulta?",
      "Não. A primeira consulta é só para entender — você ouve as opções, tira todas as dúvidas e decide com calma. Não existe pressão, não existe prazo. A AudioVoz acredita que a decisão certa vem depois da informação certa.",
    ],
    [
      "Vocês ajudam a entender qual solução faz mais sentido para o meu caso?",
      "Sim. Esse é o ponto central da AudioVoz. Antes de qualquer indicação, a equipe avalia o caso, entende a rotina e orienta com honestidade — incluindo quando a melhor opção ainda não é um aparelho auditivo.",
    ],
    [
      "Como funciona o processo de adaptação ao aparelho auditivo?",
      "A adaptação é gradual e acompanhada. O fonoaudiólogo programa o aparelho de acordo com o perfil auditivo e faz os ajustes necessários ao longo do tempo — sem custo adicional. O processo é feito no ritmo de cada pessoa.",
    ],
    [
      "Posso agendar para um familiar que está com dificuldade auditiva?",
      "Sim. A maioria dos nossos pacientes vem pela primeira vez acompanhada de um familiar. Você pode agendar pelo WhatsApp para qualquer pessoa — basta informar para quem é a avaliação. A equipe orienta você sobre como funciona o atendimento desde o primeiro contato.",
    ],
    [
      "Vocês têm parcelamento para aparelhos auditivos?",
      "Sim. Os aparelhos auditivos podem ser parcelados em até 12x sem juros. Cada caso é diferente, então durante a avaliação a equipe apresenta as opções de pagamento adaptadas à sua realidade.",
    ],
    [
      "Como saber se preciso de uma avaliação auditiva?",
      "Se você percebe que está pedindo para as pessoas repetirem com mais frequência, que o volume da televisão aumentou, ou que está com dificuldade em ambientes com barulho — esses podem ser sinais de que vale a pena conversar com um profissional. A equipe da AudioVoz pode orientar você sobre os próximos passos pelo WhatsApp.",
    ],
    [
      "Vocês atendem crianças?",
      "Sim. A AudioVoz oferece atendimento para crianças com atenção às necessidades de cada faixa etária. Se você tem alguma preocupação com a audição ou a fala do seu filho, entre em contato pelo WhatsApp e a equipe orienta você sobre como funciona o atendimento.",
    ],
    [
      "Vocês atendem pessoas autistas ou com necessidades específicas?",
      "A AudioVoz tem experiência com atendimento para pessoas com necessidades específicas. Cada caso é conduzido com cuidado, respeito e no ritmo de cada pessoa. Entre em contato pelo WhatsApp para que a equipe possa orientar sobre como funciona o atendimento para cada situação.",
    ],
    [
      "Vocês trabalham com aparelhos auditivos sob medida?",
      "Sim. A AudioVoz oferece aparelhos auditivos com adaptação individual, desenvolvidos com base na avaliação auditiva de cada pessoa. A indicação é feita com atenção ao perfil auditivo real — não ao produto padrão.",
    ],
    [
      "Quanto custa o atendimento?",
      "A avaliação auditiva é gratuita. Para os demais serviços — como adaptação de aparelhos auditivos ou consultas específicas — os valores variam. Para aparelhos auditivos, a AudioVoz oferece parcelamento em até 12x sem juros. Entre em contato pelo WhatsApp e a equipe orienta você sobre as opções disponíveis.",
    ],
    [
      "Os aparelhos têm garantia?",
      "Sim. Os aparelhos auditivos da AudioVoz têm garantia de 2 anos. Além disso, os ajustes são vitalícios — a equipe acompanha você durante todo o uso do aparelho, sem custo adicional para os ajustes.",
    ],
    [
      "Quanto tempo dura a bateria do aparelho auditivo?",
      "Depende do modelo, do tempo de uso diário e dos recursos utilizados, como conectividade. Durante a avaliação, a equipe orienta a melhor opção para cada rotina.",
    ],
    [
      "Quanto tempo dura um aparelho auditivo?",
      "A vida útil média costuma ser em torno de 4 anos, variando conforme o cuidado, manuseio, tipo de perda auditiva e manutenção preventiva.",
    ],
    [
      "É melhor aparelho com bateria ou recarregável?",
      "Depende do perfil de uso. Quem utiliza bastante conectividade pode se beneficiar de modelos recarregáveis, mas a melhor escolha deve considerar a rotina e a necessidade auditiva de cada pessoa.",
    ],
    [
      "De quanto em quanto tempo preciso fazer manutenção?",
      "A recomendação geral é fazer manutenção preventiva a cada 4 meses para preservar o funcionamento e a qualidade do aparelho.",
    ],
  ];
  return (
    <Section
      id="faq"
      className="py-14 md:py-20"
      style={{ background: "linear-gradient(180deg, #FBFAF7 0%, #FAF8F4 100%)" }}
    >
      <div className="av-reveal mx-auto max-w-[680px]">
        <H2 className="text-center">Perguntas frequentes</H2>
        <div
          className="mt-8 rounded-2xl px-5 py-2 md:px-10"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(15,31,57,0.07)",
            boxShadow:
              "0 2px 16px rgba(15,31,57,0.06), 0 1px 3px rgba(15,31,57,0.03), inset 0 1px 0 rgba(255,255,255,0.96)",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map(([q, a], idx) => (
              <AccordionItem
                key={q}
                value={`item-${idx}`}
                className="border-b last:border-b-0"
                style={{ borderColor: "rgba(15,31,57,0.07)" } as React.CSSProperties}
              >
                <AccordionTrigger
                  className="py-5 text-left font-sans text-[16px] font-semibold hover:no-underline md:text-[17px]"
                  style={{ color: "var(--av-text)" }}
                >
                  {q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-[16px] leading-[1.65]"
                  style={{ color: "var(--av-text-2)" }}
                >
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
      <img
        src="/images/fachada-audiovoz-sao-miguel-paulista.webp"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,8,20,0.96) 0%, rgba(12,24,50,0.82) 40%, rgba(16,30,58,0.78) 60%, rgba(4,8,20,0.97) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(24,60,140,0.60) 0%, transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 75%, rgba(224,90,26,0.50) 0%, transparent 45%)",
        }}
      />
      <div className="av-reveal relative mx-auto max-w-2xl px-5 text-center md:px-8">
        <h2 className="font-serif text-[30px] font-bold leading-[1.2] md:text-[42px]">
          O primeiro passo é conversar. O resto, a AudioVoz ajuda você a entender com calma.
        </h2>
        <p className="mt-6 text-[17px] leading-[1.7] text-white/85 md:text-[18px]">
          A AudioVoz está em São Miguel Paulista para ajudar você ou alguém da sua família a
          encontrar a melhor solução — com orientação honesta, cuidado real e sem pressa para
          decidir.
        </p>
        <p className="mt-8 text-[15px] italic text-white/70">
          "Ela disse que agora está vivendo." — Rosely Lima, sobre sua mãe de 85 anos.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton href={WA_LINK} large>
            Quero marcar uma avaliação auditiva
          </WhatsAppButton>
        </div>
        <p className="mt-5 text-[13px] text-white/60">
          Dar o primeiro passo agora pode evitar meses de dúvida, esforço e conversas perdidas.
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
              src="/images/logo-audiovoz.webp"
              srcSet="/images/logo-audiovoz-200w.webp 200w, /images/logo-audiovoz.webp 846w"
              sizes="96px"
              alt="AudioVoz"
              width={846}
              height={433}
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
            <p
              className="text-[13px] font-semibold uppercase tracking-wide"
              style={{ color: "#A0AEC0" }}
            >
              São Miguel Paulista (Matriz)
            </p>
            <p className="mt-2 leading-[1.65]">
              Av. Nordestina, Nº 210 - Vila Americana, São Paulo - SP, CEP: 08011-000
            </p>
            <p className="mt-1">WhatsApp: (11) 95385-2353</p>
            <p>Tel: (11) 2297-4323</p>
          </div>
          <div>
            <p
              className="text-[13px] font-semibold uppercase tracking-wide"
              style={{ color: "#A0AEC0" }}
            >
              Guarulhos (Filial)
            </p>
            <p className="mt-2 leading-[1.65]">
              Carrefour Vila Rios — Av. Benjamin Harris Hunicutt, S/N - Vila Rio, Guarulhos - SP,
              CEP: 07124-000
            </p>
            <p className="mt-1">WhatsApp: (11) 91761-4652</p>
          </div>
        </div>
        <div className="space-y-3 text-[14px]">
          <p
            className="text-[13px] font-semibold uppercase tracking-wide"
            style={{ color: "#A0AEC0" }}
          >
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
        <div
          className="mx-auto max-w-[1200px] px-5 py-5 text-center text-[13px] md:px-8"
          style={{ color: "#A0AEC0" }}
        >
          © AudioVoz — Centro Auditivo | Desde 1998
        </div>
      </div>
    </footer>
  );
}

/* ---------------- BELOW FOLD ENTRY POINT ---------------- */
export default function BelowFold() {
  useRevealOnScroll();
  return (
    <>
      <Audience />
      <About />
      <Testimonials />
      <TrustBlock />
      <Services />
      <HowItWorks />
      <Location />
      <FAQ />
      <CtaFinal />
      <Footer />
    </>
  );
}
