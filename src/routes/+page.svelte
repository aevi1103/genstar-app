<script>
  export let data;
  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  $: console.log({ supabase, session });
</script>

<div class="container p-2">
  {#if session}
    <h1>Welcome {session.user.email}</h1>
  {:else}
    <h1>Welcome to Genstar</h1>
  {/if}
</div>
