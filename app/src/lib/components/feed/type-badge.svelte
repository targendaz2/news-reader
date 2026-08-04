<script lang="ts">
  const LABELS = {
    rss: 'RSS',
    email: 'EMAIL',
    social: 'SOCIAL',
    release: 'RELEASE',
    github: 'GITHUB',
  } as const;

  interface Props {
    /** Source type this badge marks. */
    type?: keyof typeof LABELS;
  }

  const { type = 'rss' }: Props = $props();
</script>

<span>{LABELS[type]}</span>

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
