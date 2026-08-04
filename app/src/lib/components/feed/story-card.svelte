<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import SaveButton from '../controls/save-button.svelte';
  import StoryByline from './story-byline.svelte';
  import UnreadDot from './unread-dot.svelte';

  interface Props {
    /** Source feed name, e.g. "Okta Release Notes". */
    source: string;

    /** Relative time since publish, e.g. "2h". */
    time: string;

    /** Source type shown in the badge. */
    type?: ComponentProps<typeof StoryByline>['type'];
    /** Story headline. */
    title: string;
    /** Two-line preview of the story body; hidden when `compact`. */
    excerpt?: string;
    /** Shows the unread dot and keeps the title at full ink color. */
    unread?: boolean;
    /** Fills the star to mark this story as saved. */
    saved?: boolean;
    /** Hides the excerpt and tightens vertical padding for dense lists. */
    compact?: boolean;
    /** Called when the row is tapped to open the reader. */
    onOpen?: () => void;
    /** Called when the star is tapped to toggle saved state. */
    onToggleSave?: () => void;
  }

  const {
    source,
    time,
    type = 'rss',
    title,
    excerpt,
    unread = true,
    saved = false,
    compact = false,
    onOpen,
    onToggleSave,
  }: Props = $props();

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen?.();
    }
  }
</script>

<div class="row" class:compact role="button" tabindex="0" onclick={onOpen} onkeydown={handleKeydown}>
  <UnreadDot {unread} />
  <div class="body">
    <StoryByline {type} {source} {time} />
    <div class="title" class:unread>{title}</div>
    {#if !compact && excerpt}
      <div class="excerpt">{excerpt}</div>
    {/if}
  </div>
  <SaveButton {saved} onclick={onToggleSave} />
</div>

<style>
  .row {
    display: flex;
    gap: 13px;
    padding: var(--row-pad-y) var(--gutter);
    border-bottom: 1px solid var(--border-hairline);
    cursor: pointer;
    align-items: flex-start;
  }

  .row.compact {
    padding: var(--row-pad-y-compact) var(--gutter);
  }

  .row:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: -2px;
  }

  .body {
    flex: 1;
    min-width: 0;
  }

  .title {
    font-family: var(--font-display);
    font-size: var(--text-story);
    font-weight: var(--weight-semibold);
    line-height: var(--leading-snug);
    color: var(--text-faint);
  }

  .title.unread {
    color: var(--text-body);
  }

  .excerpt {
    font-size: var(--text-excerpt);
    line-height: var(--leading-ui);
    color: var(--text-muted);
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
