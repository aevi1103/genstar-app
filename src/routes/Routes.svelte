<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
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
