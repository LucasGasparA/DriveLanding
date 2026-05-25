import * as React from "react";
import {
  Box,
  Button,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import logo from "./assets/logo.png";
import logoIcon from "./assets/logoIcon.png";

const prompts = [
  {
    question: "O que preciso resolver hoje?",
    answer: "Cobrar R$ 4.820 vencidos, destravar 7 OS paradas e comprar 18 itens criticos.",
    metric: "3 acoes",
  },
  {
    question: "Onde meu dinheiro esta parado?",
    answer: "R$ 31.260 estao em OS abertas e R$ 38.400 em estoque. Comece pelas OS acima de 3 dias.",
    metric: "R$ 69.660",
  },
  {
    question: "Qual relatorio devo abrir primeiro?",
    answer: "Caixa e inadimplencia. Ha contas vencidas e recebimentos pendentes que afetam o saldo da semana.",
    metric: "caixa",
  },
];

const abilities = [
  ["Enxerga a rotina", "Clientes, veiculos, ordens, estoque e financeiro conectados em uma unica leitura."],
  ["Prioriza decisoes", "Mostra o que cobrar, destravar, comprar, retomar e precificar primeiro."],
  ["Explica em relatorios", "Transforma dados da oficina em relatorios simples de ler e agir."],
];

const reports = [
  ["Caixa e inadimplencia", "Recebidos, vencidos, a receber e a pagar."],
  ["OS abertas e paradas", "Dias em aberto, mecanico, cliente e valor preso."],
  ["Estoque critico", "Compra urgente, capital parado e margem baixa."],
  ["Orcamentos perdidos", "Receita nao convertida e follow-ups pendentes."],
  ["Rentabilidade por OS", "Lucro bruto estimado e preco para revisar."],
];

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Driveon">
        <img src={logo} alt="Driveon" />
      </a>
      <nav>
        <a href="#faz">O que faz</a>
        <a href="#relatorios">Relatorios</a>
        <a href="#planos">Planos</a>
      </nav>
      <Button variant="contained" href="#demo">Experimentar</Button>
    </header>
  );
}

function App() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % prompts.length), 4300);
    return () => window.clearInterval(id);
  }, []);

  const current = prompts[active];

  return (
    <>
      <Header />
      <main id="inicio">
        <section className="hero">
          <Box className="hero-light" />
          <Chip className="hero-chip" icon={<AutoAwesomeRoundedIcon />} label="Driveon para oficinas" />
          <Typography component="h1">
            O jeito mais claro de entender sua oficina.
          </Typography>
          <Typography className="hero-subtitle">
            Pergunte o que esta travando a operacao, veja as prioridades do dia e abra relatorios que terminam em decisao.
          </Typography>

          <Box className="ask-card">
            <Box className="ask-input">
              <AutoAwesomeRoundedIcon />
              <span>{current.question}</span>
            </Box>
            <Box className="ask-answer" key={current.question}>
              <strong>{current.metric}</strong>
              <p>{current.answer}</p>
            </Box>
            <Box className="prompt-tabs">
              {prompts.map((prompt, index) => (
                <button
                  type="button"
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                  key={prompt.question}
                >
                  {prompt.question}
                </button>
              ))}
            </Box>
          </Box>

          <Button className="hero-cta" variant="contained" href="#demo" endIcon={<ArrowForwardRoundedIcon />}>
            Ver uma demonstracao
          </Button>
        </section>

        <section id="faz" className="ability-section">
          <Box className="section-copy">
            <Typography component="p">O que o Driveon faz</Typography>
            <Typography component="h2">Ele organiza dados e devolve caminho.</Typography>
          </Box>
          <Box className="ability-grid">
            {abilities.map(([title, text], index) => (
              <article key={title}>
                {[<BoltRoundedIcon />, <SettingsSuggestRoundedIcon />, <QueryStatsRoundedIcon />][index]}
                <Typography component="h3">{title}</Typography>
                <Typography>{text}</Typography>
              </article>
            ))}
          </Box>
        </section>

        <section className="canvas-section">
          <Box className="canvas-copy">
            <Typography component="h2">Uma tela viva para a oficina inteira.</Typography>
            <Typography>
              O Driveon junta a operacao em uma leitura simples: financeiro, ordens, estoque, orcamentos e relatorios conversam entre si.
            </Typography>
          </Box>
          <Box className="product-canvas" aria-label="Previa visual do Driveon">
            <Box className="canvas-sidebar">
              <img src={logoIcon} alt="" />
              <span className="on">Inicio</span>
              <span>Ordens</span>
              <span>Financeiro</span>
              <span>Estoque</span>
              <span>Relatorios</span>
            </Box>
            <Box className="canvas-main">
              <Box className="canvas-top">
                <Typography fontWeight={850}>Prioridades de hoje</Typography>
                <Chip size="small" label="ao vivo" />
              </Box>
              <Box className="canvas-metrics">
                <div><span>A receber</span><strong>R$ 18.240</strong></div>
                <div><span>OS paradas</span><strong>7</strong></div>
                <div><span>Estoque critico</span><strong>18</strong></div>
              </Box>
              <Box className="canvas-list">
                <div><span>Cliente para cobrar</span><b>alta</b></div>
                <div><span>OS #1842 parada ha 6 dias</span><b>acao</b></div>
                <div><span>Filtro de oleo no minimo</span><b>compra</b></div>
              </Box>
            </Box>
          </Box>
        </section>

        <section id="relatorios" className="reports-section">
          <Box className="section-copy centered">
            <Typography component="p">Relatorios</Typography>
            <Typography component="h2">Decisoes prontas para virar acao.</Typography>
          </Box>
          <Box className="reports-grid">
            {reports.map(([title, text]) => (
              <article key={title}>
                <Typography component="h3">{title}</Typography>
                <Typography>{text}</Typography>
              </article>
            ))}
          </Box>
        </section>

        <section id="planos" className="plans-section">
          <Box className="plan-card">
            <span>Driveon Oficina</span>
            <Typography component="h2">Tudo para comecar a gerir melhor.</Typography>
            <Typography>
              Controle operacional, financeiro, estoque, orcamentos e relatorios essenciais em um unico sistema.
            </Typography>
            <Button variant="contained" href="#demo" endIcon={<ArrowForwardRoundedIcon />}>Conhecer plano</Button>
          </Box>
          <Box className="plan-card dark">
            <span>Driveon Gestao</span>
            <Typography component="h2">Mais leitura para decidir com calma.</Typography>
            <Typography>
              Ideal para oficinas que querem relatórios de caixa, OS paradas, estoque critico e rentabilidade.
            </Typography>
            <Button variant="contained" href="#demo" endIcon={<ArrowForwardRoundedIcon />}>Falar com especialista</Button>
          </Box>
        </section>

        <section id="demo" className="demo-section">
          <Box className="section-copy">
            <Typography component="p">Demo</Typography>
            <Typography component="h2">Veja o Driveon lendo sua oficina.</Typography>
          </Box>
          <Box className="demo-form">
            <TextField label="Nome" fullWidth />
            <TextField label="WhatsApp" fullWidth />
            <Button variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />}>Solicitar demonstracao</Button>
          </Box>
        </section>
      </main>
    </>
  );
}

export default App;
