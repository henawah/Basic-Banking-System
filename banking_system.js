let saldo = 20000
document.getElementById('saldo').textContent = saldo
class BankAccount{
    constructor(){
        this.saldo = saldo
    }
    deposit(amount){
        setTimeout(()=>{
            if(!isNaN(amount) && typeof amount === 'number' && amount > 0){
                this.saldo += amount
            }else{
                alert("Saldo gagal di tambahkan")
            }
        }, 1000) //setTimeout
    }
    withdraw(amount){
        setTimeout(()=>{
            if(!isNaN(amount) && typeof amount === 'number' && amount > 0 && amount <= this.saldo){
                this.saldo -= amount
            }else{
                alert("Saldo tidak cukup")
            }
        }, 1000) //setTimeout
    }
}
const bankAccount = new BankAccount();
const updateSaldo = (saldo) => {
    document.getElementById('saldo').textContent = saldo
}
const tambahSaldo = () => {
    let input = prompt("Masukan Jumlah Saldo yang ditambahkan ")
    saldo = saldo + parseInt(input)
    updateSaldo(saldo)
}
const kurangSaldo = () => {
    let input = prompt("Masukan Jumlah Saldo yang ditambahkan ")
    bankAccount.withdraw(input);
    if (saldo < input) {
        window.alert("Saldo kurang")
    } else {
        saldo = saldo - parseInt(input)
        updateSaldo(saldo)
    }
}