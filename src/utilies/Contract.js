export const financeAppTokenAddress =
	"0x705c48E376BAe4bCD202be9C1c2AF8FBd8E9DF50";

export const financeAppTokenAbi = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "burnFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}];

export const financeAppContractAddress =
	"0xbEEE632CF5C9b070e6655E66aC9F9ecaB18C7D6e";
export const financeAppContract_Abi = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "user",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "FTMamount",
		"type": "uint256"
	}],
	"name": "Deposit",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "user",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "DepositBySplit",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Paused",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "user",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "referral",
		"type": "address"
	}],
	"name": "Register",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "user",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "address",
		"name": "receiver",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "TransferBySplit",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "Unpaused",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "address",
		"name": "user",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "withdrawable",
		"type": "uint256"
	}],
	"name": "Withdraw",
	"type": "event"
}, {
	"inputs": [],
	"name": "BNB_BUSD_LP",
	"outputs": [{
		"internalType": "contract IPancakePair",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "BNBperBUSD",
	"outputs": [{
		"internalType": "uint256",
		"name": "_per",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "BUSD",
	"outputs": [{
		"internalType": "contract IERC20",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "BUSDperULE",
	"outputs": [{
		"internalType": "uint256",
		"name": "_per",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_num",
		"type": "uint256"
	}],
	"name": "ChangeBoosterCondition",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "Gold",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Platinum",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "Silver",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "ULE_BNB_LP",
	"outputs": [{
		"internalType": "contract IPancakePair",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "ULEperBNB",
	"outputs": [{
		"internalType": "uint256",
		"name": "_per",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "_calCurDynamicRewards",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "_calCurStaticRewards",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "_calLevelNow",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "packageAmount",
		"type": "uint256"
	}],
	"name": "_deposit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "_distributeDeposit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "_distributeGoldStar",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "_distributePlatinumStar",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "_distributeSilverStar",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "_updateROI",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "balStatus",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "boosterDay",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_address",
		"type": "address"
	}],
	"name": "boosterIncomeIsReady",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "boosterIncomeUSers",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "boosterUserTime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "currentIncome",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "dayTopUsers",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "defaultRefer",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_tokenAmount",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "_packageAmount",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "_nonce",
		"type": "uint256"
	}, {
		"internalType": "bytes",
		"name": "_signature",
		"type": "bytes"
	}],
	"name": "deposit",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "depositBySplit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "depositRecord",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "depositors",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "distributePoolRewards",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "emergencyWithdrawFTM",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "emergencyWithdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "feeReceivers",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getBoosterTeamDeposit",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "getCurDay",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getCurROI",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getCurSplit",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "getDepositorsLength",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getMaxFreezing",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getOrderLength",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getRewards",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getTeamDeposit",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_layer",
		"type": "uint256"
	}],
	"name": "getTeamUsersLength",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_user",
		"type": "address"
	}],
	"name": "getTimeDiffer",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "isFreezeReward",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "lastDistribute",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "level3Users",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "level4Users",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "level5Users",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "orderInfos",
	"outputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "start",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "unfreeze",
		"type": "uint256"
	}, {
		"internalType": "bool",
		"name": "isUnfreezed",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "pauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "paused",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_referral",
		"type": "address"
	}],
	"name": "register",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "rewardInfo",
	"outputs": [{
		"internalType": "uint256",
		"name": "capitals",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "statics",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "directs",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "level2to5",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "level6to20",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "split",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "ROIReleasedd",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "splitDebt",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "Platinum",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "Silver",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "Gold",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "top",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalWithdrawls",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "startTime",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "teamUsers",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "toString",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "pure",
	"type": "function"
}, {
	"inputs": [],
	"name": "topPool",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "totalDeposits",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalUser",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "_receiver",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "_amount",
		"type": "uint256"
	}],
	"name": "transferBySplit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "unPauseContract",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "signerAddress_",
		"type": "address"
	}],
	"name": "updateSignerAddress",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
	}],
	"name": "usedHash",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "userInfo",
	"outputs": [{
		"internalType": "address",
		"name": "referrer",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "start",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "level",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "maxDeposit",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalDeposit",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "teamNum",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "maxDirectDeposit",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "teamTotalDeposit",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalFreezed",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "totalRevenue",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"name": "userLayer1DayDeposit",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdraw",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"stateMutability": "payable",
	"type": "receive"
}];