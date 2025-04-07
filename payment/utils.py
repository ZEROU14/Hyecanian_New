


import requests
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

MERCHANT_ID = 'd596b8f9-1dca-4223-871c-aca31d9503d9'
ZARINPAL_REQUEST_URL = 'https://payment.zarinpal.com/pg/v4/payment/request.json'
ZARINPAL_VERIFY_URL = 'https://payment.zarinpal.com/pg/v4/payment/verify.json'

# Sandbox URLs
ZARINPAL_SANDBOX_REQUEST_URL = 'https://sandbox.zarinpal.com/pg/v4/payment/request.json'
ZARINPAL_SANDBOX_VERIFY_URL = 'https://sandbox.zarinpal.com/pg/v4/payment/verify.json'


from decouple import config, Csv

import requests
from decouple import config
import logging

# Configure logging
logger = logging.getLogger(__name__)


def send_request(amount, description, mobile, callback_url, sandbox=True):
    url = ZARINPAL_SANDBOX_REQUEST_URL 
    data = {
        "merchant_id": MERCHANT_ID,
        "amount": amount,
        "callback_url": callback_url,
        "description": description,
        "metadata": {"mobile": mobile}
    }
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=data, headers=headers)
    
    # Log the URL, response status code, and content
    logger.debug(f"Zarinpal send_request URL: {url}")
    logger.debug(f"Zarinpal send_request response status: {response.status_code}")
    logger.debug(f"Zarinpal send_request response content: {response.content}")

    try:
        response_data = response.json()
    except ValueError:
        logger.error("Failed to decode JSON response from Zarinpal")
        return {"status": False, "code": "InvalidResponse", "message": "Failed to decode JSON response from Zarinpal"}

    if 'data' in response_data and 'code' in response_data['data']:
        if response_data['data']['code'] == 100:
            return {"status": True, "url": f"https://sandbox.zarinpal.com/pg/StartPay/{response_data['data']['authority']}" if sandbox else f"https://www.zarinpal.com/pg/StartPay/{response_data['data']['authority']}", "authority": response_data['data']['authority']}
        else:
            return {"status": False, "code": response_data['data']['code'], "message": response_data['data'].get('message', 'Unknown error')}
    elif 'errors' in response_data:
        return {"status": False, "code": response_data['errors']['code'], "message": response_data['errors']['message']}
    else:
        logger.error(f"Unexpected response format: {response_data}")
        return {"status": False, "code": "UnexpectedResponse", "message": "Unexpected response format from Zarinpal"}

def verify_payment(amount, authority, sandbox=True):
    url = ZARINPAL_SANDBOX_VERIFY_URL 
    data = {
        "merchant_id": MERCHANT_ID,
        "amount": amount,
        "authority": authority
    }
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=data, headers=headers)
    
    # Log the URL, response status code, and content
    logger.debug(f"Zarinpal verify_payment URL: {url}")
    logger.debug(f"Zarinpal verify_payment response status: {response.status_code}")
    logger.debug(f"Zarinpal verify_payment response content: {response.content}")

    try:
        response_data = response.json()
    except ValueError:
        logger.error("Failed to decode JSON response from Zarinpal")
        return {"status": False, "code": "InvalidResponse", "message": "Failed to decode JSON response from Zarinpal"}

    if 'data' in response_data and 'code' in response_data['data']:
        if response_data['data']['code'] == 100:
            return {"status": True, "ref_id": response_data['data']['ref_id']}
        else:
            return {"status": False, "code": response_data['data']['code'], "message": response_data['data'].get('message', 'Unknown error')}
    elif 'errors' in response_data:
        return {"status": False, "code": response_data['errors']['code'], "message": response_data['errors']['message']}
    else:
        logger.error(f"Unexpected response format: {response_data}")
        return {"status": False, "code": "UnexpectedResponse", "message": "Unexpected response format from Zarinpal"}












