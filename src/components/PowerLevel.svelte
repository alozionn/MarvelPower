<script lang="ts">
  import { MAX_POWER_LEVEL } from '../utils/constants/power'

  export let powerLevel: number, powerName: string
</script>

<div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
  {powerName.charAt(0).toUpperCase() + powerName.slice(1)} ({powerLevel}/{MAX_POWER_LEVEL})
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <!-- class="bg-blue-600 h-2.5 rounded-full" -->
  <div
    class="bg-primary h-2.5 rounded-full"
    style={`width: ${Math.floor((powerLevel / MAX_POWER_LEVEL) * 100)}%`}
  />
</div>
