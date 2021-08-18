/* const priceOriginal = 100;
const discount = 15;
 */
function calculatePriceWithDiscount(price, discount) {
    const percentagePriceWithdiscount = 100 - discount;
    const priceWithdiscount = (price * percentagePriceWithdiscount) / 100;

    return priceWithdiscount;
    

}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch(couponValue) {
    case "JuanDC_es_Batman":
      descuento = 15;
    break;
    case "pero_no_le_digas_a_nadie":
      descuento = 30;
    break;
    case "es_un_secreto":
      descuento = 25;
    break;
  }


  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("ResultP");

  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

