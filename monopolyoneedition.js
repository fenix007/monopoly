function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 500;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 1000;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 1500;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 2000;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 100 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 250 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Рента<span style="float: right;">250k.</span><br />Если две машины<span style="float: right;">500.</span><br />Если 3 машины<span style="float: right;">1000k.</span><br />Если 4 машины<span style="float: right;">2000k.</span></div>';
}

function luxurytax() {
	addalert(player[turn].name + " заплати 1000 налог.");
	player[turn].pay(1000, 0);

	$("landed").show().text("Налог. Заплати 1000.");
}

function citytax() {
	var p = player[turn];

	if (p.human) {

		buttonAonclick = 'hide("popupbackground"); hide("popupwrap"); var p=player[turn]; addalert(p.name+" paid 2000k for landing on City Tax."); p.pay(2000, 0);';

		popup("You landed on City Tax. You must pay $200 or ten percent of your total worth.<div><input type='button' value='Pay $200' onclick='" + buttonAonclick + "' /></div>", false);
	} else {
		addalert(p.name + " paid $200 for landing on City Tax.");
		p.pay(200, 0);
	}
}

const square = [];

square[0] = new Square("СТАРТ", "Собери 2000 пройдя или 3000 попав на клетку.", "white");
square[1] = new Square("Channel", "600k", "pink", 600, 3, 20, 100, 300, 900, 1600, 2500);
square[2] = new Square("Шанс", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[3] = new Square("Hugo Boss", "600k", "pink", 600, 3, 40, 200, 600, 1800, 3200, 4500);
square[4] = new Square("Налог", "Заплати 2000k", "white");
square[5] = new Square("Mercedes", "2000k", "red", 2000, 1);
square[6] = new Square("Adidas", "1000k", "orange", 1000, 4, 60, 300, 900, 2700, 4000, 5500);
square[7] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[8] = new Square("Puma", "1000k", "orange", 1000, 4, 60, 300, 900, 2700, 4000, 5500);
square[9] = new Square("Lacoste", "1200k", "orange", 120, 4, 80, 400, 1000, 3000, 4500, 6000);
square[10] = new Square("Посещение", "", "white");
square[11] = new Square("VK", "1400k", "#90EE90", 1400, 5, 100, 500, 1500, 4500, 6250, 7500);
square[12] = new Square("Rockstar Games", "1500k", "#731907", 1500, 2);
square[13] = new Square("Facebook", "1400k", "#90EE90", 1400, 5, 100, 500, 1500, 4500, 6250, 7500);
square[14] = new Square("Twitter", "1600k", "#90EE90", 1600, 5, 120, 600, 1800, 5000, 7000, 9000);
square[15] = new Square("Audi", "2000k", "red", 2000, 1);
square[16] = new Square("Coca-Cola", "1800k", "#AACCFF", 1800, 6, 140, 700, 2000, 5500, 7500, 9500);
square[17] = new Square("Шанс", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[18] = new Square("Pepsi", "1800k", "#AACCFF", 1800, 6, 140, 700, 2000, 5500, 7500, 9500);
square[19] = new Square("Fanta", "2000k", "#AACCFF", 2000, 6, 160, 800, 2200, 6000, 8000, 10000);
square[20] = new Square("Парковка", "", "white");
square[21] = new Square("American Airlines", "2200k", "green", 2200, 7, 180, 900, 2500, 7000, 8750, 10500);
square[22] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[23] = new Square("Lufthansa", "2200k", "green", 2200, 7, 180, 900, 2500, 7000, 8750, 10500);
square[24] = new Square("British Airways", "2400k", "green", 2400, 7, 200, 1000, 3000, 7500, 9250, 11000);
square[25] = new Square("Ford", "2000k", "red", 2000, 1);
square[26] = new Square("Max Burgers", "2600k", "blue", 2600, 8, 220, 1100, 3300, 8000, 9750, 11500);
square[27] = new Square("Burger King", "2600k", "blue", 2600, 8, 220, 1100, 3300, 8000, 9750, 11500);
square[28] = new Square("Rovio", "1500k", "#731907", 1500, 2);
square[29] = new Square("KFC", "2800k", "blue", 2800, 8, 240, 1200, 3600, 8500, 10250, 12000);
square[30] = new Square("Иди в тюрьму", "Иди в тюрьму не проходя СТАРТ. Не получая 2000k.", "white");
square[31] = new Square("Holiday Inn", "3000k", "#4B0082", 3000, 9, 260, 1300, 3900, 9000, 11000, 12750);
square[32] = new Square("Radisson Blu", "3000k", "#4B0082", 3000, 9, 260, 1300, 3900, 9000, 11000, 12750);
square[33] = new Square("Шанс", "FOLLOW INSTRUCTIONS ON TOP CARD", "white");
square[34] = new Square("Novotel", "3200k", "#4B0082", 3200, 9, 280, 1500, 4500, 10000, 12000, 14000);
square[35] = new Square("Land Rover", "2000k", "red", 2000, 1);
square[36] = new Square("Налог", "Плати 1000k", "white");
square[37] = new Square("Apple", "3500k", "gray", 3500, 10, 350, 1750, 5000, 11000, 13000, 15000);
square[38] = new Square("Шанс", "NEW YORK LOTTERY GAMES", "white");
square[39] = new Square("Nokia", "4000k", "gray", 4000, 10, 500, 2000, 6000, 14000, 17000, 20000);

const chanceCards = [];
const communityChestCards = [];

chanceCards[0] = new Card("Выход из тюрьмы. Можешь держать карточку пока не понадобится или продать.", function() { p.communityChestJailCard = true; updateOwned();});
chanceCards[1] = new Card("Ты выиграл в лотерею. Получи 100k", function() { addamount(100, 'Chance');});
chanceCards[2] = new Card("За распродажу ты получаешь 450k", function() { addamount(450, 'Chance');});
chanceCards[3] = new Card("Возврат страховой. Получи 1000k", function() { addamount(1000, 'Chance');});
chanceCards[4] = new Card("Deloitte & Touche LLP tax return Получи 200k", function() { addamount(200, 'Chance');});
chanceCards[5] = new Card("FAO Schwarz Xmas fund matures. Получи 1000k", function() { addamount(1000, 'Chance');});
chanceCards[6] = new Card("You have won a United Airlines trip around the world! Получи 1000k", function() { addamount(1000, 'Chance');});
chanceCards[7] = new Card("Performed a wedding at the Plaza Hotel. Receive 250k", function() { addamount(250, 'Chance');});
chanceCards[8] = new Card("Pay hospital 1000k", function() { subtractamount(1000, 'Chance');});
chanceCards[9] = new Card("Ты выиграл в лотерею! Получи 2000k", function() { addamount(2000, 'Chance');});
chanceCards[10] = new Card("Заплати сборы в школе 1500k", function() { subtractamount(1500, 'Chance');});
chanceCards[11] = new Card("Doctor's fee. Pay 500k", function() { subtractamount(500, 'Chance');});
chanceCards[12] = new Card("Madison Square Garden opening tonight. Получи 500k from every player for opening night seats.", function() { Получиfromeachplayer(500, 'Chance');});
chanceCards[13] = new Card("You have won kiss cash! Advance to GO (Получи 2000k)", function() { advance(0);});
chanceCards[14] = new Card("You are assessed for street repairs. 400k per house. 1150k per hotel.", function() { streetrepairs(400, 1150);});
chanceCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass GO. Do not Получи 2000k.", function() { gotojail();});


chanceCards[16] = new Card("Get out of Jail free. This card may be kept until needed or sold.", function() { p.chanceJailCard=true; updateOwned();});
chanceCards[17] = new Card("Make general repairs on all your property. For each house pay 250k. For each hotel 1000k.", function() { streetrepairs(250, 1000);});
chanceCards[18] = new Card("Pay poor tax of 150k.", function() { subtractamount(150, 'Chance');});
chanceCards[19] = new Card("You have been elected chairman of Con Edison. Pay each player 500k.", function() { payeachplayer(500, 'Chance');});
chanceCards[20] = new Card("Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[21] = new Card("Advance token to the nearest Con Edison utility. If UNOWNED you may buy it from the bank. If OWNED, throw dice and pay owner a total of ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[22] = new Card("Citibank pays you interest of 500k.", function() { addamount(500, 'Chance');});
chanceCards[23] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled. If Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
chanceCards[24] = new Card("Take a walk past The Essex House. Advance to GO. Получи 2000k.", function() { advance(0,32);});
chanceCards[25] = new Card("Take a ride to the Regency Hotel! If you pass GO Получи 2000k.", function() { advance(31);});
chanceCards[26] = new Card("Take a walk on fifth avenue. Advance token to Trump Tower.", function() { advance(39);});
chanceCards[27] = new Card("Advance to thirteen.", function() { advance(13);});
chanceCards[28] = new Card("Your Smith Barney mutual fund pays dividend. Получи 1500k.", function() { addamount(1500, 'Chance');});
chanceCards[29] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled.\n\nIf Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
chanceCards[30] = new Card("Catch a bus to Central Park. If you pass GO, Получи 2000k.", function() { advance(9);});
chanceCards[31] = new Card("Go directly to Jail. Do not pass GO, do not Получи 2000k.", function() { gotojail();});
