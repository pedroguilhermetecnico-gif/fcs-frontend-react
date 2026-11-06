import type { Sculpture } from '../data';

interface SculptureDetailsProps {
  readonly sculpture: Sculpture;
}

export function SculptureDetails({ sculpture }: Readonly<SculptureDetailsProps>) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        referrerPolicy="no-referrer"
        style={{
          width: '100%',
          height: '320px',             // Aumentado para dar mais destaque
          objectFit: 'contain',        // Exibe a escultura por inteiro sem cortar nada
          backgroundColor: '#0f172a',  // Fundo interno escuro para preencher o enquadramento
          borderRadius: '12px',
          marginBottom: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
      />
      <h2 style={{ margin: '0 0 4px 0', fontSize: '1.5rem', color: '#f8fafc' }}>
        {sculpture.name}
      </h2>
      <p style={{ margin: '0 0 16px 0', fontStyle: 'italic', color: '#94a3b8' }}>
        por {sculpture.artist}
      </p>
    </div>
  );
}