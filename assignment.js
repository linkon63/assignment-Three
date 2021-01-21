// GitHubRepo Link: 

//Assignment Function-1 : kilometerToMeter Converter:
function kilometerToMeter(kilometer){
    if(kilometer == 0 || kilometer < -1){
        return "Distance cannot be negative or zero";
    }else{
        var result = kilometer * 1000; // 1 Kilometer equals to 1000 meter;
        return result;
    }
}
var meterConverter = kilometerToMeter(5);
console.log("Meter converted: ", meterConverter);

//Assignment Function-2 : budgetCalculator Watch Phone Laptop:
function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop){
    if(numberOfWatch <= -1 || numberOfPhone <= -1 || numberOfLaptop <= -1){
        return "Cannot be negative number of products you can put 0 if you don't want to buy";
    }else{
        var costOfWatch = numberOfWatch * 50;
        var costOfPhone = numberOfPhone * 100;
        var costOfLaptop = numberOfLaptop * 500;
        var totalCostOfProducts = costOfWatch + costOfPhone + costOfLaptop;
        return totalCostOfProducts;
    }
}
var productNumbers = budgetCalculator(1,2,1);
console.log("Product Total Cost :", productNumbers);

//Assignment Function-3 : Staying Hotel total hotelCost Function  
//Conditions: 1-"First 10days 100taka per day". 2-"After 10 days 80taka per day". 3-"After 20 days 50taka per days". 
function hotelCost(stayDays){
    if(stayDays == 0 || stayDays < -1){
        return "Your Staying days Must be Positive Number or without Zero";
    }else{

        if(stayDays <=10 ){
            var stayCost = stayDays * 100; //First 10days 100taka per day
            return stayCost;
        }else if(stayDays <=20 ){
            var firstTenDaysCost = 10 * 100;
            var secondTenDays = stayDays - 10; //Subtract 10Days for Changing Cost Value;
            var stayCost = firstTenDaysCost + (secondTenDays * 80); //After 10 days 80taka per day
            return stayCost;
        }else{
            var firstTenDaysCost = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var thirdTenDays = stayDays - 20; //Subtract 20Days for Changing Cost Value;
            var stayCost = firstTenDaysCost + secondTenDaysCost + (thirdTenDays * 50) ; //After 20 days 50taka per days
            return stayCost;
        }
    }
}
var days = hotelCost(21);
console.log("Hotel Stay Cost:",days);
