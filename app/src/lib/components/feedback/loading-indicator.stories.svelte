<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LoadingIndicator from './loading-indicator.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Feedback/LoadingIndicator',
    component: LoadingIndicator,
    argTypes: {
      label: { control: 'text' },
    },
  });
</script>

<Story name="Default" />

<Story name="Custom Label" args={{ label: 'Loading story…' }} />
