import { addCharacter, addCharacterPowerGrid } from 'src/db/db'
import { DEFAULT_CHARACTER } from 'src/utils/constants/power'
import { describe, expect, test } from 'vitest'

describe('Add a character', () => {
  test('It should add the character into the DB', async () => {
    const char1 = { ...DEFAULT_CHARACTER }

    const characterId = await addCharacter(char1)
    // if (characterId) await addCharacterPowerGrid(characterId, char1.power_grid)

    expect(characterId).toBeTypeOf('number')
  })
})
/**
 *  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨
 */
