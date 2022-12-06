<script lang="ts">
  import type { Power } from '../interfaces/character'
  import { POWER_GRID } from '../utils/constants/power'
  import PowerLevel from './PowerLevel.svelte'

  export let power: Power
</script>

<PowerLevel powerLevel={power[POWER_GRID.INTELLIGENCE]} powerName={POWER_GRID.INTELLIGENCE} />
<PowerLevel powerLevel={power[POWER_GRID.STRENGTH]} powerName={POWER_GRID.STRENGTH} />
<PowerLevel powerLevel={power[POWER_GRID.SPEED]} powerName={POWER_GRID.SPEED} />
<PowerLevel powerLevel={power[POWER_GRID.DURABILITY]} powerName={POWER_GRID.DURABILITY} />
<PowerLevel powerLevel={power[POWER_GRID.ENERGY]} powerName={POWER_GRID.ENERGY} />
<PowerLevel powerLevel={power[POWER_GRID.FIGHTING]} powerName={POWER_GRID.FIGHTING} />
