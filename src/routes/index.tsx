import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, GraduationCap, TrendingUp, UserPlus, Users } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  cursoDistribuicao,
  interacoes,
  leads,
  matriculasPorMes,
  stats,
  alunos,
} from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Acadêmica" },
      { name: "description", content: "Visão geral da operação acadêmica: alunos ativos, matrículas, evasão e funil." },
    ],
  }),
  component: Dashboard,
});

type MetricProps = {
  label: string;
  value: string;
  delta: number;
  icon: React.ComponentType<{ className?: string }>;
  hint?: string;
};

function Metric({ label, value, delta, icon: Icon, hint }: MetricProps) {
  const up = delta >= 0;
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-foreground">
          <Icon className="h-4 w-4" />
        </div>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${
            up ? "bg-accent/15 text-accent-foreground" : "bg-destructive/10 text-destructive"
          }`}
        >
          {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {Math.abs(delta)}%
        </span>
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
        {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </div>
    </Card>
  );
}

function Dashboard() {
  const maxMatriculas = Math.max(...matriculasPorMes.map((m) => m.valor));
  const maxCurso = Math.max(...cursoDistribuicao.map((c) => c.alunos));

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Acompanhamento em tempo real da operação acadêmica."
        actions={
          <>
            <Button variant="outline" size="sm">
              Exportar
            </Button>
            <Button size="sm">
              <UserPlus className="mr-1.5 h-3.5 w-3.5" /> Novo lead
            </Button>
          </>
        }
      />

      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Alunos ativos" value={String(stats.totalAlunos)} delta={8} icon={Users} hint="vs. mês passado" />
          <Metric label="Novas matrículas" value={String(stats.novasMatriculas)} delta={12} icon={GraduationCap} hint="últimos 30 dias" />
          <Metric label="Leads em funil" value={String(stats.leadsAtivos)} delta={-3} icon={TrendingUp} hint={`${leads.length} no total`} />
          <Metric label="Taxa de evasão" value={`${stats.taxaEvasao}%`} delta={-1.4} icon={ArrowDownRight} hint="meta < 5%" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card className="p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Matrículas por mês</h3>
                <p className="text-xs text-muted-foreground">Janeiro — Junho 2026</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">+18% YoY</span>
            </div>
            <div className="mt-6 flex h-48 items-end gap-3">
              {matriculasPorMes.map((m) => (
                <div key={m.mes} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-md bg-foreground transition-all hover:bg-accent"
                    style={{ height: `${(m.valor / maxMatriculas) * 100}%` }}
                    title={`${m.valor} matrículas`}
                  />
                  <span className="text-xs text-muted-foreground">{m.mes}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="text-sm font-semibold">Alunos por curso</h3>
            <p className="text-xs text-muted-foreground">Distribuição atual</p>
            <div className="mt-5 space-y-4">
              {cursoDistribuicao.map((c) => (
                <div key={c.curso}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{c.curso}</span>
                    <span className="font-mono text-muted-foreground">{c.alunos}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(c.alunos / maxCurso) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card className="p-5">
            <h3 className="text-sm font-semibold">Atividade recente</h3>
            <p className="text-xs text-muted-foreground">Últimas interações com alunos</p>
            <ul className="mt-4 divide-y divide-border">
              {interacoes.map((i) => {
                const aluno = alunos.find((a) => a.id === i.alunoId);
                return (
                  <li key={i.id} className="flex items-start gap-3 py-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {aluno?.nome.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{i.assunto}</p>
                      <p className="text-xs text-muted-foreground">
                        {aluno?.nome} · {i.autor} · {new Date(i.data).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                      {i.tipo}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card className="p-5">
            <h3 className="text-sm font-semibold">Próximas ações</h3>
            <p className="text-xs text-muted-foreground">Tarefas pendentes da semana</p>
            <ul className="mt-4 space-y-3">
              {[
                { t: "Confirmar 4 propostas enviadas", p: "alta" },
                { t: "Lançar notas — Algoritmos I", p: "média" },
                { t: "Reunião com coordenação de Design", p: "média" },
                { t: "Enviar boletim 2026.1 aos pais", p: "baixa" },
              ].map((t, idx) => (
                <li key={idx} className="flex items-center justify-between rounded-md border border-border p-3">
                  <span className="text-sm">{t.t}</span>
                  <span
                    className={`text-[10px] uppercase tracking-wide ${
                      t.p === "alta" ? "text-destructive" : t.p === "média" ? "text-warning-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {t.p}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
