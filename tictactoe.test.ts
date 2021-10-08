import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.sleep(1000);
    await driver.get('http://localhost:4000');
})

afterAll(async () => {
    await driver.quit()
})


test('Upper left square adds an X', async () => {
    let upLeftBtn = await driver.findElement(By.id('cell-0'));
    let button = await (await driver).findElement(By.id('start-game'));
    
    await button.click();
    
    await driver.sleep(1000);
    
    await upLeftBtn.click();
    
    await driver.sleep(3000);
    
    expect (await upLeftBtn.getText()).toContain('X');
})

test('Computer generated 0', async () => {
    let upLeftBtn = await driver.findElement(By.id('cell-0'));
    let upMidBtn = await driver.findElement(By.id('cell-1'));
    let button = await (await driver).findElement(By.id('start-game'));
    
    await button.click();
    
    await driver.sleep(1000);
    
    await upLeftBtn.click();
    
    await driver.sleep(3000);

    expect(await upMidBtn.getText()).toContain('O');

})

test('Upper right square adds an X', async () => {
    let upRightBtn = await driver.findElement(By.id('cell-2'));
    let button = await (await driver).findElement(By.id('start-game'));
    
    await button.click();

    await driver.sleep(1000);

    await upRightBtn.click();

    await driver.sleep(3000);

    expect (await upRightBtn.getText()).toContain('X');
})

test('Lower Right square adds an X', async () => {
    let lowRightBtn = await driver.findElement(By.id('cell-8'));
    let button = await (await driver).findElement(By.id('start-game'));
    
    await button.click();

    await driver.sleep(1000);

    await lowRightBtn.click();

    await driver.sleep(3000);

    expect (await lowRightBtn.getText()).toContain('X');
})
