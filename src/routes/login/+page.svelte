<div class="flex justify-center">
  <div class="card w-96 bg-base-100 border mt-4 shadow-md">
    <div class="card-body">
      <h2 class="card-title">Login</h2>

      <form action="?/login" method="POST">
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
    </div>
  </div>
</div>
