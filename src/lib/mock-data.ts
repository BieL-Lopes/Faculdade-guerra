export type LeadStatus = "novo" | "contato" | "visita" | "proposta" | "matriculado";

export type Lead = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  status: LeadStatus;
  origem: string;
  criadoEm: string;
};

export type Aluno = {
  id: string;
  matricula: string;
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  turma: string;
  situacao: "ativo" | "trancado" | "evadido" | "formado";
  ingressoEm: string;
};

export type Turma = {
  id: string;
  codigo: string;
  nome: string;
  curso: string;
  professor: string;
  periodo: string;
  alunos: number;
  capacidade: number;
};

export type Disciplina = {
  id: string;
  turmaId: string;
  nome: string;
  cargaHoraria: number;
};

export type Nota = {
  alunoId: string;
  disciplina: string;
  av1: number;
  av2: number;
  trabalho: number;
  media: number;
  frequencia: number;
};

export type Interacao = {
  id: string;
  alunoId: string;
  tipo: "ligacao" | "email" | "presencial" | "ticket";
  assunto: string;
  data: string;
  autor: string;
};

export const leads: Lead[] = [
  { id: "l1", nome: "Mariana Costa", email: "mari@email.com", telefone: "(11) 99876-5432", curso: "Engenharia de Software", status: "novo", origem: "Instagram", criadoEm: "2026-06-20" },
  { id: "l2", nome: "Rafael Souza", email: "rafa@email.com", telefone: "(11) 98765-4321", curso: "Design Digital", status: "novo", origem: "Google Ads", criadoEm: "2026-06-22" },
  { id: "l3", nome: "Beatriz Lima", email: "bia@email.com", telefone: "(11) 97654-3210", curso: "Administração", status: "contato", origem: "Indicação", criadoEm: "2026-06-18" },
  { id: "l4", nome: "João Pedro Alves", email: "jp@email.com", telefone: "(11) 96543-2109", curso: "Engenharia de Software", status: "contato", origem: "Site", criadoEm: "2026-06-15" },
  { id: "l5", nome: "Carla Mendes", email: "carla@email.com", telefone: "(11) 95432-1098", curso: "Marketing", status: "visita", origem: "Feira", criadoEm: "2026-06-12" },
  { id: "l6", nome: "Lucas Ferreira", email: "lucas@email.com", telefone: "(11) 94321-0987", curso: "Design Digital", status: "proposta", origem: "Instagram", criadoEm: "2026-06-10" },
  { id: "l7", nome: "Ana Beatriz", email: "anab@email.com", telefone: "(11) 93210-9876", curso: "Administração", status: "proposta", origem: "Site", criadoEm: "2026-06-08" },
  { id: "l8", nome: "Pedro Henrique", email: "pedroh@email.com", telefone: "(11) 92109-8765", curso: "Engenharia de Software", status: "matriculado", origem: "Indicação", criadoEm: "2026-05-28" },
  { id: "l9", nome: "Fernanda Rocha", email: "fer@email.com", telefone: "(11) 91098-7654", curso: "Marketing", status: "matriculado", origem: "Google Ads", criadoEm: "2026-05-25" },
];

export const alunos: Aluno[] = [
  { id: "a1", matricula: "2026001", nome: "Gabriel Oliveira", email: "gabriel@aluno.edu", telefone: "(11) 98888-1111", curso: "Engenharia de Software", turma: "ES-2026.1-A", situacao: "ativo", ingressoEm: "2026-02-01" },
  { id: "a2", matricula: "2026002", nome: "Juliana Santos", email: "juliana@aluno.edu", telefone: "(11) 98888-2222", curso: "Design Digital", turma: "DD-2026.1-A", situacao: "ativo", ingressoEm: "2026-02-01" },
  { id: "a3", matricula: "2026003", nome: "Matheus Cardoso", email: "matheus@aluno.edu", telefone: "(11) 98888-3333", curso: "Engenharia de Software", turma: "ES-2026.1-A", situacao: "ativo", ingressoEm: "2026-02-01" },
  { id: "a4", matricula: "2025089", nome: "Larissa Pereira", email: "larissa@aluno.edu", telefone: "(11) 98888-4444", curso: "Administração", turma: "ADM-2025.2-B", situacao: "ativo", ingressoEm: "2025-08-01" },
  { id: "a5", matricula: "2025102", nome: "Thiago Ribeiro", email: "thiago@aluno.edu", telefone: "(11) 98888-5555", curso: "Marketing", turma: "MKT-2025.2-A", situacao: "trancado", ingressoEm: "2025-08-01" },
  { id: "a6", matricula: "2024055", nome: "Camila Duarte", email: "camila@aluno.edu", telefone: "(11) 98888-6666", curso: "Design Digital", turma: "DD-2025.1-A", situacao: "ativo", ingressoEm: "2024-02-01" },
  { id: "a7", matricula: "2024012", nome: "Rodrigo Martins", email: "rodrigo@aluno.edu", telefone: "(11) 98888-7777", curso: "Engenharia de Software", turma: "ES-2025.1-B", situacao: "evadido", ingressoEm: "2024-02-01" },
  { id: "a8", matricula: "2023007", nome: "Patrícia Gomes", email: "patricia@aluno.edu", telefone: "(11) 98888-8888", curso: "Administração", turma: "ADM-2024.2-A", situacao: "formado", ingressoEm: "2023-02-01" },
];

