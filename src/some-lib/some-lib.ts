export async function doSomething() {
  return 50;
}


export function checkParam(data: testData) {
  console.log('Input params', data);
  if (data.key && data.val) {
    return true;
  }

  return false;
}

export function checkParam2(data: testData2) {
  console.log(data);
}