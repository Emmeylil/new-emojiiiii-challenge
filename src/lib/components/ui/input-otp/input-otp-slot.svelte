<script lang="ts">
	import { PinInput as InputOTPPrimitive } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { cn } from '../../../utils/index';

	let {
		ref = $bindable(null),
		cell,
		class: className,
		...restProps
	}: ComponentProps<typeof InputOTPPrimitive.Cell> = $props();
</script>

<InputOTPPrimitive.Cell
	{cell}
	bind:ref
	class={cn(
		'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
		cell.isActive && 'z-10 ring-2 ring-ring ring-offset-background',
		className
	)}
	{...restProps}
>
	{cell.char}
	{#if cell.hasFakeCaret}
		<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
			<div class="h-4 w-px animate-caret-blink bg-foreground duration-1000"></div>
		</div>
	{/if}
</InputOTPPrimitive.Cell>
