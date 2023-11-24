<script lang="ts">
  import "../app.css";
  import Nav from "./Nav.svelte";

  import { invalidateAll } from "$app/navigation";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidateAll();
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<Nav {data} />

<main>
  <slot />
</main>
