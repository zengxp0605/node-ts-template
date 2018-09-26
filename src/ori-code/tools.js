const tools = {};

function drawTrackPath() {
    console.log('drawTrackPath--');
}
async function delay() {
    return 'test async.';
}
async function test() {
    let a = await delay();
    console.log(a);
}

tools.drawTrackPath = drawTrackPath;
tools.delay = delay;

module.exports = tools;

// export { tools }
