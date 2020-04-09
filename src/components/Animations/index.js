import React from 'react'
import { useSpring, animated } from 'react-spring'

export const AnimateNumber = ({ start, end }) => {
    const props = useSpring({ number: end, from: { number: start } })
    return <animated.span>{props.number}</animated.span>
}

export const AnimatedDonut = () => {
    const AnimatedDonut = animated(Donut)
    // ...
    const props = useSpring({ value: 100, from: { value: 0 } })
    return <AnimatedDonut percent={props.value} />
}

export const ThreeDimensionalHover = ({ children, ...otherProps }) => {
    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1,
    ]
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }))
    return (
        <animated.div
            {...otherProps}
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            {children}
        </animated.div>
    )
}
