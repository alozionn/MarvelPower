<script lang="ts">
  import { addCharacter, addCharacterPowerGrid } from 'src/db/db'
  import type { Character } from 'src/interfaces/character'
  import { addCharacterStore } from 'src/stores/admin/forms/add-character-store'
  import { notifications } from 'src/stores/core/notifications-store'
  import Toast from 'src/components/core/Toast.svelte'
  import PowerLevelRanges from './forms/PowerLevelRanges.svelte'

  let character: Character

  const unsubscribe = addCharacterStore.subscribe((value) => {
    character = value
  })

  const createCharacter = async () => {
    //TODO: Handle error states for each call
    // const characterId = await addCharacter(character)
    // if (characterId) await addCharacterPowerGrid(characterId, character.power_grid)
    // notifications.success('Character Added', 3000)
    console.log(character)
  }
</script>

<Toast />
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new character</h2>
    <form action="#" on:submit={createCharacter}>
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Character Name</label
          >
          <input
            bind:value={character.name}
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type product name"
          />
        </div>
        <div class="w-full">
          <label for="wiki_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Wiki URL</label
          >
          <input
            bind:value={character.marvel_wiki}
            type="text"
            name="wiki_url"
            id="wiki_url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="wiki api url"
          />
        </div>
        <div class="w-full">
          <label
            for="marvel_api"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Marvel API URL</label
          >
          <input
            bind:value={character.marvel_api}
            type="text"
            name="marvel_api"
            id="marvel_api"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="marvel api url"
          />
        </div>
        <div class="sm:col-span-2">
          <PowerLevelRanges powerGrid={character.power_grid} />
        </div>
      </div>
      <button
        type="submit"
        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary"
      >
        Add Character
      </button>
    </form>
  </div>
</section>
