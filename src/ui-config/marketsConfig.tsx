import { ChainId } from '@aave/contract-helpers';
import { ReactNode } from 'react';
import { PermissionView } from 'src/components/transactions/FlowCommons/PermissionView';

export type MarketDataType = {
  v3?: boolean;
  marketTitle: string;
  // the network the market operates on
  chainId: ChainId;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
  };
  cachingServerUrl?: string;
  cachingWSServerUrl?: string;
  rpcOnly?: boolean;
  isFork?: boolean;
  permissionComponent?: ReactNode;
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    WALLET_BALANCE_PROVIDER: string;
    L2_ENCODER?: string;
    UI_POOL_DATA_PROVIDER: string;
    UI_INCENTIVE_DATA_PROVIDER?: string;
    COLLECTOR?: string;
  };
  /**
   * https://www.hal.xyz/ has integrated aave for healtfactor warning notification
   * the integration doesn't follow aave market naming & only supports a subset of markets.
   * When a halIntegration is specified a link to hal will be displayed on the ui.
   */
  halIntegration?: {
    URL: string;
    marketName: string;
  };
};

export enum CustomMarket {
  // v2
  proto_mainnet = 'proto_mainnet',
  proto_polygon = 'proto_polygon',
  proto_mumbai = 'proto_mumbai',
  proto_goerli = 'proto_goerli',
  // external
  // permissioned_market = 'permissioned_market',
}

