<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import StoryByline from './story-byline.svelte';

  const { Story } = defineMeta({
    title: 'Feed/StoryByline',
    component: StoryByline,
    argTypes: {
      story: { control: 'object' },
    },
  });
</script>

<Story name="Release" args={{ story: { type: 'release', source: 'Okta Release Notes', time: '2h' } }} />

<Story name="RSS" args={{ story: { type: 'rss', source: 'Kotaku', time: '3h' } }} />
