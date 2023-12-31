import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals, request }) => {
  const payload = await request.json();
  // console.log({ payload });

  const { hourly_rate } = payload;
  const isNumeric = (value: string | number): boolean => {
    return /^-?\d+$/.test(value.toString());
  };

  if (!isNumeric(hourly_rate)) {
    return new Response(
      JSON.stringify({
        mesage: "hourly_rate must be a number",
      }),
      {
        headers: {
          "content-type": "application/json",
        },
        status: 500,
      }
    );
  }

  const { data, error } = await locals.supabase
    .from("profiles")
    .update(payload)
    .eq("id", payload.id)
    .select();

  console.log({ payload, data, error });

  if (error) {
    return new Response(
      JSON.stringify({
        mesage: error.message,
      }),
      {
        headers: {
          "content-type": "application/json",
        },
        status: 500,
      }
    );
  }

  return new Response(
    JSON.stringify({
      mesage: "success",
      data,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    }
  );
};
