const { Builder, By, Key, util } = require("selenium-webdriver");

async function googling() {
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");

  try{
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms", Key.RETURN);
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms", Key.RETURN);

    const text = await driver.findElement(By.xpath("//li")).getText();
      assert.equal(text, "Welcome Admin", "Tes Fail");
      console.log("Berhasil Dong");
  } catch (error) {
    console.log("Gagal Guys");
  }
}

googling();