<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import TopicTab from './topic-tab.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/TopicTab',
    component: TopicTab,
    argTypes: {
      label: { control: 'text' },
      active: { control: 'boolean' },
    },
    args: {
      topic: { title: 'Dev' },
      onclick: fn(),
    },
  });
</script>

<!-- Unselected tab -->
<Story name="Inactive" args={{ active: false }} />

<!-- Selected tab -->
<Story name="Active" args={{ active: true }} />
