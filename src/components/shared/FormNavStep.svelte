<script lang="ts">
	export let title: string
	export let index: number
	export let active: boolean

	$: stepNumber = index + 1
</script>

<button class="flex gap-4 md:items-center" on:click>
	<div class="w-8 h-8 rounded-full text-White outline outline-White outline-2 grid place-content-center text-body-m font-bold uppercase" class:active>
		{stepNumber}
	</div>

	<div class="hidden md:flex flex-col text-left uppercase">
		<p class="text-body-s text-LightBlue">Step {stepNumber}</p>
		<p class="text-body-m font-bold uppercase text-White tracking-[.062rem]">{title}</p>
	</div>
</button>

<style>
	.active {
		@apply bg-SkyBlue outline-SkyBlue text-Denim;
	}
</style>
