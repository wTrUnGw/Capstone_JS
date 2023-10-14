// GET PRODUCT
function apiGetProducts(searchValue) {
  // PHẢI CÓ TỪ KHÓA RETURN ĐỂ .THEN VÀ .CATCH
  return axios({
    url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/Product",
    method: "GET",
    params: {
      type: searchValue || undefined,
    },
  });
}
