<script lang="ts">
  interface Props {
    /** Filter label text, e.g. "All", "Unread", "Saved". */
    label: string;

    /** Whether this pill is the selected filter. */
    active?: boolean;

    /** Called when the pill is clicked. */
    onclick?: () => void;
  }

  const { label, active = false, onclick }: Props = $props();
</script>

<button type="button" class:active aria-pressed={active} {onclick}>
  {label}
</button>

<style>
  button {
    border: none;
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: var(--text-ctrl);
    font-weight: var(--weight-semibold);
    padding: 7px 15px;
    border-radius: var(--radius-pill);
    background: var(--chip-bg);
    color: var(--text-muted);
    transition:
      background 0.15s ease,
      color 0.15s ease;
  }

  button.active {
    background: var(--brand);
    color: var(--text-onaccent);
  }

  button:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
  }
</style>
