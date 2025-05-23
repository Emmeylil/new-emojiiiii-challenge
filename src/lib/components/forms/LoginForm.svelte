<script lang="ts">
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { credentialStore, modalStore } from '$lib/stores';

	const onsubmit = (evt: SubmitEvent) => {
		evt.preventDefault();

		$modalStore = { ...$modalStore, open: false };
	};
</script>

<form {onsubmit} class="space-y-4">
	<h2 class="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>
	<div>
		<label for="username" class="mb-1 block text-gray-700">Username</label>
		<Input
			id="username"
			type="text"
			bind:value={$credentialStore.username}
			class="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
			required
		/>
	</div>

	<div>
		<label for="email" class="mb-1 block text-gray-700">Email</label>
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
