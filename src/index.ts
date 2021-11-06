import {
  generateCheckDigit,
  assertIsGCP,
  BOUNDS_ERR
} from './common'

export class GTINManager {
  public contingent: number
  private pad: number

  constructor (public GCP: string) {
    assertIsGCP(GCP)
    const len = GCP.length
    this.contingent = len === 7 ? 100000 : len === 8 ? 10000 : 1000
    this.pad = len === 7 ? 5 : len === 8 ? 4 : 3
  }

  get all () {
    return Array.from({ length: this.contingent }, (_, i) => this.index(i++))
  }

  index (index: number) {
    const { GCP, pad, contingent } = this
    if (index < 0 || index > (contingent - 1)) throw new Error(BOUNDS_ERR)

    const value = GCP + String(index).padStart(pad, '0')
    return value + generateCheckDigit(value)
  }
}

export default GTINManager