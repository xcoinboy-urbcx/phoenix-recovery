# phoenix_scanner.py – versão pública 1.0
# pip install ecdsa bit requests tqdm

import requests, json, time
from bit import Transaction
from tqdm import tqdm

def get_balance(addr):
    try:
        r = requests.get(f"https://blockchain.info/balance?active={addr}", timeout=10)
        return r.json()[addr]['final_balance']
    except:
        return 0

def scan_address(addr):
    balance = get_balance(addr)
    if balance == 0:
        return None
    print(f"[+] {addr} → saldo {balance/1e8:.4f} BTC")
    # aqui entra a lógica de nonce reuse/lattice (versão full no repo privado)
    return {"addr": addr, "balance": balance}

addresses = [
    "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",  # famoso com saldo
    "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
    # adiciona mais aqui
]

for a in tqdm(addresses):
    result = scan_address(a)
    if result:
        print(result)
