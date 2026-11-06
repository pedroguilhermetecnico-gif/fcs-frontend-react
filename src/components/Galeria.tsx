import { useState } from 'react';
import { sculptureList } from '../data';
import { SculptureDetails } from './SculptureDetails';

export default function Galeria() {
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
        border: '1px solid #334155',
        color: '#f8fafc'
      }}>
        {/* Controles superiores */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button
            onClick={handlePrevClick}
            disabled={index === 0}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: index === 0 ? '#334155' : '#3b82f6',
              color: index === 0 ? '#64748b' : '#ffffff',
              cursor: index === 0 ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            Anterior
          </button>

          <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500' }}>
            Escultura ({index + 1} de {sculptureList.length})
          </span>

          <button
            onClick={handleNextClick}
            disabled={index === sculptureList.length - 1}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: index === sculptureList.length - 1 ? '#334155' : '#3b82f6',
              color: index === sculptureList.length - 1 ? '#64748b' : '#ffffff',
              cursor: index === sculptureList.length - 1 ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            Próximo
          </button>
        </div>

        {/* Detalhes da Escultura */}
        <SculptureDetails sculpture={sculpture} />

        {/* Botão de Alternar Detalhes */}
        <button
          onClick={handleMoreClick}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #475569',
            backgroundColor: '#0f172a',
            color: '#38bdf8',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.2s'
          }}
        >
          {showMore ? 'Ocultar' : 'Mostrar'} Detalhes
        </button>

        {/* Renderização Condicional da Descrição */}
        {showMore && (
          <p style={{
            marginTop: '16px',
            fontSize: '0.95rem',
            lineHeight: '1.5',
            color: '#cbd5e1',
            backgroundColor: '#0f172a',
            padding: '12px',
            borderRadius: '8px',
            borderLeft: '4px solid #38bdf8'
          }}>
            {sculpture.description}
          </p>
        )}
      </div>
    </div>
  );
}