<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import StatusPill from './status-pill.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/StatusPill',
    component: StatusPill,
    argTypes: {
      offline: { control: 'boolean' },
    },
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- Live, network connected -->
<Story name="Live" args={{ offline: false }} />

<!-- Offline, showing cached content -->
<Story name="Offline" args={{ offline: true }} />
