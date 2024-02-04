<script lang="ts">
	import { pageStage, formData } from '../../utils/store'
	import Input from '../form/Input.svelte'
	import Button from '../form/Button.svelte'
    import zod from 'zod';

	const schema = zod.object({
		name: zod.string().min(1, 'field is required'),
		email: zod.string().email(),
		phoneNumber: zod.string().min(1, 'field is required')
	})

	let errors: {
		name?: string[] | undefined,
		email?: string[] | undefined,
		phoneNumber?: string[] | undefined,
	} | null = null;

	const onNext = () => {
		const result = schema.safeParse({
			name: $formData.name,
			email: $formData.email,
			phoneNumber: $formData.phoneNumber
		})

		if (result.success) {
			errors = null;
			pageStage.update(i => i + 1)
		} else {
			errors = result.error.flatten().fieldErrors
		}
	}
</script>

<form class="max-w-[28.125rem] w-full justify-self-center md:pt-10 h-full flex flex-col">
	<h2 class="text-heading text-Denim">Personal Info</h2>
	<p class="text-body-l text-Grey">Please provide your name, email address, and phone number.</p>

	<div class="flex flex-col gap-6 mt-[2.2rem]">
		<Input 
			label="Name" 
			bind:value={$formData.name} 
			placeholder="e.g. Stephen King" 
			errorMessage={errors?.name?.[0]} 
		/>
		<Input 
			label="Email Address" 
			bind:value={$formData.email} 
			placeholder="e.g. stephenking@lorem.com" 
			errorMessage={errors?.email?.[0]} 
		/>
		<Input 
			label="Phone Number" 
			bind:value={$formData.phoneNumber} 
			placeholder="e.g. +1 234 567 890" 
			errorMessage={errors?.phoneNumber?.[0]} 
		/>
	</div>

	<div class="fixed md:static bottom-0 left-0 p-4 md:p-0 bg-White md:bg-[transparent] flex w-full md:h-full justify-end items-end boop" >
		<Button on:click={onNext}>Next Step</Button>
	</div>
</form>
