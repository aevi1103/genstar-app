import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "../$types";

export const load: LayoutServerLoad = async ({
  locals: { getSession, supabase },
}) => {
  const session = await getSession();

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

  const { isAdmin } = await getUserRoles();

  console.log("isAdmin layout server", isAdmin);

  if (!isAdmin) {
    throw redirect(307, "/");
  }

  return {
    session,
  };
};
