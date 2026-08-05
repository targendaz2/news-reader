export const storyTypes = {
  rss: 'RSS',
  email: 'EMAIL',
  social: 'SOCIAL',
  release: 'RELEASE',
  github: 'GITHUB',
} as const;

export interface Story {
  /** Source feed name, e.g. "Okta Release Notes". */
  source: string;

  /** Relative time since publish, e.g. "2h". */
  time: string;

  /** Source type shown in the badge. */
  type?: keyof typeof storyTypes;

  /** Story headline. */
  title: string;

  /** Two-line preview of the story body. */
  excerpt?: string;
}