export const turmas: Turma[] = [
  { id: "t1", codigo: "ES-2026.1-A", nome: "Engenharia de Software — 1º Semestre", curso: "Engenharia de Software", professor: "Prof. Carlos Andrade", periodo: "2026.1", alunos: 28, capacidade: 35 },
  { id: "t2", codigo: "DD-2026.1-A", nome: "Design Digital — 1º Semestre", curso: "Design Digital", professor: "Profa. Renata Lopes", periodo: "2026.1", alunos: 22, capacidade: 30 },
  { id: "t3", codigo: "ADM-2025.2-B", nome: "Administração — 3º Semestre", curso: "Administração", professor: "Prof. Marcos Vieira", periodo: "2025.2", alunos: 31, capacidade: 35 },
  { id: "t4", codigo: "MKT-2025.2-A", nome: "Marketing — 3º Semestre", curso: "Marketing", professor: "Profa. Sandra Reis", periodo: "2025.2", alunos: 19, capacidade: 30 },
  { id: "t5", codigo: "DD-2025.1-A", nome: "Design Digital — 5º Semestre", curso: "Design Digital", professor: "Profa. Renata Lopes", periodo: "2025.1", alunos: 24, capacidade: 30 },
];

export const notas: Nota[] = [
  { alunoId: "a1", disciplina: "Algoritmos I", av1: 8.5, av2: 9.0, trabalho: 9.5, media: 9.0, frequencia: 95 },
  { alunoId: "a1", disciplina: "Banco de Dados", av1: 7.5, av2: 8.0, trabalho: 8.5, media: 8.0, frequencia: 90 },
  { alunoId: "a3", disciplina: "Algoritmos I", av1: 6.0, av2: 7.5, trabalho: 8.0, media: 7.2, frequencia: 82 },
  { alunoId: "a3", disciplina: "Banco de Dados", av1: 9.0, av2: 9.5, trabalho: 10, media: 9.5, frequencia: 100 },
  { alunoId: "a2", disciplina: "Tipografia", av1: 8.0, av2: 8.5, trabalho: 9.0, media: 8.5, frequencia: 92 },
  { alunoId: "a4", disciplina: "Gestão de Pessoas", av1: 7.0, av2: 7.5, trabalho: 7.5, media: 7.3, frequencia: 88 },
  { alunoId: "a6", disciplina: "UX Research", av1: 9.5, av2: 9.0, trabalho: 9.5, media: 9.3, frequencia: 96 },
];

export const interacoes: Interacao[] = [
  { id: "i1", alunoId: "a1", tipo: "email", assunto: "Confirmação de matrícula 2026.1", data: "2026-01-28", autor: "Secretaria" },
  { id: "i2", alunoId: "a1", tipo: "presencial", assunto: "Atendimento — dúvidas sobre disciplinas", data: "2026-02-05", autor: "Coordenação" },
  { id: "i3", alunoId: "a5", tipo: "ticket", assunto: "Solicitação de trancamento", data: "2026-06-10", autor: "Secretaria" },
  { id: "i4", alunoId: "a4", tipo: "ligacao", assunto: "Acompanhamento — frequência abaixo do ideal", data: "2026-06-18", autor: "Coordenação" },
];

export const stats = {
  totalAlunos: alunos.filter((a) => a.situacao === "ativo").length,
  novasMatriculas: 9,
  taxaEvasao: 4.2,
  leadsAtivos: leads.filter((l) => l.status !== "matriculado").length,
  receitaPrevista: 184500,
  presencaMedia: 91,
};

export const matriculasPorMes = [
  { mes: "Jan", valor: 12 },
  { mes: "Fev", valor: 28 },
  { mes: "Mar", valor: 14 },
  { mes: "Abr", valor: 9 },
  { mes: "Mai", valor: 11 },
  { mes: "Jun", valor: 9 },
];

export const cursoDistribuicao = [
  { curso: "Eng. de Software", alunos: 84 },
  { curso: "Design Digital", alunos: 62 },
  { curso: "Administração", alunos: 58 },
  { curso: "Marketing", alunos: 41 },
];

export const statusLabels: Record<LeadStatus, string> = {
  novo: "Novo lead",
  contato: "Em contato",
  visita: "Visita agendada",
  proposta: "Proposta enviada",
  matriculado: "Matriculado",
};
