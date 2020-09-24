import { GTINManager } from '../'

test.each([
  ['1234567', 100000],
  ['12345678', 10000],
  ['123456789', 1000]
])('(new GTINManager(%p)).contingent (ok: %p)', (GCP, expectedValue) => {
  expect((new GTINManager(GCP)).contingent).toBe(expectedValue)
})

test.each([
  ['123456789', 0, '1234567890005'],
  ['123456789', 999, '1234567899992'],
  ['12345678', 1000, '1234567810003'],
  ['12345678', 9999, '1234567899992'],
  ['1234567', 10000, '1234567100005'],
  ['1234567', 99999, '1234567999999']
])('(new GTINManager(%p)).index(%p) (ok: %p)', (GCP, index, expectedValue) => {
  expect((new GTINManager(GCP)).index(index)).toBe(expectedValue)
})

test.each([
  ['123456789', -1, 'Index out of bounds'],
  ['123456789', 1000, 'Index out of bounds'],
  ['12345678', 10000, 'Index out of bounds'],
  ['1234567', 100000, 'Index out of bounds']
])('(new GTINManager(%p)).index(%p) (error: %p)', (GCP, index, expectedError) => {
  // @ts-ignore
  expect(() => (new GTINManager(GCP)).index(index)).toThrow(expectedError)
})

test.each([
  ['123456789', 1000],
  ['12345678', 10000],
  ['1234567', 100000]
])('(new GTINManager(%p)).all (ok: %p)', (GCP, expectedValue) => {
  expect((new GTINManager(GCP)).all.length).toBe(expectedValue)
})
