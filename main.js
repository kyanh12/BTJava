// tính lương nhân viên
var currentFormat = new Intl.NumberFormat("vn-VN");
document.getElementById("btn-nut").onclick = function(){
//    đầu vào 
    var luongNgay = 100000;
// xử lí 
    var soNgayLam = document.getElementById("txtNgayLam").value;
// đàu ra
    var luong = luongNgay * soNgayLam;
    var ketQua = "Lương nhận được " + currentFormat.format(luong) +" VND";
    console.log(ketQua);
    var thongBao = document.getElementById("footerLuong").innerHTML =ketQua;
}


// tính số trung bình
document.getElementById("btn-trungbinh").onclick = function(){
    // đầu vào

    var sothu1 = document.getElementById("txtso1").value*1;
    var sothu2 = document.getElementById("txtso2").value*1;
    var sothu3 = document.getElementById("txtso3").value*1;
    var sothu4 = document.getElementById("txtso4").value*1;
    var sothu5 = document.getElementById("txtso5").value*1;

    // xử lí
    var tong = sothu1 + sothu1 + sothu1 + sothu1 + sothu1 ;
    // đầu ra
    var ketQua = "trung binh của 5 số là " + tong /5 ;
    console.log(ketQua);
    var thongbao = document.getElementById("footerTrungBinh").innerHTML =ketQua;


}

// đổi tiền USD sang VND
document.getElementById("btnQuyDoi").onclick = function(){
    var tienUSD = document.getElementById("txtUSD").value;
    var tienVND = 23500;

    // xử lí
    var quyDoi = tienUSD * tienVND;
    // đầu ra 
    var ketQua = " Đổi Sang Tiền VND được là: " + currentFormat.format(quyDoi) + " VND";
    console.log("quyDoi");
    var thongbao = document.getElementById("footerQuyDoi").innerHTML = ketQua;

}


// tính chu vi hcn
document.getElementById("btnDapAn").onclick = function(){
    var chieuDai = document.getElementById("txtChieuDai").value;
    var chieuRong = document.getElementById("txtChieuRong").value;
    
    //  xử lí
    var tongDaiRong = chieuDai * chieuRong;
    var dienTich = chieuDai * chieuRong;
    var chuVi = tongDaiRong * 2;
// đầu ra
 var    ketQua = "<div>";
            ketQua += "<p>Diện Tích là :" + dienTich  + "</p>";
            ketQua += "<p>chu Vi là :" + chuVi + " </p>";
        ketQua += "</div>";
        document.getElementById("footerDapAn").innerHTML = ketQua;  
        

}


// tính ký số
document.getElementById("btnNhapSo").onclick = function(){
    var kySo = document.getElementById("txtNhapSo").value;
    var donvi = kySo % 10;
    var chuc = Math.floor(kySo % 100 / 10);
    var tong = donvi + chuc;
    
    // xử lí
    var ketQua = "tống là " + tong ;
    document.getElementById("footerNhapSo").innerHTML = ketQua;
}



