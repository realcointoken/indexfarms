import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const TACO_BUSD_LP_MAINNET = `0xC435EAe9b9283c6dB65186E84422229c89298E29`
const TACO_BNB_LP_MAINNET = `0x5EFCf22021D0F4Ac2147C2879376500B5f94772E`
const TACO_MAINNET = `0xe89d402e8588b73dd1676a49f86f6c749f25442b`

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'BULLCHAIN-BUSD',
    lpAddresses: {
      97: '',
      56: '0xe89d402e8588b73dd1676a49f86f6c749f25442b',
    },
    tokenSymbol: 'BULLCHAIN',
    tokenAddresses: {
      97: '',
      56: '0xe89d402e8588b73dd1676a49f86f6c749f25442b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    risk: 5,
    lpSymbol: 'BULLCHAIN-BNB',
    lpAddresses: {
      97: '',
      56: '0xe89d402e8588b73dd1676a49f86f6c749f25442b',
    },
    tokenSymbol: 'BULLCHAIN',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
].map((farm, index) => ({ ...farm, pid: index }))

export default farms
