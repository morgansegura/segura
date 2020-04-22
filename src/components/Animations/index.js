import React, { useCallback } from 'react'
import { useSpring, animated as a, interpolate } from 'react-spring'

import * as S from './styled'

export const AnimateNumber = ({ start, end }) => {
    const props = useSpring({ number: end, from: { number: start } })
    return <a.span>{props.number}</a.span>
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
        // `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }))
    return (
        <a.div
            {...otherProps}
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            {children}
        </a.div>
    )
}

export const RobotWatcher = () => {
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
    const interpBg = xy.interpolate(
        (x, y) =>
            `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y /
                60}deg) translate3d(-50%, -50%, 0)`
    )
    // const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
    const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
    const interpHelmet = st.interpolate(o => `translate(0,${0 + o / 4})`)

    const interpEye = interpolate(
        [st, xy],
        (o, xy) =>
            // `translate(${xy[0] / 30 + 157},${xy[1] / 30 +
            //     80 +
            //     o / 2}) scale(0.8)`
            // `translate(${0 / 30 + 0}, ${0 / 30 + 0 + o / 2}) scale(1)`
            [st, xy],
        (o, xy) => `translate(${0 + -xy[0] / 80},${-xy[1] / 80 + 20 + o / 8})`
    )
    const interpIris = interpolate(
        [st, xy],
        (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`
    )
    const interpPupil = interpolate(
        [st, xy],
        (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`
    )
    const interpSpot = interpolate(
        [st, xy],
        (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`
    )
    const interpTorso = interpolate(
        [st, xy],
        (o, xy) =>
            `translate(${xy[0] / 18 + 188},${xy[1] / 20 +
                230 +
                o / 1.7}) scale(0.8)`
    )
    const interpBody = interpolate(
        // [st, xy],
        // (o, xy) =>
        //     `translate(${xy[0] / 18 + 188},${xy[1] / 20 +
        //         230 +
        //         o / 1.7}) scale(0.8)`
        [st, xy],
        (o, xy) => `translate(${0 / 18}, ${0 / 20 + 0 + o / 1.7}) scale(1)`
    )
    const interpRightArm = st.interpolate(o => `translate(0, ${o / 4})`)
    const interpLeftArm = st.interpolate(o => `translate(0, ${o / 4})`)

    const interpHighlights = interpolate(
        [st, xy],
        (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + 20 + o / 8})`
    )
    const interpShadows = interpolate(
        [st, xy],
        (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + 20 + o / 8})`
    )
    const interpButtons = interpolate(
        [st, xy],
        (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + 20 + o / 8})`
    )

    const onMove = useCallback(
        ({ clientX: x, clientY: y }) =>
            set({
                xy: [x - window.innerWidth / 2, y - window.innerHeight / 2],
            }),
        []
    )
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

    return (
        <S.RobotWrapper onMouseMove={onMove} onScroll={onScroll}>
            <a.svg
                style={{
                    transform: interpBg,
                    width: '400px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                }}
                viewBox="0 0 351.12 364.84"
            >
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="294.86"
                        y1="249.04"
                        x2="273.53"
                        y2="236.76"
                        gradientTransform="matrix(-1, 0, 0, 1, 453.87, 0)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="283.83"
                        y1="288.31"
                        x2="324.07"
                        y2="239.64"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-3"
                        x1="335.58"
                        y1="292.77"
                        x2="338.82"
                        y2="318.03"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-4"
                        x1="343.85"
                        y1="367.36"
                        x2="343.85"
                        y2="343.02"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-6"
                        x1="403.96"
                        y1="318.92"
                        x2="403.96"
                        y2="345.19"
                        gradientTransform="translate(-293.94)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-7"
                        x1="357.49"
                        y1="248.78"
                        x2="336.19"
                        y2="236.52"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-8"
                        x1="346.58"
                        y1="287.86"
                        x2="386.59"
                        y2="239.46"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-9"
                        x1="398.19"
                        y1="292.36"
                        x2="401.42"
                        y2="317.53"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-10"
                        x1="406.46"
                        y1="366.65"
                        x2="406.46"
                        y2="342.41"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-12"
                        x1="341.35"
                        y1="318.41"
                        x2="341.35"
                        y2="344.57"
                        gradientTransform="matrix(-1, 0, 0, 1, 747.81, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <radialGradient
                        id="radial-gradient"
                        cx="260.01"
                        cy="333.75"
                        r="157.71"
                        gradientTransform="translate(0 262.33) scale(1 0.21)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#709cc1" />
                        <stop offset="1" stop-color="#fff" />
                    </radialGradient>
                    <linearGradient
                        id="linear-gradient-13"
                        x1="313.99"
                        y1="79.77"
                        x2="265.3"
                        y2="128.46"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-14"
                        x1="260.36"
                        y1="74.37"
                        x2="260.36"
                        y2="166.29"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-15"
                        x1="261.63"
                        y1="170.29"
                        x2="261.63"
                        y2="394.83"
                        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                        // xlink:href="#linear-gradient"
                    >
                        <stop offset="0" stop-color="#fff" />
                        <stop offset="1" stop-color="#709cc1" />
                    </linearGradient>
                </defs>
                <title>robot1</title>
                <g style={{ isolation: 'isolate' }}>
                    <a.g id="LeftArm" transform={interpRightArm}>
                        <g>
                            <g>
                                <path
                                    d="M177.18,213.46c1.78-1.45,3.6-2.84,5.44-4.16.92-.67,1.85-1.31,2.78-1.93l1.42-.93.76-.49.48-.31.4-.27.48-.34-13.56-18.65.13-.09c.06,0,.05,0,0,0l-.31.21-.82.52-1.74,1.14c-1.15.78-2.29,1.57-3.41,2.37q-3.36,2.41-6.53,5Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M166.9,222.77a132.64,132.64,0,0,1,10.28-9.31l-14.47-17.94a155,155,0,0,0-12.08,10.94Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M157.55,233.14c2.95-3.61,6.08-7.07,9.35-10.37l-16.27-16.31c-3.81,3.84-7.44,7.86-10.85,12Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M149.2,244.4q3.92-5.84,8.35-11.26l-17.77-14.65q-5.13,6.27-9.64,13Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M141.91,256.4q3.38-6.16,7.29-12l-19.06-12.92q-4.51,6.71-8.38,13.8Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M135.69,269.05c1.89-4.31,4-8.54,6.22-12.65l-20.15-11.12c-2.59,4.71-5,9.55-7.12,14.46Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M130.56,282.22q2.3-6.71,5.13-13.17l-21-9.31q-3.23,7.36-5.83,15Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M126.5,295.82q1.77-6.88,4.06-13.6l-21.75-7.51q-2.59,7.6-4.58,15.36Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M123.48,309.75q1.26-7,3-13.93l-22.27-5.75q-2,7.76-3.38,15.61Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M121.46,323.92q.78-7.12,2-14.17l-22.63-4.07c-.94,5.23-1.68,10.49-2.25,15.75Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <path
                                d="M98.6,321.44l16.67,1.81,6.19.68c.53-4.77,1.18-9.49,2-14.17s1.84-9.35,3-13.94,2.53-9.13,4.06-13.61,3.24-8.86,5.13-13.17,3.95-8.52,6.22-12.64,4.68-8.12,7.3-12,5.38-7.64,8.34-11.25,6.08-7.08,9.35-10.36c2.79-2.8,5.71-5.5,8.74-8,.5-.47,1-.88,1.54-1.3,1.79-1.46,3.61-2.86,5.44-4.18.91-.66,1.84-1.3,2.77-1.93l1.44-.93.75-.48.48-.32.41-.27.47-.33-13.56-18.64.14-.1c.06,0,0,0,0,0l-.31.21-.83.52-1.73,1.15c-1.16.76-2.3,1.56-3.4,2.35-2.25,1.62-4.42,3.29-6.55,5a156.46,156.46,0,0,0-12.06,10.92c-3.81,3.85-7.45,7.87-10.86,12.05s-6.62,8.51-9.64,13-5.81,9.07-8.39,13.8-5,9.54-7.1,14.46-4.11,9.91-5.83,15-3.27,10.19-4.59,15.36-2.46,10.38-3.39,15.61S99.18,316.17,98.6,321.44Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M115.27,323.25l6.19.68c.53-4.77,1.18-9.49,2-14.17s1.84-9.35,3-13.94,2.53-9.13,4.06-13.61,3.24-8.86,5.13-13.17,3.95-8.52,6.22-12.64,4.68-8.12,7.3-12,5.38-7.64,8.34-11.25,6.08-7.08,9.35-10.36c2.79-2.8,5.71-5.5,8.74-8l1.54-19c-17.67,10.75-41.39,33.32-50.68,70.28C119.68,293.16,121.6,307.37,115.27,323.25Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-2)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M104.23,290.07q2-7.76,4.58-15.36t5.83-15c1.47-3.33,3.06-6.6,4.72-9.85,6.3,4.59,12.51,9.31,18.69,14.08-.81,1.68-1.61,3.37-2.36,5.08q-2.85,6.45-5.13,13.17t-4.06,13.6q-1.77,6.9-3,13.93t-2,14.17L98.6,321.43c.57-5.26,1.31-10.52,2.25-15.75S102.9,295.24,104.23,290.07Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-3)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M95.09,338.35l14-4.52L125,338.35l12.4,7.63v11.56a34.67,34.67,0,0,1-12.92,27l-9.1,7.34L125,368.76l-7.69-18.65H102.77l-7.68,18.65,9.62,23.14-9.11-7.34a34.7,34.7,0,0,1-12.92-27V346Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d3db"
                            />
                            <path
                                d="M95.09,338.35l14-4.52L125,338.35l12.4,7.63v11.56a34.67,34.67,0,0,1-12.92,27l-9.1,7.34L125,368.76l-7.69-18.65H102.77l-7.68,18.65,9.62,23.14-9.11-7.34a34.7,34.7,0,0,1-12.92-27V346Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-4)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M95.09,338.35l14-4.52L125,338.35l12.4,7.63v11.56a34.67,34.67,0,0,1-12.92,27l-9.1,7.34L125,368.76l-7.69-18.65H102.77l-7.68,18.65,9.62,23.14-9.11-7.34a34.7,34.7,0,0,1-12.92-27V346Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-4)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M128.86,330.61v10.17H91.2V330.61a18.83,18.83,0,1,1,37.66,0Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d3db"
                            />
                            <path
                                d="M128.86,330.61v10.17H91.2V330.61A18.8,18.8,0,0,1,94,320.8c6.45,14.83,29.47,8.86,30.55-2.26A18.78,18.78,0,0,1,128.86,330.61Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-6)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                    </a.g>
                    <a.g id="RightArm" transform={interpRightArm}>
                        <g>
                            <g>
                                <path
                                    d="M339.31,213.36c-1.79-1.45-3.6-2.84-5.44-4.15-.92-.66-1.85-1.3-2.78-1.93l-1.42-.92-.76-.49-.48-.31-.41-.26-.48-.35,13.56-18.57-.13-.09h0l.31.2.83.53,1.73,1.14c1.16.77,2.3,1.55,3.42,2.35,2.24,1.61,4.41,3.27,6.53,5Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M349.58,222.63a132.16,132.16,0,0,0-10.27-9.27l14.47-17.87a156.24,156.24,0,0,1,12.07,10.89Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M358.94,233q-4.44-5.4-9.36-10.33l16.27-16.25c3.82,3.82,7.44,7.83,10.86,12Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M367.28,244.17q-3.91-5.8-8.34-11.21l17.77-14.59q5.13,6.24,9.64,12.94Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M374.58,256.13q-3.37-6.15-7.3-12l19.07-12.86q4.5,6.67,8.38,13.74Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M380.8,268.72c-1.9-4.29-4-8.49-6.22-12.59l20.15-11.08q3.88,7,7.11,14.4Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M385.93,281.85q-2.3-6.68-5.13-13.13l21-9.27q3.24,7.35,5.84,14.92Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M390,295.4q-1.77-6.87-4.06-13.55l21.75-7.48q2.6,7.56,4.58,15.3Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <g>
                                <path
                                    d="M393,309.27q-1.26-7-3-13.87l22.27-5.73q2,7.71,3.38,15.55Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#f440d9"
                                />
                                <path
                                    d="M395,323.39q-.78-7.11-2-14.12l22.63-4q1.39,7.81,2.25,15.69Z"
                                    transform="translate(-82.68 -56.9)"
                                    fill="#66d0d8"
                                />
                            </g>
                            <path
                                d="M417.89,320.91l-16.67,1.8-6.2.68c-.52-4.74-1.18-9.45-2-14.11s-1.84-9.32-3-13.88-2.54-9.1-4.07-13.56-3.23-8.83-5.13-13.12-4-8.48-6.21-12.59-4.69-8.09-7.3-12-5.38-7.61-8.35-11.21a138.56,138.56,0,0,0-9.35-10.32c-2.78-2.79-5.71-5.48-8.73-8-.5-.47-1-.87-1.55-1.3-1.78-1.45-3.6-2.84-5.44-4.16-.91-.66-1.84-1.3-2.77-1.92l-1.43-.93-.75-.48-.49-.31-.41-.27-.46-.33,13.55-18.57-.13-.1c-.06,0,0,0,0,0l.31.21.83.52,1.72,1.14c1.16.76,2.31,1.55,3.41,2.35,2.25,1.6,4.41,3.27,6.54,5a158.19,158.19,0,0,1,12.07,10.88c3.81,3.84,7.45,7.84,10.86,12s6.62,8.48,9.64,12.93,5.81,9,8.38,13.75,5,9.5,7.11,14.4,4.1,9.87,5.83,14.91,3.27,10.14,4.59,15.29,2.45,10.34,3.38,15.55S417.31,315.67,417.89,320.91Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-7)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M401.22,322.71l-6.2.68c-.52-4.74-1.18-9.45-2-14.11s-1.84-9.32-3-13.88-2.54-9.1-4.07-13.56-3.23-8.83-5.13-13.12-4-8.48-6.21-12.59-4.69-8.09-7.3-12-5.38-7.61-8.35-11.21a138.56,138.56,0,0,0-9.35-10.32c-2.78-2.79-5.71-5.48-8.73-8l-1.55-18.94c17.68,10.71,41.4,33.19,50.69,70C396.81,292.74,394.89,306.9,401.22,322.71Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-8)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M412.26,289.67q-2-7.73-4.58-15.3t-5.84-14.92c-1.46-3.31-3.06-6.57-4.71-9.8-6.3,4.56-12.51,9.26-18.69,14,.81,1.67,1.61,3.35,2.36,5.05q2.83,6.45,5.13,13.13T390,295.4q1.75,6.86,3,13.87t2,14.12l22.86-2.48q-.86-7.87-2.25-15.69T412.26,289.67Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-9)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M421.4,337.76l-14-4.5-15.91,4.5-12.41,7.6v11.51A34.53,34.53,0,0,0,392,383.79l9.11,7.31-9.62-23.05,7.68-18.58h14.51l7.69,18.58-9.62,23.05,9.1-7.31a34.5,34.5,0,0,0,12.92-26.92V345.36Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d3db"
                            />
                            <path
                                d="M421.4,337.76l-14-4.5-15.91,4.5-12.41,7.6v11.51A34.53,34.53,0,0,0,392,383.79l9.11,7.31-9.62-23.05,7.68-18.58h14.51l7.69,18.58-9.62,23.05,9.1-7.31a34.5,34.5,0,0,0,12.92-26.92V345.36Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-10)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M421.4,337.76l-14-4.5-15.91,4.5-12.41,7.6v11.51A34.53,34.53,0,0,0,392,383.79l9.11,7.31-9.62-23.05,7.68-18.58h14.51l7.69,18.58-9.62,23.05,9.1-7.31a34.5,34.5,0,0,0,12.92-26.92V345.36Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-10)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M387.63,330.05v10.13h37.66V330.05a18.83,18.83,0,0,0-37.66,0Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d3db"
                            />
                            <path
                                d="M387.63,330.05v10.13h37.66V330.05a18.72,18.72,0,0,0-2.75-9.78c-6.45,14.78-29.47,8.83-30.55-2.24A18.63,18.63,0,0,0,387.63,330.05Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-12)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                    </a.g>
                    <g id="Body">
                        <g>
                            <path
                                d="M334.33,321.38a70.47,70.47,0,0,1-70.52,70.52h-4.39a70.47,70.47,0,0,1-70.5-70.52,21,21,0,0,1,21-21H313.32a21,21,0,0,1,21,21Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#f440d9"
                            />
                            <path
                                d="M328.54,349.35a70.26,70.26,0,0,0,5.79-28,21,21,0,0,0-21-21H209.93a21,21,0,0,0-21,21,70.26,70.26,0,0,0,5.79,28s24.56,15.73,65.65,15.73C309.16,365.08,328.54,349.35,328.54,349.35Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#radial-gradient)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                            <path
                                d="M328.54,349.35a70.26,70.26,0,0,0,5.79-28,21,21,0,0,0-21-21H209.93a21,21,0,0,0-21,21,70.26,70.26,0,0,0,5.79,28s24.56,15.73,65.65,15.73C309.16,365.08,328.54,349.35,328.54,349.35Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#radial-gradient)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                    </g>
                    <a.g id="Torso" transform={interpTorso}>
                        <g>
                            <path
                                d="M357,174.41v87.37a95.36,95.36,0,1,1-190.71,0V174.41a7.37,7.37,0,0,1,7.38-7.38H349.58A7.39,7.39,0,0,1,357,174.41Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#f440d9"
                            />
                            <path
                                d="M357,174.41v87.37a95.36,95.36,0,1,1-190.71,0V174.41a7.37,7.37,0,0,1,7.38-7.38h1.86a246.48,246.48,0,0,1,.5,27.71c-2.38,67.66,6.64,118.39,91.85,118.39,58,0,81.76-32.58,80.52-118.39-.13-10.23.14-19.42.74-27.71h.46A7.39,7.39,0,0,1,357,174.41Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-15)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                    </a.g>
                    <g id="Helmet" transform={interpHelmet}>
                        <g>
                            <path
                                d="M331.77,128.33v37.5a1.37,1.37,0,0,1-1.37,1.37H190.32a1.36,1.36,0,0,1-1.38-1.37v-37.5a71.11,71.11,0,0,1,16.81-46q2-2.32,4.1-4.48a71.43,71.43,0,0,1,121.92,50.5Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#f440d9"
                            />
                            <path
                                d="M325.61,129.53V163.8a1.25,1.25,0,0,1-1.25,1.25h-128a1.25,1.25,0,0,1-1.26-1.25V129.53a65,65,0,0,1,15.36-42.06c1.18-1.41,2.44-2.77,3.75-4.08a65.26,65.26,0,0,1,111.4,46.14Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-13)"
                                style={{ mixBlendMode: 'soft-light' }}
                            />
                            <path
                                d="M331.77,128.33v37.5a1.37,1.37,0,0,1-1.37,1.37H190.32a1.36,1.36,0,0,1-1.38-1.37v-37.5a71.11,71.11,0,0,1,16.81-46,49.94,49.94,0,0,1-.35,5.78c-9.14,52.18-2.77,69.61,55.72,69.61,47.59,0,65-9.8,54.91-69.61a47.23,47.23,0,0,1-.33-4.87A71,71,0,0,1,331.77,128.33Z"
                                transform="translate(-82.68 -56.9)"
                                fill="url(#linear-gradient-14)"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </g>
                    </g>
                    <a.g id="FaceMask" transform={interpPupil}>
                        <path
                            d="M314.48,113.41a30.84,30.84,0,0,1-20.3,29.13,100.6,100.6,0,0,1-65.09-.1,30.91,30.91,0,0,1-20.32-29.15h0a30.94,30.94,0,0,1,21.06-29.41,100.76,100.76,0,0,1,31.79-5.1,101.88,101.88,0,0,1,31.84,5,30.84,30.84,0,0,1,21,29.39Z"
                            transform="translate(-82.68 -56.9)"
                            fill="#464871"
                        />
                    </a.g>
                    <a.g id="FaceMask" transform={interpIris}>
                        <g>
                            <path
                                d="M236.55,130h0a9.36,9.36,0,0,1-9.36-9.36V105.75a9.36,9.36,0,0,1,9.36-9.36h0a9.36,9.36,0,0,1,9.36,9.36v14.84A9.36,9.36,0,0,1,236.55,130Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#262c47"
                            />
                            <path
                                d="M299.13,113.34a13.86,13.86,0,1,1-13.86-13.86A13.85,13.85,0,0,1,299.13,113.34Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#262c47"
                            />
                        </g>
                    </a.g>
                    <a.g id="Spot" transform={interpSpot}>
                        <g>
                            <path
                                d="M243.16,108a6.61,6.61,0,1,1-6.61-6.61A6.61,6.61,0,0,1,243.16,108Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d0d8"
                            />
                            <path
                                d="M239.37,121.89a2.82,2.82,0,1,1-2.82-2.82A2.81,2.81,0,0,1,239.37,121.89Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#fff"
                            />
                            <path
                                d="M290.67,113.34a5.4,5.4,0,1,1-5.4-5.4A5.39,5.39,0,0,1,290.67,113.34Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#f440d9"
                            />
                        </g>
                    </a.g>

                    <g id="ButtonContainer">
                        <g>
                            <rect
                                x="184.23"
                                y="133.82"
                                width="57.54"
                                height="16.57"
                                rx="3.09"
                                fill="#464871"
                            />
                            <rect
                                x="206.15"
                                y="156.54"
                                width="35.59"
                                height="6.69"
                                rx="3.01"
                                fill="#fff"
                            />
                            <rect
                                x="223.94"
                                y="174.08"
                                width="17.79"
                                height="3.35"
                                rx="1.5"
                                fill="#66d0d8"
                            />
                            <rect
                                x="223.94"
                                y="182.2"
                                width="17.79"
                                height="3.35"
                                rx="1.5"
                                fill="#66d0d8"
                            />
                        </g>
                    </g>
                    <g id="Buttons">
                        <g>
                            <circle
                                cx="194.47"
                                cy="142.1"
                                r="4.46"
                                fill="#66d0d8"
                            />
                            <path
                                d="M294.15,199a4.46,4.46,0,1,1-4.46-4.46A4.46,4.46,0,0,1,294.15,199Z"
                                transform="translate(-82.68 -56.9)"
                                fill="#66d0d8"
                            />
                            <circle
                                cx="219.54"
                                cy="142.1"
                                r="4.46"
                                fill="#fff"
                            />
                            <circle
                                cx="232.08"
                                cy="142.1"
                                r="4.46"
                                fill="#fff"
                            />
                        </g>
                    </g>
                </g>
            </a.svg>
        </S.RobotWrapper>
    )
}

export const Card = ({ children }) => {
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
        <a.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            {children}
        </a.div>
    )
}