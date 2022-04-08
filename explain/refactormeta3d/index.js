let _init = () => {
    let webgpuData = _initWebGPUData();

    let sceneGraphData = _buildScene();

    let webgpuObjects = createWebGPUObjects()
    setSceneGraphDataToWebGPUData(webgpuData, webgpuObjects, sceneGraphData);

    return [webgpuData, webgpuObjects, some sceneGraphData]
}


let _main = async () => {
    let renderData = _init();

    while (true) {
        _render(renderData);
    }
}






let _init = () => {
    let webgpuData = _initWebGPUData();

    // let sceneGraphData = _buildScene();

    let webgpuObjects = createWebGPUObjects()
    setSceneGraphDataToWebGPUData(webgpuData, webgpuObjects, sceneGraphData);

    return [webgpuData, webgpuObjects, some sceneGraphData]
}

let _main = async () => {
    let threeSceneGraphData = _buildScene();

    let renderData = _init(threeSceneGraphData);

    while (true) {
        _render(renderData);
    }
}












let _main = async () => {
    let threeSceneGraphData = _buildScene();

    let renderData = init pipeline-> exec(threeSceneGraphData);

    while (true) {
        render pipeline -> exec(renderData);
    }
}



init pipeline:
let exec = () => {
    exec all jobs
}

render pipeline:
let exec = () => {
    exec all jobs
}










init jobs:
let webgpuData = _initWebGPUData();



initRasterizationPassJob:
let webgpuObjects = createWebGPUObjects()
setSceneGraphDataToWebGPUData(webgpuData, webgpuObjects, ourSceneGraphData);



render jobs:

render rasterization pass

end render












