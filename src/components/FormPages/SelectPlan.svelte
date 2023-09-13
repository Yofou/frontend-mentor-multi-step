<script lang="ts">
    import { pageStage } from "../../utils/store";
    import Button from "../form/Button.svelte";
	import Switch from "../form/Switch.svelte";
    import PlanCard from "../shared/PlanCard.svelte";
    import Advanced from "../svg/Advanced.svelte";
	import Arcade from "../svg/Arcade.svelte";
    import Pro from "../svg/Pro.svelte";

	type SelectOption = 'Arcade' | 'Advanced' | 'Pro' | undefined
	let select: SelectOption = undefined
	const onSelect = (value: SelectOption) => () => select = value

	let isMonthly = false

	const onBack = () => pageStage.update(i => i - 1)
	const onNext = () => pageStage.update(i => i + 1)
</script>

<form class="flex flex-col max-w-[28.125rem] w-full justify-self-center mt-[2.5rem]">
	<h2 class="text-heading text-Denim">Select your plan</h2>
	<p class="text-body-l text-Grey mt-[.69rem]">
		You have the option of monthly or yearly billing.
	</p>

	<div class="w-full grid grid-cols-3 mt-[2.19rem] gap-[1.12em]">
		<PlanCard 
			title="Arcade" 
			subtitle="$9/mo" 
			active={select === 'Arcade'}
			on:click={onSelect('Arcade')}
		>
			<Arcade />
		</PlanCard>

		<PlanCard 
			title="Advanced" 
			subtitle="$12/mo" 
			active={select === 'Advanced'}
			on:click={onSelect('Advanced')}
		>
			<Advanced />
		</PlanCard>

		<PlanCard 
			title="Pro" 
			subtitle="$15/mo" 
			active={select === 'Pro'}
			on:click={onSelect('Pro')}
		>
			<Pro />
		</PlanCard>
	</div>

	<div class="flex gap-4 w-full justify-center py-[.88rem] bg-VeryLightGrey mt-8">
		<p class="font-bold text-Grey text-body-m" class:switch-active={isMonthly}>Monthly</p>
		<Switch bind:value={isMonthly} />
		<p class="font-bold text-Grey text-body-m" class:switch-active={!isMonthly}>Yearly</p>
	</div>

	<div class="w-full flex items-end h-full">
		<div class="flex w-full justify-between">
			<button on:click={onBack} class="text-body-l font-medium text-Grey" type="button">Go Back</button>

			<Button on:click={onNext}>Next Step</Button>
		</div>
	</div>
</form>

<style>
	.switch-active {
		@apply text-Denim;
	}
</style>
