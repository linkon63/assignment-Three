// GitHub Repositorie Link: https://github.com/linkon63/assignment-Three

//Assignment Function-1 : kilometerToMeter Converter:
function kilometerToMeter(kilometer) {
    if (kilometer == 0 || kilometer < -1) {
        return "Distance cannot be negative or zero";
    } else {
        var result = kilometer * 1000; // 1km equals to 1000 meter;
        return result;
    }
}

//Assignment Function-2 : budgetCalculator Watch Phone Laptop:
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    if (numberOfWatch <= -1 || numberOfPhone <= -1 || numberOfLaptop <= -1) {
        return "Cannot be negative number of products you can put 0 if you don't want to buy";
    } else {
        var costOfWatch = numberOfWatch * 50;
        var costOfPhone = numberOfPhone * 100;
        var costOfLaptop = numberOfLaptop * 500;
        var totalCostOfProducts = costOfWatch + costOfPhone + costOfLaptop;
        return totalCostOfProducts;
    }
}

//Assignment Function-3 : Staying Hotel total hotelCost Function  
//Conditions: 1-"First 10days 100taka per day". 2-"After 10 days 80taka per day". 3-"After 20 days 50taka per days". 
function hotelCost(stayDays) {
    if (stayDays == 0 || stayDays < -1) {
        return "Your Staying days Must be Positive Number or without Zero";
    } else {
        if (stayDays <= 10) {
            var stayCost = stayDays * 100; //First 10days 100taka per day
            return stayCost;
        } else if (stayDays <= 20) {
            var firstTenDaysCost = 10 * 100;
            var secondTenDays = stayDays - 10; //Subtract 10Days for Changing Cost Value;
            var stayCost = firstTenDaysCost + (secondTenDays * 80); //After 10 days 80taka per day
            return stayCost;
        } else {
            var firstTenDaysCost = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var thirdTenDays = stayDays - 20; //Subtract 20Days for Changing Cost Value;
            var stayCost = firstTenDaysCost + secondTenDaysCost + (thirdTenDays * 50); //After 20 days 50taka per days
            return stayCost;
        }
    }
}

//Assignment Function-4 : megaFriend Function for largest name in array 
function megaFriend(friendNameArray) {
    if (friendNameArray.length == 0 || friendNameArray == undefined) {
        return "Array is empty!"; //Checking Condition: if array is empty or underfined ;
    } else {
        var ConditionalLength = 0;
        var largestName;
        for (var i = 0; i < friendNameArray.length; i++) {
            if (friendNameArray[i].length > ConditionalLength) {
                ConditionalLength = friendNameArray[i].length;
                largestName = friendNameArray[i]; //Storing Largest name in Array
            }
        }
        return largestName;
    }
}

//Optional: Calling Function "kilometerToMeter"
    var meterConverter = kilometerToMeter(5);
console.log("Meter converted: ", meterConverter);
//Optional: Calling Function "budgetCalculator"
    var productNumbers = budgetCalculator(1, 2, 1);
console.log("Product Total Cost :", productNumbers);
//Optional: Calling Function "hotelCost"
    var days = hotelCost(21);
console.log("Hotel Stay Cost:", days);
//Optional: Calling Function "megaFriend"
    var friendName = ['a', 'abc', 'ab', 'abz'];
console.log("Largest Name: ", megaFriend(friendName));