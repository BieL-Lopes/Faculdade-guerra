import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-wM9rirYH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 border-b border-border bg-background px-6 py-5 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold tracking-tight text-foreground",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: description
		})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2",
			children: actions
		})]
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var leads = [
	{
		id: "l1",
		nome: "Mariana Costa",
		email: "mari@email.com",
		telefone: "(11) 99876-5432",
		curso: "Engenharia de Software",
		status: "novo",
		origem: "Instagram",
		criadoEm: "2026-06-20"
	},
	{
		id: "l2",
		nome: "Rafael Souza",
		email: "rafa@email.com",
		telefone: "(11) 98765-4321",
		curso: "Design Digital",
		status: "novo",
		origem: "Google Ads",
		criadoEm: "2026-06-22"
	},
	{
		id: "l3",
		nome: "Beatriz Lima",
		email: "bia@email.com",
		telefone: "(11) 97654-3210",
		curso: "Administração",
		status: "contato",
		origem: "Indicação",
		criadoEm: "2026-06-18"
	},
	{
		id: "l4",
		nome: "João Pedro Alves",
		email: "jp@email.com",
		telefone: "(11) 96543-2109",
		curso: "Engenharia de Software",
		status: "contato",
		origem: "Site",
		criadoEm: "2026-06-15"
	},
	{
		id: "l5",
		nome: "Carla Mendes",
		email: "carla@email.com",
		telefone: "(11) 95432-1098",
		curso: "Marketing",
		status: "visita",
		origem: "Feira",
		criadoEm: "2026-06-12"
	},
	{
		id: "l6",
		nome: "Lucas Ferreira",
		email: "lucas@email.com",
		telefone: "(11) 94321-0987",
		curso: "Design Digital",
		status: "proposta",
		origem: "Instagram",
		criadoEm: "2026-06-10"
	},
	{
		id: "l7",
		nome: "Ana Beatriz",
		email: "anab@email.com",
		telefone: "(11) 93210-9876",
		curso: "Administração",
		status: "proposta",
		origem: "Site",
		criadoEm: "2026-06-08"
	},
	{
		id: "l8",
		nome: "Pedro Henrique",
		email: "pedroh@email.com",
		telefone: "(11) 92109-8765",
		curso: "Engenharia de Software",
		status: "matriculado",
		origem: "Indicação",
		criadoEm: "2026-05-28"
	},
	{
		id: "l9",
		nome: "Fernanda Rocha",
		email: "fer@email.com",
		telefone: "(11) 91098-7654",
		curso: "Marketing",
		status: "matriculado",
		origem: "Google Ads",
		criadoEm: "2026-05-25"
	}
];
var alunos = [
	{
		id: "a1",
		matricula: "2026001",
		nome: "Gabriel Oliveira",
		email: "gabriel@aluno.edu",
		telefone: "(11) 98888-1111",
		curso: "Engenharia de Software",
		turma: "ES-2026.1-A",
		situacao: "ativo",
		ingressoEm: "2026-02-01"
	},
	{
		id: "a2",
		matricula: "2026002",
		nome: "Juliana Santos",
		email: "juliana@aluno.edu",
		telefone: "(11) 98888-2222",
		curso: "Design Digital",
		turma: "DD-2026.1-A",
		situacao: "ativo",
		ingressoEm: "2026-02-01"
	},
	{
		id: "a3",
		matricula: "2026003",
		nome: "Matheus Cardoso",
		email: "matheus@aluno.edu",
		telefone: "(11) 98888-3333",
		curso: "Engenharia de Software",
		turma: "ES-2026.1-A",
		situacao: "ativo",
		ingressoEm: "2026-02-01"
	},
	{
		id: "a4",
		matricula: "2025089",
		nome: "Larissa Pereira",
		email: "larissa@aluno.edu",
		telefone: "(11) 98888-4444",
		curso: "Administração",
		turma: "ADM-2025.2-B",
		situacao: "ativo",
		ingressoEm: "2025-08-01"
	},
	{
		id: "a5",
		matricula: "2025102",
		nome: "Thiago Ribeiro",
		email: "thiago@aluno.edu",
		telefone: "(11) 98888-5555",
		curso: "Marketing",
		turma: "MKT-2025.2-A",
		situacao: "trancado",
		ingressoEm: "2025-08-01"
	},
	{
		id: "a6",
		matricula: "2024055",
		nome: "Camila Duarte",
		email: "camila@aluno.edu",
		telefone: "(11) 98888-6666",
		curso: "Design Digital",
		turma: "DD-2025.1-A",
		situacao: "ativo",
		ingressoEm: "2024-02-01"
	},
	{
		id: "a7",
		matricula: "2024012",
		nome: "Rodrigo Martins",
		email: "rodrigo@aluno.edu",
		telefone: "(11) 98888-7777",
		curso: "Engenharia de Software",
		turma: "ES-2025.1-B",
		situacao: "evadido",
		ingressoEm: "2024-02-01"
	},
	{
		id: "a8",
		matricula: "2023007",
		nome: "Patrícia Gomes",
		email: "patricia@aluno.edu",
		telefone: "(11) 98888-8888",
		curso: "Administração",
		turma: "ADM-2024.2-A",
		situacao: "formado",
		ingressoEm: "2023-02-01"
	}
];
var turmas = [
	{
		id: "t1",
		codigo: "ES-2026.1-A",
		nome: "Engenharia de Software — 1º Semestre",
		curso: "Engenharia de Software",
		professor: "Prof. Carlos Andrade",
		periodo: "2026.1",
		alunos: 28,
		capacidade: 35
	},
	{
		id: "t2",
		codigo: "DD-2026.1-A",
		nome: "Design Digital — 1º Semestre",
		curso: "Design Digital",
		professor: "Profa. Renata Lopes",
		periodo: "2026.1",
		alunos: 22,
		capacidade: 30
	},
	{
		id: "t3",
		codigo: "ADM-2025.2-B",
		nome: "Administração — 3º Semestre",
		curso: "Administração",
		professor: "Prof. Marcos Vieira",
		periodo: "2025.2",
		alunos: 31,
		capacidade: 35
	},
	{
		id: "t4",
		codigo: "MKT-2025.2-A",
		nome: "Marketing — 3º Semestre",
		curso: "Marketing",
		professor: "Profa. Sandra Reis",
		periodo: "2025.2",
		alunos: 19,
		capacidade: 30
	},
	{
		id: "t5",
		codigo: "DD-2025.1-A",
		nome: "Design Digital — 5º Semestre",
		curso: "Design Digital",
		professor: "Profa. Renata Lopes",
		periodo: "2025.1",
		alunos: 24,
		capacidade: 30
	}
];
var notas = [
	{
		alunoId: "a1",
		disciplina: "Algoritmos I",
		av1: 8.5,
		av2: 9,
		trabalho: 9.5,
		media: 9,
		frequencia: 95
	},
	{
		alunoId: "a1",
		disciplina: "Banco de Dados",
		av1: 7.5,
		av2: 8,
		trabalho: 8.5,
		media: 8,
		frequencia: 90
	},
	{
		alunoId: "a3",
		disciplina: "Algoritmos I",
		av1: 6,
		av2: 7.5,
		trabalho: 8,
		media: 7.2,
		frequencia: 82
	},
	{
		alunoId: "a3",
		disciplina: "Banco de Dados",
		av1: 9,
		av2: 9.5,
		trabalho: 10,
		media: 9.5,
		frequencia: 100
	},
	{
		alunoId: "a2",
		disciplina: "Tipografia",
		av1: 8,
		av2: 8.5,
		trabalho: 9,
		media: 8.5,
		frequencia: 92
	},
	{
		alunoId: "a4",
		disciplina: "Gestão de Pessoas",
		av1: 7,
		av2: 7.5,
		trabalho: 7.5,
		media: 7.3,
		frequencia: 88
	},
	{
		alunoId: "a6",
		disciplina: "UX Research",
		av1: 9.5,
		av2: 9,
		trabalho: 9.5,
		media: 9.3,
		frequencia: 96
	}
];
var interacoes = [
	{
		id: "i1",
		alunoId: "a1",
		tipo: "email",
		assunto: "Confirmação de matrícula 2026.1",
		data: "2026-01-28",
		autor: "Secretaria"
	},
	{
		id: "i2",
		alunoId: "a1",
		tipo: "presencial",
		assunto: "Atendimento — dúvidas sobre disciplinas",
		data: "2026-02-05",
		autor: "Coordenação"
	},
	{
		id: "i3",
		alunoId: "a5",
		tipo: "ticket",
		assunto: "Solicitação de trancamento",
		data: "2026-06-10",
		autor: "Secretaria"
	},
	{
		id: "i4",
		alunoId: "a4",
		tipo: "ligacao",
		assunto: "Acompanhamento — frequência abaixo do ideal",
		data: "2026-06-18",
		autor: "Coordenação"
	}
];
var stats = {
	totalAlunos: alunos.filter((a) => a.situacao === "ativo").length,
	novasMatriculas: 9,
	taxaEvasao: 4.2,
	leadsAtivos: leads.filter((l) => l.status !== "matriculado").length,
	receitaPrevista: 184500,
	presencaMedia: 91
};
var matriculasPorMes = [
	{
		mes: "Jan",
		valor: 12
	},
	{
		mes: "Fev",
		valor: 28
	},
	{
		mes: "Mar",
		valor: 14
	},
	{
		mes: "Abr",
		valor: 9
	},
	{
		mes: "Mai",
		valor: 11
	},
	{
		mes: "Jun",
		valor: 9
	}
];
var cursoDistribuicao = [
	{
		curso: "Eng. de Software",
		alunos: 84
	},
	{
		curso: "Design Digital",
		alunos: 62
	},
	{
		curso: "Administração",
		alunos: 58
	},
	{
		curso: "Marketing",
		alunos: 41
	}
];
var statusLabels = {
	novo: "Novo lead",
	contato: "Em contato",
	visita: "Visita agendada",
	proposta: "Proposta enviada",
	matriculado: "Matriculado"
};
//#endregion
export { interacoes as a, notas as c, turmas as d, cursoDistribuicao as i, stats as l, PageHeader as n, leads as o, alunos as r, matriculasPorMes as s, Card as t, statusLabels as u };
