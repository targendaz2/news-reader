<script lang="ts">
  import { sourceTypes } from '$lib/types';

  interface Props {
    /** Source type this badge marks. */
    type?: keyof typeof sourceTypes;
  }

  const { type = 'rss' }: Props = $props();
</script>

<span>{sourceTypes[type]}</span>

<style>
  span {
    font-family: var(--font-mono);
    font-size: var(--text-badge);
    font-weight: var(--weight-semibold);
    letter-spacing: var(--tracking-badge);
    padding: 2px 6px;
    border-radius: var(--radius-badge);
    background: var(--chip-bg);
    color: var(--brand);
  }
</style>
