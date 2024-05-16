function foo(): any {
    return "hej"
}

const res = foo()

console.log(res.lajbans)

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









