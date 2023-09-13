<script lang="ts">
	export let value: boolean = false

	$: cx = value ? '10' : '28'
</script>

<button type="button" on:click={() => value = !value}>
	<svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="38" height="20" rx="10" fill="#022959"/>
		<circle {cx} cy="10" r="6" fill="white"/>
	</svg> 
</button>
