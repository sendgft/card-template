;(() => {
/*
interface Asset {
  symbol: string,
  amount: string,
}

interface Gift {
  sender: string,
  receiver: string,
  datetime: number,
  message: string,
  native: Asset,
  erc20: Asset[],
}
*/  

  /*
   * Render gift data.
   * 
   * This function gets called automatically after page load by the parent frame of the GFT card.
   * 
   * The `gift` paramater is an object with the `Gift` structure shown above.
   */
  window.setGift = (gift /* typeof gift === Gift */) => {
    document.body.innerHTML = `<pre>${JSON.stringify(gift, null, 2)}</pre>`
  }
})()
