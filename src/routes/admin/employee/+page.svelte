<script lang="ts">
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";

  export let data;
  let { profiles } = data;
  $: ({ profiles } = data);

  console.log(profiles);

  let gridContainer: any;

  const gridOptions = {
    // Row Data: The data to be displayed.
    rowData: profiles,
    // Column Definitions: Defines & controls grid columns.
    columnDefs: [
      { field: "fname" },
      { field: "lname" },
      { field: "location" },
      { field: "date" },
      { field: "price" },
      { field: "successful" },
      { field: "rocket" },
    ],

    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
    },
  };

  onMount(() => {
    const gridApi = agGrid.createGrid(gridContainer, gridOptions);
  });
</script>

<svelte:head>
  <title>Employee</title>
</svelte:head>

<div class="drawer drawer-end">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl mb-4">Add Profile</h1>

      <label for="my-drawer" class="btn btn-primary drawer-button mb-3"
        >Add</label
      >
    </div>

    <div
      id="datagrid"
      class="ag-theme-quartz"
      style="height: 100vh"
      bind:this={gridContainer}
    />
  </div>

  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
    ></label>

    <div class="p-4 w-80 min-h-full bg-base-200">
      <h1 class="text-2xl mb-4">Add Profile</h1>

      <form method="POST" use:enhance>
        <div class="form-control">
          <label class="label" for="fname-input">
            <span class="fname-text">First Name</span>
          </label>
          <input
            name="fname"
            id="fname-input"
            placeholder="first name"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label" for="lname-input">
            <span class="lname-text">Last Name</span>
          </label>
          <input
            name="lname"
            id="lname-input"
            placeholder="last name"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label" for="rate-input">
            <span class="rate-text">Hourly Rate</span>
          </label>
          <input
            type="number"
            name="rate"
            id="rate-input"
            placeholder="hourly rate"
            class="input input-bordered"
            required
          />
        </div>

        <div class="form-control">
          <label class="label" for="phone-input">
            <span class="phone-text">Phone</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone-input"
            placeholder="phone"
            class="input input-bordered"
          />
        </div>

        <div class="form-control">
          <label class="label" for="email-input">
            <span class="email-text">Email</span>
          </label>
          <!-- <input
            type="email"
            name="email"
            id="email-input"
            placeholder="email"
            class="input input-bordered"
            required
          /> -->

          <select
            class="select select-bordered w-full max-w-xs"
            name="email"
            placeholder="email"
          >
            <option disabled selected>Select registered user</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <div class="form-control mt-6">
          <input type="submit" value="Submit" class="btn btn-primary" />
        </div>
      </form>
    </div>
  </div>
</div>
