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

<Story
  name="Release"
  args={{
    newsItem: {
      source: {
        type: 'release',
        title: 'Okta Release Notes',
      },
      publishedAt: Date.now(),
    },
  }}
/>

<Story
  name="RSS"
  args={{
    newsItem: {
      source: {
        type: 'rss',
        title: 'Kotaku',
      },
      publishedAt: Date.now(),
    },
  }}
/>
