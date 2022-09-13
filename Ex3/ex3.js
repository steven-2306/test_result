function newRebalancingTx(closingAccounts, recipientAccounts){
    //closingAccounts = [{id, amount}...]
    //recipientAccounts = [{id, amount}...]
    
    transfers = [{C_id, R_id, amount}, ...]
    if(closingAccounts.sum(amount) <= recipientAccounts.sum(amount))
        throw "not enough funds for rebalance"
    
    //distribute value to received account
    for(i = 0; i< closingAccounts.length; i++){
        var trans_one_account = newRebalancingTx(closingAccounts[i], recipientAccounts);
        recipientAccounts = recipientAccounts.removeAll(x=>x.amount == 0);
        transfers.add(trans_one_account);
        //validate transaction fee
        if(closingAccounts.sum(amount) + transfers.length * 10 <= recipientAccounts.sum(amount))
            throw "not enough funds for rebalance"    
        
    }
    //Distribute fee & truncate transaction
    TotalFee = transfers.length * 10;
    sumRemainder = 0;
    count = 0;
    for(i = transfers.length -1; i>= 0; i--){
        sumRemainder += transfers[i].amount;
        if(sumRemainder >= TotalFee - count *10){            
            if(sumRemainder == TotalFee - count * 10){
                transfers = transfers.split(start_Index = 0, end_index = i - 1);
            }
            else{
                transfers = transfers.split(start_Index = 0, end_index = i);
                transfers[i].amount -= TotalFee - count * 10 - sum(i>= transfers.length - 0? 0 : transfers[start_Index = i +1 ... transfers.length].amount);
            }
            break;
        }
        count ++;    
    }
    return
    {
        transfers: transfers,
        operationalFee: transfers.length * 10
    }    
}

function newRebalancingTx(oneAccount = {id, amount}, recipientAccounts){
    var transactions = [];
    value = oneAccount.amount;
    for(i = 0; i< recipientAccounts.length; i++){
        if(value>= recipientAccounts.amount){
            transactions.add([oneAccount.id, recipientAccounts[i].id, recipientAccounts.amount]);            
            value -= recipientAccounts[i].amount;            
            recipientAccounts[i].amount = 0;
            if (value == 0) break;
        }
        else{
            transactions.add([oneAccount.id, recipientAccounts[i].id, value])
            recipientAccounts[i].amount -= value;
            break;
        }        
    }
    if(value >0){
        transactions.add([oneAccount.id, null, value])
    }
    return transactions;
}