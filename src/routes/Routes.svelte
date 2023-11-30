<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  function onClick(event: Event) {}
</script>

<li><a href="/">home</a></li>
<li><a href="/services">services</a></li>
<li><a href="/about">about</a></li>
<li><a href="/contact">contact</a></li>

{#if data.isAdmin}
  <li>
    <details>
      <summary>Admin</summary>
      <ul class="p-2">
        <li><a>Submenu1</a></li>
        <li><a>Submenu2</a></li>
      </ul>
    </details>
  </li>
{/if}

{#if data.session}
  <li on:click|preventDefault={onClick}>
    <form action="/logout" method="POST" class="formn-control">
      <button type="submit">logout</button>
    </form>
  </li>
{:else}
  <li on:click|preventDefault={onClick}><a href="/login">login</a></li>
  <li on:click|preventDefault={onClick}><a href="/register">register</a></li>
{/if}
