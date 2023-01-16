const machine = {
    green: {
        TIMER: 'yellow',
        WALK: 'red'
    },
    yellow: {
        TIMER: 'red'
    },
    red: {
        TIMER: 'green'
    }
};

let currentState = 'green';
let seconds = 0;
let intervalId;

// The finite state machine transition function
function transition(state, action) {
    return machine[state][action];
}

// Any side effects
function update(state) {
    currentState = state;
    document.getElementById('traffic-light')
        .setAttribute('data-state', state);
    document.getElementById('counter').innerHTML = seconds;
}

function startTimer() {
    intervalId = setInterval(() => {
        const nextState = transition(currentState, 'TIMER');
        update(nextState);
    }, 5000);
}

startTimer();

document.getElementById('walk')
    .addEventListener('click', () => {
        clearInterval(intervalId);
        const action = currentState === 'green' ? 'WALK' : 'TIMER';
        const nextState = transition(currentState, action);
        update(nextState);
        setTimeout(startTimer, 10000);
        seconds = 0;
        intervalId = setInterval(() => {
            seconds++;
        }, 1000);
    });

