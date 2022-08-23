const box = document.querySelectorAll('.box')
const container = document.querySelector('.container')
const green = document.querySelector('.green_1')
const red = document.querySelector('.red_1')
const grid = []
const moves = [1]
const win = [
             [grid[0], grid[1], grid[2]],
             [grid[3], grid[4], grid[5]],
             [grid[6], grid[7], grid[8]]
           ]

           // I know this is DRY and i could do this with reduce but for this case DRY is ok))
function isWin() {
    if (grid[0] + grid[1] + grid[2] === 3) return 'x'
    if (grid[3] + grid[4] + grid[5] === 3) return 'x'
    if (grid[6] + grid[7] + grid[8] === 3) return 'x'
    if (grid[0] + grid[3] + grid[6] === 3) return 'x'
    if (grid[1] + grid[4] + grid[7] === 3) return 'x'
    if (grid[2] + grid[5] + grid[8] === 3) return 'x'
    if (grid[0] + grid[4] + grid[8] === 3) return 'x'
    if (grid[2] + grid[4] + grid[6] === 3) return 'x'
    if (grid[0] + grid[1] + grid[2] === 0) return 'o'
    if (grid[3] + grid[4] + grid[5] === 0) return 'o'
    if (grid[6] + grid[7] + grid[8] === 0) return 'o'
    if (grid[0] + grid[3] + grid[6] === 0) return 'o'
    if (grid[1] + grid[4] + grid[7] === 0) return 'o'
    if (grid[2] + grid[5] + grid[8] === 0) return 'o'
    if (grid[0] + grid[4] + grid[8] === 0) return 'o'
    if (grid[2] + grid[4] + grid[6] === 0) return 'o'
}

box.forEach((el, idx) => {
    el.addEventListener('click', function tictac(e) {

        if (grid[idx] !== 1 && grid[idx] !== 0 && moves[moves.length-1] === 1) {
            el.innerHTML = '&#10008;'
            grid[idx] = 1
            moves.push(0)
        }

        if (grid[idx] !== 1 && grid[idx] !== 0 && moves[moves.length-1] === 0) {
            el.innerHTML = '&#927;'
            grid[idx] = 0
            moves.push(1)
        }

        green.classList.toggle('red_1')
        red.classList.toggle('green_2')
        

        if (isWin() === 'x') return container.innerHTML = '<p>First player won!!!</p>'
        if (isWin() === 'o') return container.innerHTML = '<p>Second player won!!!</p>'
        if (isWin() === undefined && moves.length >= 9) return container.innerHTML = '<p>Tie!!!</p>'
    })
})







           
            