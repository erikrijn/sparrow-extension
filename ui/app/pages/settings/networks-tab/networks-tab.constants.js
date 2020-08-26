const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#00EA90',
    providerType: 'mainnet',
    rpcUrl: 'https://rpc.octano.dev/',
    chainId: '8',
    ticker: 'UBQ',
    blockExplorerUrl: 'https://ubiqscan.io',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8588/',
    chainId: '8',
    ticker: 'UBQ',
    blockExplorerUrl: 'https://ubiqscan.io',
  },
]

export {
  defaultNetworksData,
}
