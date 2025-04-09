function getmaturityamount(){
    const principle=parseFloat(document.getElementById("principle").value);
    const interest=parseFloat(document.getElementById("interest-rate").value);
    const tenure=parseFloat(document.getElementById("tenure").value);

    const maturityamount=principle+(interest*principle*tenure/100);

    document.getElementById("result").innerText=`Maturity Amount : ${maturityamount.toFixed(2)}`;
}
document.getElementById("calculate").addEventListener('click',getmaturityamount);