<script lang="ts">
  import { storyTypes } from '$lib/types';

  interface Props {
    /** Source type this badge marks. */
    type?: keyof typeof storyTypes;
  }

  const { type = 'rss' }: Props = $props();
</script>

<span>{storyTypes[type]}</span>

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
