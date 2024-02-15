function highlight(table) {
    for(let i = 1; i < table.rows.length; i++) {

        let str = table.rows[i];

        if(str.cells[3].dataset.available === 'true') {
            str.classList.add('available')
        }

        if(str.cells[3].dataset.available === 'false') {
            str.classList.add('unavailable')
        }

        if(!str.cells[3].dataset.available) {
            str.setAttribute('hidden', true)
        }

        if(str.cells[2].textContent === 'm') {
            str.classList.add('male')
        }

        if(str.cells[2].textContent === 'f') {
            str.classList.add('female')
        }

        if( Number(str.cells[1].textContent) < 18) {
            str.style.textDecoration = 'line-through'
        }

        console.log(str)
    }
}