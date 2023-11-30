<script lang="ts">
  import type { PageData } from "./$types";
  import Routes from "./Routes.svelte";
  export let data: PageData;

  let { isAdmin, session } = data;
  $: ({ isAdmin, session } = data);

  let defaultAvatar =
    "https://avatars.dicebear.com/v2/female/e151626fb01e041d98dda6bc2a1d1fe3.svg";

  let avatar = session?.user?.user_metadata?.avatar_url || defaultAvatar;

  $: avatarUrl = avatar || defaultAvatar;
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <Routes {isAdmin} />
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">GENSTAR</a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <Routes {isAdmin} />
    </ul>
  </div>

  <div class="navbar-end">
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Avatar" src={avatarUrl} />
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
    </div>
  </div>
</div>
