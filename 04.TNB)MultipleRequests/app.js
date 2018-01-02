function placeAnOrder(orderID) {
    console.log("[" + new Date().toLocaleString() + "] Customer order: " + orderID);

    cookAndDeliverOrder(function () {
        console.log("[" + new Date().toLocaleString() + "] Delivered order: " + orderID);
    });
}

//simulate a 5 seconds operation
function cookAndDeliverOrder(callback) {
    setTimeout(callback, 5000);
}

//simulate orders
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

console.log("\n")