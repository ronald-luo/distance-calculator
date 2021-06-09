let div = document.querySelector('.play-ground')

let data = []

div.addEventListener('click', (e) => {
    console.log()
    console.log(e.screenX, e.screenY)
    data.unshift([e.screenX, e.screenY])
    //console.log(data)
    createNode(e.clientX, e.clientY)
    document.getElementById('drop-a-node').textContent = ""


    if (data.length === 2) {
        let first = data[0]
        let second = data[1]
        console.log(distanceCalculator(second[0], first[0], second[1], first[1]))
        data = []
    }
})

function distanceCalculator(x2, x1, y2, y1) {
    let x_squared = (x2 - x1)**2
    let y_squared = (y2 - y1)**2
    return (x_squared + y_squared)**0.5
}

function createNode (x, y) {
    let container = document.querySelector('.play-ground')
    let node = document.createElement('div')
    node.classList.add('node')
    node.setAttribute('style', `left: ${x - 25}px; top: ${y - 25}px;`)
    container.appendChild(node)
}

function drawLine () {
    
}
