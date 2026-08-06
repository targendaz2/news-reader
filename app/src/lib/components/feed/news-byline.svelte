<script lang="ts">
  import TypeBadge from './type-badge.svelte';
  import type { NewsItem } from '$lib/types';
  import { formatDistanceToNow, formatRFC3339 } from 'date-fns';

  interface Props {
    /** Source story. */
    newsItem: NewsItem;
  }

  const { newsItem }: Props = $props();

  const formattedTime = $derived(formatRFC3339(newsItem.time));
  const relativeTime = $derived(formatDistanceToNow(newsItem.time, { addSuffix: true }));
</script>

<div>
  <TypeBadge type={newsItem.type ?? 'rss'} />
  <span class="source">{newsItem.source}</span>
  <time datetime={formattedTime}>· {relativeTime}</time>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
    flex-wrap: wrap;
  }

  span.source {
    font-size: var(--text-meta);
    font-weight: var(--weight-semibold);
    color: var(--text-muted);
  }

  time {
    font-size: var(--text-meta);
    color: var(--text-faint);
  }
</style>
