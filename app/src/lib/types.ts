export interface NewsItem {
  /** Source feed name, e.g. "Okta Release Notes". */
  source: string;

  /** Time when the news item was published. */
  time: Date;

  /** Source type shown in the badge. */
  type?: string;

  /** News item headline. */
  title: string;

  /** Two-line preview of the news item body. */
  excerpt?: string;
}
