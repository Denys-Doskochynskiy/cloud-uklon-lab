import json
import awsgi
import boto3
import os
import ast
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
# os.environ['AWS_DEFAULT_REGION'] = 'us-east-2'
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
client = boto3.client("dynamodb", region_name='us-east-2', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
TABLE = os.environ.get("STORAGE_UKLONDB_NAME")
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})
BASE_ROUTE = "/uklon"


@app.route(BASE_ROUTE, methods=['POST'])
def create_uklon():
    request_json = request.get_json()
    #print(request.get_json().get("user_name"))
    if request_json.get("API_KEY") != "keyhere":
        return jsonify(message="Wrong API key")
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'timestamp': {'S': request_json.get("timestamp")},
        'sensor_id': {'S': request_json.get("sensor_id")},
        'sensor_type': {'S': request_json.get("sensor_type")},
        'smoke_sensor': {'S': request_json.get("smoke_sensor")},
        'sensor_model': {'S': request_json.get("sensor_model")},
        'responsible_person': {'S': request_json.get("responsible_person")},
        'API_KEY': {'S': request_json.get("API_KEY")},
    })
    return jsonify(message="item created")

@app.route(BASE_ROUTE, methods=['GET'])
def list_games():
    response = client.scan(TableName=TABLE)
    data = response['Items']
    while response.get('LastEvaluatedKey'):
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        data.extend(response['Items'])
    return jsonify(data)

@app.route(BASE_ROUTE + '/<uklon_id>', methods=['PUT'])
def update_uklon(uklon_id):
    client.update_item(
        TableName=TABLE,
        Key={'id': {'S': uklon_id}},
        UpdateExpression='SET #timestamp = :timestamp, #sensor_id = :sensor_id, #sensor_type = :sensor_type, #smoke_sensor = :smoke_sensor, #sensor_model = :sensor_model, #responsible_person = :responsible_person, #API_KEY = :API_KEY',
        ExpressionAttributeNames={
            '#timestamp': 'timestamp',
            '#sensor_id': 'sensor_id',
            '#sensor_type': 'sensor_type',
            '#smoke_sensor': 'smoke_sensor',
            '#sensor_model': 'sensor_model',
            '#responsible_person': 'responsible_person',
            '#API_KEY': 'API_KEY'
        },
        ExpressionAttributeValues={
            ':timestamp': {'S': request.json['timestamp']},
            ':sensor_id': {'S': request.json['sensor_id']},#
            ':sensor_type': {'S': request.json['sensor_type']},#
            ':smoke_sensor': {'S': request.json['smoke_sensor']},#
            ':sensor_model': {'S': request.json['sensor_model']},#
            ':responsible_person': {'S': request.json['responsible_person']},#
            ':API_KEY': {'S': request.json['API_KEY']}#
        }
    )
    return jsonify(message="...............item updated?")
@app.route(BASE_ROUTE + '/<uklon_id>', methods=['DELETE'])
def delete_uklon(uklon_id):
    client.delete_item(
        TableName=TABLE,
        Key={'id': {'S': uklon_id}}
    )
    return jsonify(message="...............item deleted?")

def handler(event, context):
    return awsgi.response(app, event, context)
if __name__ == '__main__':
    app.run(host='0.0.0.0')