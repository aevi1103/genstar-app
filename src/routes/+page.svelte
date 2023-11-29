<script>
  import { onMount } from "svelte";

  export let data;
  let { supabase, session, roles, isAdmin, isUser } = data;
  $: ({ supabase, session, roles, isAdmin, isUser } = data);

  console.log({ session, roles });
</script>

<div class="container p-2">
  {#if session}
    <h1>Welcome {session.user.email}</h1>
    <p>Roles: {roles?.join(", ")}</p>
  {:else}
    <h1>Welcome to Genstar</h1>
  {/if}
</div>
