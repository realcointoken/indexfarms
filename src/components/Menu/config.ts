import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://swap.indexsale.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.indexsale.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pool',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/indexsale',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/indexsale',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // CriptoFan-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://indexsale.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/indexsale/',
      },
      {
        label: 'Docs',
        href: 'https://idsdefi.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
    ],
  },
  {
    label: 'Website',
    icon: 'AuditIcon',
    href: 'https://indexsale.finance/',
  },
]

export default config
