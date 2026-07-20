import {test as base} from "@playwright/test";

// Define a new test that extends the base test
type envURL = {
    qaURL: string;
}

export const test = base.extend<envURL>({ 
    qaURL: async ({}, use) => {
        // You can perform any setup here if needed
        const qaURL =  'https://www.bing.com';
        console.log("Before Fixtures: QA URL is");
        await use(qaURL);
        console.log("After Fixtures: QA URL is");
        
    }
})
// const test = base.extend({
//   // You can add fixtures here if needed
// });