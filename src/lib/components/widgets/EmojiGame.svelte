<script lang="ts">
	import { api } from '$lib/convex/_generated/api';
	import { credentialStore } from '$lib/stores';
	import { useConvexClient } from 'convex-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	const client = useConvexClient();

	let puzzles = $state<{ emojis: string; answer: string }[]>([]);
	let emojiSequence = $state('');
	let correctAnswer = $state('');
	let userGuess = $state('');
	let message = $state('');
	let score = $state(0);
	let isLoading = $state(true);
	let answeredPuzzles: string[] = JSON.parse(localStorage.getItem('answeredPuzzles') || '[]');
	let alreadyAnswered = $derived(() => answeredPuzzles.includes(emojiSequence));

	// 9. Your Google Sheet API URL (Fetch puzzles from Google Sheet)

	const sheetURL =
		'https://script.google.com/macros/s/AKfycbzD3BJ93SqFtGXdiCV1Fg6K1oJ530NlHZEBis_vke5_B2uDQX5jcetjwOuOuAP8R51r/exec';
	// 9. Your Google Sheet API URL (where the answer is to drop after the customer press finished)
	const postURL =
		'https://script.google.com/macros/s/AKfycbx7q5TwmbgS1w68hm0rnhrx3dtN0gJ2SeqJEyLnNCc9_telFqguYFz1jTLSEBaY2OMgcA/exec';

	// Fetch puzzles from Google Sheet
	onMount(async () => {
		try {
			const res = await fetch(sheetURL);
			puzzles = await res.json();
			pickNewPuzzle();
		} catch (error) {
			console.error('Failed to fetch puzzles:', error);
		} finally {
			isLoading = false;
		}

		// Get email from localStorage after mounting the component
		// email = localStorage.getItem("email") || "";
	});

	// Pick a random puzzle
	function pickNewPuzzle() {
		const randomIndex = Math.floor(Math.random() * puzzles.length);
		({ emojis: emojiSequence, answer: correctAnswer } = puzzles[randomIndex]);
	}

	// Submit the guess
	function submitGuess() {
		if (answeredPuzzles.includes(emojiSequence)) {
			message =
				'✅ You’ve already answered this correctly. Click "Finish" to update your game scored';
			return;
		}
		if (userGuess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
			score += 1;
			message = `🎉 Correct! Moving to next...`;

			answeredPuzzles.push(emojiSequence);
			localStorage.setItem('answeredPuzzles', JSON.stringify(answeredPuzzles));

			userGuess = '';
			setTimeout(() => {
				pickNewPuzzle();
				message = '';
			}, 1000);
		} else {
			message = '❌ Incorrect, try again!';
			userGuess = ''; // Clear input for retry
		}
	}

	async function finishGame() {
		if (score === 0) {
			alert('❌ You need to play and score before submitting.');
			return;
		}

		try {
			const id = client.mutation(api.scores.insertScore, {
				email: $credentialStore.email,
				name: $credentialStore.username,
				score,
				date: Date.now()
			});
			console.log(id);
			toast.success('Successfully submitted score');
		} catch (error) {
			console.error('Submission error:', error);
			toast.error('❌ Failed to submit your score. Please try again.');
		}
	}
</script>

<main class="flex min-h-screen flex-col items-center justify-center bg-cyan-300 p-4">
	<div class="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">How well do you know Jumia 🎯</h1>

		<!-- Display the emoji sequence -->
		<div style="font-size: 70px; font-weight: bold;" class="mb-6">
			{emojiSequence}
		</div>

		<input
			bind:value={userGuess}
			type="text"
			placeholder="Enter your guess here"
			class="mb-4 w-full rounded-lg border p-2"
		/>

		<button
			on:click={submitGuess}
			class="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
		>
			Submit Guess
		</button>

		{#if message}
			<p class="mt-4 text-lg">{message}</p>
		{/if}

		<div class="mt-6">
			<h2 class="text-lg font-semibold">🏆 Correct Answers: {score}</h2>
		</div>

		<button
			on:click={finishGame}
			class="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
		>
			Finish Game
		</button>
	</div>
</main>
