<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button from './button.svelte';

  const { Story } = defineMeta({
    title: 'Controls/Button',
    component: Button,
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['link', 'outline', 'dashed'],
      },
      disabled: { control: 'boolean' },
      children: { table: { disable: true } },
    },
    args: {
      onclick: fn(),
    },
  });
</script>

{#snippet refresh()}
  ↻ Refresh
{/snippet}

{#snippet markAsRead()}
  Mark as read
{/snippet}

{#snippet addSource()}
  + Add a source
{/snippet}

<!-- Quiet text link — Refresh, Sources -->
<Story name="Link" args={{ variant: 'link', children: refresh }} />

<!-- Outline pill — Mark as read -->
<Story name="Outline" args={{ variant: 'outline', children: markAsRead }} />

<!-- Dashed full-width affordance — + Add a source -->
<Story name="Dashed" args={{ variant: 'dashed', children: addSource }} />

<!-- Disabled outline pill — Mark as read -->
<Story name="Disabled" args={{ variant: 'outline', children: markAsRead, disabled: true }} />
