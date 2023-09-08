/*var saldo = 20000
function tambahSaldo() {
    var tambah = parseFloat(window.prompt("Saldo tambahan : "))
    console.log("saldo awal :"+saldo )
    if(!isNaN(tambah)&&tambah > 0){
        saldo += tambah;
        console.log("tambahan saldo :"+tambah )
        return tambah
    }else{
        console.log("input salah")
    }
    
}

function kurangSaldo() {
    var kurang = parseFloat(window.prompt("Saldo yang akan dikurangi : "))
    if(!isNaN(kurang)&&kurang > 0){
        saldo -= kurang;
        console.log("saldo akan dikurangi :"+kurang )
        console.log("saldo akhir :"+saldo )
        alert("saldo akhir :"+saldo )
        return kurang 
    }else{
        console.log("input salah")
    }
}

tambahSaldo()
kurangSaldo()
*/

let saldo = 20000
document.getElementById('saldo').textContent = saldo

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
    if (saldo < input) {
        window.alert("Saldo kurang")
    } else {
        saldo = saldo - parseInt(input)
        updateSaldo(saldo)
    }
}