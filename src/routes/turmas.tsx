import { createFileRoute } from "@tanstack/react-router";
import { Plus, Users } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { turmas } from "@/lib/mock-data";

export const Route = createFileRoute("/turmas")({
  head: () => ({ meta: [{ title: "Turmas — Acadêmica" }] }),
  component: TurmasPage,
});

function TurmasPage() {
  return (
    <div>
      <PageHeader
        title="Turmas e disciplinas"
        description={`${turmas.length} turmas em andamento`}
        actions={
          <Button size="sm">
            <Plus className="mr-1.5 h-3.5 w-3.5" /> Nova turma
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
        {turmas.map((t) => {
          const ocupacao = Math.round((t.alunos / t.capacidade) * 100);
          return (
            <Card key={t.id} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{t.codigo}</p>
                  <h3 className="mt-1 text-base font-semibold leading-snug">{t.nome}</h3>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{t.periodo}</span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{t.professor}</p>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {t.alunos} de {t.capacidade} alunos
                  </span>
                  <span className="font-mono">{ocupacao}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${ocupacao > 85 ? "bg-warning" : "bg-accent"}`}
                    style={{ width: `${ocupacao}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Detalhes</Button>
                <Button variant="outline" size="sm" className="flex-1">Lançar notas</Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
