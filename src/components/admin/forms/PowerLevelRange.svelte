<script lang="ts">
  import { MAX_POWER_LEVEL } from 'src/utils/constants/power'
  import { character } from 'src/stores/admin/forms/add-character-store'

  export let powerName: string
  let powerLevel: number = 0

  function rangeChange(event: Event) {
    const target = event.target as HTMLInputElement

    character.update((characterData) => {
      return {
        ...characterData,
        power_grid: { ...characterData.power_grid, [powerName]: parseInt(target.value) }
      }
    })
  }
</script>

<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  {powerName.charAt(0).toUpperCase() + powerName.slice(1)} ({powerLevel}/{MAX_POWER_LEVEL})
</label>

<input
  id="minmax-range"
  type="range"
  min="0"
  max={MAX_POWER_LEVEL}
  bind:value={powerLevel}
  on:change={rangeChange}
  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
/>
