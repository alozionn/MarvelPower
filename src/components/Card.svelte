<script lang="ts">
  import type { Card } from 'src/interfaces/card'
  import PowerLevels from './PowerLevels.svelte'

  export let card: Card
  let showPower = false

  const togglePowerLevels = () => {
    showPower = !showPower
  }
</script>

<div class="p-2 md:p-4 flex relative flex-col border-2 border-primary rounded">
  <!-- text contain -->
  <div class="mb-2">{card.character.name}</div>

  <!-- image contain -->
  <div class="mb-4">
    <!-- src={card.image} -->
    <img
      alt="character-profile"
      src={card.image ??
        'https://assets.entrepreneur.com/content/3x2/2000/20160701113917-Marvel.jpeg'}
      class="object-fill w-full h-48 rounded"
      width="400"
      height="200"
    />
  </div>
  <!-- power contain -->

  <div>
    {#if showPower}
      <PowerLevels power={card.character.power_grid} />
    {:else}
      <button
        class="w-1/2 p-2 rounded border border-primary hover:bg-primary text-primary hover:text-white focus:ring-4 focus:outline-non focus:ring-red-300"
        on:click={togglePowerLevels}>Show Power</button
      >
    {/if}
  </div>
</div>
