# payment/utils.py

from django.conf import settings
from zeep import Client

MERCHANT_ID = settings.PAYMENT['ZARINPAL_MERCHANT_ID']
DESCRIPTION = settings.PAYMENT['ZARINPAL_DESCRIPTION']
CALLBACK_URL = settings.PAYMENT['ZARINPAL_CALLBACK_URL']
SANDBOX = settings.PAYMENT['ZARINPAL_SANDBOX']

if SANDBOX:
    ZARINPAL_WEBSERVICE = 'https://sandbox.zarinpal.com/pg/services/WebGate/wsdl'
    ZARINPAL_STARTPAY = 'https://sandbox.zarinpal.com/pg/StartPay/'
else:
    ZARINPAL_WEBSERVICE = 'https://www.zarinpal.com/pg/services/WebGate/wsdl'
    ZARINPAL_STARTPAY = 'https://www.zarinpal.com/pg/StartPay/'

client = Client(ZARINPAL_WEBSERVICE)

def send_request(amount, description, email, mobile, callback_url):
    result = client.service.PaymentRequest(
        MERCHANT_ID,
        amount,
        description,
        email,
        mobile,
        callback_url,
    )
    if result.Status == 100:
        return {
            'status': True,
            'url': ZARINPAL_STARTPAY + str(result.Authority),
            'authority': result.Authority,
        }
    else:
        return {'status': False, 'code': result.Status}

def verify_payment(amount, authority):
    result = client.service.PaymentVerification(
        MERCHANT_ID,
        authority,
        amount,
    )
    if result.Status == 100:
        return {'status': True, 'ref_id': result.RefID}
    else:
        return {'status': False, 'code': result.Status}
