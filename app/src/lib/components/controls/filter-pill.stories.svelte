<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import FilterPill from './filter-pill.svelte';

  const { Story } = defineMeta({
    title: 'Controls/FilterPill',
    component: FilterPill,
    argTypes: {
      label: { control: 'text' },
      active: { control: 'boolean' },
    },
    args: {
      label: 'Unread',
      onclick: fn(),
    },
  });
</script>

<!-- Unselected pill -->
<Story name="Inactive" args={{ active: false }} />

<!-- Selected pill -->
<Story name="Active" args={{ active: true }} />
