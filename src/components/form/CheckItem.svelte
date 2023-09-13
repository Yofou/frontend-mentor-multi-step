
<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

	export let value: any 
	const selected = getContext<Writable<any>>('selected')
	
	export let title: string
	export let description: string
	export let subscription: string

	$: isSelected = $selected.includes(value)
	const onSelect = () => {
		if (isSelected) {
			$selected = $selected.filter((item: any) => item !== value)
		} else {
			$selected.push(value)
			$selected = $selected
		}
	}
</script>

<button type="button" class="w-full rounded-[.5rem] py-[1.13rem] text-left gap-6 items-center px-6 border border-BorderStyle grid grid-cols-[max-content,1fr,max-content]" on:click={onSelect} class:selected={isSelected}>
	
	{#if isSelected}
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  		<rect width="20" height="20" rx="4" fill="#483EFF"/>
  		<path d="M5 10L8.43298 13.433L14.866 7" stroke="white" stroke-width="2"/>
	</svg>
	{:else}
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#D6D9E6"/>
	</svg>
	{/if}
	
	
	<div class="flex flex-col gap-[.44rem]">
		<h3 class="text-body-l text-Denim font-medium">{title}</h3>
		<p class="text-body-m leading-[1.25rem] text-Grey">{description}</p>
	</div>

	<p class="text-Purple text-body-m leading-[1.25rem]">{subscription}</p>
</button>

<style>
	.selected {
		@apply border-Purple bg-VeryLightGrey;
	}
</style>
