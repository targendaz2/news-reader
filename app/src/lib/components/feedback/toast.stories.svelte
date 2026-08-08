<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ComponentProps } from 'svelte';

  import Toast from './toast.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Feedback/Toast',
    component: Toast,
    argTypes: {
      children: { table: { disable: true } },
    },
  });

  type Args = ComponentProps<typeof Toast>;
</script>

{#snippet savedForLater()}
  Saved for later
{/snippet}

{#snippet upToDate()}
  Up to date
{/snippet}

{#snippet template(args: Args)}
  <div class="container">
    <Toast {...args} />
  </div>
{/snippet}

<Story name="Saved For Later" args={{ children: savedForLater }} {template} />

<Story name="Up To Date" args={{ children: upToDate }} {template} />

<style>
  .container {
    position: relative;
    padding: 60px;
    overflow: hidden;
  }
</style>
