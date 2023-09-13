<script lang="ts">
	import { pageStage } from '../../utils/store'

	$: selectPage = $pageStage.find(item => item.active)
</script>

<svelte:component this={selectPage?.page} />
