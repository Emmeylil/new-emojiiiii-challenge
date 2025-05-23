<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { modalStore } from '$lib/stores';
	import LoginForm from '../forms/LoginForm.svelte';
</script>

<Dialog.Root open={$modalStore.open}>
	<Dialog.Content class="sm:max-w-[425px]">
		{#if $modalStore.type === 'login'}
			<LoginForm />
		{/if}
		<!-- <Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header> 
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Name</Label>
				<Input id="name" value="Pedro Duarte" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="username" class="text-right">Username</Label>
				<Input id="username" value="@peduarte" class="col-span-3" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>-->
	</Dialog.Content>
</Dialog.Root>
