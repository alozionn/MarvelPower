<script lang="ts">
  import type { PowerGrid } from '../interfaces/character'
  import { POWER_GRID } from '../utils/constants/power'
  import PowerLevel from './PowerLevel.svelte'

  export let powerGrid: PowerGrid
</script>

<PowerLevel powerLevel={powerGrid[POWER_GRID.INTELLIGENCE]} powerName={POWER_GRID.INTELLIGENCE} />
<PowerLevel powerLevel={powerGrid[POWER_GRID.STRENGTH]} powerName={POWER_GRID.STRENGTH} />
<PowerLevel powerLevel={powerGrid[POWER_GRID.SPEED]} powerName={POWER_GRID.SPEED} />
<PowerLevel powerLevel={powerGrid[POWER_GRID.DURABILITY]} powerName={POWER_GRID.DURABILITY} />
<PowerLevel powerLevel={powerGrid[POWER_GRID.ENERGY]} powerName={POWER_GRID.ENERGY} />
<PowerLevel powerLevel={powerGrid[POWER_GRID.FIGHTING]} powerName={POWER_GRID.FIGHTING} />
