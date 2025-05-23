<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();
</script>

<div class={className}>
	<div class="px-4 py-0 md:container">
		{@render children()}
	</div>
</div>
