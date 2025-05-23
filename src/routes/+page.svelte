<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import EmojiGame from '$lib/components/widgets/EmojiGame.svelte';
	import { credentialStore, modalStore } from '$lib/stores';

	const onclick = () => {
		$modalStore = { ...$modalStore, open: true };
	};
</script>

{#if !$credentialStore.email}
	<div class="flex h-screen w-full items-center justify-center">
		<Button {onclick}>Login</Button>
	</div>
{:else}
	<EmojiGame />
{/if}
