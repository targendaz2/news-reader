<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Toggle from './toggle.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Controls/Toggle',
    component: Toggle,
    argTypes: {
      on: { control: 'boolean' },
      label: { control: 'text' },
    },
    args: {
      label: 'Mute Example Source',
      onchange: fn(),
    },
  });
</script>

<!-- Toggle off -->
<Story name="Off" args={{ on: false }} />

<!-- Toggle on -->
<Story name="On" args={{ on: true }} />
