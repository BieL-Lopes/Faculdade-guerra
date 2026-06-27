import { createFileRoute } from "@tanstack/react-router";
import { Award, Download } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { alunos } from "@/lib/mock-data";

export const Route = createFileRoute("/certificados")({
  head: () => ({ meta: [{ title: "Certificados — Acadêmica" }] }),
  component: CertificadosPage,
});

function CertificadosPage() {
  const elegíveis = alunos.filter((a) => a.situacao === "formado" || a.situacao === "ativo").slice(0, 6);

  return (
    <div>
      <PageHeader
        title="Histórico & certificados"
        description="Emissão de documentos oficiais."
      />

      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
        {elegíveis.map((a) => (
          <Card key={a.id} className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold">{a.nome}</p>
                <p className="font-mono text-xs text-muted-foreground">{a.matricula}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{a.curso}</p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="mr-1.5 h-3.5 w-3.5" /> Histórico
              </Button>
              <Button size="sm" className="flex-1" disabled={a.situacao !== "formado"}>
                <Download className="mr-1.5 h-3.5 w-3.5" /> Certificado
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
