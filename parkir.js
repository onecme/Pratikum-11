function biayaParkir() {
    //tangkap input user
    let masuk = document.querySelector("#masuk").value
    let keluar = document.querySelector("#keluar").value

    // hitung durasi parkir 
    let durasi = keluar - masuk

    let biaya = 3000;
    
    // looping durasi untuk menghitung biaya
    for (let i = 2; i < durasi; i++){
        biaya += 1000
2     }
    
    // tangkap elemen untuk menampkan hasil 
    let hasilDurasi = document.querySelector("#hasilDurasi")
    let totalBiaya = document.querySelector("#totalBiaya")

    // tampilkan hasil 
    hasilDurasi.innerHTML = durasi
    totalBiaya.innerHTML = biaya

}