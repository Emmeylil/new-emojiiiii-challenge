<script lang="ts">
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { credentialStore, modalStore, showGameStore } from '$lib/stores';

	const onsubmit = (evt: SubmitEvent) => {
		evt.preventDefault();

		$modalStore = { ...$modalStore, open: false };

		$showGameStore = true;
	};
</script>

<form {onsubmit} class="bg:white dark:bg-background space-y-4">
	<h2
		class="mb-6 text-center text-2xl font-bold text-orange-500
"
	>
		Login
	</h2>
	<div>
		<label
			for="username"
			class="mb-1 block text-orange-500
">Username</label
		>
		<Input
			id="username"
			type="text"
			bind:value={$credentialStore.username}
			class="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
			required
		/>
	</div>

	<div>
		<label for="email" class="mb-1 block text-orange-500">Email</label>
		<Input
			id="email"
			type="email"
			bind:value={$credentialStore.email}
			class="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
			required
		/>
	</div>

	<Button
		type="submit"
		class="w-full rounded bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
	>
		Login
	</Button>
</form>
