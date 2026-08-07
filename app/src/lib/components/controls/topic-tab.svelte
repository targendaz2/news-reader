<script lang="ts">
  import type { Topic } from '$lib/types';
  interface Props {
    /** Topic. */
    topic: Topic;

    /** Whether this is the selected topic. */
    active?: boolean;

    /** Called when the topic is clicked. */
    onclick?: () => void;
  }

  const { topic, active = false, onclick }: Props = $props();
</script>

<button type="button" class:active aria-pressed={active} {onclick}>
  {topic.title}
</button>

<style>
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: var(--text-ctrl);
    font-weight: var(--weight-semibold);
    white-space: nowrap;
    padding: 0 0 3px;
    border-bottom: 2px solid transparent;
    color: var(--text-faint);
  }

  button.active {
    color: var(--text-body);
    border-bottom-color: var(--brand);
  }

  button:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
  }
</style>
