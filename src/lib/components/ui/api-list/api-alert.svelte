<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '../alert';
	import { ServerIcon, CopyIcon } from 'lucide-svelte';
	import { Badge, type BadgeVariant } from '../badge';
	import { Button } from '../button';
	import { onCopy } from '@toolsntuts/utils';

	interface Props {
		title: string;
		description: string;
		variant: 'public' | 'admin';
	}

	let { title, description, variant = 'public' }: Props = $props();

	const textMap: Record<Props['variant'], string> = {
		public: 'Public',
		admin: 'Admin'
	};

	const variantMap: Record<Props['variant'], BadgeVariant> = {
		public: 'secondary',
		admin: 'destructive'
	};
</script>

<Alert>
	<ServerIcon class="size-4" />
	<AlertTitle class="flex items-center gap-x-2">
		{title}
		<Badge variant={variantMap[variant]}>
			{textMap[variant]}
		</Badge>
	</AlertTitle>
	<AlertDescription class="mt-2 grid grid-cols-[1fr_40px] items-center justify-between gap-4">
		<code
			class="relative line-clamp-1 w-full rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
		>
			{description}
		</code>
		<Button size="icon" variant="outline" onclick={() => onCopy(description)}>
			<CopyIcon class="size-4" />
		</Button>
	</AlertDescription>
</Alert>
