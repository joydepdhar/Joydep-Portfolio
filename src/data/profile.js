/** Personal identity & contact information. */
export const profile = {
  name: 'Joydep Dhar',
  title: 'Computer Vision & Deep Learning Researcher',
  tagline:
    'Computer Science graduate interested in Computer Vision, Deep Learning, Anomaly Detection, and Real-Time Surveillance Systems.',
  email: 'joydep.cse.aiub@gmail.com',
  githubUrl: 'https://github.com/joydepdhar',
  githubLabel: 'github.com/joydepdhar',
  linkedinUrl: 'https://linkedin.com/in/joydep-dhar',
  linkedinLabel: 'linkedin.com/in/joydep-dhar',
  cvFile: 'Joydep-Dhar-CV.pdf',
}

/**
 * Resolves relative to the Vite base path so the CV works on any
 * GitHub Pages URL (project page or user site).
 */
export const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFile}`

export const siteUrl = 'https://joydepdhar.github.io/Joydep-Portfolio/'
