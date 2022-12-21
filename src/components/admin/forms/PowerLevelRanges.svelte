<script lang="ts">
  import { POWER_GRID } from 'src/utils/constants/power'
  import PowerLevelRange from './PowerLevelRange.svelte'
</script>

<PowerLevelRange powerName={POWER_GRID.INTELLIGENCE} />
<PowerLevelRange powerName={POWER_GRID.STRENGTH} />
<PowerLevelRange powerName={POWER_GRID.SPEED} />
<PowerLevelRange powerName={POWER_GRID.DURABILITY} />
<PowerLevelRange powerName={POWER_GRID.ENERGY} />
<PowerLevelRange powerName={POWER_GRID.FIGHTING} />
