<script lang="ts">
  import Card from '../components/Card.svelte'

  const characterCard = {
    image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
    name: 'Spider-Man',
    details: 'cool guy'
  }
  const characterCards = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
      name: 'Spider-Man',
      details: 'cool guy'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
      name: 'Spider-Man2',
      details: 'cool guy'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
      name: 'Spider-Man3',
      details: 'cool guy'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
      name: 'Spider-Man4',
      details: 'cool guy'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
      name: 'Spider-Man5',
      details: 'cool guy'
    }
  ]
</script>

<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- <Card card={characterCard} /> -->
{#each characterCards as characterCard}
  <Card card={characterCard} />
{/each}
