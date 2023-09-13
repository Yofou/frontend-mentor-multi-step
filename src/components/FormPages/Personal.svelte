<script lang="ts">
	import Input from '../form/Input.svelte'
</script>

<form class="max-w-[28.125rem] justify-self-center pt-10">
	<h2 class="text-heading text-Denim">Personal Info</h2>
	<p class="text-body-l text-Grey">Please provide your name, email address, and phone number.</p>

	<div class="flex flex-col gap-6 mt-[2.2rem]">
		<Input type="text" label="Name" placeholder="e.g. Stephen King" />
		<Input type="text" label="Email Address" placeholder="e.g. stephenking@lorem.com" />
		<Input type="text" label="Phone Number" placeholder="e.g. +1 234 567 890" />
	</div>
</form>
