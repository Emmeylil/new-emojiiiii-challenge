<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../../utils/index';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CalendarPrimitive.HeadCellProps = $props();
</script>

<CalendarPrimitive.HeadCell
	bind:ref
	class={cn('w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground', className)}
	{...restProps}
/>
