export const GCP_ERR = 'Global Company Prefix (GCP) is not of a valid format'
export const BOUNDS_ERR = 'Index out of bounds'

function isGCP (GCP: string) {
  if (typeof GCP !== 'string') throw new Error(GCP_ERR)
  if (GCP === '') throw new Error(GCP_ERR)
  return (
    /^(\d{7,9})$/.test(GCP)
  )
}

export function assertIsGCP (GCP: string): asserts GCP is string {
  if (!isGCP(GCP)) throw new Error(GCP_ERR)
}

export function generateCheckDigit (barcode: string) {
  return String(
    (
      10 - (
        (
          barcode
            .padStart(13, '0')
            .split('')
            .map((num, idx) => (
              (+num) * ((idx % 2 === 0) ? 3 : 1)
            ))
            .reduce((prev, cur) => prev + cur)
        ) % 10
      )
    ) % 10
  )
}
