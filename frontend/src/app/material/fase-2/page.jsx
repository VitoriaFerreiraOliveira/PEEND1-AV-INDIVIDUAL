'use client';

import Link from 'next/link';

export default function Fase2Page() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Fase 2: Processos e Ferramentas</h5>
          <span className="badge bg-success">Etapa Final</span>
        </div>
        <div className="card-body">
          <h4 className="fw-bold text-primary mb-3">2. Sistemas e Rotinas de Trabalho</h4>
          <p className="text-secondary">
            Nesta etapa conclusiva, aprendemos as ferramentas essenciais para o fluxo diário de tarefas e envio de relatórios.
          </p>

          <div className="p-4 my-4 bg-light rounded border">
            <h6> Checklist de Atividades:</h6>
            <ul className="mb-0 text-muted small ps-3">
              <li>Acesso configurado no painel interno.</li>
              <li>Leitura dos manuais de sistemas concluída.</li>
              <li>Confirmação de recebimento dos equipamentos.</li>
            </ul>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <Link href="/material/fase-1" className="btn btn-outline-secondary">
              ← Voltar à Fase 1
            </Link>
            <Link href="/" className="btn btn-success" onClick={() => alert('Parabéns! Treinamento concluído com sucesso.')}>
              Finalizar Treinamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}