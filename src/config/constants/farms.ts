import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const TACO_BUSD_LP_MAINNET = `0x3BB3B98c0FABE30166E6B7D62aEef393249871E4`
const TACO_BNB_LP_MAINNET = `0x5590d45592C846DD820D360dd5Ba6b2610cDeeFB`
const TACO_MAINNET = `0x62B427DaA6DCe1bea02F74AE09f6b7e82Bd860e5`

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'BullChain-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x62B427DaA6DCe1bea02F74AE09f6b7e82Bd860e5',
    },
    tokenSymbol: '$TACO',
    tokenAddresses: {
      97: '',
      56: '0x62B427DaA6DCe1bea02F74AE09f6b7e82Bd860e5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: 'BullChain-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x62B427DaA6DCe1bea02F74AE09f6b7e82Bd860e5',
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
      56: TACO_BUSD_LP_MAINNET, // BullChain-BUSD LP
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
