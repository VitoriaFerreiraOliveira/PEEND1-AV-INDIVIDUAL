'use client';

import Link from 'next/link';

export default function Fase1() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center py-3">
          <h5 className="mb-0">Fase 1: Introdução à Cultura e Integração</h5>
          <span className="badge bg-primary">Etapa 1 de 2</span>
        </div>
        <div className="card-body">
          <h4 className="fw-bold text-primary mb-3">1. Apresentação Geral</h4>
          <p className="text-secondary">
            Nesta primeira fase, apresentamos a missão, visão e os valores fundamentais da empresa.
          </p>

          <div className="p-4 my-4 bg-light rounded border">
            <h6> Conteúdo Interativo:</h6>
            <p className="mb-0 text-muted small">
              Assista ao vídeo introdutório e leia os documentos de diretrizes internas antes de avançar.
            </p>
          </div>

          <div className="d-flex justify-content-between">
            <Link href="/material" className="btn btn-outline-secondary">
              ← Voltar ao Módulo
            </Link>
            <Link href="/material/fase-2" className="btn btn-primary">
              Próxima Fase (Fase 2) →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}