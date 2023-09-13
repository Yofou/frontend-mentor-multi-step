<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

	export let selected = writable<any[]>([])
	setContext('selected', selected)
</script>

<div class={`flex flex-col gap-4 ${$$props.class}`}>
	<slot />
</div>
