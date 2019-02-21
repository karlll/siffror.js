{
    let pos = 0;
    const insert = (v) => { pos = pos + 1; return {pos, v}}
}


start = number
number = thousands / hundreds / twentyToNinetynine / teens / singles;

singles = one / two / three / four / five / six / seven / eight / nine;
teens = ten / eleven / twelve / thirteen / fourteen / fifteen / sixteen / seventeen / eighteen / nineteen;
twentyToNinetynine = twenty singles?/ thirty singles?/ forty singles?/ fifty singles?/ sixty singles? / seventy singles? / eighty singles? / ninety singles?
oneToNinetynine  = twentyToNinetynine / teens / singles;

//hundredToBilliard = hundreds / thousand / million / milliard / billion / billiard;
hundreds = singles? hundred oneToNinetynine? // 100 - 999
thousands = hundreds? thousand hundreds? // 1000 - 999 999
millions = hundreds? million? thousands? // 1 000 000 - 999 999 999
milliards = hundreds? milliard millions? // 1 000 000 000 - 999 999 999 999

one = "ett" { return insert(1);}
two = "två" { return insert(2);}
three = "tre" { return insert(3);}
four = "fyra" { return insert(4);}
five = "fem" { return insert(5);}
six = "sex" { return insert(6);}
seven = "sju" { return insert(7);}
eight = "åtta" { return insert(8);}
nine = "nio" { return insert(9);}
ten = "tio" { return insert(10);}
eleven = "elva" { return insert(11);}
twelve = "tolv" { return insert(12);}
thirteen = "tretton" { return insert(13);}
fourteen = "fjorton" { return insert(14);}
fifteen = "femton" { return insert(15);}
sixteen = "sexton" { return insert(16);}
seventeen = "sjutton" { return insert(17);}
eighteen = "arton" { return insert(18);}
nineteen = "nitton" { return insert(19);}
twenty = "tjugo" { return insert(20);}
thirty = "trettio" { return insert(30);}
forty = "fyrtio" { return insert(40);}
fifty = "femtio" { return insert(50);}
sixty = "sextio" { return insert(60);}
seventy = "sjuttio" { return insert(70);}
eighty = "åttio" { return insert(80);}
ninety = "nittio" { return insert(90);}
hundred = "hundra" { return insert(100);}
thousand = "tusen" { return insert(1000);}
million = "miljon" { return insert(1000000);}
milliard = "miljard" { return insert(1000000000);}
billion = "biljon" { return insert(1000000000000);}
billiard = "biljard" { return insert(1000000000000000);}

