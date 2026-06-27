import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { n as PageHeader, o as leads, t as Card, u as statusLabels } from "./mock-data-wM9rirYH.mjs";
import { l as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/funil-qKPOs_d-.js
var import_jsx_runtime = require_jsx_runtime();
var columns = [
	"novo",
	"contato",
	"visita",
	"proposta",
	"matriculado"
];
function FunilPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Funil de captação",
		description: "Acompanhe os leads desde o primeiro contato até a matrícula.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-3.5 w-3.5" }), " Novo lead"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5",
			children: columns.map((status) => {
				const items = leads.filter((l) => l.status === status);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col rounded-lg border border-border bg-muted/30 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${status === "matriculado" ? "bg-accent" : status === "proposta" ? "bg-warning" : "bg-muted-foreground/50"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wide",
								children: statusLabels[status]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: items.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [items.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "cursor-grab p-3 transition-shadow hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium leading-tight",
									children: lead.nome
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: lead.curso
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-muted px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground",
										children: lead.origem
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: new Date(lead.criadoEm).toLocaleDateString("pt-BR")
									})]
								})
							]
						}, lead.id)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-1 py-4 text-center text-xs text-muted-foreground",
							children: "Nada por aqui"
						})]
					})]
				}, status);
			})
		})
	})] });
}
//#endregion
export { FunilPage as component };
