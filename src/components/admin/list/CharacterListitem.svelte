<script lang="ts">
  import type { Character } from 'src/interfaces/character'
  import { ADMIN_ROUTES, BASE_ROUTES } from 'src/utils/constants/routes'

  export let character: Character
</script>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    {character.name}
  </th>
  <td class="px-6 py-4"> {character.marvel_wiki} </td>
  <td class="px-6 py-4"> {character.marvel_api} </td>
  <!-- <td class="px-6 py-4"> {character} </td> -->
  <td class="px-6 py-4 flex space-x-8">
    <a
      href={`${BASE_ROUTES.ADMIN}${ADMIN_ROUTES.CHARACTERS.EDIT}${character.id}`}
      class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
    >
    <button
      id={`delete-${character.id}`}
      class="px-2 font-medium text-red-600 dark:text-red-500 bg-red-200 rounded-full">Delete</button
    >
  </td>
</tr>
