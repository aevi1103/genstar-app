<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Provider } from "@supabase/supabase-js";
  import type { PageData, SubmitFunction } from "./$types";

  export let form;
  export let data: PageData;

  const signInWithProvider = async (provider: Provider) => {
    const { data: sbData, error } = await data.supabase.auth.signInWithOAuth({
      provider: provider,
    });
  };

  const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
    console.log("submitSocialLogin", action.searchParams.get("provider"));

    switch (action.searchParams.get("provider")) {
      case "google":
        await signInWithProvider("google");
        break;
      case "discord":
        await signInWithProvider("discord");
        break;
      case "github":
        await signInWithProvider("github");
        break;
      default:
        break;
    }
    cancel();
  };
</script>

<div class="flex justify-center">
  <div class="card w-96 bg-base-100 border mt-4 shadow-md">
    <div class="card-body">
      <h2 class="card-title">Login</h2>

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

      <form action="?/login" method="POST" use:enhance>
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
        <label class="cursor-pointer label">
          <span class="label-text-alt">Remember me</span>
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-mark"></span>
        </label>
        <div class="form-control mt-6">
          <input type="submit" value="Login" class="btn btn-primary" />
        </div>
      </form>

      <form method="POST" use:enhance={submitSocialLogin}>
        <button
          formaction="?/login&provider=google"
          class="btn btn-sm btn-neutral btn-outline"
        >
          Google
        </button>
      </form>

      <div>
        <a href="/register" class="link link-primary">
          Don't have an account? Register here.
        </a>
      </div>
    </div>
  </div>
</div>
