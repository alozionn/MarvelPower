<script lang="ts">
  import type { Character } from 'src/interfaces/character'

  let character = {} as Character
</script>

<form>
  <label for="name">Name</label>
  <input type="text" bind:value={character.name} />
  <label for="marvel_wiki">Marvel Wiki URL</label>
  <input type="text" bind:value={character.marvel_wiki} />
  <label for="marvel_api">Marvel API URL</label>
  <input type="text" bind:value={character.marvel_api} />
  <label for="power_grid">Power</label>
  <input type="text" bind:value={character.name} />
</form>
