//Using data driven and page objects

Login = require('../pageObjects/login')
Data = require('../data/data.json')

describe('Post', () => {

    const login = new Login()

    beforeAll(async () => {
        await page.goto(Data.url)
    })

    test('Sign In', async () => {
        const title = await page.title()
        expect(title).toBe('Conduit')

        const email = await login.email()
        await email.fill(Data.email)
        await email.press('Tab')
        await login.password_fill(Data.password)
        await login.signInButton_click()

        const html = await page.innerHTML('.feed-toggle')
        expect(html).toMatch('Your Feed')
    })

    afterAll(async () => {
        await browser.close()
    })
})