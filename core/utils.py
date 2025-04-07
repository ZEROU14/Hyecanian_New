import requests
from django.conf import settings
import logging
import random

# Configure logging
logger = logging.getLogger(__name__)

def generate_otp(length=6):
    """Generate a numeric OTP with the specified length."""
    return ''.join([str(random.randint(0, 9)) for _ in range(length)])

def send_otp_via_kave_negar(phone_number, otp):
    api_key = settings.KAVEH_NEGAR['API_KEY']
    api_url = f"https://api.kavenegar.com/v1/{api_key}/verify/lookup.json"

    data = {
        'receptor': phone_number,
        'template': 'otp',  # Use your template name here
        'token': otp,  # Use the generated OTP
    }

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }

    logger.debug(f"Sending OTP request to {api_url} with data: {data} and headers: {headers}")

    try:
        response = requests.post(api_url, data=data, headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors
        response_data = response.json()

        logger.debug(f"Response from Kaveh Negar: {response_data}")

        if response_data['return']['status'] == 200:
            logger.info(f"OTP sent successfully to {phone_number}")
            return True
        else:
            logger.error(f"Failed to send OTP: {response_data['return']['message']}")
            return False
    except requests.exceptions.HTTPError as http_err:
        logger.exception(f"HTTP error occurred while sending OTP: {http_err}")
        return False
    except Exception as err:
        logger.exception(f"An error occurred while sending OTP: {err}")
        return False