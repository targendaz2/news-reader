<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SearchBar from './search-bar.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/SearchBar',
    component: SearchBar,
    argTypes: {
      value: { control: 'text' },
      placeholder: { control: 'text' },
    },
  });
</script>

<!-- Empty, showing the placeholder -->
<Story name="Empty" args={{ value: '' }} />

<!-- With a query already typed in -->
<Story name="With Query" args={{ value: 'macOS' }} />
