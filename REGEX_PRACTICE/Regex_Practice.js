let re;
//literal characters

re = /hello/i;    // Find hello world and can be case sensitive because of the i.
re = /^h/i;       // Must starts with.
re = /d$/i;       // Must ends with d - or can be with /world$/i too and matches. 
re = /^hello$/i;  // Must begin and ends with.
re = /^h.llo$/i;   // Matches any ONE character - matchs the .(ponto) with anything that i put on my string . Its a replace
re = /^h*llo$/i;   /oiu/if i 

//string match
const str = "Hello World"; 
const result = re.exec(str);
console.log(result);


//log Results
function reTest(re ,str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else{
        console.log(`${str} does NOT matched ${re.source}`)
    }
}

reTest(re,str);