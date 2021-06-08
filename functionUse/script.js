/* This is right way of using const and let as for
they has block level scope so variable defined using
const and let can not be accessed outside the block*/

function constAndLet(){

    const useOfConst = 25;
    console.log(useOfConst);
    let useOfLet = 50;
    console.log(useOfLet);

}

/*
These tow lines written below can not be executed
as for the variable defined using const and let can
not be accessed outside the block

*console.log(useOfConst);
*console.log(useOfLet);

 */

// End of example of const and let


/*
    The below example show that the var keyword has
    no block scoping as for the variable decleared
    using var can be accessed even outside the block
    statement
*/
function Variable(){
    var useOfVar = 75;
    console.log(useOfVar);
}

console.log(useOfVar);