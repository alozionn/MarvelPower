<script lang="ts">
  import type { PowerGrid } from '../interfaces/character'
  import PowerLevel from './PowerLevel.svelte'

  export let powerGrid: PowerGrid

  //cleanup because it's data from the API and it contains extra info
  delete powerGrid.id
  delete powerGrid.character_id
  delete powerGrid.created_at

  console.log(powerGrid, Object.entries(powerGrid))
</script>

{#each Object.entries(powerGrid) as [powerName, powerLevel]}
  <PowerLevel {powerName} {powerLevel} />
{/each}
