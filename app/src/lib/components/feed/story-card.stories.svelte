<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import StoryCard from './story-card.svelte';

  const { Story } = defineMeta({
    title: 'Feed/StoryCard',
    component: StoryCard,
    argTypes: {
      story: { control: 'object' },
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
    story: {
      type: 'release',
      source: 'Okta Release Notes',
      time: '2h',
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
    story: {
      type: 'rss',
      source: 'Kotaku',
      time: '3h',
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
    story: {
      type: 'rss',
      source: 'Kotaku',
      time: '3h',
      title: 'The long, strange history of the pause menu',
      excerpt: 'A feature-length look at a humble UI element.',
    },
    unread: false,
    saved: true,
  }}
/>
