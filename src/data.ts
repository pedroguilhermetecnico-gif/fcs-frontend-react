export interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

export const sculptureList: Sculpture[] = [
  {
    name: 'O Pensador',
    artist: 'Auguste Rodin',
    description: 'Uma das obras em bronze mais famosas do mundo, representando uma figura masculina em profunda contemplação meditativa.',
    url: '/Pensador.jpg',
    alt: 'Escultura em bronze do Pensador de Rodin.'
  },
  {
    name: 'David',
    artist: 'Michelangelo',
    description: 'Obra-prima do Renascimento esculpida em mármore branco, representando o herói bíblico David antes de sua batalha contra Golias.',
    url: '/David.jpg',
    alt: 'Estátua em mármore de David feita por Michelangelo.'
  },
  {
    name: 'Floraris Genérica',
    artist: 'Eduardo Catalano',
    description: 'Enorme escultura metálica em Buenos Aires cujas pétalas de aço inoxidável se abrem e fecham de acordo com o horário do dia.',
    url: '/Floraris.jpg',
    alt: 'Uma enorme escultura metálica em formato de flor.'
  },
  {
    name: 'A Vitória de Samotrácia',
    artist: 'Desconhecido (Grécia Antiga)',
    description: 'Monumento helenístico em mármore que representa a deusa alada da vitória (Nice), em exibição no Museu do Louvre.',
    url: '/Samotracia.jpg',
    alt: 'Estátua grega em mármore da deusa alada da vitória.'
  }
];