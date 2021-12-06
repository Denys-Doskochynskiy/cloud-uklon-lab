while [ : ]
do
    python3 post.py --endpoint akuxlgg4ooz23-ats.iot.us-east-2.amazonaws.com --cert 8b1951553bc974d52e319666494a6495aa0dcae6c224b8888332a5ef4644b617-certificate.pem.crt --key 8b1951553bc974d52e319666494a6495aa0dcae6c224b8888332a5ef4644b617-private.pem.key --topic CLOUD_LAB
    sleep 10
done
