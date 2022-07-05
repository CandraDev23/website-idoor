function checkform(){
    var namapengguna= document.getElementById("verifikasi-namapengguna").value;
    var katasandi= document.getElementById("verifikasi-katasandi").value;
    
    if (namapengguna == "" && katasandi == "")
    alert("tidak berhasil verifikasi")
    else
    alert("berhasil verifikasi")
}