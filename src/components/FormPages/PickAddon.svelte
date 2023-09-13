<script>
    import { pageStage } from "../../utils/store";
    import Button from "../form/Button.svelte";
    import CheckItem from "../form/CheckItem.svelte";
	import CheckList from "../form/CheckList.svelte";

	let value = undefined
	const onBack = () => pageStage.update(i => i - 1)
	const onNext = () => pageStage.update(i => i + 1)
</script>

<form class="max-w-[28.125rem] w-full mx-auto flex flex-col">
	<h2 class="text-heading text-Denim mt-[2.5rem]">Pick add-ons</h2>
	<p class="text-body-l text-Grey mt-[.69rem]">Add-ons help enhance your gaming experience.</p>

	<CheckList class="mt-[2.19rem]" bind:value={value}>
		<CheckItem 
			title="Online service" 
			description="Access to multiplayer games" 
			subscription="+$1/mo" 
			value={'online'} 
		/>
		<CheckItem 
			title="Larger storage" 
			description="Extra 1TB of cloud save" 
			subscription="+$2/mo" 
			value={'storage'} 
		/>
		<CheckItem 
			title="Customizable profile" 
			description="Custom theme on your profile" 
			subscription="+$2/mo" 
			value={'profile'} 
		/>
	</CheckList>

	<div class="w-full flex items-end h-full">
		<div class="flex w-full justify-between">
			<button on:click={onBack} class="text-body-l font-medium text-Grey" type="button">Go Back</button>

			<Button on:click={onNext}>Next Step</Button>
		</div>
	</div>
</form>
