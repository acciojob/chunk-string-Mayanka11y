function stringChop(str, size) {
    if (!str) {
        return [];
    }
    
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));
    }
    return result;
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = parseInt(prompt("Enter Chunk Size."), 10);
//alert(JSON.stringify(stringChop(str, size)));
