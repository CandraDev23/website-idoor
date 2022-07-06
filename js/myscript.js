function checkform(){
    var namapengguna= document.getElementById("verifikasi-namapengguna").value;
    var katasandi= document.getElementById("verifikasi-katasandi").value;
    
    if (namapengguna == "" && katasandi == "")
    alert("tidak berhasil verifikasi")
    else
    alert("berhasil verifikasi")
}
function showhidepassword() {
    var katasandi= document.getElementById("verifikasi-katasandi")

    if (katasandi.type === "password") {
        katasandi.type = "text";
    } else {
        katasandi.type ="password";
    }
}
