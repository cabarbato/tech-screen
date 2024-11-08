'''
Backend service for Shopping Cart
'''

import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    '''
    Health check route
    '''
    return 'Hello World'

@app.route('/transactions/new', methods = ['POST'])
def process_transaction():
    '''
    Accepts new transaction info in body and then saves transaction to transactions.json
    '''
    data = json.loads(request.data)
    print(data)

    # Save new transaction to transactions.json

    return '200'


@app.route('/transactions/<trans_id>')
def get_transaction(trans_id):
    '''
    Route to get a past transaction by transaction id
    '''
    with open('transactions.json', 'r', encoding='utf-8') as f:
        history = json.loads(f.read())

    matches = list(filter(lambda x: str(x['id']) == trans_id, history))

    return matches

@app.route('/transactions/metrics')
def get_transaction_metrics():
    '''
    Route to get metrics about past transactions
    '''

    # Open transaction history

    # Calculate the average $$$ amount for all past transactions
    average_cost = None

    # Find the most popular item by total sold
    most_popular = None

    return {"average_cost": average_cost, "most_popular": most_popular}

def sanitize_discounts():
    '''
    Your colleague just noticed that we've been calculating discount totals incorrectly!

    In a cart, each item has a total sold, a discount %, and a discount amount in $
    The cart has a total discount $.

    But this total discount $ is incorrect!

    For each cart in transactions.json, calculate each item's total $ discount, add them up,
    and re-save the cleaned-up discount totals.

    Save this history under transactions_corrected.json
    '''
    with open('transactions.json', 'r', encoding='utf-8') as f:
        history = json.loads(f.read())

    corrected_transactions = {}

    with open('transactions_corrected.json', 'w', encoding='utf-8') as f:
        f.write(corrected_transactions)

if __name__ == '__main__':
    # sanitize_discounts()
    app.run(debug=True)
