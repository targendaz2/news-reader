<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import UnreadDot from './unread-dot.svelte';

  const { Story } = defineMeta({
    title: 'Feed/UnreadDot',
    component: UnreadDot,
    argTypes: {
      unread: { control: 'boolean' },
    },
  });
</script>

<!-- Unread, filled brand dot -->
<Story name="Unread" args={{ unread: true }} />

<!-- Read, transparent placeholder -->
<Story name="Read" args={{ unread: false }} />
