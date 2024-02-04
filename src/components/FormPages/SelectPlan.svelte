<script lang="ts">
    import { pageStage, formData } from "../../utils/store";
    import Button from "../form/Button.svelte";
	import Switch from "../form/Switch.svelte";
    import PlanCard from "../shared/PlanCard.svelte";
    import Advanced from "../svg/Advanced.svelte";
	import Arcade from "../svg/Arcade.svelte";
    import Pro from "../svg/Pro.svelte";
	import { Plans } from "../../utils/enums";
	import type { PlansType } from '../../utils/enums'

	type SelectOption = (PlansType[keyof PlansType]) | undefined
	const onSelect = (value: SelectOption) => () => $formData.plan = value

	const onBack = () => pageStage.update(i => i - 1)
	const onNext = () => pageStage.update(i => i + 1)
</script>

<form class="flex flex-col max-w-[28.125rem] w-full justify-self-center md:mt-[2.5rem]">
	<h2 class="text-heading text-Denim">Select your plan</h2>
	<p class="text-body-l text-Grey mt-[.69rem]">
		You have the option of monthly or yearly billing.
	</p>

	<div class="w-full grid auto-rows-max md:grid-cols-3 mt-[2.19rem] gap-[1.12em]">
		<PlanCard 
			title="Arcade" 
			subtitle={$formData.isMonthly ? '$9/mo' : '$108/yr'}
			active={$formData.plan === Plans.ARCADE}
			on:click={onSelect(Plans.ARCADE)}
		>
			<Arcade />
		</PlanCard>

		<PlanCard 
			title="Advanced" 
			subtitle={$formData.isMonthly ? '$12/mo' : '$144/yr'}
			active={$formData.plan === Plans.ADVANCED}
			on:click={onSelect(Plans.ADVANCED)}
		>
			<Advanced />
		</PlanCard>

		<PlanCard 
			title="Pro" 
			subtitle={$formData.isMonthly ? '$15/mo' : '$180/yr'}
			active={$formData.plan === Plans.PRO}
			on:click={onSelect(Plans.PRO)}
		>
			<Pro />
		</PlanCard>
	</div>

	<div class="flex gap-4 w-full justify-center py-[.88rem] bg-VeryLightGrey mt-8">
		<p class="font-bold text-Grey text-body-m" class:switch-active={$formData.isMonthly}>Monthly</p>
		<Switch bind:value={$formData.isMonthly} />
		<p class="font-bold text-Grey text-body-m" class:switch-active={!$formData.isMonthly}>Yearly</p>
	</div>

	<div class="w-full flex items-end h-full">
		<div class="fixed md:static bottom-0 left-0 p-4 md:p-0 bg-White md:bg-[transparent] flex w-full justify-between">
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
