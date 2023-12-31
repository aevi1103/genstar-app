<!-- Toast.svelte -->
<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let message = "";
  export let duration = 3000;

  // Function to close the toast after a duration
  function closeToast() {
    setTimeout(() => {
      // Logic to hide or remove the toast
    }, duration);
  }

  // Call the close function on component mount
  onMount(closeToast);
</script>

<div transition:fly={{ y: 200, duration: 300 }}>
  {message}
</div>
