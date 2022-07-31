import { useContract } from "../hooks/async/contracts";
import React, { useCallback } from "react";

export interface Web3ButtonType {
  buttonText: string;
  contractAddress: string;
  funcName: string;
  args: any[];
}

/**
 * @param Web3ButtonType - buttonText, contractAddress, funcName, args
 * @returns button that calls smart contract function
 *
 * @example
 * Usage with a contract:
 * ```jsx
 * <Web3Button contractAddress="0x..." funcName="foo" args={[1, 2, 3]} />
 * ```
 */
export const Web3Button: React.FC<Web3ButtonType> = ({
  buttonText,
  contractAddress,
  funcName,
  args,
}) => {
  const { contract } = useContract(contractAddress);

  const buttonClick = useCallback(() => {
    if (contract) {
      contract.call(funcName, ...args).then(console.log);
    }
  }, [contract]);

  return <button onClick={buttonClick}>{buttonText}</button>;
};
