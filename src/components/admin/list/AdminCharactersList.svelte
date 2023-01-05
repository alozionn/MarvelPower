<script lang="ts">
  import ConfirmModal from 'src/components/core/ConfirmModal.svelte'
  import { deleteCharacterDB, getCharacters } from 'src/db/db'
  import type { Character } from 'src/interfaces/character'
  import { onMount } from 'svelte'
  import CharacterListitem from './CharacterListitem.svelte'
  import ListSkeleton from './ListSkeleton.svelte'

  let loading = true
  let characters: Character[] | []
  let modalVisible = false
  let deleteId = -1

  onMount(async () => {
    characters = await getCharacters()
    // console.log(characters)
    loading = false
  })

  const deleteCharacter = async () => {
    console.log('delete THIS', deleteId)
    await deleteCharacterDB(deleteId)
    characters = await getCharacters()
    hideModal()
  }

  const hideModal = () => {
    modalVisible = false
    deleteId = -1
  }

  const showModal = (id: number) => {
    modalVisible = true
    deleteId = id
  }

  const listHandler = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement
    // console.log(target.id)
    if (target.id.includes('delete')) showModal(parseInt(target.id.split('-')[1]))
  }
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto w-8/12">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3"> Character name </th>
        <!-- <th scope="col" class="px-6 py-3"> maybe something </th> -->
        <th scope="col" class="px-6 py-3"> Marvel wiki link </th>
        <th scope="col" class="px-6 py-3"> Marvel API </th>
        <th scope="col" class="px-6 py-3"> Action </th>
      </tr>
    </thead>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <tbody on:click={listHandler}>
      {#if loading}
        <ListSkeleton />
        <ListSkeleton />
        <ListSkeleton />
        <ListSkeleton />
        <ListSkeleton />
      {:else}
        {#each characters as character}
          <CharacterListitem {character} />
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<ConfirmModal
  visible={modalVisible}
  confirmCallback={deleteCharacter}
  declineCallback={hideModal}
/>
