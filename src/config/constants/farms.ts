import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const TACO_BUSD_LP_MAINNET = `0x3BB3B98c0FABE30166E6B7D62aEef393249871E4`
const TACO_BNB_LP_MAINNET = `0x5590d45592C846DD820D360dd5Ba6b2610cDeeFB`
const TACO_MAINNET = `0x841E83120462945F32a6687AD28a5E7Bee023169`

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'BullChainAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x841E83120462945F32a6687AD28a5E7Bee023169',
    },
    tokenSymbol: '$TACO',
    tokenAddresses: {
      97: '',
      56: '0x841E83120462945F32a6687AD28a5E7Bee023169',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: 'BullChainAI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x841E83120462945F32a6687AD28a5E7Bee023169',
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
    lpSymbol: '$CFT',
    lpAddresses: {
      97: '',
      56: TACO_BUSD_LP_MAINNET, // BullChainAI-BUSD LP
    },
    tokenSymbol: 'BullChainAI',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    lpSymbol: 'BullChain-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x841E83120462945F32a6687AD28a5E7Bee023169', // LINA-BUSD LP
    },
    tokenSymbol: 'TACO',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    risk: 3,
    lpSymbol: 'BullChain-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x841E83120462945F32a6687AD28a5E7Bee023169', // LINA-BUSD LP
    },
    tokenSymbol: 'TACO',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
].map((farm, index) => ({ ...farm, pid: index }))

export default farms
