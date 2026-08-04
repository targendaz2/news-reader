<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TypeBadge from './type-badge.svelte';

  const { Story } = defineMeta({
    title: 'Feed/TypeBadge',
    component: TypeBadge,
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['rss', 'email', 'social', 'release', 'github'],
      },
    },
  });
</script>

<Story name="RSS" args={{ type: 'rss' }} />

<Story name="Email" args={{ type: 'email' }} />

<Story name="Social" args={{ type: 'social' }} />

<Story name="Release" args={{ type: 'release' }} />

<Story name="GitHub" args={{ type: 'github' }} />
