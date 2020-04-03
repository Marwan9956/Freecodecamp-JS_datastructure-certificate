/*
5-JavaScript Algorithms and Data Structures Projects: Cash Register


Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*****************************************************************************************
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return 
{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


*****************************************************************************************
Currency Unit  		-----	 Amount
-------------------------------------
Penny	       		-----    $0.01 (PENNY)
Nickel	       		-----    $0.05 (NICKEL)
Dime	       		-----    $0.1  (DIME)
Quarter	            -----    $0.25 (QUARTER)
Dollar	       		----- 	 $1    (DOLLAR)
Five Dollars        -----    $5    (FIVE)
Ten Dollars	        -----    $10   (TEN)
Twenty Dollars      -----    $20   (TWENTY)
One-hundred Dollars	-----    $100 (ONE HUNDRED)

********************************************************************************************
1-check if you have enough cash for the price
2-check if there is change or it is the value for the product meaningin cash = price 
3-get the change cash - price 
4-split the change on multiple part by subtracting from top to bottom until no remainging -> recursion function 
5-return {status: "OPEN", change: [["QUARTER", 0.5]]} 
--return status and change   
status open -  -> if cid is having money after change 
{status: "CLOSED", change: [...]} -> if cid is empty after change  
status: "INSUFFICIENT_FUNDS", change: []} -> if cid is doesn't have enough money to make the change  

*/


function checkCashRegister(price, cash, cid) {
	var changeArr = [];
	var change = cash - price;
	var cidTotal =  cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
	cidTotal = parseFloat(cidTotal.toFixed(2));
	
	//1-check if you have enough cash for the price
	if(cash > price && cidTotal > cash){
		// Here is your change, ma'am.
		return calculateChange(change);
	}else if(cash == price){
		console.log('there is no change for customer');
		return 'there is no change for customer';
	}else if(change == cidTotal){
		//status close
		var closedStatus = {status : 'CLOSED' , change : cid };
		console.log(closedStatus);
		return closedStatus;
		
	}else if(cidTotal < cash){
		console.log({status:'INSUFFICIENT_FUNDS', change : []});
		return {status:'INSUFFICIENT_FUNDS', change : []};
	}
	
	
	
	function calculateChange(num){
		var tempArr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
		//here you keep subtracting until change is zero and 
		//which change you used added to new array
		var penny 	= cid[0][1];
		var Nickel	= cid[1][1];
		var Dime  	= cid[2][1];
		var Quarter = cid[3][1];
		var one  	= cid[4][1];
		var five 	= cid[5][1];
		var ten  	= cid[6][1];
		var twenty 	= cid[7][1];
		var hundred = cid[8][1];
		
		while(num > 0){
			//parseFloat and toFixed(2)  to get number in abs with two digit  like  20.00
			if(num >= 100 && hundred >= 100 ){
				//hundred Dollars
				num -= 100;
				num = parseFloat(num.toFixed(2));
				hundred -= 100;
				hundred = parseFloat(hundred.toFixed(2));
				tempArr[8][1] += 100;
			}else if(num >= 20 && twenty >= 20){
				//twenty Dollars
				num -= 20;
				num = parseFloat(num.toFixed(2));
				twenty -= 20;
				twenty = parseFloat(twenty.toFixed(2));
				tempArr[7][1] += 20;
			}else if(num >= 10 && ten >= 10){
				//Ten Dollars
				num -= 10;
				num = parseFloat(num.toFixed(2));
				ten -= 10;
				ten = parseFloat(ten.toFixed(2));
				tempArr[6][1] += 10;
			}else if(num >= 5 && five >= 5){
				//Five Dollars
				num  -= 5;
				num = parseFloat(num.toFixed(2));
				five -= 5;
				five = parseFloat(five.toFixed(2));
				tempArr[5][1] += 5;
			}else if(num >= 1 && one >= 1 ){
				//One Dollar
				num -= 1;
				num = parseFloat(num.toFixed(2));
				one -= 1;
				one = parseFloat(one.toFixed(2));
				tempArr[4][1]+= 1;
			}else if(num >= 0.25 && Quarter >= 0.25){
				//Quarter
				num -= 0.25;
				num = parseFloat(num.toFixed(2));
				Quarter -= 0.25;
				Quarter = parseFloat(Quarter.toFixed(2));
				tempArr[3][1]+= 0.25;
				tempArr[3][1] = parseFloat(tempArr[3][1].toFixed(2));
			}else if(num >= 0.1 && Dime >= 0.1 ){
				//Dime
				num -= 0.1;
				num = parseFloat(num.toFixed(2));
				Dime-= 0.1;
				Dime = parseFloat(Dime.toFixed(2));
				tempArr[2][1]+= 0.1;
				tempArr[2][1] = parseFloat(tempArr[2][1].toFixed(2));
			}else if(num >= 0.05 && Nickel >= 0.05){
				//Nickel
				num -= 0.05;
				num = parseFloat(num.toFixed(2));
				Nickel -= 0.05;
				Nickel = parseFloat(Nickel.toFixed(2));
				tempArr[1][1] += 0.05;
				tempArr[1][1] = parseFloat(tempArr[1][1].toFixed(2));
			}else if(num >= 0.01 && penny >= 0.01){
				//Penny
				num -= 0.01;
				num = parseFloat(num.toFixed(2));
				penny -= 0.01;
				penny = parseFloat(penny.toFixed(2));
				tempArr[0][1] += 0.01;
				tempArr[0][1] = parseFloat(tempArr[0][1].toFixed(2));
			}else{
				//INSUFFICIENT_FUNDS 
				return {status:'INSUFFICIENT_FUNDS', change : []};
			}//***********************End of IF ELSE Chain
			
			
			//change is complete
			if(num == 0){
				//console.log('change is complete');
				var resultObj = {};
				var resultArr = [];
				for(var i = 0 ; i < tempArr.length; i++){
					if(tempArr[i][1] != 0){
						resultArr.push(tempArr[i]);
					}
				}
				if(checkStatus() == 'OPEN'){
					//console.log('open statue');
					resultObj = {status : checkStatus() , change : resultArr.reverse() };
				}else{
					//console.log('Close statue');
					resultObj = {status : checkStatus() , change : tempArr };
				}
				
				console.log(resultObj);
				return resultObj;
			}
		}////////////////////////EndWhile
		
		// getting the current status
		function checkStatus(){
			if(hundred == 0 && twenty == 0 && ten == 0 && five == 0 && one == 0 && Quarter == 0 && Dime == 0 && Nickel == 0 && penny == 0){
				//status is close CLOSED
				return 'CLOSED';
			}else{
				//status is open 
				return 'OPEN';
			}
		}
		
		//END of calculateChange Function
	}
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); should return {status: "OPEN", change: [["QUARTER", 0.5]]}.


//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.


//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.


//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); should return {status: "INSUFFICIENT_FUNDS", change: []}.


//checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

var st = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(st);

