<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import type { ComponentProps } from 'svelte';

  import SourceCard from './source-card.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Sources/SourceCard',
    component: SourceCard,
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['rss', 'email', 'social', 'release', 'github'],
      },
      name: { control: 'text' },
      meta: { control: 'text' },
      on: { control: 'boolean' },
    },
    args: {
      name: 'Okta Release Notes',
      meta: '3 unread · updated 2h ago',
      onToggle: fn(),
    },
  });

  type Args = ComponentProps<typeof SourceCard>;
</script>

{#snippet template(args: Args)}
  <ul>
    <SourceCard {...args} />
  </ul>
{/snippet}

<Story name="Enabled" args={{ type: 'release', on: true }} {template} />

<Story name="Muted" args={{ type: 'rss', name: 'Kotaku', meta: '3 unread · updated 2h ago', on: false }} {template} />

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
