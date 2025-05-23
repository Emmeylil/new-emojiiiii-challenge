<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { credentialStore, modalStore } from '$lib/stores';
	import Dialogs from '$lib/components/widgets/Dialogs.svelte';
	import { Toaster } from 'svelte-sonner';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	setupConvex(PUBLIC_CONVEX_URL);

	let { children } = $props();

	onMount(() => {
		if (!$credentialStore.email) {
			$modalStore = { ...$modalStore, open: true };
		}
	});
</script>

{@render children()}
<Dialogs />
<Toaster richColors position="top-center" />
