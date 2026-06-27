import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { alunos, notas } from "@/lib/mock-data";

export const Route = createFileRoute("/notas")({
  head: () => ({ meta: [{ title: "Notas & Frequência — Acadêmica" }] }),
  component: NotasPage,
});

function NotasPage() {
  return (
    <div>
      <PageHeader
        title="Notas & frequência"
        description="Lançamento e acompanhamento de avaliações."
        actions={<Button size="sm">Salvar lançamento</Button>}
      />

      <div className="p-6">
        <Card className="overflow-hidden p-0">
          <div className="border-b border-border bg-muted/30 px-4 py-3">
            <p className="text-xs text-muted-foreground">Turma selecionada</p>
            <p className="text-sm font-semibold">ES-2026.1-A · Engenharia de Software · Prof. Carlos Andrade</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-background text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Aluno</th>
                  <th className="px-4 py-2.5 font-medium">Disciplina</th>
                  <th className="px-4 py-2.5 text-center font-medium">AV1</th>
                  <th className="px-4 py-2.5 text-center font-medium">AV2</th>
                  <th className="px-4 py-2.5 text-center font-medium">Trabalho</th>
                  <th className="px-4 py-2.5 text-center font-medium">Média</th>
                  <th className="px-4 py-2.5 text-center font-medium">Freq.</th>
                  <th className="px-4 py-2.5 text-center font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {notas.map((n, idx) => {
                  const aluno = alunos.find((a) => a.id === n.alunoId);
                  const aprovado = n.media >= 7 && n.frequencia >= 75;
                  return (
                    <tr key={idx} className="hover:bg-muted/20">
                      <td className="px-4 py-3 font-medium">{aluno?.nome ?? "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{n.disciplina}</td>
                      <td className="px-4 py-3 text-center font-mono">{n.av1.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center font-mono">{n.av2.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center font-mono">{n.trabalho.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center font-mono font-semibold">{n.media.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center font-mono">
                        <span className={n.frequencia < 75 ? "text-destructive" : ""}>{n.frequencia}%</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            aprovado ? "bg-accent/15 text-accent-foreground" : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {aprovado ? "Aprovado" : "Atenção"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
