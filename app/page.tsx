"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronDown,
  Command,
  Gauge,
  LockKeyhole,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  ["Produto", "#produto"],
  ["Perfis", "#perfis"],
  ["Recursos", "#recursos"],
  ["Resultados", "#resultados"],
  ["FAQ", "#faq"]
];

const proof = ["Oficinas premium", "Redes em expansao", "Gestores financeiros", "Operacoes multibox"];

const profiles = [
  {
    icon: Wrench,
    role: "Mecanico",
    promise: "Ve so o que precisa executar agora.",
    details: ["OS da vez", "Checklist claro", "Fotos e observacoes", "Status em 1 toque"]
  },
  {
    icon: Timer,
    role: "Consultor",
    promise: "Acompanha prazo, aprovacao e cliente sem garimpar mensagens.",
    details: ["Agenda do dia", "Aprovacoes pendentes", "Veiculos em atraso", "Proximo contato"]
  },
  {
    icon: BarChart3,
    role: "Dono",
    promise: "Enxerga margem, gargalos e caixa sem entrar em cada atendimento.",
    details: ["Receita prevista", "Produtividade", "Margem por OS", "Saude financeira"]
  }
];

const features = [
  {
    icon: CalendarCheck,
    title: "Agenda que vende capacidade",
    text: "Distribua servicos por box, tecnico, tempo estimado e prioridade sem perder margem no calendario."
  },
  {
    icon: Wrench,
    title: "OS viva, nao formulario",
    text: "Cada ordem acompanha checklist, fotos, status, aprovacao, pecas e historico do cliente em tempo real."
  },
  {
    icon: BarChart3,
    title: "Financeiro no cockpit",
    text: "Recebiveis, despesas, ticket medio, inadimplencia e previsao de caixa conectados a cada atendimento."
  },
  {
    icon: MessageSquareText,
    title: "Cliente sempre informado",
    text: "Mensagens de status, aprovacoes e retornos reduzem ansiedade e aumentam confianca na oficina."
  }
];

const bento = [
  {
    eyebrow: "Operacao",
    title: "Visao de patio em tempo real",
    text: "Saiba o que esta parado, atrasado, aprovado ou pronto para faturar.",
    className: "lg:col-span-2",
    visual: "timeline"
  },
  {
    eyebrow: "Margem",
    title: "Preco com contexto",
    text: "Compare mao de obra, pecas, descontos e lucro antes de enviar a aprovacao.",
    className: "",
    visual: "margin"
  },
  {
    eyebrow: "Controle",
    title: "Permissoes por papel",
    text: "Dono, consultor, mecanico e financeiro veem apenas o que precisam.",
    className: "",
    visual: "roles"
  },
  {
    eyebrow: "Crescimento",
    title: "Indicadores que explicam o mes",
    text: "Entenda gargalos de agenda, conversao, retrabalho, ticket e produtividade.",
    className: "lg:col-span-2",
    visual: "chart"
  }
];

const benefits = [
  "Menos perda de informacao entre atendimento, mecanica e financeiro.",
  "Mais velocidade para aprovar servicos e liberar veiculos.",
  "Mais previsibilidade sobre caixa, agenda e capacidade produtiva.",
  "Mais confianca para o cliente voltar e indicar sua oficina."
];

const comparison = [
  ["Agenda e ordens", "Quadros, papeis e planilhas", "Fluxo unico com status, responsaveis e SLA"],
  ["Aprovacao", "WhatsApp solto e historico perdido", "Proposta rastreavel com itens, valores e retorno"],
  ["Financeiro", "Lancado depois, quando da tempo", "Conectado ao atendimento desde a abertura"],
  ["Gestao", "Decisao por intuicao", "Painel com margem, produtividade e gargalos"]
];

const faqs = [
  {
    q: "O Driveon substitui minha planilha atual?",
    a: "Sim. A proposta e centralizar agenda, clientes, OS, financeiro e indicadores para que a planilha deixe de ser o centro da operacao."
  },
  {
    q: "Funciona para oficina pequena?",
    a: "Funciona melhor ainda quando a oficina quer crescer com processo. A interface e simples para o time, mas estruturada para gestao profissional."
  },
  {
    q: "Preciso instalar algo?",
    a: "Nao. O Driveon e web, rapido de acessar e pensado para uso no balcao, escritorio e celular."
  },
  {
    q: "Da para adaptar meu fluxo?",
    a: "A landing posiciona o produto para operacoes premium, mas o sistema pode organizar etapas, permissoes e rotinas conforme o modelo da oficina."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
        {text}
      </p>
    </Reveal>
  );
}

