<script lang="ts">
	import { cn } from '../../../utils/index';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	class={cn('size-4', className)}
	fill="currentColor"
	><path
		d="M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM22 8V16H23.5V18H22V20H20V18H14.5V16.66L19.5 8H22ZM20 11.133L17.19 16H20V11.133Z"
	></path></svg
>
