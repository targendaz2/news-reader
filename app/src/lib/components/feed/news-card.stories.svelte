<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import NewsCard from './news-card.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Feed/NewsCard',
    component: NewsCard,
    argTypes: {
      newsItem: { control: 'object' },
      unread: { control: 'boolean' },
      saved: { control: 'boolean' },
    },
    args: {
      onOpen: fn(),
      onToggleSave: fn(),
    },
  });
</script>

<!-- Unread, unsaved -->
<Story
  name="Unread"
  args={{
    newsItem: {
      type: 'release',
      source: 'Okta Release Notes',
      time: new Date('2025-09-01T12:00:00Z'),
      title: 'Identity Engine 2025.09 — adaptive MFA & new audit log',
      excerpt: 'Adaptive MFA policies can now branch on device posture.',
    },
    unread: true,
  }}
/>

<!-- Read, unsaved -->
<Story
  name="Read"
  args={{
    newsItem: {
      type: 'rss',
      source: 'Kotaku',
      time: Date.now(),
      title: 'The long, strange history of the pause menu',
      excerpt: 'A feature-length look at a humble UI element.',
    },
    unread: false,
  }}
/>

<!-- Read, saved -->
<Story
  name="Saved"
  args={{
    newsItem: {
      type: 'rss',
      source: 'Kotaku',
      time: Date.now(),
      title: 'The long, strange history of the pause menu',
      excerpt: 'A feature-length look at a humble UI element.',
    },
    unread: false,
    saved: true,
  }}
/>
