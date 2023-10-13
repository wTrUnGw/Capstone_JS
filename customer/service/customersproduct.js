// GET PRODUCT
function apiGetProducts(searchValue) {
  // PHẢI CÓ TỪ KHÓA RETURN ĐỂ .THEN VÀ .CATCH
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product`,
    method: "GET",
    params: {
      productName: searchValue || undefined,
    },
  });
}

// GET PRODUCT BY ID
function apiGetProductById(productId) {
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/${productId}`,
    method: "GET",
  });
}

// CREATE PRODDUCT
function apiCreateProduct(product) {
  return axios({
    url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product",
    method: "POST",
    data: product, //method post phải có thêm data ( dữ liệu kèm theo )
  });
}

// UPDATE PRODUCT
function apiUpdateProduct(productId, newProduct) {
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/${productId}`,
    method: "PUT",
    data: newProduct, //method post phải có thêm data ( dữ liệu kèm theo )
  });
}

// DELELTE PRODUCT
function apiDeleteProduct(productId) {
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/${productId}`,
    method: "DELETE",
  });
}
