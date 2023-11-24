<div class="flex justify-center">
  <div class="card w-96 bg-base-100 border mt-4 shadow-md">
    <div class="card-body">
      <h2 class="card-title">Register</h2>

      <form action="?/register" method="POST">
        <div class="form-control">
          <!-- <label class="label" for="fname-input">
            <span class="label-text">First Name</span>
          </label>
          <input
            type="text"
            id="fname-input"
            placeholder="first name"
            class="input input-bordered"
          />
        </div>

        <div class="form-control">
          <label class="label" for="lname-input">
            <span class="label-text">Last Name</span>
          </label>
          <input
            type="text"
            id="lname-input"
            placeholder="last name"
            class="input input-bordered"
          />
        </div> -->

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
