# AirDrop-Variable-Tokens
This Airdrop tool can conduct several types of airdrops on the XRPL for porjects.
1) Holders Airdrop (with a snapshot taken at time of execution OR a defined Ledger Sequence)
2) Airdrop to all trustlines 
3) Airdrop to pre-defined accounts 

This prgram will output a JSON and CSV file that summaries the results, it includes every txID and the result of the transaction, for easy reference by projects and the community alike.
If network/websocket connections allow it, this airdrop can conduct up to 25k transactions an hour (but the true results varies from 10k an hour).

# Use-Case
It is very common to see new XRPL projects conduct airdrops to their supporters. This tool can conduct several different types of airdrop, all within the same program. It also records progress, so in the event of a malfunction, the tool can be restarted from the point it was at and no progress will be lost. This method is sought after by many XRPL projects. Any errors are also recorded in an ERRORs.txt file

# Variables 
The user can define numerous variables within the config file.
1) nodes: An array of websockets for Rippled nodes (the function will cycle through the array if necessary)
2) errorMargin: The portion of the max that will be sent, prevents over spending (recommended 0.9999)
3) Fee: Fee, in drops, for each transaction
4) retrymax: Max attempts repeat a process if an error was found (number)
5) tokens: Array of variables (used if multiple accounts/tokens are being used)
6) name: The name of the token (for logging purposes)
7) hex: Hexcode for the token (As defined by the XRPL/Rippled)
8) issuer: Issuing address of the token (XRPL)
9) total: The total amount the relevant token to send
10) holdersAD: Boolean, set as 'true' if the airdrop is proportional to the amount that is held by accounts
11) snapShotnow: Boolean, set as 'true', if the snapshot should be taken when the program begins
12) ledgerOfSnapshot: If 'snapShotnow' is false, this can be used to enter the desired Ledger Sequence to take a snapshot in
13) suppliedAccounts: Boolean, set as 'true', if the user has a set designation of accounts to send to
14) pathToJsonArrayOfAddresses: If relevant, the path to the locally stored JSON array of account to send the airdrop to
15) seedOfWallet: Seed of the XRPL wallet holding the funds. A valid mnemonic can be supplied instead, (refer to https://js.xrpl.org/classes/Wallet.html#fromMnemonic). Input the words with relevant capitalisation, seperated by blank spaces.
16) memo: The memo that the user wishes to add, must be under 1000 characters
17) saveFrequency: How often (amount of transactions) the user wishes to save progress, smaller numbers mean less chance of double-spending in the event of a system malfunction, larger values means the airdrop is conducted faster
18) blackList: An array of blacklisted accounts (team accounts)

# Operation
The program will ensure to check its progress at each point, and act according to the results found.

# Flow
1) Program records the current validated ledger and time in a file 
2) Program will conduct a snapshot at the defined ledger sequence (if necessary, else it will take the predefined accounts)
3) The program calculate the amount each holder/account will recieve (based on defined variables)
4) The program will send each account an Airdrop sequentially, and record the proposed Transaction ID (but will not check it at this stage)
5) Upon completion, the program will check each generated Transaction ID with Rippled, to get it's status on the XRPL
6) The program will then retry any non-submitted transactions (this rarely occurs, and indicates an issue), each new Transaction ID is then checked. This process repeats until all transactions have been successfuly passed on a validated ledger.
7) The status of each Transaction ID is recorded
8) A JSON and .CSV file is generated for user convenience. 

# Error Handling
All attempts will be made x times (defined in config file), in the event an attempt fails everytime, the program will close and create and log the error within an ERRORs.txt. The user can then resolve any issues as needed.

# Dependancies
xrpl -> https://github.com/XRPLF/xrpl.js

# Extra
Built using JS, OnChain Whales

