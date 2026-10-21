'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [treinamentos, setTreinamentos] = useState([]);
  const [form, setForm] = useState({
    titulo: '',
    cargo: '',
    cargaHoraria: '',
    data: '',
    linkMaterial: '',
    descricao: ''
  });
  const [editandoId, setEditandoId] = useState(null);

  const API_URL = 'http://localhost:4000/api/treinamentos';

  const carregarTreinamentos = async () => {
    try {
      const res = await fetch(API_URL);
      const dados = await res.json();
      setTreinamentos(dados);
    } catch (err) {
      console.error('Erro ao buscar treinamentos:', err);
    }
  };

  useEffect(() => {
    carregarTreinamentos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const metodo = editandoId ? 'PUT' : 'POST';
    const url = editandoId ? `${API_URL}/${editandoId}` : API_URL;

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        limparFormulario();
        carregarTreinamentos();
      }
    } catch (err) {
      console.error('Erro ao salvar:', err);
    }
  };

  const handleEditar = (item) => {
    setForm(item);
    setEditandoId(item.id);
  };

  const handleExcluir = async (id) => {
    if (confirm('Deseja excluir este treinamento?')) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (res.ok) {
          carregarTreinamentos();
        }
      } catch (err) {
        console.error('Erro ao excluir:', err);
      }
    }
  };

  const limparFormulario = () => {
    setForm({ titulo: '', cargo: '', cargaHoraria: '', data: '', linkMaterial: '', descricao: '' });
    setEditandoId(null);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-dark">Gerenciador de Treinamentos</h2>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white fw-semibold border-bottom py-3">
              {editandoId ? 'Editar Treinamento' : 'Cadastrar Treinamento'}
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Título</label>
                  <input type="text" className="form-control" name="titulo" value={form.titulo} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Cargo</label>
                  <input type="text" className="form-control" name="cargo" value={form.cargo} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Carga Horária</label>
                  <input type="text" className="form-control" name="cargaHoraria" value={form.cargaHoraria} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Data</label>
                  <input type="date" className="form-control" name="data" value={form.data} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Link do Material</label>
                  <input type="url" className="form-control" name="linkMaterial" value={form.linkMaterial} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold">Descrição</label>
                  <textarea className="form-control" name="descricao" rows="2" value={form.descricao} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-semibold">
                  {editandoId ? 'Atualizar' : 'Salvar'}
                </button>
                {editandoId && (
                  <button type="button" className="btn btn-light border w-100 mt-2 fw-semibold" onClick={limparFormulario}>
                    Cancelar
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-header bg-white fw-semibold border-bottom py-3">
              Lista de Treinamentos
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="ps-3">Título</th>
                      <th>Cargo</th>
                      <th>Carga Horária</th>
                      <th className="text-end pe-3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treinamentos.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-3 fw-medium">{item.titulo}</td>
                        <td>{item.cargo}</td>
                        <td>{item.cargaHoraria}</td>
                        <td className="text-end pe-3">
                          <button className="btn btn-sm btn-outline-warning me-2" onClick={() => handleEditar(item)}>
                            Editar
                          </button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleExcluir(item.id)}>
                            Excluir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white fw-semibold border-bottom py-3">
              Card do Treinamento (Exemplo)
            </div>
            {treinamentos.length > 0 ? (
              <div className="card-body p-4">
                <h5 className="card-title fw-bold text-primary">{treinamentos[0].titulo}</h5>
                <h6 className="card-subtitle mb-3 text-muted">Cargo: {treinamentos[0].cargo} | Carga: {treinamentos[0].cargaHoraria}</h6>
                <p className="card-text text-secondary mb-3">{treinamentos[0].descricao}</p>
                <a href="/material" className="btn btn-primary btn-sm px-3 fw-semibold">
                  Ver Material
                </a>
              </div>
            ) : (
              <div className="card-body text-muted p-4">Nenhum treinamento para exibir.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}