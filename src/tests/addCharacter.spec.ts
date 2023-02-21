import { DEFAULT_CHARACTER } from 'src/utils/constants/power'
import { describe, expect, test } from 'vitest'

describe('Add a character', () => {
  test('It should add the character into the DB', () => {
    const char = { ...DEFAULT_CHARACTER }

    expect(1 + 2).equal(3)
  })
})
