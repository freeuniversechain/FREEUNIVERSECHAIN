# THALERO Token update logo in metamask #

## Few steps here ##

##COPY THIS LINK AND GO TO URL##

https://vittominacori.github.io/watch-token/create/

# Select the Ethereum mainnet # 
# Paste Thalero Token address # // 0x4F8BD56A166202A00b7D8400803dB4D1273c8B6D
# Finally paste this link #  // https://raw.githubusercontent.com/freeuniversechain/FREEUNIVERSECHAIN/main/image.png







#javascript#

const tokenAddress = '0x4F8BD56A166202A00b7D8400803dB4D1273c8B6D';
const tokenSymbol = 'THO';
const tokenDecimals = 8;
const tokenImage = 'https://raw.githubusercontent.com/freeuniversechain/FREEUNIVERSECHAIN/main/image.png';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
```
