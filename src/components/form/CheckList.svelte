<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

	export let value: any[] = []
	let selected = writable<any[]>(value)
	setContext('selected', selected)

	$: value = $selected
</script>

<div class={`flex flex-col gap-4 ${$$props.class}`}>
	<slot />
</div>
