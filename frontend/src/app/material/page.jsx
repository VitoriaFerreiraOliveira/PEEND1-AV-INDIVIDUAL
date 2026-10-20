'use client';

import Link from 'next/link';

export default function MaterialPage() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Módulo de Treinamento: Integração Corporativa</h4>
          <span className="badge bg-light text-dark">Visão Geral</span>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold mb-3">Bem-vindo ao Curso</h5>
          <p className="card-text text-muted">
            Siga o cronograma de fases abaixo para concluir o treinamento e registrar seu progresso.
          </p>

          <hr className="my-4" />

          <h6 className="fw-bold mb-3">Fases do Treinamento:</h6>
          <div className="list-group mb-4">
            <Link href="/material/fase-1" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
              <div>
                <strong>Fase 1: Introdução e Cultura</strong>
                <div className="small text-muted">Apresentação dos valores e normas internas</div>
              </div>
              <span className="btn btn-sm btn-outline-primary">Iniciar →</span>
            </Link>
            <Link href="/material/fase-2" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
              <div>
                <strong>Fase 2: Processos e Ferramentas</strong>
                <div className="small text-muted">Instruções práticas das rotinas de trabalho</div>
              </div>
              <span className="btn btn-sm btn-outline-primary">Acessar →</span>
            </Link>
          </div>

          <Link href="/" className="btn btn-secondary">
            ← Voltar ao Gerenciador
          </Link>
        </div>
      </div>
    </div>
  );
}