function ProductMockup() {
  const rows = [
    ["09:20", "Civic Touring", "Diagnostico", "Em progresso"],
    ["10:10", "Compass", "Aprovacao", "Cliente"],
    ["11:40", "Corolla", "Troca de oleo", "Pronto"]
  ];

  return (
    <motion.div
      className="relative mx-auto mt-14 w-full max-w-6xl"
      initial={{ opacity: 0, y: 42, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_50%_0%,rgba(91,126,255,.34),transparent_56%)] blur-2xl" />
      <div className="glass-line relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d18]/86 shadow-premium backdrop-blur-2xl">
        <div className="flex h-12 items-center justify-between border-b border-white/10 px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff6a6a]" />
            <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
            <span className="h-3 w-3 rounded-full bg-[#54e6a5]" />
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[.04] px-4 py-1 text-xs text-zinc-400 sm:block">
            driveon.app/oficina/comando
          </div>
          <Command className="h-4 w-4 text-zinc-500" />
        </div>

        <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[220px_1fr_280px]">
          <aside className="hidden border-r border-white/10 bg-white/[.025] p-4 lg:block">
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white text-zinc-950">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Driveon</p>
                <p className="text-xs text-zinc-500">Oficina Jardim</p>
              </div>
            </div>
            {["Comando", "Agenda", "Ordens", "Clientes", "Financeiro"].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "mb-2 rounded-[10px] px-3 py-2 text-sm",
                  index === 0
                    ? "bg-white text-zinc-950"
                    : "text-zinc-500 hover:bg-white/[.04] hover:text-zinc-200"
                )}
              >
                {item}
              </div>
            ))}
          </aside>

          <main className="p-4 sm:p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                  Hoje
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                  Centro de comando
                </h3>
              </div>
              <div className="flex gap-2">
                {["Receita +18%", "SLA 94%"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["R$ 38.420", "previsao do mes"],
                ["27", "OS ativas"],
                ["4h 12m", "tempo medio"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[.04] p-4">
                  <p className="text-xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <div className="grid grid-cols-[.6fr_1.2fr_1fr_1fr] border-b border-white/10 px-4 py-3 text-xs text-zinc-500">
                <span>Hora</span>
                <span>Veiculo</span>
                <span>Etapa</span>
                <span>Status</span>
              </div>
              {rows.map((row, index) => (
                <motion.div
                  key={row[1]}
                  className="grid grid-cols-[.6fr_1.2fr_1fr_1fr] items-center px-4 py-4 text-sm text-zinc-300"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.12 }}
                >
                  {row.map((cell, cellIndex) => (
                    <span
                      key={cell}
                      className={cn(cellIndex === 3 && "text-cyan-100")}
                    >
                      {cell}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </main>

          <aside className="border-t border-white/10 bg-white/[.025] p-4 sm:p-6 lg:border-l lg:border-t-0">
            <div className="rounded-xl border border-white/10 bg-[#0c1322] p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Margem da semana</p>
                <Gauge className="h-4 w-4 text-cyan-200" />
              </div>
              <div className="relative grid aspect-square place-items-center rounded-full bg-[conic-gradient(from_180deg,#7dd3fc_0_72%,rgba(255,255,255,.08)_72%_100%)]">
                <div className="grid h-[72%] w-[72%] place-items-center rounded-full bg-[#0c1322]">
                  <div className="text-center">
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-white">31%</p>
                    <p className="mt-1 text-xs text-zinc-500">lucro liquido</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[.035] p-4">
              <p className="text-sm font-medium text-white">Proximo melhor movimento</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Repriorizar 2 OS aguardando aprovacao aumenta faturamento previsto em R$ 4.800.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

function BentoVisual({ type }: { type: string }) {
  if (type === "timeline") {
    return (
      <div className="mt-8 space-y-3">
        {["Entrada", "Diagnostico", "Aprovacao", "Execucao"].map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[.05] text-xs text-white">
              {index + 1}
            </div>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[.07]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-indigo-300"
                initial={{ width: "0%" }}
                whileInView={{ width: `${92 - index * 13}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>
            <span className="w-24 text-right text-xs text-zinc-500">{step}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="mt-8 flex h-28 items-end gap-2">
        {[42, 64, 52, 78, 69, 88, 82, 96].map((height, index) => (
          <motion.div
            key={height + index}
            className="flex-1 rounded-t-[8px] bg-gradient-to-t from-indigo-500/55 to-cyan-200"
            initial={{ height: 8 }}
            whileInView={{ height }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
          />
        ))}
      </div>
    );
  }

  if (type === "roles") {
    return (
      <div className="mt-8 grid grid-cols-2 gap-2">
        {["Dono", "Consultor", "Tecnico", "Caixa"].map((role) => (
          <div key={role} className="rounded-[10px] border border-white/10 bg-white/[.045] p-3">
            <LockKeyhole className="mb-3 h-4 w-4 text-cyan-200" />
            <p className="text-sm text-white">{role}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
        <span>Orcamento</span>
        <span className="text-emerald-200">+24%</span>
      </div>
      <div className="space-y-2">
        {["Mao de obra", "Pecas", "Desconto"].map((item, index) => (
          <div key={item} className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">{item}</span>
            <span className="text-white">{["R$ 640", "R$ 1.280", "R$ 120"][index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.45]);

  const metrics = useMemo(
    () => [
      ["32%", "mais aprovacoes sem follow-up manual"],
      ["18h", "economizadas por semana na rotina administrativa"],
      ["2.4x", "mais clareza sobre gargalos de producao"]
    ],
    []
  );

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#070a12]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[980px] premium-grid opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-[-360px] -z-10 h-[720px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,126,255,.28),transparent_62%)] blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#070a12]/62 backdrop-blur-2xl">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Driveon - inicio">
            <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white text-zinc-950 shadow-glow">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-[-0.01em] text-white">Driveon</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <Button asChild variant="glass" className="hidden md:inline-flex">
            <a href="#cta">
              Pedir demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden px-0 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <motion.div style={{ y: heroY, opacity }} className="container relative z-10 text-center">
          <motion.div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.045] px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-glow backdrop-blur-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200" />
            </span>
            Novo padrao operacional para oficinas de alta performance
          </motion.div>

          <motion.h1
            className="text-balance mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl lg:text-[92px] lg:leading-[0.95]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Sua oficina operando como uma empresa gigante.
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            O Driveon transforma agenda, ordens de servico, clientes, financeiro e indicadores em um centro de comando elegante para crescer com controle.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button asChild variant="glow" size="lg" className="w-full sm:w-auto">
              <a href="#cta">
                Quero ver minha oficina assim
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
              <a href="#produto">
                <Play className="mr-2 h-4 w-4" />
                Ver o produto
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <ProductMockup />
      </section>

      <section className="border-y border-white/[.06] bg-white/[.025] py-6">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-500">Construido para operacoes que querem escala, reputacao e margem.</p>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
            {proof.map((item) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-center text-xs font-medium text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produto" className="container py-20 sm:py-28">
        <SectionIntro
          label="Produto"
          title="Menos improviso. Mais comando."
          text="A oficina deixa de depender de memoria, papel e mensagens soltas. Cada etapa ganha dono, contexto e proximo passo claro."
        />

        <div id="perfis" className="mt-12 grid gap-4 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <Reveal key={profile.role} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-white/10 bg-[#0a101c]/88 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[.045]">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                      Perfil
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                      {profile.role}
                    </h3>
                  </div>
                  <div className="grid h-11 w-11 flex-none place-items-center rounded-[12px] border border-white/10 bg-white/[.055] text-cyan-100">
                    <profile.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="min-h-12 text-sm leading-6 text-zinc-300">{profile.promise}</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {profile.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[10px] border border-white/10 bg-white/[.035] px-3 py-2 text-xs text-zinc-400"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[.055]">
                <div className="mb-8 grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-white/[.055] text-cyan-100 transition-transform duration-300 group-hover:scale-105">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="recursos" className="relative border-y border-white/[.06] bg-[#090d16] py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid-fade bg-[length:72px_72px] opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]" />
        <div className="container relative">
          <SectionIntro
            label="Sistema"
            title="Uma camada de inteligencia em cima da rotina inteira."
            text="O design do produto foi pensado para reduzir atrito no balcao e aumentar qualidade de decisao no escritorio."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {bento.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className={item.className}>
                <article className="group relative min-h-[310px] overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/25">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">{item.eyebrow}</p>
                  <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">{item.text}</p>
                  <BentoVisual type={item.visual} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
              Conversao operacional
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              Quando a operacao parece premium, o cliente sente antes de pagar.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
              A landing posiciona o Driveon como tecnologia de alto valor: menos promessa generica, mais evidencia de controle, velocidade e crescimento.
            </p>
            <div className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-cyan-200" />
                  <p className="text-sm leading-6 text-zinc-300">{benefit}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-5 backdrop-blur-xl">
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-5">
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-[#0c1322] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Saude da operacao</p>
                  <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">Estavel</span>
                </div>
                <div className="space-y-4">
                  {["Conversao de orcamentos", "Produtividade por tecnico", "Recebimento no prazo"].map((label, index) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-zinc-400">{label}</span>
                        <span className="text-zinc-200">{[84, 76, 91][index]}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[.07]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-indigo-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${[84, 76, 91][index]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.08 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/[.06] bg-white/[.025] py-20 sm:py-28">
        <div className="container">
          <SectionIntro
            label="Comparativo"
            title="O salto de percepcao vem do salto de processo."
            text="A pagina deixa claro o contraste entre a oficina que apaga incendio e a operacao que controla cada detalhe."
          />

          <Reveal className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#090d16]/90 backdrop-blur-xl">
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/[.035] px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:px-6">
              <span>Area</span>
              <span>Antes</span>
              <span className="text-cyan-100">Com Driveon</span>
            </div>
            {comparison.map(([area, before, after]) => (
              <div key={area} className="grid grid-cols-1 gap-3 border-b border-white/[.06] px-4 py-5 last:border-b-0 sm:grid-cols-3 sm:px-6">
                <p className="font-medium text-white">{area}</p>
                <p className="text-sm leading-6 text-zinc-500">{before}</p>
                <p className="text-sm leading-6 text-zinc-200">{after}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="faq" className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
              FAQ
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              Perguntas antes da decisao.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-zinc-400">
              Respostas curtas, confiantes e focadas em reduzir friccao para pedir uma demo.
            </p>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.04}>
                <button
                  className="w-full rounded-2xl border border-white/10 bg-white/[.035] p-5 text-left transition-colors hover:bg-white/[.055]"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown className={cn("h-5 w-5 text-zinc-500 transition-transform", openFaq === index && "rotate-180 text-cyan-200")} />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm leading-7 text-zinc-400">{faq.a}</p>
                  </motion.div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="container pb-16 sm:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.09),rgba(255,255,255,.035))] px-6 py-14 text-center shadow-premium backdrop-blur-xl sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-grid-fade bg-[length:58px_58px] opacity-20" />
            <div className="absolute left-1/2 top-0 h-56 w-2/3 -translate-x-1/2 rounded-full bg-cyan-200/15 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-[14px] bg-white text-zinc-950">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
                Pare de administrar uma oficina no improviso.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
                Mostre ao seu cliente uma operacao organizada, ao seu time um fluxo claro e ao seu financeiro um negocio previsivel.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="glow" size="lg">
                  <a href="mailto:contato@driveon.app?subject=Quero%20uma%20demo%20do%20Driveon">
                    Agendar demo premium
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href="#produto">Rever produto</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/[.06] py-10">
        <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white text-zinc-950">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Driveon</p>
              <p className="text-xs text-zinc-500">Sistema operacional para oficinas modernas</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <a href="#produto" className="hover:text-white">Produto</a>
            <a href="#recursos" className="hover:text-white">Recursos</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="h-4 w-4" />
            <span>© 2026 Driveon</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
