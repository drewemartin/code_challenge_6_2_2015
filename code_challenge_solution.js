var thanks = "Hello," + 
'\n\n' + 
"Thank you for reviewing my response to the code challenge." + 
'\n' + 
"Please let me know if you have any questions." + 
'\n\n' + 
"Best," + 
'\n\n' + 
"Drew Martin"


function ChallengeObj(){ 
    this.natOrder = new Array(); 
    this.organize = function(result){this.natOrder.push(result);}; 
    this.regPrint = function(){
        for(var i = 0; i < this.natOrder.length; i++){
            console.log(this.natOrder[i])
        }
    };
}


function solveChallenge(str, bonus){

    if(typeof(bonus) !== 'boolean'){
        bonus = false;
    }

    if(bonus){
        bonusAnswer(str);
    }else{
        regAnswer(str);
    }

}

function regAnswer(str){

    var splitter = 'id';
    var split = str.replace(/[()]/g,'').split(splitter);
    split.shift();
    for(var e = 0; e < split.length; e++){
        split[e] = split[e].trim();
    }

    for(var i = 0; i < split.length; i++){

        printable = new ChallengeObj();

        var current = (splitter + split[i]).split(',');
        for(var n = 0; n < current.length; n++){

            var c_str = current[n].trim()

            if( i === 2 && n === 2){
                printable.organize(c_str);
            }else if( i === 2 && n === 1){
                var r = ('- ' + c_str)
                printable.organize(r);
            }else{
                var r = i > 0 ? (new Array(i + 1).join('-') + ' ' + c_str) : c_str;
                printable.organize(r);
            }
        }

        printable.regPrint();
    }
}

function bonusAnswer(str){

    var splitter = 'id';
    var specIndices = [2,3,4];
    var split = str.replace(/[()]/g,'').replace(/id/g,'').split(',');
    split.shift();
    for(var e = 0; e < split.length; e++){
        split[e] = split[e].trim();
    }
    split.sort();

    var finalized = new ChallengeObj();

    for(var i = 0; i < split.length; i++){

        var element = split[i].trim();

        if( specIndices.indexOf(i) !== -1 ){

            element = '- '  + element;

            var num = 5 - (specIndices.indexOf(i) + 2);
            var to_insert = num > 1 ? new Array(num).join('-') + ' ' + splitter : splitter;

            finalized.organize(element);
            finalized.organize(to_insert);
        }else{

            finalized.organize(element);
        }
    }

    finalized.regPrint();
}

var s = "(id,created,employee(id,firstname,employeeType(id), lastname),location)";

console.log('Challenge: Part 1');
solveChallenge(s);

console.log('\n');

console.log('Challenge: Part 2 (Bonus)');
var bonus = true;
solveChallenge(s, bonus);

console.log('\n');
console.log(thanks);



























