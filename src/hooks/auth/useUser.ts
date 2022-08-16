import { useThirdwebConfigContext } from "../../contexts/thirdweb-config";
import { cacheKeys } from "../../utils/cache-keys";
import { useQuery } from "@tanstack/react-query";
import invariant from "tiny-invariant";

interface ThirdwebAuthUser {
  address: string;
}

/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @public
 */
export function useUser() {
  const { authConfig } = useThirdwebConfigContext();

  const { data: user, isLoading } = useQuery(
    cacheKeys.auth.user(),
    async () => {
      invariant(
        authConfig,
        "Please specify an authConfig in the ThirdwebProvider",
      );
      const res = await fetch(`${authConfig.authUrl}/user`);
      return (await res.json()) as ThirdwebAuthUser;
    },
  );

  return { user, isLoading };
}
