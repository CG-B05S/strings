const countCharacters = (S) => 
{
    let count = 0;
	let count1 = 0;
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) == "A") {
            count += 1;
        }
		else if (S.charAt(i) == "D") {
            count1 += 1;
        }
    }
    return (count,count1);
}


console.log(countCharacters("AdiAADas"));


