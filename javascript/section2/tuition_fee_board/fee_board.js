
const instituteName = "Tops Technology";

let studentName = "Danish Khan";
let monthlyFee = 1800;
let batchName = "Frontend Development";
let paid = true;

console.log("Institute Name:", instituteName);
console.log("Student Name:", studentName);
console.log("Monthly Fee:", monthlyFee);
console.log("Batch Name:", batchName);
console.log("Fee Paid:", paid);

monthlyFee = 2000;
console.log("Updated Monthly Fee:", monthlyFee);


{
    var batchCode = "M9";
    let seatNo = '12';
}

console.log("Batch code : ", batchCode);
console.log("Seat no Type : ", typeof seatNo);


//Primitive Copy
let feeB = monthlyFee;
feeB = 2500;

console.log("Primitive Copy - monthlyFee:", monthlyFee);
console.log("Primitive Copy - feeB:", feeB);

// Reference Copy
const student1 = {
    name: "Aarav",
    fee: 1800
};

const student2 = student1;

student2.fee = 2200;

console.log("Reference Copy - student1.fee:", student1.fee);
console.log("Reference Copy - student2.fee:", student2.fee);



let feeStatus = 1800;
console.log("Fee Status Type:", typeof feeStatus);

feeStatus = "1800";
console.log("Fee Status Type:", typeof feeStatus);

feeStatus = false;
console.log("Fee Status Type:", typeof feeStatus);