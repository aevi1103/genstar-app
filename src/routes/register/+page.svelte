<script>
  import { enhance } from "$app/forms";
  export let form;
</script>

<div class="flex justify-center">
  <div class="card w-96 bg-base-100 border mt-4 shadow-md">
    <div class="card-body">
      <h2 class="card-title">Register</h2>

      {#if form?.error}
        <div role="alert" class="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>Error! {form.error}</span>
        </div>
      {/if}

      <form action="?/register" method="POST" use:enhance>
        <div class="form-control">
          <div class="form-control">
            <label class="label" for="email-input">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label" for="password-input">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password-input"
              placeholder="password"
              class="input input-bordered"
            />
          </div>

          <div class="form-control mt-6">
            <input type="submit" value="Register" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
