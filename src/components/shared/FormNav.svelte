<script lang="ts">
	import { pageStage } from '../../utils/store'
	import FormNavStep from './FormNavStep.svelte'
</script>


{#each $pageStage as stage, i}
	<FormNavStep title={stage.title} index={i} active={stage.active} />
{/each}
