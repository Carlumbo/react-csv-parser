const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");
const { timeStamp } = require("console");
const { parse } = require("path");

CSVToJSON().fromFile("./test.csv").then(source => {

   let x; for(x = 0; x < source.length; x++) {

    var obj = JSON.stringify(source[x])

   }
    var hello = []
    
    var o = JSON.parse(obj)

   
    
    o.sku = o['Handle']
    o.name = o['Title']
    o.vendor = o['Vendor'] 
    o.variantSku = o['Variant SKU']
    o.variantPrice = o['Variant Price']
    
    o.description = o['Body (HTML)']
    o.attrName1 = o['Option1 Name']
    o.attrName2 = o['Option2 Name']
    o.attrName3 = o['Option3 Name']
    o.attrVal1 = o['Option1 Value']
    o.attrVal2 = o['Option2 Value']
    o.attrVal3 = o['Option3 Value']
    o.images = o['Image Src']
    
    
    delete o['Published']
    delete o['Handle']
    delete o['Type']
    delete o['Variant Price']
    delete o['Vendor']
    delete o['Variant SKU']
    delete o['Title']
    delete o['Body (HTML)']
    delete o['Option1 Name']
    delete o['Option1 Value']
    delete o['Option2 Name']
    delete o['Option2 Value']
    delete o['Option3 Name']
    delete o['Option3 Value']
    delete o['Image Src']
    delete o['Tags']
    delete o['Image Alt Text']
    delete o['Gift Card']
    delete o['Variant Image']
    delete o['Variant Weight Unit']
    delete o['Variant Grams']
    delete o['Variant Inventory Qty']
    delete o['Variant Inventory Policy']
    delete o['Variant Fulfillment Service']
    delete o['Variant Inventory Tracker']
    delete o['Variant Compare At Price']
    delete o['Variant Requires Shipping']
    delete o['Variant Taxable']
    delete o['Variant Barcode']
    delete o['Google Shopping / MPN']
    delete o['Google Shopping / Age Group']
    delete o['Google Shopping / Gender']
    delete o['Google Shopping / Google Product Category']
    delete o['SEO Title']
    delete o['SEO Description']
    delete o['Google Shopping / AdWords Grouping']
    delete o['Google Shopping / AdWords Labels']
    delete o['Google Shopping / Condition']
    delete o['Google Shopping / Custom Product']
    delete o['Google Shopping / Custom Label 0']
    delete o['Google Shopping / Custom Label 1']
    delete o['Google Shopping / Custom Label 2']
    delete o['Google Shopping / Custom Label 3']
    delete o['Google Shopping / Custom Label 4']
    
    hello.push(o)
    console.log(hello)

});