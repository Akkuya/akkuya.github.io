var items = [[], [], [], [], []];

function push(id) {
    const box = document.getElementById('text'+ id.toString());
    const output = document.getElementById('output' + id.toString());
    boxvalue = box.value;
    if (boxvalue != '') {
        items[id].push(boxvalue);
        console.log(items);
        box.value='';
        output.innerHTML = items[id];
    }
    else {
        console.log("Empty Submission");
    }
    return false; // stop submission
}


// This doesn't work ffs
function emptyarray(id) {
    items[id] = [];
    console.log(items);
    const output = document.getElementById('output' + id.toString());
    output.innerHTML = items[id];    
}







// FIND THE COMBINATIONS. (Please do not open the function if you dont want your eyes to be burned.)
function calc() {
    var combination;
    const outputvalues = document.getElementById('values');
    outputvalues.innerHTML = '';
    var count = 0;
    for (var var1 in items[0]) {
        combination = [items[0][var1]];
        if (items[1].length !== 0) {
            for (var var2 in items[1]) {
                combination = [items[0][var1], items[1][var2]];
                if (items[2].length !== 0) {
                    for (var var3 in items[2]) {
                        combination = [items[0][var1], items[1][var2], items[2][var3]];
                        if (items[3].length !== 0) {
                            for (var var4 in items[3]) {
                                combination = [items[0][var1], items[1][var2], items[2][var3], items[3][var4]];
                                if (items[4].length !== 0) {
                                    for (var var5 in items[4]) {
                                        combination = [items[0][var1], items[1][var2], items[2][var3], items[3][var4], items[4][var5]];
                                        count += 1;
                                        console.log(combination);
                                        outputvalues.textContent +=  combination + "\n";
                                    }
                                }
                                else {
                                    count += 1;
                                    console.log(combination);
                                    outputvalues.textContent +=  combination + "\n";
                                }
                            }
                        }
                        else {
                            count += 1;
                            console.log(combination);
                            outputvalues.textContent +=  combination + "\n";
                        } 
                    }
                }
                else {
                    count += 1;
                    console.log(combination);   
                    outputvalues.textContent +=  combination + "\n";
                    
                }
            }
        }   
        else { 
            count += 1;
            console.log(combination);
            outputvalues.textContent +=  combination + "\n";
        }
    }
    console.log(count);
}

const calcbtn = document.getElementById('calculate');
calcbtn.addEventListener('click', calc);


document.getElementById("export").addEventListener("click",function(){
    let dataUri = 'data:text/html,' 
        + encodeURIComponent(document.getElementById("fileContents").textContent);
    this.href = dataUri;        
},false)