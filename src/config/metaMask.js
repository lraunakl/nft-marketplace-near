module.exports = {
  fuji: {
    chainId: 43113,   
    chainName: 'Fuji Testnet',  
    nativeCurrency: {
      name: 'Avalanche Token',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls:  ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io//'],
  },
  // aurora_mainnet: {
  //   chainId: 1313161554,   
  //   chainName: 'Aurora MainNet',
  //   nativeCurrency: {
  //     name: 'Ether',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   },
  //   rpcUrls:  ['https://aurora.dev/'],
  //   blockExplorerUrls: ['https://aurora.dev/'],
  // }
}