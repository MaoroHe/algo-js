var weekNumber = prompt('Number between 1 and 7');

if (weekNumber > 0 && weekNumber < 8) {
    if (weekNumber == 1) {
        window.alert('Monday')
    } else if (weekNumber == 2) {
        window.alert('Tuesday')
    } else if (weekNumber == 3) {
        window.alert('Wednesday')
    } else if (weekNumber == 4) {
        window.alert('Thursday')
    } else if (weekNumber == 5) {
        window.alert('Friday')
    } else if (weekNumber == 6) {
        window.alert('Saturday')
    } else if (weekNumber == 7) {
        window.alert('Sunday')
    }
} else {
    do {
        var weekNumber = prompt('Number between 1 and 7');

            if (weekNumber > 0 && weekNumber < 8) {
                if (weekNumber == 1) {
                    window.alert('Monday')
                } else if (weekNumber == 2) {
                    window.alert('Tuesday')
                } else if (weekNumber == 3) {
                    window.alert('Wednesday')
                } else if (weekNumber == 4) {
                    window.alert('Thursday')
                } else if (weekNumber == 5) {
                    window.alert('Friday')
                } else if (weekNumber == 6) {
                    window.alert('Saturday')
                } else if (weekNumber == 7) {
                    window.alert('Sunday')
                }
            }
    } while (weekNumber > 7)
}