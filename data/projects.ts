export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  highlights: string[]
  visual: 'map' | 'literary' | 'api'
  githubUrl?: string
  liveDemoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'monlok',
    title: 'MonLok',
    category: 'Product / Search',
    description:
      'A local business discovery application combining structured business data, Google Places integration, and AI-powered semantic search.',
    tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Google Places', 'AI-powered semantic search'],
    highlights: ['Structured local business data', 'Semantic discovery', 'External Places API integration'],
    visual: 'map',
    githubUrl: '',
    liveDemoUrl: '',
  },
  {
    id: 'literary-quote-retrieval',
    title: 'Emotionally-Aware Literary Quote Retrieval System',
    category: 'Applied AI / Research',
    description:
      'A retrieval system that finds standalone literary quotations matching one or more user-selected emotions using semantic embeddings and quote quality scoring.',
    tags: ['Python', 'Sentence Transformers', 'Semantic embeddings', 'Information retrieval', 'Natural language processing'],
    highlights: ['Emotion-aware semantic retrieval', 'Embedding-based ranking', 'Literary quote quality scoring', 'Evaluation against a BM25 baseline'],
    visual: 'literary',
    githubUrl: '',
    liveDemoUrl: '',
  },
  {
    id: 'event-ticket-booking-api',
    title: 'Event and Ticket Booking API',
    category: 'Backend / API',
    description:
      'A backend application for managing events and ticket-booking functionality, built with Java, Spring Boot, and PostgreSQL.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'JWT authentication'],
    highlights: ['RESTful API development', 'Relational data modeling', 'Authentication implementation in progress'],
    visual: 'api',
    githubUrl: '',
    liveDemoUrl: '',
  },
]
