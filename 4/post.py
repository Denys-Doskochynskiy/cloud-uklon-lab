import requests
import argparse
import time
from random import randint
import json

parser = argparse.ArgumentParser(description="Send messages through an HTTPS connection.")
parser.add_argument('--endpoint', required=True, help="Your AWS IoT data custom endpoint, not including a port. ")
parser.add_argument('--cert', required=True, help="File path to your client certificate, in PEM format.")
parser.add_argument('--key', required=True, help="File path to your private key, in PEM format.")
parser.add_argument('--topic', required=True, default="test/topic", help="Topic to publish messages to.")
parser.add_argument('--message', default="Hello World!", help="Message to publish. " +
                                                      "Specify empty string to publish nothing.")


args = parser.parse_args()

# create and format values for HTTPS request
publish_url = 'https://' + args.endpoint + ':8443/topics/' + args.topic + '?qos=1'
args.message = {"timestamp": str(time.time()), "sensor_id": "4", "sensor_type": "CLOUD-4", "smoke_sensor": str(randint(0,1)), "sensor_model": str(str(randint(0, 100))), "responsible_person": str(randint(0, 100))}
publish_msg = json.dumps(args.message)

# make request
publish = requests.request('POST',
            publish_url,
            data=publish_msg,
            cert=[args.cert, args.key])

# print results
print("Response status: ", str(publish.status_code))
if publish.status_code == 200:
        print("Response body:", publish.text)
