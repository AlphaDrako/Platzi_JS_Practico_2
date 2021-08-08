/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */

//*

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



function CalcularprecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function fn_Calcular_Precio_ConDescuento(){

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

  

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCoupon.value + " no es válido");
    }

    
    precio = document.getElementById("InputPrecio").value;
    descuento = document.getElementById("InputDescuento").value;

    const resultp = document.getElementById("idPrecioDescuento");
    resultp.innerText = 
        "Precio con Descuento: " + CalcularprecioConDescuento(precio,descuento);

    if (!userCoupon) {
            alert("El cupón " + userCoupon.value + " no es válido");
        } else {
            const descuento = userCoupon.discount;
            const precioConDescuento = CalcularprecioConDescuento(precio, descuento);
        
            const resultP = document.getElementById("idPrecioDescuento");
            resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
        
        
   
}




