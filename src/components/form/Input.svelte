<script lang="ts">
	export let label: string
	export let placeholder: string | undefined = undefined
	export let value: string
	export let errorMessage: string | undefined = undefined

	$: hasError = errorMessage != undefined
</script>

<label class="flex flex-col gap-2">
	<span class="w-full flex justify-between">
		<span class="text-body-m text-Denim">{label}</span>
		{#if hasError}
			<span class="text-RedErrors text-body-m font-bold">{errorMessage}</span>
		{/if}
	</span>
	
	<input 
		class="px-4 pt-[.75rem] pb-[0.69rem] outline outline-1 outline-BorderStyle focus:outline-Purple border-none text-Grey font-ubunto font-medium text-bodyL rounded-[.5rem]" 
		bind:value={value}
		class:outline-RedErrors={hasError}
		type="text"
		{placeholder} 
	/>
</label>
