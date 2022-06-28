import { RequiredParam } from "../../types/types";
import { useBuiltinContract } from "./useBuiltinContract";
import type { ChainIdOrName, Multiwrap } from "@thirdweb-dev/sdk/dist/browser";

/**
 * Hook for getting an instance of an `Multiwrap` contract. This contract is an ERC721 in which you can wrap ERC721, ERC1155 and ERC20 tokens.
 * @param contractAddress - the address of the Multiwrap contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useMultiwrap } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const multiwrap = useMultiwrap("<YOUR-CONTRACT-ADDRESS>")
 *
 *   // Now you can use the multiwrap contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet wrap tokens
 *   async function wrap(tokensToWrap, wrappedNFTMetadata) {
 *     await multiwrap.wrap(tokensToWrap, wrappedNFTMetadata)
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 */
export function useMultiwrap(
  contractAddress: RequiredParam<string>,
  chain?: ChainIdOrName,
): Multiwrap | undefined {
  return useBuiltinContract("multiwrap", contractAddress, chain).data;
}
