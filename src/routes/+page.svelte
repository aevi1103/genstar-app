<script>
  export let data;
  let { supabase, session } = data;
  $: ({ supabase, session } = data);
</script>

<div class="container p-2">
  {#if session}
    <h1>Welcome {session.user.email}</h1>
  {:else}
    <h1>Welcome to Genstar</h1>
  {/if}

  <ul
    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
  >
    {#if session}
      <li>
        <form action="/logout" method="POST" class="formn-control">
          <button type="submit">logout</button>
        </form>
      </li>
    {:else}
      <li><a href="/login">login</a></li>
      <li><a href="/register">register</a></li>
    {/if}
  </ul>

  <br />
  {#if session}
    <form action="/logout" method="POST" class="formn-control">
      <button type="submit">logout</button>
    </form>
  {:else}
    <a href="/login">login</a>
    <a href="/register">register</a>
  {/if}
</div>
