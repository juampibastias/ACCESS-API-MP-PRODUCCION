const axios = require("axios");


class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {

      payer_email: "test_user_11567634@testuser.com",
      items: req,
      
      
      back_urls: {
        success: "https://access-virtual-tienda.herokuapp.com/profile",
        failure: "https://access-virtual-tienda.herokuapp.com/failurePage",
        pending: "https://access-virtual-tienda.herokuapp.com/pendingPage", 
      },
      notification_url:"http://morning-citadel-17524.herokuapp.com/notification"
    };
    
    const payment = await axios.post(url, body, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })

    return payment.data;
  }
}

module.exports = PaymentService;