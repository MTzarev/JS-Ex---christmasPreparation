function chrismasPreparation(input) {
    let paperNum = Number(input[0]);
    let clothNum = Number(input[1]);
    let glueNum = Number(input[2]);
    let discount = Number(input[3]);
    let totalForPaper = paperNum * 5.80;
    let totalForCloth = clothNum * 7.2;
    let totalForGlue = glueNum * 1.20;
    let totalPrice = totalForPaper + totalForCloth + totalForGlue;
    let totalDiscount = totalPrice * discount / 100;
    let totalAfterDiscount = totalPrice - totalDiscount
    console.log(totalAfterDiscount.toFixed(3));
}
chrismasPreparation(["2", "3", "2.5", "25"])