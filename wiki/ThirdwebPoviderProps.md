# Interface: ThirdwebPoviderProps

## Table of contents

### Properties

- [advanced](../wiki/ThirdwebPoviderProps#advanced)
- [dAppName](../wiki/ThirdwebPoviderProps#dappname)
- [desiredChainId](../wiki/ThirdwebPoviderProps#desiredchainid)
- [sdkOptions](../wiki/ThirdwebPoviderProps#sdkoptions)

## Properties

### advanced

• `Optional` **advanced**: `Object`

Advanced options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `persistClientOptions?` | `PersistQueryClientOptions` | The persistency options for the query client.  **`see`** [PersistQueryClientOptions](https://react-query.tanstack.com/plugins/persistQueryClient#options) |
| `queryClient?` | `QueryClient` | The query client to use with react-query.  **`see`** [QueryClient](https://react-query.tanstack.com/reference/QueryClient) |
| `rpcUrlMap?` | { `[chainId: number]`: `string`;  } | Custom RPC URLs to use for different chains. |
| `supportedChains?` | `Chain`[] | The supported chains that a user can connect to.  **`see`** [Chains](https://wagmi-xyz.vercel.app/docs/connectors/injected#chains-optional) |
| `wagmiOptions?` | `Partial`<`Props`\> | The options for the underlying wagmi provider.  **`see`** [WagmiproviderProps](https://wagmi-xyz.vercel.app/docs/provider#configuration) |

#### Defined in

[src/Provider.tsx:60](https://github.com/thirdweb-dev/react/blob/6e1d595/src/Provider.tsx#L60)

___

### dAppName

• **dAppName**: `string`

The name of your dApp. This will show up in the wallet connect / wallet link flow.

#### Defined in

[src/Provider.tsx:49](https://github.com/thirdweb-dev/react/blob/6e1d595/src/Provider.tsx#L49)

___

### desiredChainId

• **desiredChainId**: `number`

The chain id / network you want the client to connect to

#### Defined in

[src/Provider.tsx:45](https://github.com/thirdweb-dev/react/blob/6e1d595/src/Provider.tsx#L45)

___

### sdkOptions

• `Optional` **sdkOptions**: `Object`

The Thirdweb SDK options.

**`see`** [SDKOptions](https://github.com/thirdweb-dev/typescript-sdk/blob/v2/docs/sdk.sdkoptions.md)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gasSettings?` | { `maxPriceInGwei?`: `number` ; `speed?`: ``"safeLow"`` \| ``"standard"`` \| ``"fast"`` \| ``"fastest"``  } |
| `gasSettings.maxPriceInGwei?` | `number` |
| `gasSettings.speed?` | ``"safeLow"`` \| ``"standard"`` \| ``"fast"`` \| ``"fastest"`` |
| `gasless?` | { `openzeppelin`: { `relayerForwarderAddress?`: `string` ; `relayerUrl`: `string`  }  } \| { `biconomy`: { `apiId`: `string` ; `apiKey`: `string` ; `deadlineSeconds?`: `number`  }  } |
| `readonlySettings?` | { `chainId?`: `number` ; `rpcUrl`: `string`  } |
| `readonlySettings.chainId?` | `number` |
| `readonlySettings.rpcUrl` | `string` |

#### Defined in

[src/Provider.tsx:55](https://github.com/thirdweb-dev/react/blob/6e1d595/src/Provider.tsx#L55)