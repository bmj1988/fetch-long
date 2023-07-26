/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch('/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-urlformencoded"    }
});



/* ============================== Phase 2 ============================== */

fetch('/products', {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-urlformencoded"    }
})
.then((res) => JSON.parse(res))
.then((res) => console.log(res.statusCode))
.then((res) => console.log(res.headers['Content-Type']))
.then((res) => console.log(res.url))
.then((res) => console.log(res.redirected))


/* ============================== Phase 3 ============================== */

// Your code here
