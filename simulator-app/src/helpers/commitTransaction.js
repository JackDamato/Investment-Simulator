const user = {"cash": 10000, "shares": 200};

//
function commitTransaction (transaction) {
    let cost = transaction.price * transaction.shareNumber;
    // handle buying transactions
    if (transaction.type == "Buy") {
        if (user.cash < cost)
            return "You do not have enough cash. INVALID TRANSACTION";
    }
    // handle selling transactions
    else {
        if (user.shares < transaction.shareNumber)
            return "You do not own enough shares. INVALID TRANSACTION";
    }
    
    return "Valid";
    
};

export default commitTransaction;