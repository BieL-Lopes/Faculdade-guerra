import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { alunos } from "@/lib/mock-data";

export const Route = createFileRoute("/alunos")({
  head: () => ({ meta: [{ title: "Alunos — Acadêmica" }] }),
  component: AlunosPage,
});

const situacaoStyle: Record<string, string> = {
  ativo: "bg-accent/15 text-accent-foreground",
  trancado: "bg-warning/15 text-warning-foreground",
  evadido: "bg-destructive/10 text-destructive",
  formado: "bg-info/15 text-info-foreground",
};

function AlunosPage() {
  return (
    <div>
      <PageHeader
        title="Alunos"
        description={`${alunos.length} cadastros · ${alunos.filter((a) => a.situacao === "ativo").length} ativos`}
        actions={
          <Button size="sm">
            <Plus className="mr-1.5 h-3.5 w-3.5" /> Novo aluno
          </Button>
        }
      />

      <div className="p-6">
        <Card className="overflow-hidden p-0">
          <div className="flex items-center gap-2 border-b border-border p-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por nome, matrícula ou e-mail…" className="h-8 pl-8 text-sm" />
            </div>
            <Button variant="outline" size="sm">Filtros</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Aluno</th>
                  <th className="px-4 py-2.5 font-medium">Matrícula</th>
                  <th className="px-4 py-2.5 font-medium">Curso</th>
                  <th className="px-4 py-2.5 font-medium">Turma</th>
                  <th className="px-4 py-2.5 font-medium">Situação</th>
                  <th className="px-4 py-2.5 font-medium">Ingresso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {alunos.map((a) => (
                  <tr key={a.id} className="hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                          {a.nome.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </div>
                        <div>
                          <p className="font-medium">{a.nome}</p>
                          <p className="text-xs text-muted-foreground">{a.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{a.matricula}</td>
                    <td className="px-4 py-3">{a.curso}</td>
                    <td className="px-4 py-3 font-mono text-xs">{a.turma}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${situacaoStyle[a.situacao]}`}>
                        {a.situacao}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {new Date(a.ingressoEm).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
