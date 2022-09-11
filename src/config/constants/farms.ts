import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const TACO_BUSD_LP_MAINNET = `0xC435EAe9b9283c6dB65186E84422229c89298E29`
const TACO_BNB_LP_MAINNET = `0x5EFCf22021D0F4Ac2147C2879376500B5f94772E`
const TACO_MAINNET = `0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD`

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: '$IDXS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD',
    },
    tokenSymbol: 'IDXS',
    tokenAddresses: {
      97: '',
      56: '0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: '$IDXS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD',
    },
    tokenSymbol: '$IDXS',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    isTokenOnly: true,
    lpSymbol: '$IDXS',
    lpAddresses: {
      97: '',
      56: TACO_BUSD_LP_MAINNET, // $IDXS-BUSD LP
    },
    tokenSymbol: '$IDXS',
    tokenAddresses: {
      97: '',
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: TACO_BUSD_LP_MAINNET, // TACO-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    lpSymbol: '$IDXS-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD', // LINA-BUSD LP
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
    lpSymbol: '$IDXS-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x89C2d726981eBa2EA168C7B19F54cAe905DA89cD', // LINA-BUSD LP
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
