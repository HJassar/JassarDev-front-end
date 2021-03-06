import { useState, } from 'react'


import Terminal from './Terminal'

import { connect } from 'react-redux'

import './Monitor.css'

const Monitor = ({ tiltIsFixed }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className='Monitor'>
            {open && <Terminal open={open} setOpen={setOpen} />}
            <div id='click-me'
                style={{ display: tiltIsFixed ? 'block' : 'none', userSelect: 'none', cursor: 'pointer' }}
            >
                Click me<div id='flasher'>|</div>
            </div>
            <svg viewBox="0 0 482 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.15" filter="url(#filter0_f_10_203)">
                    <path d="M290 278.76C290 279.297 289.89 279.819 289.638 280.293C287.394 284.523 274.356 306 241 306C207.316 306 196.838 284.099 195.231 280.173C195.067 279.775 195 279.355 195 278.924V278.924C195 276.757 196.757 275 198.924 275L286.24 275C288.316 275 290 276.684 290 278.76V278.76Z" fill="black" />
                </g>
                <g filter="url(#filter1_d_10_203)">
                    <rect x="18" y="5" width="446" height="214" rx="5" fill="black" />
                </g>
                <g filter="url(#filter2_d_10_203)">
                    <rect
                        className={['screen', tiltIsFixed ? 'on' : 'off'].join(' ')}
                        onClick={() => { if (tiltIsFixed) setOpen(true) }}
                        x="25" y="11" width="432" height="195" rx="2" />
                </g>
                <g opacity={tiltIsFixed ? 1 : 0.5}>
                    <path d="M241.151 209V209C242.807 209 244.15 210.343 244.15 212V212.848C244.15 213.49 243.63 214.011 242.988 214.011H241.151V209Z" fill="white" />
                    <path d="M241.151 214.15H242.372C242.532 214.15 242.662 214.281 242.662 214.441V214.488C242.662 215.13 242.142 215.65 241.5 215.65H241.151V214.15Z" fill="#8180FF" />
                    <path d="M239.488 214.441C239.488 214.281 239.618 214.15 239.779 214.15H241V215.65H240.651C240.009 215.65 239.488 215.13 239.488 214.488V214.441Z" fill="white" />
                    <path d="M238 212C238 210.343 239.343 209 241 209V209V214.011H239.163C238.521 214.011 238 213.49 238 212.848V212Z" fill="#8180FF" />
                </g>
                <rect x="234" y="219" width="15" height="58" fill="black" />
                <path d="M194 277.631C194 276.037 194.88 274.596 196.385 274.071C201.284 272.36 214.417 269 242 269C269.455 269 282.044 272.329 286.712 274.047C288.172 274.585 289 275.998 289 277.554V277.554C289 280.009 287.009 282 284.554 282H198.369C195.956 282 194 280.044 194 277.631V277.631Z" fill="black" />
                <defs>
                    <filter id="filter0_f_10_203" x="180" y="260" width="125" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_10_203" />
                    </filter>
                    <filter id="filter1_d_10_203" x="0" y="0" width="482" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="13" />
                        <feGaussianBlur stdDeviation="9" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_203" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_203" result="shape" />
                    </filter>
                    <filter id="filter2_d_10_203" x="21" y="11" width="440" height="203" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_203" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_203" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div >
    )
}

const mapStatesToProps = state => ({
    tiltIsFixed: state.ui.tiltIsFixed
})

export default connect(mapStatesToProps)(Monitor)