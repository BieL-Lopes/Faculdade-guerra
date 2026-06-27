import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { leads, statusLabels, type LeadStatus } from "@/lib/mock-data";

export const Route = createFileRoute("/funil")({
  head: () => ({ meta: [{ title: "Funil de Leads — Acadêmica" }] }),
  component: FunilPage,
});

const columns: LeadStatus[] = ["novo", "contato", "visita", "proposta", "matriculado"];

function FunilPage() {
  return (
    <div>
      <PageHeader
        title="Funil de captação"
        description="Acompanhe os leads desde o primeiro contato até a matrícula."
        actions={
          <Button size="sm">
            <Plus className="mr-1.5 h-3.5 w-3.5" /> Novo lead
          </Button>
        }
      />

      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {columns.map((status) => {
            const items = leads.filter((l) => l.status === status);
            return (
              <div key={status} className="flex flex-col rounded-lg border border-border bg-muted/30 p-3">
                <div className="mb-3 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        status === "matriculado"
                          ? "bg-accent"
                          : status === "proposta"
                          ? "bg-warning"
                          : "bg-muted-foreground/50"
                      }`}
                    />
                    <h3 className="text-xs font-semibold uppercase tracking-wide">{statusLabels[status]}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{items.length}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((lead) => (
                    <Card key={lead.id} className="cursor-grab p-3 transition-shadow hover:shadow-md">
                      <p className="text-sm font-medium leading-tight">{lead.nome}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{lead.curso}</p>
                      <div className="mt-2.5 flex items-center justify-between">
                        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                          {lead.origem}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {new Date(lead.criadoEm).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                    </Card>
                  ))}
                  {items.length === 0 && (
                    <p className="px-1 py-4 text-center text-xs text-muted-foreground">Nada por aqui</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
