<script lang="ts">
  import { getCharacters } from '../db/db'
  import { onMount } from 'svelte'
  import Card from './Card.svelte'
  import CardSkeleton from './CardSkeleton.svelte'
  import type { Character } from '../interfaces/character'

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
