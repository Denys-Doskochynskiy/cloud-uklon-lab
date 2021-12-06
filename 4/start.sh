while [ : ]
do
    python3 post.py --endpoint akuxlgg4ooz23-ats.iot.us-east-2.amazonaws.com --cert bc33522c91d6086d04619a774cf477859803c09cc492614c6eec3bbd42e5aca7-certificate.pem.crt --key bc33522c91d6086d04619a774cf477859803c09cc492614c6eec3bbd42e5aca7-private.pem.key --topic CLOUD_LAB
    sleep 10
done
