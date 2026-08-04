<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import StoryCard from './story-card.svelte';

  const { Story } = defineMeta({
    title: 'Feed/StoryCard',
    component: StoryCard,
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['rss', 'email', 'social', 'release', 'github'],
      },
      unread: { control: 'boolean' },
      saved: { control: 'boolean' },
      compact: { control: 'boolean' },
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
    type: 'release',
    source: 'Okta Release Notes',
    time: '2h',
    title: 'Identity Engine 2025.09 — adaptive MFA & new audit log',
    excerpt: 'Adaptive MFA policies can now branch on device posture.',
    unread: true,
  }}
/>

<!-- Read, saved -->
<Story
  name="Read"
  args={{
    type: 'rss',
    source: 'Kotaku',
    time: '3h',
    title: 'The long, strange history of the pause menu',
    excerpt: 'A feature-length look at a humble UI element.',
    unread: false,
    saved: true,
  }}
/>
