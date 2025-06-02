<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import EmojiGame from '$lib/components/widgets/EmojiGame.svelte';
	import Tabs from '$lib/components/widgets/Tabs.svelte';
	import { showGameStore, modalStore } from '$lib/stores';

	const onclick = () => {
		$modalStore = { ...$modalStore, open: true };
	};
</script>

{#if !$showGameStore}
	<div class="flex h-screen w-full items-center justify-center">
		<Button {onclick}>Login</Button>
	</div>
{:else}
	<Tabs />
{/if}
