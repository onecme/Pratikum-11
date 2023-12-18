function penjumlahan() {
    let bilangan1 = parseFloat(document.getElementById('bilangan1').value) || 0;
    let bilangan2 = parseFloat(document.getElementById('bilangan2').value) || 0;
    let hitung = bilangan1 + bilangan2

    let hasilPenjumlahan = document.getElementById('hasilPenjumlahan');
    hasilPenjumlahan.innerHTML = hitung

   
}
