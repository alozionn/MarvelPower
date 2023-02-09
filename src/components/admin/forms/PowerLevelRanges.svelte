<script lang="ts">
  import type { PowerGrid } from 'src/interfaces/character'
  import PowerLevelRange from './PowerLevelRange.svelte'

  export let powerGrid: PowerGrid
</script>

{#each Object.entries(powerGrid) as [powerName]}
  <PowerLevelRange {powerName} />
{/each}
