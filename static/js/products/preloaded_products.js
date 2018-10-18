samplePricePoints = function(){
    return {"01t36000001fKQlAAM": 85000.0, "01t36000001fKQjAAM": 25000.0, "01t36000001fKQqAAM": 0.0, "01t36000001fKQoAAM": 0.0, "01t36000003Au73AAC": 34.87, "01t36000001fKQtAAM": 0.0, "01t36000001fKQrAAM": 0.0, "01t36000001fKQyAAM": 0.0, "01t36000001fKQwAAM": 0.0, "01t36000001fKQmAAM": 152.03, "01t36000001fKQkAAM": 5000.0, "01t36000003ArNYAA0": 10.23, "01t36000001fKQpAAM": 0.0, "01t36000001fKQnAAM": 50000.0, "01t36000001fKQuAAM": 0.0, "01t36000003AqrDAAS": 216.74, "01t36000001fKQsAAM": 0.0, "01t36000001fKQxAAM": 0.0, "01t36000001fKQvAAM": 0.0}
}

sampleProducts = function(){
    return [
        {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000003Au73AAC"},"Id": "01t36000003Au73AAC", "UnitType__c": "Set", "Name": "6 Cassettes", "Family": "Cassettes", "Description": "This is the product description.  Hello world", "AddOnProducts__r": null, "Breakdown_Products__r": null},
        {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000003AqrDAAS"},"Id": "01t36000003AqrDAAS", "UnitType__c": "Kit", "Name": "12 Runs", "Family": "Consumables Kit", "Description": null, "AddOnProducts__r": {"totalSize": 4, "done": true, "records": [{"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkjGAAT"}, "Name": "006", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQjAAM"}, "Name": "6 pack teflon stir bars", "Id": "01t36000001fKQjAAM"}, "Id": "a013600000DIkjGAAT"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkjVAAT"}, "Name": "007", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQkAAM"}, "Name": "Box of 12 Reaction Vials", "Id": "01t36000001fKQkAAM"}, "Id": "a013600000DIkjVAAT"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkiwAAD"}, "Name": "004", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQlAAM"}, "Name": "Pyrex Stir Bars", "Id": "01t36000001fKQlAAM"}, "Id": "a013600000DIkiwAAD"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkjBAAT"}, "Name": "005", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQnAAM"}, "Name": "Teflon stir bars", "Id": "01t36000001fKQnAAM"}, "Id": "a013600000DIkjBAAT"}]}, "Breakdown_Products__r": {"totalSize": 11, "done": true, "records": [{"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vgmRAAQ"}, "Name": "A", "Id": "a0036000009vgmRAAQ", "Quantity__c": 108.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQwAAM"}, "Name": "Amber Vials", "Id": "01t36000001fKQwAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzJAAQ"}, "Name": "B", "Id": "a0036000009vhzJAAQ", "Quantity__c": 108.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQrAAM"}, "Name": "13mm septums", "Id": "01t36000001fKQrAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzOAAQ"}, "Name": "C", "Id": "a0036000009vhzOAAQ", "Quantity__c": 144.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQoAAM"}, "Name": "13mm crimp tops", "Id": "01t36000001fKQoAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzTAAQ"}, "Name": "D", "Id": "a0036000009vhzTAAQ", "Quantity__c": 18.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQpAAM"}, "Name": "O18 waste vials", "Id": "01t36000001fKQpAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzYAAQ"}, "Name": "E", "Id": "a0036000009vhzYAAQ", "Quantity__c": 18.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQtAAM"}, "Name": "20mm waste vial septums", "Id": "01t36000001fKQtAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzdAAA"}, "Name": "F", "Id": "a0036000009vhzdAAA", "Quantity__c": 18.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQqAAM"}, "Name": "20mm waste crimp tops", "Id": "01t36000001fKQqAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhziAAA"}, "Name": "G", "Id": "a0036000009vhziAAA", "Quantity__c": 9.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQsAAM"}, "Name": "Oblong Gasket (White)", "Id": "01t36000001fKQsAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzsAAA"}, "Name": "H", "Id": "a0036000009vhzsAAA", "Quantity__c": 4.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQuAAM"}, "Name": "Small bags for packaging", "Id": "01t36000001fKQuAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhzxAAA"}, "Name": "I", "Id": "a0036000009vhzxAAA", "Quantity__c": 2.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQvAAM"}, "Name": "Medium bags for packaging", "Id": "01t36000001fKQvAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vi02AAA"}, "Name": "J", "Id": "a0036000009vi02AAA", "Quantity__c": 1.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQxAAM"}, "Name": "Large bag for packaging", "Id": "01t36000001fKQxAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vi07AAA"}, "Name": "K", "Id": "a0036000009vi07AAA", "Quantity__c": 1.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQyAAM"}, "Name": "Box to pack consumables for FRU", "Id": "01t36000001fKQyAAM"}}]}},

        {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000003ArNYAA0"}, "Id": "01t36000003ArNYAA0", "UnitType__c": "Set", "Name": "3 Cassettes", "Family": "Cassettes", "Description": "This is the product description.  Hello world", "AddOnProducts__r": null, "Breakdown_Products__r": null},
        {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQmAAM"}, "Id": "01t36000001fKQmAAM", "UnitType__c": "Kit", "Name": "6 Runs", "Family": "Consumables Kit", "Description": null, "AddOnProducts__r": {"totalSize": 4, "done": true, "records": [{"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIjolAAD"}, "Name": "000", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQjAAM"}, "Name": "6 pack teflon stir bars", "Id": "01t36000001fKQjAAM"}, "Id": "a013600000DIjolAAD"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkUqAAL"}, "Name": "002", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQkAAM"}, "Name": "Box of 12 Reaction Vials", "Id": "01t36000001fKQkAAM"}, "Id": "a013600000DIkUqAAL"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIkV0AAL"}, "Name": "003", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQlAAM"}, "Name": "Pyrex Stir Bars", "Id": "01t36000001fKQlAAM"}, "Id": "a013600000DIkV0AAL"}, {"attributes": {"type": "Add_On_Product__c", "url": "/services/data/v29.0/sobjects/Add_On_Product__c/a013600000DIjoqAAD"}, "Name": "001", "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQnAAM"}, "Name": "Teflon stir bars", "Id": "01t36000001fKQnAAM"}, "Id": "a013600000DIjoqAAD"}]}, "Breakdown_Products__r": {"totalSize": 11, "done": true, "records": [{"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vgErAAI"}, "Name": "A", "Id": "a0036000009vgErAAI", "Quantity__c": 72.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQwAAM"}, "Name": "Amber Vials", "Id": "01t36000001fKQwAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vgGjAAI"}, "Name": "B", "Id": "a0036000009vgGjAAI", "Quantity__c": 72.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQrAAM"}, "Name": "13mm septums", "Id": "01t36000001fKQrAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyBAAQ"}, "Name": "C", "Id": "a0036000009vhyBAAQ", "Quantity__c": 72.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQoAAM"}, "Name": "13mm crimp tops", "Id": "01t36000001fKQoAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyLAAQ"}, "Name": "D", "Id": "a0036000009vhyLAAQ", "Quantity__c": 12.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQpAAM"}, "Name": "O18 waste vials", "Id": "01t36000001fKQpAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyaAAA"}, "Name": "E", "Id": "a0036000009vhyaAAA", "Quantity__c": 12.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQtAAM"}, "Name": "20mm waste vial septums", "Id": "01t36000001fKQtAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyfAAA"}, "Name": "F", "Id": "a0036000009vhyfAAA", "Quantity__c": 12.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQqAAM"}, "Name": "20mm waste crimp tops", "Id": "01t36000001fKQqAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhykAAA"}, "Name": "G", "Id": "a0036000009vhykAAA", "Quantity__c": 6.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQsAAM"}, "Name": "Oblong Gasket (White)", "Id": "01t36000001fKQsAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhypAAA"}, "Name": "H", "Id": "a0036000009vhypAAA", "Quantity__c": 4.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQuAAM"}, "Name": "Small bags for packaging", "Id": "01t36000001fKQuAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyuAAA"}, "Name": "I", "Id": "a0036000009vhyuAAA", "Quantity__c": 2.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQvAAM"}, "Name": "Medium bags for packaging", "Id": "01t36000001fKQvAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhyzAAA"}, "Name": "J", "Id": "a0036000009vhyzAAA", "Quantity__c": 1.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQxAAM"}, "Name": "Large bag for packaging", "Id": "01t36000001fKQxAAM"}}, {"attributes": {"type": "BreakDownProduct__c", "url": "/services/data/v29.0/sobjects/BreakDownProduct__c/a0036000009vhz4AAA"}, "Name": "K", "Id": "a0036000009vhz4AAA", "Quantity__c": 1.0, "Product__r": {"attributes": {"type": "Product2", "url": "/services/data/v29.0/sobjects/Product2/01t36000001fKQyAAM"}, "Name": "Box to pack consumables for FRU", "Id": "01t36000001fKQyAAM"}}]}}
    ]
}