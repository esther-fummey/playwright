import { test, expect } from "@playwright/test";

// test.skip('test', async ({ page }) => {
//     //test.skip()
// });
test.fail('test1', async ({ page }) => {
    //test.skip()
});
// In Playwright, annotations are special methods you use to control how a test is executed, or to add metadata and notes to a test. They help you manage your test suite, especially when tests are broken, incomplete, or need special conditions (like extra time).

// Looking at your annotation.spec.ts file, you are already experimenting with test.skip and test.fail!

// Here are the most common and useful annotations in Playwright:

// 1. test.skip()
// Tells Playwright to completely ignore and not run the test. When to use it: When a feature is temporarily disabled, or you are running a specific suite and want to skip certain tests.

// typescript
// test.skip('this test will not run', async ({ page }) => {
//     // code here is ignored
// });
// // You can also skip conditionally!
// test('skip in firefox', async ({ page, browserName }) => {
//     test.skip(browserName === 'firefox', 'Feature not supported on Firefox yet');
// });
// 2. test.fail()
// Tells Playwright that you expect this test to fail. When to use it: When you know there is a bug in the application, but you want to keep the test in your codebase. If the application gets fixed and the test actually passes, Playwright will flag it as an error (meaning: "Hey, the test passed, so remove the .fail() annotation!").

// typescript
// test.fail('this test is expected to fail because of Bug #123', async ({ page }) => {
//     // Test code that currently fails
// });
// 3. test.fixme()
// Marks a test as "broken". It behaves exactly like test.skip() (the test will not run), but it serves as a flag for developers that the test itself needs to be fixed or finished.

// typescript
// test.fixme('test needs to be rewritten', async ({ page }) => {
//     // broken code
// });
// 4. test.slow()
// Triples the default timeout for that specific test. If your default timeout is 30 seconds, test.slow() gives this test 90 seconds to complete. When to use it: For tests that do heavy processing, uploading large files, or running complex end-to-end flows.

// typescript
// test('a very long checkout flow', async ({ page }) => {
//     test.slow(); // Put this at the top of the test
//     // ... long code ...
// });
// 5. test.step()
// Allows you to break a long test into smaller, readable steps. This doesn't change how the test runs, but it makes your HTML Reports beautifully organized.

// typescript
// test('Login and checkout', async ({ page }) => {
//     await test.step('Login to the application', async () => {
//         await page.locator('#username').fill('user');
//         await page.locator('#password').fill('pass');
//         await page.locator('#login').click();
//     });
//     await test.step('Add item to cart', async () => {
//         // ... cart code ...
//     });
// });
// Bonus: Tags (Custom Annotations)
// You can also annotate tests with tags by simply putting an @ symbol in the test title. This allows you to run specific groups of tests from the command line (e.g., running npx playwright test --grep @smoke).