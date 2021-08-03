import { useEffect, useState } from 'react';
const useCountDown = (time = 60, options = {}) => {
    const {
        countOnFocus = false,
        interval = 1,
        autoStart = true,
        stop_time = null
    } = options
    const [state, setState] = useState({
        time: time,
        interval: null,
    });
    const start_counter = () => {

        if (stop_time && stop_time === state.time) {
            return
        }

        state.interval = setInterval(() => {
            if (countOnFocus) {
                if (document.hasFocus()) {
                    state.time = state.time - interval;
                    setState({ ...state })
                }
            } else {
                state.time = state.time - 1;
                setState({ ...state })
            }
        }, interval * 1000)
    }

    const reset = () => {
        clearInterval(state.interval)
        state.time = time
        setState({ ...state })
        play()
    }

    const puase = () => {
        clearInterval(state.interval)
        setState({ ...state })
    }

    const play = () => {
        start_counter()
    }

    useEffect(() => {
        if (autoStart) {
            play()
        }
        return () => {
            clearInterval(state.interval)
        }
    }, []);

    return { time: state.time, play, puase, reset }
};

export default useCountDown;
