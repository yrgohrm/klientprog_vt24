function foo(): any {
    return "hej"
}

const res = foo()

console.log(res.lajbans)

function foo2(): unknown {
    return "hej"
}

const res2 = foo2()

if (res2 && typeof res2 === "object" && 'lajbans' in res2) {
    console.log(res2.lajbans)
}

function bar(arg: [number, string]): void {
    console.log(arg)
}

bar([1, "hej"])


function print(num: number | number[]) {
    if (Array.isArray(num)) {
        console.log(num.join(", "))
    }
    else {
        console.log(num)
    }
}


const baz = document.getElementById("apa")!









