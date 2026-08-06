<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TypeBadge from './type-badge.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Data/TypeBadge',
    component: TypeBadge,
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['rss', 'email', 'social', 'release', 'github'],
      },
      variant: {
        control: { type: 'select' },
        options: ['chip', 'column'],
      },
    },
  });
</script>

<Story name="Chip" args={{ type: 'rss', variant: 'chip' }} />

<Story name="Column" args={{ type: 'release', variant: 'column' }} />
