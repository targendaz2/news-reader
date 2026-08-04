<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import TypeBadge from './type-badge.svelte';

  interface Props {
    /** Source type shown in the badge. */
    type?: ComponentProps<typeof TypeBadge>['type'];

    /** Source feed name, e.g. "Okta Release Notes". */
    source: string;

    /** Relative time since publish, e.g. "2h". */
    time: string;
  }

  const { type = 'rss', source, time }: Props = $props();
</script>

<div>
  <TypeBadge {type} />
  <span class="source">{source}</span>
  <span class="time">· {time}</span>
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
