<script lang="ts">
	export let label: string
	export let type: 'text' | 'email'
	export let placeholder: string | undefined = undefined
</script>

<label class="flex flex-col gap-2">
	<span class="text-body-m text-Denim">{label}</span>
	<input 
		class="px-4 pt-[.75rem] pb-[0.69rem] outline outline-1 outline-BorderStyle border-none text-Grey font-ubunto font-medium text-bodyL rounded-[.5rem]" 
		{type} 
		{placeholder} 
	/>
</label>
