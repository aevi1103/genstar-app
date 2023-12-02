import { fail } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
  const data = await supabase.from("profiles").select("*");

  if (data.error) {
    console.error(data.error);
    return fail(500, {
      error: data.error.message,
    });
  }

  console.log(data);

  return {
    profiles: data.data,
  };
};
