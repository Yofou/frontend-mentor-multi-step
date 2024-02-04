<script lang="ts">
	export let title: string
	export let subtitle: string

	export let active = false
</script>

<button class="py-5 px-4 items-center md:items-start gap-4 md:gap-0 flex md:flex-col border border-BorderStyle rounded-[.5rem] text-left" on:click class:active type="button">
	<slot />

	<div>
		<h3 class="text-Denim text-[1rem] font-medium font-ubunto md:mt-[2.44rem]">{title}</h3>
		<p class="mt-[.44rem] text-body-m text-Grey">
			{subtitle}
		</p>
	</div>
</button>

<style>
	.active {
		@apply border-Purple bg-VeryLightGrey;
	}
</style>
