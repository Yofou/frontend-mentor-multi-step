<script>
    import { formData, pageStage } from "../../utils/store";
	import { PlansToPricePerMonth, AddonsToFullTitle, AddonsToPricePerMonth } from "../../utils/enums";
	
	const onChange = () => {
		pageStage.set(1)
	}

	$: subLongLabel = $formData.isMonthly ? 'Monthly' : 'Yearly'
	$: subShortLabel = $formData.isMonthly ? 'mo' : 'yr'
	$: subSingular = $formData.isMonthly ? 'month' : 'year'

	$: price = PlansToPricePerMonth[$formData.plan]
	$: pricePerSub = $formData.isMonthly ? price : price * 12

	$: total = PlansToPricePerMonth[$formData.plan] + $formData.addons.reduce((total, current) => {
		return total + AddonsToPricePerMonth[current]
	}, 0)

	$: totalPerSub = $formData.isMonthly ? total : total * 12
</script>

<div class="py-4 px-6 bg-VeryLightGrey mt-[2.19rem] rounded-[.5rem]">
	<div class="flex justify-between items-center">
		<div>
			<h2 class="capitalize text-body-l font-medium text-Denim">{$formData.plan} ({subLongLabel})</h2>
			<button class="text-Grey text-body-m underline" on:click={onChange} type="button">Change</button>
		</div>

		<p class="text-Denim text-right font-bold text-body-l">${pricePerSub}/{subShortLabel}</p>
	</div>
	
	<div class="hr mt-6 mb-4 h-[1px] w-full bg-Grey opacity-[0.2]" /> 

	<div class="flex flex-col gap-4">
		{#each $formData.addons as addon}
			{@const addonPrice = AddonsToPricePerMonth[addon] * ($formData.isMonthly ? 1 : 12)}
			<div class="flex justify-between items-center">
				<p class="text-Grey text-body-m">{AddonsToFullTitle[addon]}</p>
				<p class="text-Denim text-body-m text-right">+${addonPrice}/{subShortLabel}</p>
			</div>	
		{/each}
	</div>
</div>

<div class="flex justify-between items-center px-6 py-[1.56rem]">
	<p class="text-grey text-body-m text-Grey">Total (per {subSingular})</p>
	<p class="text-Purple font-ubunto text-[1.25rem] font-bold">+${totalPerSub}/{subShortLabel}</p>
</div>
