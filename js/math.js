function getMyEle(ele) {
    return document.getElementById(ele);
} // Tối ưu code 


function ChoseCar() {
    var ketqua;
    var uberX = getMyEle('uberX').checked;
    var uberSUV = getMyEle('uberSUV').checked;
    var uberBlack = getMyEle('uberBlack').checked;

    if (uberX) {
        ketqua = "uberX";
    } else if (uberSUV) {
        ketqua = "uberSUV";
    } else if (uberBlack) {
        ketqua = "uberBlack";
    }
    return ketqua;
}

document.querySelector('#total').onclick = function () {
    // Lấy value từ input
    Distance = Number(document.querySelector('#distance').value);
    Distance = parseFloat(Distance);
    Waitting = Number(document.querySelector('#wait-time').value);
    Waitting = parseFloat(Waitting);
    // Check nhập
    let isCheck = true;
    if (Distance == '') {
        alert('Bạn chưa nhập số kilometer cần đi ');
        isCheck = false;
        return isCheck;
    }
    // end
    var divThanHTien = getMyEle('divThanhTien');
    divThanHTien.style.display = "block";
    var loaixe = ChoseCar();
    var thanhtien = 0;
    var xuatTien = getMyEle('xuatTien');
    switch (loaixe) {
        case 'uberX':
            if (Distance <= 1) {
                thanhtien = Distance * 8000 + Waitting * 2000;
            } else if (Distance > 1 && Distance <= 20) {
                thanhtien = 1 * 8000 + (Distance - 1) * 12000 + Waitting * 2000;
            } else if (Distance > 20) {
                thanhtien = 1 * 8000 + 20 * 1200 + (Distance - 21) * 10000 + Waitting * 2000;
            }
            break;
        case 'uberSUV':
            if (Distance <= 1) {
                thanhtien = Distance * 9000 + Waitting * 3000;
            } else if (Distance > 1 && Distance <= 20) {
                thanhtien = Distance * 14000 + Waitting * 3000;
            } else if (Distance > 21) {
                thanhtien = Distance * 12000 + Waitting * 3000;
            }
            break;
        case 'uberBlack':
            if (Distance <= 1) {
                thanhtien = Distance * 10000 + Waitting * 4000;
            } else if (Distance > 1 && Distance <= 20) {
                thanhtien = Distance * 12000 + Waitting * 4000;
            } else if (Distance > 21) {
                thanhtien = Distance * 14000 + Waitting * 4000;
            }
            break;

    }
    xuatTien.innerHTML = thanhtien;
}
var btnInHoaDon = document.getElementById('btnInHoaDon')
btnInHoaDon.onclick = function () {
    var table = document.querySelector('#table')
    table.style.display = ' inline-table';
    var LoaiXe = ChoseCar();
    var Distance = Number(document.querySelector('#distance').value);
    Distance = parseFloat(Distance);
    var Waitting = Number(document.querySelector('#wait-time').value);
    Waitting = parseFloat(Waitting);

    var trHoaDon = document.createElement('tr');
    var tdLoaiXe = document.createElement('td');
    tdLoaiXe.innerHTML = LoaiXe;
    var tdSoKm = document.createElement('td');
    tdSoKm.innerHTML = Distance;

    trHoaDon.appendChild('tdLoaiXe');
    trHoaDon.appendChild('tdSoKm');

    document.querySelector('tbody').appendChild(trHoaDon);
}





