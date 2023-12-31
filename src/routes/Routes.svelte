<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<li><a href="/">home</a></li>
<li><a href="/#services">services</a></li>
<li><a href="/#about">about</a></li>
<li><a href="/#contact">contact</a></li>

{#if data.isAdmin}
  <li><a href="/admin/employee">profiles</a></li>
  <li><a href="/admin/payroll">payroll</a></li>
{/if}
