import json
import awsgi
import boto3
import os
import ast
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4
os.environ['AWS_DEFAULT_REGION'] = 'us-east-2'
client = boto3.client("dynamodb")
TABLE = os.environ.get("STORAGE_UKLONDB_NAME")
app = Flask(__name__)
CORS(app)
BASE_ROUTE = "/uklon"


@app.route(BASE_ROUTE, methods=['POST'])
def create_uklon():
    request_json = request.get_json()
    print(request.get_json().get("user_name"))
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'user_name': {'S': request_json.get("user_name")},
        'car_model': {'S': request_json.get("car_model")},
        'car_number': {'S': request_json.get("car_number")},
        'is_active': {'S': request_json.get("is_active")},
        'last_order_complete': {'S': request_json.get("last_order_complete")},
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
        UpdateExpression='SET #user_name = :user_name, #car_model = :car_model, #car_number = :car_number, #is_active = :is_active, #last_order_complete = :last_order_complete',
        ExpressionAttributeNames={
            '#user_name': 'user_name',
            '#car_model': 'car_model',
            '#car_number': 'car_number',
            '#is_active': 'is_active',
            '#last_order_complete': 'last_order_complete'
        },
        ExpressionAttributeValues={
            ':user_name': {'S': request.json['user_name']},
            ':car_model': {'S': request.json['car_model']},
            ':car_number': {'S': request.json['car_number']},
            ':is_active': {'S': request.json['is_active']},
            ':last_order_complete': {'S': request.json['last_order_complete']}
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
