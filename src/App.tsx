import { useState } from 'react';

interface Habilidade {
  id: number;
  nome: string;
}

export default function App() {
  const [texto, setTexto] = useState<string>('');
  const [curtidas, setCurtidas] = useState<number>(0);

  const habilidades: Habilidade[] = [
    { id: 1, nome: 'React & TSX' },
    { id: 2, nome: 'TypeScript' },
    { id: 3, nome: 'Vite & Docker' },
    { id: 4, nome: 'HTML / CSS Moderno' },
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: 'sans-serif'
    }}>
      {/* 1. Header */}
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '2rem', margin: 0 }}>
          Painel de Controle — TecInfo 2026
        </h1>
      </header>

      <div style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: '#1e293b',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
        border: '1px solid #334155',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* 4. Condicional: Exibe mensagem se curtidas > 5 */}
        {curtidas > 5 && (
          <div style={{
            backgroundColor: '#ef4444',
            color: '#ffffff',
            padding: '12px',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            TECINFO 2026 🔥
          </div>
        )}

        {/* 2. Espelhamento de texto em tempo real */}
        <section>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: '#94a3b8' }}>1. Espelhamento de Texto</h3>
          <input
            type="text"
            placeholder="Digite algo para espelhar..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #475569',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
          <p style={{ marginTop: '8px', color: '#cbd5e1', wordBreak: 'break-all' }}>
            <strong>Resultado:</strong> {texto || 'Sua mensagem aparecerá aqui...'}
          </p>
        </section>

        <hr style={{ borderColor: '#334155', margin: 0 }} />

        {/* 3. Botão com contador de curtidas */}
        <section style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#94a3b8' }}>2. Contador de Curtidas</h3>
          <button
            onClick={() => setCurtidas(curtidas + 1)}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            👍 Curtir ({curtidas})
          </button>
        </section>

        <hr style={{ borderColor: '#334155', margin: 0 }} />

        {/* 5. Renderização de Lista com .map() e prop key */}
        <section>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: '#94a3b8' }}>3. Lista de Habilidades (.map)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {habilidades.map((item) => (
              <li
                key={item.id}
                style={{
                  backgroundColor: '#0f172a',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  marginBottom: '8px',
                  borderLeft: '4px solid #38bdf8'
                }}
              >
                {item.nome}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
