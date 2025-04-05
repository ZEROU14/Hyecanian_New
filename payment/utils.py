from django.conf import settings
import requests
import logging

# Configure logging
logger = logging.getLogger(__name__)

# Zarinpal configuration
MERCHANT_ID = settings.PAYMENT['ZARINPAL_MERCHANT_ID']
DESCRIPTION = settings.PAYMENT['ZARINPAL_DESCRIPTION']
CALLBACK_URL = settings.PAYMENT['ZARINPAL_CALLBACK_URL']
SANDBOX = settings.PAYMENT['ZARINPAL_SANDBOX']

# Select URLs based on the environment
if SANDBOX:
    ZARINPAL_REQUEST_URL = settings.ZARINPAL_URLS['SANDBOX']['REQUEST_URL']
    ZARINPAL_VERIFY_URL = settings.ZARINPAL_URLS['SANDBOX']['VERIFY_URL']
    ZARINPAL_STARTPAY = settings.ZARINPAL_URLS['SANDBOX']['STARTPAY_URL']
else:
    ZARINPAL_REQUEST_URL = settings.ZARINPAL_URLS['PRODUCTION']['REQUEST_URL']
    ZARINPAL_VERIFY_URL = settings.ZARINPAL_URLS['PRODUCTION']['VERIFY_URL']
    ZARINPAL_STARTPAY = settings.ZARINPAL_URLS['PRODUCTION']['STARTPAY_URL']

def send_request(amount, description, email, mobile, callback_url):
    data = {
        'MerchantID': MERCHANT_ID,
        'Amount': amount,
        'Description': description,
        'Email': email,
        'Mobile': mobile,
        'CallbackURL': callback_url,
    }
    try:
        response = requests.post(ZARINPAL_REQUEST_URL, json=data)
        response_data = response.json()
        if response_data['Status'] == 100:
            logger.info(f"Payment request successful. Authority: {response_data['Authority']}")
            return {
                'status': True,
                'url': ZARINPAL_STARTPAY + str(response_data['Authority']),
                'authority': response_data['Authority'],
            }
        else:
            logger.error(f"Payment request failed. Status code: {response_data['Status']}")
            return {'status': False, 'code': response_data['Status']}
    except Exception as e:
        logger.exception("An error occurred while sending payment request.")
        return {'status': False, 'message': str(e)}

def verify_payment(amount, authority):
    data = {
        'MerchantID': MERCHANT_ID,
        'Authority': authority,
        'Amount': amount,
    }
    try:
        response = requests.post(ZARINPAL_VERIFY_URL, json=data)
        response_data = response.json()
        if response_data['Status'] == 100:
            logger.info(f"Payment verification successful. RefID: {response_data['RefID']}")
            return {'status': True, 'ref_id': response_data['RefID']}
        else:
            logger.error(f"Payment verification failed. Status code: {response_data['Status']}")
            return {'status': False, 'code': response_data['Status']}
    except Exception as e:
        logger.exception("An error occurred while verifying payment.")
        return {'status': False, 'message': str(e)}