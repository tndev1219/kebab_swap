import contracts from './contracts'
import { FarmConfig, QuoteToken } from '../types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KEBAB',
    lpAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2'
    },
    tokenSymbol: 'KETCH',
    tokenAddresses: {
      97: '0xf369077bf442fc9dbfd0cc80159c3d507e359654',
      56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 15,
    lpSymbol: 'KEBAB-BTCB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0x45d8d5d9bd425efc26e3259848bcfefa16f927f0'
    },
    tokenSymbol: 'KEBAB',
    tokenAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2'
    },
    risk: 5,
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btcb,
    multiplier: '25X'
  },
  {
    pid: 1,
    lpSymbol: 'KEBAB-BUSD LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xd51bee2e0a3886289f6d229b6f30c0c2b34fc0ec'
    },
    tokenSymbol: 'KEBAB',
    tokenAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2'
    },
    risk: 5,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '20X'
  },
  {
    pid: 5,
    lpSymbol: 'KEBAB-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0x25fd42d82d5c238ee7aa277261aa6ca5bdfe5cd4'
    },
    tokenSymbol: 'KEBAB',
    tokenAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2'
    },
    risk: 5,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    multiplier: '12X'
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb'
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    risk: 4,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '5X'
  },
  {
    pid: 16,
    lpSymbol: 'ETH-BTCB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0x7380e10f5c5f9dff4857de3cf9c39bb16f4c6dcf'
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    risk: 2,
    quoteTokenSymbol: QuoteToken.BTCB,
    quoteTokenAdresses: contracts.btcb,
    multiplier: '3X'
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f'
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '3X',
    risk: 3
  },
  {
    pid: 13,
    lpSymbol: 'ETH-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494'
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '2X',
    risk: 4
  },
  {
    pid: 7,
    lpSymbol: 'DOT-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e'
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '2X',
    risk: 3
  },
  {
    pid: 11,
    lpSymbol: 'TWT-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x65f898950e1759d95b5aae15f452e37c5bbe641e'
    },
    tokenSymbol: 'TWT',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '2X',
    risk: 3
  },
  {
    pid: 14,
    lpSymbol: 'DOGE-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1efcb446bfa553a2eb2fff99c9f76962be6ecac3'
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 4
  },
  {
    pid: 10,
    lpSymbol: 'SXP-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x2f82286c2178e9144f2a7b8d27d5b3203253cba4'
    },
    tokenSymbol: 'SXP',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 4
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 4
  },
  {
    pid: 12,
    lpSymbol: 'BIFI-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xd3f004e303114423f122c78afded4acfe97675b1'
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 4
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x55d398326f99059ff775485246999027b3197955'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 1
  },
  {
    pid: 8,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc'
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 1
  },
  {
    pid: 9,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    multiplier: '1X',
    risk: 1
  }
  // {
  //   pid: 55,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
  //   },
  //   tokenSymbol: 'BTCST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 54,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 53,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 51,
  //   lpSymbol: 'BSCX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 50,
  //   lpSymbol: 'TEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
  //   },
  //   tokenSymbol: 'TEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 49,
  //   lpSymbol: 'bALBT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
  //   },
  //   tokenSymbol: 'bALBT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 46,
  //   lpSymbol: 'OG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
  //   },
  //   tokenSymbol: 'OG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 47,
  //   lpSymbol: 'ASR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6b900d5308356317299dafe303e661271aa12f1',
  //   },
  //   tokenSymbol: 'ASR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 48,
  //   lpSymbol: 'ATM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
  //   },
  //   tokenSymbol: 'ATM',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
  //   },
  //   tokenSymbol: 'REEF',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 44,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
  //   },
  //   tokenSymbol: 'DITTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 43,
  //   lpSymbol: 'JUV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
  //   },
  //   tokenSymbol: 'JUV',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 42,
  //   lpSymbol: 'PSG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
  //   },
  //   tokenSymbol: 'PSG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 39,
  //   lpSymbol: 'UNFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
  //   },
  //   tokenSymbol: 'UNFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xff17ff314925dff772b71abdff2782bc913b3575',
  //   },
  //   tokenSymbol: 'VAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 40,
  //   lpSymbol: 'BLK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
  //   },
  //   tokenSymbol: 'BLK',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 37,
  //   lpSymbol: 'HARD-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
  //   },
  //   tokenSymbol: 'HARD',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   tokenSymbol: 'ADA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
  //   },
  //   tokenSymbol: 'BAND',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   tokenSymbol: 'EOS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
  //   },
  //   tokenSymbol: 'LINK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   tokenSymbol: 'TWT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   tokenSymbol: 'XVS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 14,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
  //   },
  //   tokenSymbol: 'ALPHA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   tokenSymbol: 'XRP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ATOM-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
  //   },
  //   tokenSymbol: 'ATOM',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'YFII-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
  //   },
  //   tokenSymbol: 'YFII',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'DAI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0X',
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'XTZ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
  //   },
  //   tokenSymbol: 'XTZ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'BCH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x54edd846db17f43b6e43296134ecd96284671e81',
  //   },
  //   tokenSymbol: 'BCH',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0.5X',
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'YFI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
  //   },
  //   tokenSymbol: 'YFI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
  //   },
  //   tokenSymbol: 'UNI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '2X',
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
  //   },
  //   tokenSymbol: 'FIL',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
  //   },
  //   tokenSymbol: 'INJ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0X',
  // },
  // {
  //   pid: 30,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
  //   },
  //   tokenSymbol: 'SXP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 32,
  //   lpSymbol: 'CTK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7793870484647a7278907498ec504879d6971EAb',
  //   },
  //   tokenSymbol: 'CTK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'STAX-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
  //   },
  //   tokenSymbol: 'STAX',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   multiplier: '0.1X',
  //   isCommunity: true,
  // },
  // {
  //   pid: 35,
  //   lpSymbol: 'NAR-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
  //   },
  //   tokenSymbol: 'NAR',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   multiplier: '0.1X',
  //   isCommunity: true,
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'NYA-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2730bf486d658838464a4ef077880998d944252d',
  //   },
  //   tokenSymbol: 'NYA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   multiplier: '0.1X',
  //   isCommunity: true,
  // },
  // {
  //   pid: 38,
  //   lpSymbol: 'bROOBEE-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
  //   },
  //   tokenSymbol: 'bROOBEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   multiplier: '0.2X',
  //   isCommunity: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'BAKE-BNB Bakery LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0X',
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BURGER-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
  //   },
  //   tokenSymbol: 'BURGER',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0X',
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '0X',
  // },
]

export default farms
