<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NewsByline from './news-byline.svelte';

  const { Story } = defineMeta({
    title: 'Design System/Feed/NewsByline',
    component: NewsByline,
    argTypes: {
      newsItem: { control: 'object' },
    },
  });
</script>

<Story name="Release" args={{ newsItem: { type: 'release', source: 'Okta Release Notes', time: Date.now() } }} />

<Story name="RSS" args={{ newsItem: { type: 'rss', source: 'Kotaku', time: Date.now() } }} />
