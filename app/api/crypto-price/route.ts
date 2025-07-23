import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const symbol = searchParams.get('symbol')

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 })
  }

  // Try Binance API first
  try {
    console.log(`Trying Binance API for ${symbol}...`)
    const response = await fetch(
      `https://api1.binance.com/api/v3/ticker/price?symbol=${symbol}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      if (data.price) {
        console.log(`Successfully got price from Binance: ${data.price}`)
        return NextResponse.json({ price: data.price })
      }
    }
  } catch (error) {
    console.log('Binance API failed, trying CryptoCompare...')
  }

  // If Binance fails, try CryptoCompare
  try {
    // Map Binance symbols to CryptoCompare symbols
    const symbolMap: { [key: string]: string } = {
      'BTCUSDT': 'BTC',
      'ETHUSDT': 'ETH'
    }

    const cryptoSymbol = symbolMap[symbol]
    if (!cryptoSymbol) {
      return NextResponse.json({ error: 'Unsupported symbol' }, { status: 400 })
    }

    console.log(`Fetching price from CryptoCompare for ${cryptoSymbol}...`)
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${cryptoSymbol}&tsyms=USD`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`CryptoCompare API error: ${response.status}`, errorText)
      return NextResponse.json(
        { error: `CryptoCompare API error: ${response.status} - ${errorText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Received data from CryptoCompare:', data)
    
    if (!data.USD) {
      console.error('No price in response:', data)
      return NextResponse.json(
        { error: 'Invalid response from CryptoCompare API' },
        { status: 500 }
      )
    }

    const price = data.USD.toString()
    console.log(`Price for ${cryptoSymbol}: ${price}`)
    return NextResponse.json({ price })
  } catch (error) {
    console.error('Error fetching crypto price:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch price' },
      { status: 500 }
    )
  }
} 