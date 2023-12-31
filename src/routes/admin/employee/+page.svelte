<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let data;
  let { profiles, supabase } = data;
  $: ({ profiles, supabase } = data);

  // import Toast from "$components/Toast.svelte";
  let showToast = false;
  let toastMessage = "";
  let toastType = "success" as "success" | "error";

  function triggerToast(
    message: string,
    type: "success" | "error" = "success"
  ) {
    showToast = true;
    toastMessage = message;
    toastType = type;
    // Reset after the duration
    setTimeout(() => {
      showToast = false;
      toastMessage = "";
    }, 3000);
  }

  async function updateProfile(payload: any) {
    const response = await fetch("/admin/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Server response:", result);
      triggerToast("Profile updated successfully", "success");
    } else {
      const result = await response.json();
      console.log("Server response:", result);
      triggerToast("Something went wrong!", "error");
    }
  }

  let gridContainer: any;

  const gridOptions = {
    rowData: profiles,
    columnDefs: [
      { field: "email", editable: false },
      { field: "first_name" },
      { field: "last_name" },
      { field: "address" },
      {
        field: "hourly_rate",
        headerName: "Hourly Rate",
        // cellEditor: DoublingEditor,
        editable: true,
      },
      { field: "phone" },
      {
        field: "created_at",
        headerName: "Created At",
        editable: false,
        valueFormatter: (params: any) =>
          new Date(params.value).toLocaleString(),
      },
      {
        field: "updated_at",
        headerName: "Updated At",
        editable: false,
        valueFormatter: (params: any) =>
          new Date(params.value).toLocaleString(),
      },
    ],
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    onCellValueChanged: function (event: any) {
      console.log("Cell value changed", event);
      updateProfile(event.data);
      // Add your logic here
    },
  };

  onMount(() => {
    const gridApi = agGrid.createGrid(gridContainer, gridOptions);
  });
</script>

<svelte:head>
  <title>Profiles</title>
</svelte:head>

<div>
  <h1 class="text-2xl mb-4">Profiles</h1>
  <div
    id="datagrid"
    class="ag-theme-quartz"
    style="height: 100vh"
    bind:this={gridContainer}
  />
</div>

{#if showToast}
  <div
    class="toast toast-top toast-center"
    transition:fly={{ y: 200, duration: 300 }}
  >
    <div role="alert" class={`alert alert-${toastType}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span>{toastMessage}</span>
    </div>
  </div>
{/if}
