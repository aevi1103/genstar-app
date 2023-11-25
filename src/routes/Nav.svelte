<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">GENSTAR</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
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
