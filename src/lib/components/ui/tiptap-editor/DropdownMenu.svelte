<script lang="ts">
	import * as DropdownMenu from '../dropdown-menu/index.js';
	import type { Writable } from 'svelte/store';
	import type { Editor } from '@tiptap/core';
	import { cn } from '../../../utils/index';
	import { buttonVariants } from '../button';
	import type { iSubmenu } from '../../../utils/tiptap-types';

	interface Props {
		submenu: iSubmenu;
		editor: Writable<Editor>;
	}

	let { submenu, editor }: Props = $props();
	const Icon = submenu.trigger.icon;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
		<Icon class="size-4" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading class="text-xs uppercase text-muted-foreground"
				>Options</DropdownMenu.GroupHeading
			>
			<DropdownMenu.Separator />
			{#each submenu.menus as menu, i}
				<DropdownMenu.Item onclick={() => menu.onclick($editor)}>
					{@const Icon = menu.icon}
					<Icon class="mr-2 size-4" />
					<span>{menu.name}</span>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
