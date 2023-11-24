<script>
  import { onMount } from "svelte";

  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);
</script>

<h1>Welcome to Genstar</h1>
