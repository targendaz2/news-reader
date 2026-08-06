<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import SaveButton from './save-button.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/SaveButton',
    component: SaveButton,
    argTypes: {
      saved: { control: 'boolean' },
    },
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- Unsaved, outline star -->
<Story name="Unsaved" args={{ saved: false }} />

<!-- Saved, filled star -->
<Story name="Saved" args={{ saved: true }} />
