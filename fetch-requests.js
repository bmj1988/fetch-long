/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch('http://localhost:5000/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"    }
})




/* ============================== Phase 2 ============================== */

fetch('http://localhost:5000/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"    }
})
.then((res) => {
console.log(res.headers)
console.log(res.redirected)
console.log(res.status)
console.log(res.url)})
// .then((resData)=> console.log(resData))
// .then((res) => console.log(res.redirected))
// .then((res) => console.log(res.statusCode))
// .then((res) => console.log(res.headers['Content-Type']))
// .then((res) => console.log(res.url))
// .then((res) => console.log(res.redirected))

// const res = async function() {

//     let getres = await fetch('http://localhost:5000/products', {
//        method: "POST",
//        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
//        headers: {
//            "Content-Type": "application/x-www-form-urlencoded"    }
//    })
//    // .then((res) => res.text())
//    .then((getres)=> console.log(getres))
//    // .then((res) => console.log(res.redirected))
//    // .then((res) => console.log(res.statusCode))
//    // .then((res) => console.log(res.headers['Content-Type']))
//    // .then((res) => console.log(res.url))
//    // .then((res) => console.log(res.redirected))
//    }
//    console.log(res())
/* ============================== Phase 3 ============================== */

// Your code here
