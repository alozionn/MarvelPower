<script lang="ts">
  import type { Card } from 'src/interfaces/card'

  export let card: Card
</script>

<div class="p-4 flex justify-center items-center">
  <!-- image contain -->
  <div>
    <img alt="character-profile" src={card.image} width="300" height="300" />
  </div>
  <!-- text contain -->
  <div>{card.name}</div>
  <!-- detais contain -->
  <div><br />{card.details}</div>
</div>
