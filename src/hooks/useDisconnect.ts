// import { GnosisSafeConnector } from "../connectors/gnosis-safe";
import { useConnect } from "./useConnect";
import { useDisconnect as useWagmiDisconnect } from "wagmi";

/**
 * Hook for disconnecting the currently connected wallet
 *
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * The following will enable users to disconnect their wallet from the page.
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const disconnect = useDisconnect()
 *
 *   return (
 *     <button onClick={disconnect}>
 *       Disconnect
 *     </button>
 *   )
 * }
 * ```
 *
 * Once users disconnect their wallet, the `useAddress`, `useChainId`, `useAccount`, and `useNetwork` hooks will no longer return values until a user connects their wallet again.
 *
 * @public
 */
export function useDisconnect(options?: { reconnectAfterGnosis?: boolean }) {
  const optsWithDefaults = { ...{ reconnectAfterGnosis: true }, ...options };
  const { connectAsync } = useConnect();
  // const { data } = useAccount();
  const { disconnectAsync } = useWagmiDisconnect();

  return async () => {
    const previousConnector = undefined;

    // if it's gnosis, just connect the previous connector
    if (optsWithDefaults.reconnectAfterGnosis && previousConnector) {
      try {
        return await connectAsync(previousConnector);
      } catch (err) {
        console.error("failed to re-connect to previous connector", err);
        // if it fails for whatever reason just disconnect
        return await disconnectAsync();
      }
    }

    return await disconnectAsync();
  };
}
