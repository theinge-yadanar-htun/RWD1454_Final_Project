// let preDefinedData = {
//     email: 'helianthusbeyourchoice@gmail.com',
//     password: 'helianthus2021',
// }

let Parlon = {
    Name: "Parlon Palm",
    plantID: "001",
    InStockItem: 50,
    Price: "$59.99"
};
// const myJSON = '["Ford", "BMW", "Fiat"]';
// const myArray = JSON.parse(myJSON);
document.getElementById("ParlonName").innerHTML = Parlon.Name;
document.getElementById("ParlonID").innerHTML = Parlon.plantID;
document.getElementById("ParlonInStockItem").innerHTML = Parlon.InStockItem;
document.getElementById("ParlonPrice").innerHTML = Parlon.Price;

let colla = {
    Name: "Colla Lily",
    plantID: "002",
    InStockItem: 50,
    Price: "$61.99"
};
document.getElementById("collaName").innerHTML = colla.Name;
document.getElementById("collaID").innerHTML = colla.plantID;
document.getElementById("collaInStockItem").innerHTML = colla.InStockItem;
document.getElementById("collaPrice").innerHTML = colla.Price;

let panthurium = {
    Name: "Pink Anthurium",
    plantID: "003",
    InStockItem: 25,
    Price: "$45.99"
};
document.getElementById("panthuriumName").innerHTML = panthurium.Name;
document.getElementById("panthuriumID").innerHTML = panthurium.plantID;
document.getElementById("panthuriumInStockItem").innerHTML = panthurium.InStockItem;
document.getElementById("panthuriumPrice").innerHTML = panthurium.Price;

let wanthurium = {
    Name: "Anthurium",
    plantID: "004",
    InStockItem: 20,
    Price: "$41.99"
};

document.getElementById("wanthuriumName").innerHTML = wanthurium.Name;
document.getElementById("wanthuriumID").innerHTML = wanthurium.plantID;
document.getElementById("wanthuriumInStockItem").innerHTML = wanthurium.InStockItem;
document.getElementById("wanthuriumPrice").innerHTML = wanthurium.Price;
