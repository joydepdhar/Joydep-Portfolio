/**
 * Selected software projects — faithful to the CV.
 *
 * To add a project later, append an object here; no component changes needed.
 * Set `github` to a repository URL to render a GitHub link (omit if none).
 */
export const projects = [
  {
    title: 'E-Commerce Platform',
    technologies: ['Python', 'Django', 'React'],
    problem:
      'Building a complete online storefront with secure authentication and end-to-end order workflows.',
    approach:
      'Developed a Django backend with a React frontend, implementing JWT authentication, product management, cart, and order/payment workflows.',
    features: [
      'JWT authentication',
      'Product management',
      'Cart',
      'Order/payment workflows',
      'Deployed on Vercel & Render with CI/CD',
    ],
    results: [],
    github: null,
  },
  {
    title: 'Learning Management System',
    technologies: ['Python', 'Django REST Framework', 'React'],
    problem:
      'Managing roles, course enrollment and learner progress across students, teachers and administrators.',
    approach:
      'Built REST APIs with Django REST Framework and a React frontend featuring role-based access control, course enrollment, real-time progress tracking, and completion analytics.',
    features: [
      'Role-based access — students, teachers, administrators',
      'Course enrollment',
      'Real-time progress tracking',
      'Completion analytics',
    ],
    results: [],
    github: null,
  },
  {
    title: 'Social Media Application',
    technologies: ['Python', 'Django'],
    problem:
      'A minimal social platform where users can publish and interact with content.',
    approach:
      'Implemented authentication, post creation, dynamic feeds, likes, and comments on Django.',
    features: [
      'Authentication',
      'Post creation',
      'Dynamic feeds',
      'Likes & comments',
    ],
    results: [],
    github: null,
  },
]
