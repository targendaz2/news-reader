<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    /**
     * Visual style: `link` for quiet red text actions (Refresh, Sources), `outline` for Mark-as-read, `dashed` for the + Add a source
     * affordance.
     */
    variant?: 'link' | 'outline' | 'dashed';

    /** Button content. */
    children: Snippet;

    /** The onclick event handler */
    onclick?: () => void;
  }

  const { variant = 'link', children, onclick, ...rest }: Props = $props();
</script>

<button type="button" class={variant} {onclick} {...rest}>
  {@render children()}
</button>

<style>
  /* Base button styles */
  button {
    display: inline-block;
    font-family: var(--font-ui);
    font-weight: var(--weight-semibold);
    cursor: pointer;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }

  button:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  /* Link button styles */
  .link {
    border: none;
    background: none;
    padding: 0;
    font-size: var(--text-ctrl);
    color: var(--brand);
  }

  .link:hover:not(:disabled) {
    color: var(--brand-hover);
  }

  /* Outline button styles */
  .outline {
    border: 1px solid var(--border-hairline);
    background: var(--card);
    color: var(--text-muted);
    font-size: var(--text-ctrl);
    padding: 10px 18px;
    border-radius: var(--radius-pill);
  }

  .outline:hover:not(:disabled) {
    color: var(--text-body);
    border-color: var(--brand);
  }

  /* Dashed button styles */
  .dashed {
    width: 100%;
    border: 1.5px dashed var(--dashed);
    background: transparent;
    color: var(--text-muted);
    font-size: var(--text-ui);
    padding: 15px;
    border-radius: var(--radius-card);
  }

  .dashed:hover:not(:disabled) {
    color: var(--text-body);
    border-color: var(--brand);
  }
</style>
