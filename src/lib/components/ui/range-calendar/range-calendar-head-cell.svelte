<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../../utils/index';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: RangeCalendarPrimitive.HeadCellProps = $props();
</script>

<RangeCalendarPrimitive.HeadCell
	bind:ref
	class={cn('w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground', className)}
	{...restProps}
/>
