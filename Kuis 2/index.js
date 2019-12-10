const { Builder, By, Key, util } = require("selenium-webdriver");

async function googling() {
  try{
    let driver = await new Builder().forBrowser("chrome").build();
    let assert = require("assert");

    await driver.get("https://demo.1crmcloud.com/login.php");
    await driver.findElement(By.id("login_user")).sendKeys("admin", Key.RETURN);
    await driver.findElement(By.id("login_pass")).sendKeys("admin", Key.RETURN);

    await driver.sleep(5000);
    await driver.findElement(By.className("default-avatar")).click();
    const text = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
    assert.equal(text, "Administrator", "Tes Fail");
    console.log("Berhasil Guys");
   }
   catch(error) {
    console.log("Gagal boy");
   }
}

googling();