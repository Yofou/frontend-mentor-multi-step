<script>
    import { pageStage } from "../../utils/store";
    import Button from "../form/Button.svelte";
    import SummaryBox from "../shared/SummaryBox.svelte";

	const onBack = () => pageStage.update(i => i - 1)
	const onNext = () => pageStage.update(i => i + 1)
</script>

<form class="max-w-[28.125rem] w-full mx-auto flex flex-col">
	<h2 class="text-heading text-Denim mt-[2.5rem]">Finishing up</h2>
	<p class="text-body-l text-Grey mt-[.69rem]">Double-check everything looks OK before confirming.</p>

	<SummaryBox />

	<div class="w-full flex items-end h-full">
		<div class="fixed md:static bottom-0 left-0 p-4 md:p-0 bg-White md:bg-[transparent] flex w-full justify-between">
			<button on:click={onBack} class="text-body-l font-medium text-Grey" type="button">Go Back</button>

			<Button class="bg-Purple" on:click={onNext}>Complete</Button>
		</div>
	</div>
</form>
