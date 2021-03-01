const qalculate = (startingBid, name, loveLetter) => {
    let sBid = Number(startingBid);

    for (var i = 1; i <= 5; i++){
        let skillValue = 0;
        switch (i){
                 case 1:
                if (document.skilll.skill1.checked == true){
                    skillValue += Number(document.skilll.skill1.value);
                }
                case 2:
                if (document.skilll.skill2.checked == true){
                    skillValue += Number(document.skilll.skill2.value);
                }
                case 3:
                    if (document.skilll.skill3.checked == true){
                        skillValue += Number(document.skilll.skill3.value);
                    } 
                case 4:
                if (document.skilll.skill4.checked == true){
                    skillValue += Number(document.skilll.skill4.value);
                }
                default: sBid = sBid + skillValue;
        }
    }
      sBid = sBid * Number(document.getElementById("education").value);

     sBid = sBid * Number(document.getElementById("familyNetWorth").value);

     sBid = sBid * Number(document.getElementById("ages").value); 

    for (var i = 1; i <= 4; i++){
        switch (i){
                 case 1:
                if (document.reputation.rep1.checked == true){
                    sBid *= Number(document.reputation.rep1.value);
                }
                case 2:
                if (document.reputation.rep2.checked == true){
                    sBid *= Number(document.reputation.rep2.value);
                }
                case 3:
                if (document.reputation.rep3.checked == true){
                   sBid -= Number(document.reputation.rep3.value);
               } 
                default: break;
        }
    }
    alert(sBid + " " + name + " " + loveLetter);
    
 }