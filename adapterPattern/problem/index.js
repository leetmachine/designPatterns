/**
 * problem: we want to use this code somewhere else that doesn't have a localStorage api. 
 * for instance this was written for a browser, but we want to use it in Node. 
 */
console.log( "localStorage length: ", localStorage.length );

var uid = localStorage.getItem("user_id");

console.log( "user_id: ", uid );

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('clearning the User ID...');
    localStorage.clear();
}
