//var name = "Jack";
//var age = 23;

//var message = "Hi, my name is " + name + " and I am " + age + " years old!";
  
//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-1982";
//var age = "23";
//var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';
//
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var div = 10 % 3;
//
//
//var msg = " 10 / 3 = 3 with a remainder of " + div;
//console.log(sum);
//console.log(sub);
//console.log(div);
//console.log(msg);

//var balances = [ 50.45, 4000.12, -300.50];
//
//var studentNames = ["Timmy"]

//var myAccountBalance = 300;
//var nikeSBShoes = 790.23;
//var coupon = 500;
//
//var age = 23;
//var joesAge = "23";
//
//if (age == joesAge) {
//    console.log(" I'm the same age as Joe!");
//}

//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!")
//    console.log("Account balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance) {
//    console.log("We just bought some dope shoes with a coupon!");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account balance: " + myAccountBalance);
//}
//else
//    console.log("U too broke bro!")

//if (1 === 1 && 2 === 2 || "Jason" === "Jason") {
//    console.log("These are both true!");
//}


//var students = ["Timmy", "Janessa", "Arun"];
//
//
//
//var naughtylist = [];
//
//naughtylist.push(students[0]);
//
//var index = naughtylist.indexOf("Timmy");
//
//if (index > -1) {
//    naughtylist = naughtylist.splice(index, 1);
//}
//
//console.log(index);


//var total = 10;
//for (var x = 0; x < total; x++) {
//    //Itereate ntil told not to
//    console.log(x);
//}

//var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
//var end = 5;
//
//for (var x = 0; x < students.length; x++) {
//    console.log(students[x]);
//}

//for ( var x = 0; x <= 15; x++) {
//    if ( x % 2 === 1 ) {
//        console.log (x +" is odd.");
//       }
//   else
//        console.log (x +" is even.");
//}
//var list = [];
//
//for (star = 0; star < 5; star++) {
//    list.push("* ");
//    console.log(list);
//}


//for (x = 1; x <= 100; x++) {
//    if ( x % 3 === 0 && x % 5 === 0) {
//        console.log("codemonkey");
//    }
//    else
//        if ( x % 3 === 0 ) {
//            console.log("code");
//        }
//    else 
//        if ( x % 5 === 0 ) {
//            console.log("monkey");
//        }
//    else 
//        console.log(x);
//}

//var  length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area1);
//console.log(area2);
//
//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//console.log(rectanglesAreas);
//var area1 = area(10,15);
//
//console.log(area1);



var bankBalance = 500;

function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase successful");
    } else {
        console.log("Insuffucuent Funds");
    }
}
console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450);

//function triangleArea(width, height) {
//    return .5 * width * height;
//}
//
//var triangleArea1 = triangleArea(10, 5);
//console.log(triangleArea1);
//function circleArea (radius) {
//    return 3.14 * radius * radius;
//}
//
//var newCircleArea [] 
//
//newCircleArea.push(circleArea(1));
//newCircleArea.push(circleArea(2));
//newCircleArea.push(circleArea(3));
//newCircleArea.push(circleArea(4));
//
//
//console.log(newCircleArea);
//
//var shapeArea = function (shape , width, height) {
//    if (shape == "Triangle") {
//       return .5 * width * height;
//    } else 
//        if (shape == "Circle") {
//        return 3.14 * width * width;
//        } else
//            if (shape == "Rectangle") {
//            return width * height;
//            }
//}
//console.log(shapeArea("Circle", 3));
//console.log(shapeArea("Rectangle", 4, 5));
//console.log(shapeArea("Triangle", 6, 7));


            


//var transaction = function (priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase successful");
//    } else {
//        console.log("Insuffucuent Funds");
//    }
//};
//var students = [];
//
//function student(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    };
//}
//
//students.push(new student("Jenny", "Laga",5));
//students.push(new student("Timmy", "Turner", 8));
//students.push(new student("Carl", "Jr", 4));
////var s1 = new student("Jenny", "Laga", 5);
//
//console.log(s1);
//console.log(s1.greeting());

//var student0 = {
//    firstName: "Jayne",
//    lastName: "Looo",
//    age: 8,
//    greeting: 
//console.log(student0.greeting());
//// Creates a new empty Object
//var student1 = new Odject();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;

//var student1 = {
//    firstName: "Jay",
//    lastName: "Lore",
//    age: 8
//};
//var student2 = {
//    firstName: "Petre",
//    lastName: "parker",
//    age: 8
//};
//
//

//students.push(student0);
//students.push(student1);
//students.push(student2);

//for (var x = 0; x < students.length; x++) {
//    var student = students[x];
//    console.log(student.greeting());
//}
//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);


//Alex brown
//this.car = "Honda civic with ugly spoiler.";
//
//var marksGarage = {
//  car: "Aston Martin",
//  getCar: function () {
//    return this.car;
//  }
//};
//
//console.log(marksGarage.getCar());
//
//var storeGetCarForLater = marksGarage.getCar;
//
//console.log(storeGetCarForLater());
//
//var theRealGetCarForLater = marksGarage.getCar.bind(marksGarage); //storeGetCarForLater.bind(marksGarage);
//
//console.log(theRealGetCarForLater());


























