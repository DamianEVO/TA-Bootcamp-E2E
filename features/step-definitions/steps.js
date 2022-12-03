const { Given, When, Then } = require('@wdio/cucumber-framework')

Given('I am on the {word} main page', async page => {
	await browser.url(`https://www.${page}.com/`)
	await browser.refresh()
	await expect(browser).toHaveUrl(`https://www.${page}.com/`)
})

When('I type Windows in the search bar', async () => {
	await $('[title="Search Site"]').addValue("Windows")
	await $('.ico-search').click()
})

Then('At least one item appears', async () => {
	const item = await $('div[class="item-cell"]')
	await expect(item).toBeDisplayed()
})

When ("I click on the {string} Tab", async deal => {
	await $('#trendingBanner_720202').click()
	const bestDealText = await $('.is-current')
	await expect(bestDealText).toHaveTextContaining(deal)
})

When('I click on the Internet shop logo', async () => {
	await $('.header2021-logo-img').click()
})

Then('I should see {word} main page', async page => {
	await expect(browser).toHaveUrl(`https://www.${page}.com/`)
	await browser.deleteCookies()
	const cookies = await browser.getCookies()
	await expect(cookies).toEqual([])
})