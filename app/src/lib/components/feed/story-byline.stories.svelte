<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import StoryByline from './story-byline.svelte';

  const { Story } = defineMeta({
    title: 'Feed/StoryByline',
    component: StoryByline,
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['rss', 'email', 'social', 'release', 'github'],
      },
      source: { control: 'text' },
      time: { control: 'text' },
    },
  });
</script>

<Story name="Release" args={{ type: 'release', source: 'Okta Release Notes', time: '2h' }} />

<Story name="RSS" args={{ type: 'rss', source: 'Kotaku', time: '3h' }} />
