import { useEffect, useState } from 'react';
const useTimer = (time = 0, options = {}) => {
    const {
        countOnFocus = false,
        interval = 1,
        autoStart = true,
        stop_time = null,
    } = options
    const [state, setState] = useState({
        time: time,
        interval: null,
    });

    const start_counter = () => {
        state.interval = setInterval(() => {
            if (stop_time && stop_time === state.time) {
                return
            }

            if (countOnFocus) {
                if (document.hasFocus()) {
                    state.time = state.time + interval;
                    setState({ ...state })
                }
            } else {
                state.time = state.time + interval;
                setState({ ...state })
            }


        }, 2000)
    }
    const reset = () => {
        state.time = interval
        setState({ ...state })
    }
    const puase = () => {
        clearInterval(state.interval)
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

export default useTimer;