export const marketsData: {
  [key in keyof typeof CustomMarket]: MarketDataType;
} = {
  [CustomMarket.proto_mainnet]: {
    marketTitle: 'Ethereum',
    chainId: ChainId.mainnet,
    enabledFeatures: {
      liquiditySwap: true,
      collateralRepay: true,
      incentives: true,
      permissions: true,
    },
    rpcOnly: true,
    permissionComponent: <PermissionView />,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5'.toLowerCase(),
      LENDING_POOL: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
      WETH_GATEWAY: '0xEFFC18fC3b7eb8E676dac549E0c693ad50D1Ce31',
      REPAY_WITH_COLLATERAL_ADAPTER: '0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6',
      SWAP_COLLATERAL_ADAPTER: '0x135896DE8421be2ec868E0b811006171D9df802A',
      WALLET_BALANCE_PROVIDER: '0x8E8dAd5409E0263a51C0aB5055dA66Be28cFF922',
      UI_POOL_DATA_PROVIDER: '0x30375522F67a6308630d49A694ca1491fA2D3BC6',
      UI_INCENTIVE_DATA_PROVIDER: '0xD01ab9a6577E1D84F142e44D49380e23A340387d',
      COLLECTOR: '0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c',
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aavev2',
    },
  },
  // [CustomMarket.permissioned_market]: {
  //   marketTitle: 'Ethereum Permissioned Market example',
  //   chainId: ChainId.mainnet,
  //   enabledFeatures: {
  //     // liquiditySwap: true,
  //     // collateralRepay: true,
  //     // incentives: true,
  //     permissions: true,
  //   },
  //   rpcOnly: true,
  //   permissionComponent: <PermissionView />,
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '<address here>'.toLowerCase(),
  //     LENDING_POOL: '<address here>',
  //     WETH_GATEWAY: '<address here>',
  //     // REPAY_WITH_COLLATERAL_ADAPTER: '<address here>',
  //     // SWAP_COLLATERAL_ADAPTER: '<address here>',
  //     WALLET_BALANCE_PROVIDER: '<address here>',
  //     UI_POOL_DATA_PROVIDER: '<address here>',
  //     // UI_INCENTIVE_DATA_PROVIDER: '<address here>',
  //     PERMISSION_MANAGER: '<address here>',
  //   },
  // },
  [CustomMarket.proto_polygon]: {
    marketTitle: 'Polygon',
    chainId: ChainId.polygon,
    enabledFeatures: {
      liquiditySwap: true,
      incentives: true,
      collateralRepay: true,
    },
    cachingServerUrl: 'https://cache-api-137.aave.com/graphql',
    cachingWSServerUrl: 'wss://cache-api-137.aave.com/graphql',
    permissionComponent: <PermissionView />,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xd05e3E715d945B59290df0ae8eF85c1BdB684744'.toLowerCase(),
      LENDING_POOL: '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf',
      WETH_GATEWAY: '0xAeBF56223F044a73A513FAD7E148A9075227eD9b',
      SWAP_COLLATERAL_ADAPTER: '0x35784a624D4FfBC3594f4d16fA3801FeF063241c',
      REPAY_WITH_COLLATERAL_ADAPTER: '0xE84cF064a0a65290Ae5673b500699f3753063936',
      WALLET_BALANCE_PROVIDER: '0x34aa032bC416Cf2CdC45c0C8f065b1F19463D43e',
      UI_POOL_DATA_PROVIDER: '0x0d24b23DBaB0dc1A6F58029bA94F94Ff0D5382c2',
      UI_INCENTIVE_DATA_PROVIDER: '0x645654D59A5226CBab969b1f5431aA47CBf64ab8',
      COLLECTOR: '0x7734280A4337F37Fbf4651073Db7c28C80B339e9',
    },
    halIntegration: {
      URL: 'https://app.hal.xyz/recipes/aave-track-your-health-factor',
      marketName: 'aavepolygon',
    },
  },
  [CustomMarket.proto_goerli]: {
    marketTitle: 'Ethereum Görli',
    chainId: ChainId.goerli,
    enabledFeatures: {
      // liquiditySwap: true,
      // collateralRepay: true,
      // incentives: true,
      permissions: true,
    },
    rpcOnly: true,
    permissionComponent: <PermissionView />,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0xBBBcd3ba3c59137978ff5525C0441b7F1Cb7ca5d'.toLowerCase(),
      LENDING_POOL: '0x228d65503187621807517EaC8ed6FCF88aBb2998',
      WETH_GATEWAY: '0xa9F9E6cdFF773aCfB785492bb0622b839212c027',
      // REPAY_WITH_COLLATERAL_ADAPTER: '<address here>',
      // SWAP_COLLATERAL_ADAPTER: '<address here>',
      WALLET_BALANCE_PROVIDER: '0x0e7782469dA4B308b7D5770F14C07ee6c71536e9',
      UI_POOL_DATA_PROVIDER: '0xcCb7a1B6B5D72c4AA633B114537cD20612fDccbB',
      // UI_INCENTIVE_DATA_PROVIDER: '<address here>',
      PERMISSION_MANAGER: '0xb5d302888759648734CADBCa7cC39Ef2B3DFFb0e',
      FAUCET: '0x681860075529352da2C94082Eb66c59dF958e89C',
    },
  },
  [CustomMarket.proto_mumbai]: {
    marketTitle: 'Polygon Mumbai',
    chainId: ChainId.mumbai,
    enabledFeatures: {
      // liquiditySwap: true,
      // collateralRepay: true,
      // incentives: true,
      permissions: true,
    },
    rpcOnly: true,
    permissionComponent: <PermissionView />,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x2D9939cCCf6bB4B9EF2487DDB6Ae291829b7a163'.toLowerCase(),
      LENDING_POOL: '0xafdB5b478c216132441F034759c1e6a21C91Dc64',
      WETH_GATEWAY: '0x5A7a7C95139F1993b83B9Da30A41415c772b6A0d',
      // REPAY_WITH_COLLATERAL_ADAPTER: '<address here>',
      // SWAP_COLLATERAL_ADAPTER: '<address here>',
      WALLET_BALANCE_PROVIDER: '0x323b8899B2Cb25389eBb0f466468D1F377439f53',
      UI_POOL_DATA_PROVIDER: '0x71ABaeBCA33Dac8CbF99790DF3c72b42908b8E43',
      // UI_INCENTIVE_DATA_PROVIDER: '<address here>',
      PERMISSION_MANAGER: '0x0e7782469dA4B308b7D5770F14C07ee6c71536e9',
    },
  },
} as const;
