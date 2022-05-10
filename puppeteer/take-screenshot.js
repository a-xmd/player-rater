import puppeteer from 'puppeteer'

const shot = async () => {

    const start = Date.now()
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    await page.goto('http://localhost:1234', { waitUntil: 'domcontentloaded' })
    // await page.goto('http://localhost:1234', { waitUntil: 'networkidle0' })
    
    
    const field = await page.$('.container')

    await page.evaluate(async () => {
        await document.fonts.ready
    })

    try {
        await field.screenshot({ path: `pic.png` })
        await browser.close()
        console.log(`📷 Finshed after ${ Date.now() - start } seconds \n`)
    } catch (err) {
        console.log('oh no', err)
    }
}

shot()
