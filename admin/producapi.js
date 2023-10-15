function CallApi() {
  this.fectchData = function () {
    var promise = axios({
      url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product",
      method: "GET",
    });
    return promise;
  };
  this.deleteProductById = function (id) {
    var promise = axios({
      url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/" + id,
      method: "DELETE",
    });
    return promise;
  };
  this.addProductApi = function (product) {
    var promise = axios({
      url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product",
      method: "POST",
      data: product,
    });
    return promise;
  };
  this.getProductById = function (id) {
    var promise = axios({
      url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/" + id,
      method: "GET",
    });
    return promise;
  };
  this.updateProductApi = function (product) {
    return axios({
      url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
