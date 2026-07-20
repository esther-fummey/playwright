import {test, expect} from '@playwright/test'
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const csv = fs.readFileSync(path.resolve(__dirname, "../tests/testData.csv"), "utf8");

const records = parse(csv, {
  columns: true,
  trim: true,
  skip_empty_lines: true,
  relax_quotes: true,
  bom: true,
}) as any[];





for(const record of records) {

    test('Read CSV file and validate data' +record.username, async({page}) =>{
         await page.goto('https://www.saucedemo.com/'); // Replace with the actual URL of your application
         await page.fill('#user-name', record.username)
         await page.fill('#password', record.password)
         
         
    

});
}






