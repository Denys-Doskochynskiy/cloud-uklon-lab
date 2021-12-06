import requests
import json
import time
from random import randint


url = 'http://www.dotemus.xyz/api/'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {"timestamp": str(time.time()), "sensor_id": "1",
             "sensor_type": "CLOUD-1", "smoke_sensor": str(randint(0, 100)),
             "sensor_model": str(str(randint(0, 100))),
             "responsible_person": str(randint(0, 100)),
             "API_KEY": "keyhere"}
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SENT_OBJ:", myobj)
    print(x.text)
    time.sleep(10)
