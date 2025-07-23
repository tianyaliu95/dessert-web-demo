import { NextResponse } from 'next/server'

export async function GET() {
  const totalCapital = process.env.TOTAL_CAPITAL || "1000"
  const risk = process.env.RISK || "1"
  return NextResponse.json({
    totalCapital,
    risk,
  })
}
