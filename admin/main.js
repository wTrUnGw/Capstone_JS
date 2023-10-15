var api = new CallApi();
function getEle(id) {
  return document.getElementById(id);
}
function getListProduct() {
  var promise = api.fectchData();

  promise
    .then(function (result) {
      renderUI(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProduct();
function renderUI(data) {
  var content = "";

  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += `
          <tr>
              <td>${i + 1}</td>
              <td>${product.tenSP}</td>
              <td>${product.gia}</td>
              <td>
                  <img width="50" src="./img/${product.hinhAnh}" />
              </td>
              <td>${product.chatLieu}</td>

              <td>${product.moTa}</td>
              <td>
              <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${
                product.id
              })">Edit</button>
              <button class="btn btn-danger" onclick="deleteProduct(${
                product.id
              })">Delete</button>
              </td>
          </tr>
      `;
  }

  getEle("tblDanhSachSP").innerHTML = content;
}
function editProduct(id) {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Product";

  //tạo nút "Update" => gắn vào footer của modal
  var btnUpdate = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

  //lấy thông tin chi tiết của product dựa vào id
  var promise = api.getProductById(id);

  promise
    .then(function (result) {
      var product = result.data;
      //show data ra ngoài các thẻ input
      getEle("TenSP").value = product.tenSP;
      getEle("GiaSP").value = product.gia;
      getEle("HinhSP").value = product.hinhAnh;
      getEle("ChatLieuSP").value = product.chatLieu;
      getEle("MoTa").value = product.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function updateProduct(id) {
  // lấy thông tin từ user nhập liệu
  var tenSP = getEle("TenSP").value;
  var gia = getEle("GiaSP").value;
  var hinhAnh = getEle("HinhSP").value;
  var chatLieu = getEle("ChatLieuSP").value;
  var moTa = getEle("MoTa").value;
  var product = new Product(id, tenSP, gia, hinhAnh, chatLieu, moTa);
  api
    .updateProductApi(product)
    .then(function () {
      //close modal
      document.getElementsByClassName("close")[0].click();
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}
function deleteProduct(id) {
  var promise = api.deleteProductById(id);

  promise
    .then(function (result) {
      //xoá thành công => render lại giao diện
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}
getEle("btnThemSP").onclick = function () {
  //sửa lại tiêu đề cho modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";

  //tạo nút "Add" => gắn vào footer của modal
  var btnAdd = `<button class="btn btn-success" onclick="addProduct()">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
};

function addProduct() {
  // lấy thông tin từ user nhập liệu
  var tenSP = getEle("TenSP").value;
  var gia = getEle("GiaSP").value;
  var hinhAnh = getEle("HinhSP").value;
  var chatLieu = getEle("ChatLieuSP").value;
  var moTa = getEle("MoTa").value;
  var product = new Product("", tenSP, gia, hinhAnh, chatLieu, moTa);
  var promise = api.addProductApi(product);

  promise
    .then(function (result) {
      alert(`Add success ${result.data.tenSP}`);
      //close modal
      document.getElementsByClassName("close")[0].click();
      //xoá thành công => render lại giao diện
      getListProduct();
    })
    .catch(function (err) {
      console.log(err);
    });
}
