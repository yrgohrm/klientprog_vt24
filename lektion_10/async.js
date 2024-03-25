async function foo() {
  try {
    let res = await somePromise()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

function foo() {
  return somePromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
