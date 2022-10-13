describe('Post', () => {
  beforeAll(async () => {
    await page.goto('https://react-redux.realworld.io/#/login')
    await console.log("before all");
  })
  test('Sign In', async () => {
    const title = await page.title()
    expect(title).toBe('Conduit')
    await page.fill('input[type = "email"]', 'ecgjunior8@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'teste123')
    await Promise.all([
      page.waitForNavigation(),
      await page.click('form >> "Sign in"')
    ]);
  })
  afterAll(async () => {
    await browser.close()
    await console.log("after all");
  })
})