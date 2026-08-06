<script lang="ts">
  import { sourceTypes } from '$lib/types';

  interface Props {
    /** Source type this badge marks. */
    type?: keyof typeof sourceTypes;
    /** `chip` (default): inline, auto-width badge for the feed. `column`: fixed-width, centered badge for aligned list rows like SourceCard. */
    variant?: 'chip' | 'column';
  }

  const { type = 'rss', variant = 'chip' }: Props = $props();
</script>

<span class:column={variant === 'column'}>{sourceTypes[type]}</span>

<style>
  span {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: var(--text-badge);
    font-weight: var(--weight-semibold);
    letter-spacing: var(--tracking-badge);
    padding: 2px 6px;
    border-radius: var(--radius-badge);
    background: var(--chip-bg);
    color: var(--brand);
  }

  span.column {
    width: 64px;
    text-align: center;
    padding: 3px 0;
    letter-spacing: 0.05em;
  }
</style>
