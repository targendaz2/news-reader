<script lang="ts">
  import TypeBadge from './type-badge.svelte';
  import type { Story } from '$lib/types';
  import { formatDistanceToNow, formatRFC3339 } from 'date-fns';

  interface Props {
    /** Source story. */
    story: Story;
  }

  const { story }: Props = $props();

  const formattedTime = $derived(formatRFC3339(story.time));
  const relativeTime = $derived(formatDistanceToNow(story.time, { addSuffix: true }));
</script>

<div>
  <TypeBadge type={story.type ?? 'rss'} />
  <span class="source">{story.source}</span>
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
