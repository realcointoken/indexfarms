import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const TACO_BUSD_LP_MAINNET = `0x3e65443Ee737Ca8e166FeB05428d6D9795B5Dff4`
const TACO_BNB_LP_MAINNET = `0x3e65443Ee737Ca8e166FeB05428d6D9795B5Dff4`
const TACO_MAINNET = `0xd5d111b9e1e3daf2a8c16cc005988e93c437e242`

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'BullChain-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3e65443Ee737Ca8e166FeB05428d6D9795B5Dff4',
    },
    tokenSymbol: '$TACO',
    tokenAddresses: {
      97: '',
      56: '0xd5d111b9e1e3daf2a8c16cc005988e93c437e242',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: 'BullChain-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3e65443Ee737Ca8e166FeB05428d6D9795B5Dff4',
    },
    tokenSymbol: '$TACO',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BullChain',
    lpAddresses: {
      97: '',
      56: TACO_BNB_LP_MAINNET, // BullChain-BNB LP
    },
    tokenSymbol: 'BullChain',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
].map((farm, index) => ({ ...farm, pid: index }))

export default farms
