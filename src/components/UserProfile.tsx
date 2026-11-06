import { useState } from 'react';

// Dados isolados fora das funções
const DOC_LINKS = [
  { name: 'React Docs', sub: '(Bíblia Oficial)', url: 'https://react.dev/' },
  { name: 'ViteJS', sub: '(Build Tool)', url: 'https://vite.dev/' },
  { name: 'MDN Web Docs', sub: '(JavaScript/CSS)', url: 'https://developer.mozilla.org/pt-BR/' }
];

// Vetores SVG oficiais inseridos diretamente na lista
const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566 1.01 0 1.57 0 4.683c0 2.542 1.208 8.06 1.974 9.808 1.042 2.378 3.03 3.013 5.163 2.658 2.348-.39 3.633-2.025 4.863-4.349 1.23 2.324 2.515 3.959 4.863 4.349 2.133.355 4.121-.28 5.163-2.658C22.792 12.743 24 7.225 24 4.683c0-3.113-2.566-3.673-5.202-1.878C16.046 4.747 13.087 8.686 12 10.8z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

// Sub-componente: Recado
function RecadoBox() {
  const [recado, setRecado] = useState('Vivendo e aprendendo');
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <div className="recado-edit-form">
        <input
          type="text"
          value={recado}
          onChange={(e) => setRecado(e.target.value)}
          className="recado-input"
          autoFocus
        />
        <button onClick={() => setIsEditing(false)} className="btn-save">Salvar</button>
      </div>
    );
  }

  return (
    <p className="recado-text" onClick={() => setIsEditing(true)}>
      💬 "{recado}" ✏️
    </p>
  );
}

// Sub-componente: Botão de Curtidas
function LikesButton() {
  const [likes, setLikes] = useState(0);
  const label = likes === 1 ? 'Curtida' : 'Curtidas';

  return (
    <div className="likes-container">
      <button onClick={() => setLikes(likes + 1)} className="like-button">
        ❤️ {likes} {label}
      </button>
    </div>
  );
}

// Sub-componente: Documentação
function DocSection() {
  return (
    <div className="section-card">
      <div className="section-title">
        <span>📚</span>
        <h2>Documentation</h2>
      </div>
      <p className="section-subtitle">Fontes de consulta para a disciplina</p>
      <ul className="doc-links">
        {DOC_LINKS.map((doc) => (
          <li key={doc.name}>
            <a href={doc.url} target="_blank" rel="noreferrer">
              <strong>{doc.name}</strong> <span>{doc.sub}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sub-componente: Redes Sociais
function SocialSection() {
  return (
    <div className="section-card">
      <div className="section-title">
        <span>🌐</span>
        <h2>Connect with us</h2>
      </div>
      <p className="section-subtitle">Redes e links de contato</p>
      <div className="social-grid">
        {SOCIAL_LINKS.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="social-btn">
            {social.icon}
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Componente Principal (UserProfile)
export default function UserProfile() {
  const name = "Pedro Guilherme";
  const role = "Designer Junior";
  const avatarUrl = "https://avatars.githubusercontent.com/u/235609495?v=4";

  return (
    <div className="profile-card">
      <div className="avatar-wrapper">
        <img src={avatarUrl} alt={name} className="profile-avatar" />
      </div>

      <h1 className="profile-name">{name}</h1>
      <span className="profile-badge">{role}</span>

      <div className="recado-box">
        <RecadoBox />
      </div>

      <LikesButton />

      <div className="bottom-sections">
        <DocSection />
        <SocialSection />
      </div>
    </div>
  );
}