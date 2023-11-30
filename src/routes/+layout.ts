import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import type { LayoutLoad } from "./$types";
import {
  combineChunks,
  createBrowserClient,
  isBrowser,
  parse,
} from "@supabase/ssr";

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends("supabase:auth");

  const supabase = createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        fetch,
      },
      cookies: {
        get(key) {
          if (!isBrowser()) {
            return JSON.stringify(data.session);
          }

          const cookie = combineChunks(key, (name) => {
            const cookies = parse(document.cookie);
            return cookies[name];
          });
          return cookie;
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const getUserRoles = async () => {
    const userId = session?.user.id;
    let isAdmin: boolean = false;
    let isUser: boolean = false;

    try {
      const userRoles = !userId
        ? null
        : await supabase
            .from("user_roles")
            .select("*, role: roles ( * )")
            .eq("user_id", userId);

      const roles = userRoles?.data?.map(
        (userRole) => userRole.role.role as string
      );
      isAdmin = roles?.includes("admin") ?? false;
      isUser = roles?.includes("user") ?? false;
    } catch (error) {}

    return { roles: [], isAdmin, isUser };
  };

  const { roles, isAdmin, isUser } = await getUserRoles();

  return { supabase, session, roles, isAdmin, isUser };
};
