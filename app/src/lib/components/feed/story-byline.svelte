<script lang="ts">
  import TypeBadge from './type-badge.svelte';
  import type { Story } from '$lib/types';

  interface Props {
    /** Source story. */
    story: Story;
  }

  const { story }: Props = $props();
</script>

<div>
  <TypeBadge type={story.type ?? 'rss'} />
  <span class="source">{story.source}</span>
  <span class="time">· {story.time}</span>
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

  span.time {
    font-size: var(--text-meta);
    color: var(--text-faint);
  }
</style>
