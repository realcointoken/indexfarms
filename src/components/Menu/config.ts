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
        href: 'https://dex.bullchainai.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.bullchainai.com/#/pool',
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
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // bullchain-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Website',
        href: 'https://bullchainai.com/',
      },
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://bullchain.gitbook.io/bullchain/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@bullchain',
      },
    ],
  },
  {
    label: 'Website',
    icon: 'AuditIcon',
    href: 'https://bullchainai.com',
  },
]

export default config
