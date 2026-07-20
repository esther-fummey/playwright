import {test} from "@playwright/test";

test('drag and drop operation', async ({ page }) => {


    await page.goto('https://jqueryui.com/draggable/');  //opens the website

    await page.pause()

    const frame1 = await page.frameLocator('//iframe[@class="demo-frame"]'); 
    // 
    // await frame1.locator('#draggable').dragTo(await frame1.locator('#droppable')); //switching to frame

    await frame1.locator('#draggable').hover() //hovering over the element

    await page.mouse.down() //mouse down on the element
    // await frame1.locator('#draggable').hover({position: {x: 200, y: 200}}) //moving the mouse to the desired location
    await frame1.locator('#droppable').hover() //moving the mouse to the desired location
    await page.mouse.down() //mouse up to drop the element

    await page.close()
}

)