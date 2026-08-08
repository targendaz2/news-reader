<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import FilterPills from './filter-pills.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/FilterPills',
    component: FilterPills,
  });
</script>

<Story name="All" args={{ active: 'all' }} />

<Story name="Unread" args={{ active: 'unread' }} />

<Story name="Saved" args={{ active: 'saved' }} />
