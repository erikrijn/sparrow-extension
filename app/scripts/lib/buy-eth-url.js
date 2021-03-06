/**
 * Gives the caller a url at which the user can acquire eth, depending on the network they are in
 *
 * @param {Object} opts - Options required to determine the correct url
 * @param {string} opts.network The network for which to return a url
 * @param {string} opts.address The address the bought ETH should be sent to.  Only relevant if network === '1'.
 * @returns {string|undefined} - The url at which the user can access ETH, while in the given network. If the passed
 * network does not match any of the specified cases, or if no network is given, returns undefined.
 *
 */
export default function getBuyEthUrl ({ network, address, service }) {
  // default service by network if not specified
  if (!service) {
    // eslint-disable-next-line no-param-reassign
    service = getDefaultServiceForNetwork(network)
  }

  switch (service) {
    case 'metamask-faucet':
      return 'https://faucet.metamask.io/'
    case 'rinkeby-faucet':
      return 'https://www.rinkeby.io/'
    case 'kovan-faucet':
      return 'https://github.com/kovan-testnet/faucet'
    case 'goerli-faucet':
      return 'https://goerli-faucet.slock.it/'
    default:
      throw new Error(`Unknown cryptocurrency exchange or faucet: "${service}"`)
  }
}

function getDefaultServiceForNetwork (network) {
  switch (network) {
    case '3':
      return 'metamask-faucet'
    case '4':
      return 'rinkeby-faucet'
    case '42':
      return 'kovan-faucet'
    case '5':
      return 'goerli-faucet'
    default:
      throw new Error(`No default cryptocurrency exchange or faucet for networkId: "${network}"`)
  }
}
