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

/* ============================== Phase 3 ============================== */

reqBody = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
})

fetch('http://localhost:5000/products', {
    method: "POST",
    body: reqBody,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"    }
})
.then((res) => {
console.log(res.headers)
console.log(res.redirected)
console.log(res.status)
console.log(res.url)})
