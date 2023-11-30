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
    class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
  >
    {#if data.session}
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

  <div class="dropdown" tabindex="0" role="button">
    <div role="button" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img
          alt="Avatar"
          src={"https://avatars.dicebear.com/v2/female/e151626fb01e041d98dda6bc2a1d1fe3.svg"}
        />
      </div>
    </div>
    <ul
      class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      {#if data.session}
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
  </div>

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
