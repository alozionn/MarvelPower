<script lang="ts">
  import { getCharacters } from '../db/db'
  import { onMount } from 'svelte'
  import Card from './Card.svelte'
  import CardSkeleton from './CardSkeleton.svelte'
  import type { Character } from '../interfaces/character'

  const characterCard = {
    image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
    character: {
      name: 'Spider-Man',
      marvel_wiki: '',
      marvel_api: '',
      power: {
        intelligence: 4,
        strength: 4,
        speed: 3,
        durability: 3,
        energy: 1,
        fighting: 4
      }
    }
  }
  let loading = true
  let characters: Character[] | []

  onMount(async () => {
    characters = await getCharacters()
    console.log(characters)
    loading = false
  })
</script>

<div class="grid grid-cols-4 gap-8">
  {#if loading}
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <!-- <CardSkeleton /> -->
  {:else}
    {#each characters as characterCard}
      <Card card={{ character: characterCard }} />
    {/each}
  {/if}
</div>
