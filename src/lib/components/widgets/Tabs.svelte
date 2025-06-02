<script lang="ts">
	import * as Tabs from '../ui/tabs/index.js';
	import { writable, type Writable } from 'svelte/store';
	import { credentialStore, modalStore } from '$lib/stores/index.js';
	import DataTable from '../ui/data-table/data-table.svelte';
	import EmojiGame from './EmojiGame.svelte';
	import { useQuery } from 'convex-svelte';
	import { getColumns } from './columns.js';
	import { api } from '$lib/convex/_generated/api.js';
	import type { Doc } from '$lib/convex/_generated/dataModel.js';

	let list: Writable<any[]> = writable([]);

	const { columns } = getColumns(modalStore);

	const query = useQuery(api.scores.getScores, {});

	const getScores = async () => {};

	// const submitScore = async () => {
	// 	const id = $userstore.length ? $userstore[0]._id : undefined;

	// 	const timestamp = Date.now().toString();

	// 	const dateInstance = new Date(Number(timestamp));
	// 	const date = format(dateInstance, 'MMM DD, YYYY');
	// 	const time = format(dateInstance, 'HH:mm:ss');

	// 	let received = {
	// 		email: $settingstore.credentials?.email as string,
	// 		name: $settingstore.credentials?.name as string,
	// 		timestamp,
	// 		date,
	// 		time,
	// 		id: $settingstore.credentials?.email as string,
	// 		...$scorestore
	// 	};

	// 	const toStore: Record<string, any> = {};
	// 	toStore[received.email] = received;

	// 	const document: iDocument = {
	// 		docId: slugify(received.date),
	// 		collectionId: $settingstore.game,
	// 		data: toStore
	// 	};

	// 	if ($fbstore) {
	// 		const promise = $fbstore.setDocumentWithMerge(document);
	// 		const response = await toast.promise(promise, {
	// 			loading: 'Submitting...',
	// 			success: 'Submitted successfully.',
	// 			error: 'Could not submit.'
	// 		});
	// 		const { data, status, message } = await response;
	// 		if (status === 'success') {
	// 			toast.success(message);
	// 			await getScores();
	// 		} else {
	// 			toast.error(message);
	// 		}

	// 		$scorestore = {};
	// 	} else {
	// 		toast.error('Store not connecting');
	// 	}
	// };

	const flatten = (item: Doc<'scores'>) => ({
		name: item.name,
		email: item.email,
		createdAt: new Date(item._creationTime).toLocaleString()
	});
</script>

<Tabs.Root value="game" class="w-full">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="game">Game</Tabs.Trigger>
		<Tabs.Trigger value="leaderboard">Leaderboard</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="game" class="w-full">
		<EmojiGame />
	</Tabs.Content>
	<Tabs.Content value="leaderboard">
		{#if query.isLoading}
			<DataTable {columns} data={[]} />
		{:else if query.error}
			<p>{query.error.message}</p>
		{:else}
			<DataTable {flatten} {columns} data={query.data} />
		{/if}
	</Tabs.Content>
</Tabs.Root>
