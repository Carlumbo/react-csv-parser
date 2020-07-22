const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");
const { timeStamp } = require("console");
const { parse } = require("path");
const con = console.log
const prompt = require('prompt');


CSVToJSON().fromFile("./test.csv").then(source => {
  var hello = []
  
  //var vendor = prompt('what is the vendors email?')
  //var category = prompt('what is the vendors category?')
  //con(source[0])
  
   let x; for(x = 0; x < source.length; x++) {
    
    var obj = JSON.stringify(source[x])
     
    var o = JSON.parse(obj)

    o.sku = o['Handle']
    o.name = o['Title']
    o.price = o['Variant Price']
    o.description = o['Body (HTML)']
    o.vendor = o['Vendor']  
    o.attrName1 = o['Option1 Name']
    o.attrName2 = o['Option2 Name']
    o.attrName3 = o['Option3 Name']
    o.attrVal1 = o['Option1 Value']
    o.attrVal2 = o['Option2 Value']
    o.attrVal3 = o['Option3 Value']
    o.variantSku = o['Variant SKU']
    o.variantPrice = o['Variant Price']
    o.images = o['Image Src']
    
    
    delete o['Handle']
    delete o['Type']
    delete o['Published']
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
  
   // var upToNCharacters = s.substring(0, Math.min(s.length(), n));
    
     
     if (o.sku.length > 30) { 
         o.sku = o.sku.substring(0,24)
         o.sku = o.sku + "-" + x 
        //con(o.sku)
     }
     if (o.name === '' ) {
        o.price = ''
        o.images = ''
        o.sku = ''
     }
     hello.push(o)
    
       
    }
    
   let y; for(y= 0; y < hello.length; y++) {
       if (hello[y].sku === '') {
           hello[y].sku = hello[y-1].sku         
       }


      
   }

   const unique = (value,index,self) => {
       return self.indexOf(value) ===index
   }
   //thing being the column of attirubute values
    function runDown(thing) {let result = hello.map(
    ({ attrName1 }) => attrName1)
    let res1 = result.filter(unique)


   let z; for(z=0; z < res1.length; z ++) {
   
   let  resNow = res1[z]
  
   if (resNow === '' ) {

   }
    else {
        var res2 = hello.map(function(el) {
            var o = Object.assign({}, el);

            o[`${resNow}` + " (field:product)"] = '';
            return o
        
        })
        hello = res2
        }
    }
} 
  console.log(res2)
    
});