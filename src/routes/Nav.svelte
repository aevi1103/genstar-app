<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import type { PageData } from "./$types";
  import { writable } from "svelte/store";

  export let data: PageData;

  const isLoading = writable(false);

  const submitLogout: SubmitFunction = async ({ cancel }) => {
    isLoading.set(true);

    const { error } = await data.supabase.auth.signOut();

    isLoading.set(false);

    if (error) {
      console.log(error);
    }
    cancel();
  };
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">GENSTAR</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#if data.session}
        <li>
          <form
            action="/logout"
            method="POST"
            use:enhance={submitLogout}
            class="formn-control"
          >
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
