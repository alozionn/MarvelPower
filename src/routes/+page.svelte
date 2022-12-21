<script>
  import CardList from 'src/components/CardList.svelte'
</script>

<div>
  <CardList />
</div>

<!-- 
  checkout for archive and wiki api
        -> https://archive.org/details/wiki-marvelfandomcom 
        -> https://marvel.fandom.com/api.php
-->

<!-- 
  // maybe useful for file upload
  
   * // added this interface
  interface FormEventHandler<T> {
      target: EventTarget | null;
  }
  
  // then in the function
  const onChangeFile = async (event: FormEventHandler<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      // your code
  }
 -->
