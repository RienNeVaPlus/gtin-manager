import { generateCheckDigit, assertIsGCP } from '../common'

test.each([
  ['1234566', undefined]
])('assertIsGCP(%p) (ok: %p)', (GCP, expectedValue) => {
  expect(assertIsGCP(GCP)).toBe(expectedValue)
})

test.each([
  ['123456', 'Global Company Prefix (GCP) is not of a valid format'],
  ['1234567890', 'Global Company Prefix (GCP) is not of a valid format'],
  [undefined, 'Global Company Prefix (GCP) is not of a valid format'],
  ['', 'Global Company Prefix (GCP) is not of a valid format']
])('assertIsGCP(%p) (error: %p)', (GCP, expectedError) => {
  // @ts-ignore
  expect(() => assertIsGCP(GCP)).toThrow(expectedError)
})

test.each([
  ['123456780000', '4'],
  ['123456789999', '2']
])('generateCheckDigit(%p) (ok: %p)', (GTIN, expectedValue) => {
  expect(generateCheckDigit(GTIN)).toBe(expectedValue)
})
