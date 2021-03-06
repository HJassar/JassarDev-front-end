import { useEffect, useState } from 'react'

import './LightBox.css'

import { connect } from 'react-redux'
import { switchNight, switchSpin } from '../../redux/ui/ui.actions'

const LightBox = ({ night, spin, switchNight, switchSpin }) => {

    const [guide, setGuide] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setGuide(true)
        }, 5000);
    }, [])

    return (
        <div
            className="LightBox"
            style={{ borderColor: !night ? 'black' : 'white' }}
        >
            {guide &&
                <div className={['arrow', night ? 'night glow' : ''].join(' ')}>
                    <svg width="76" height="148" viewBox="0 0 76 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70.9394 3.91565C71.9973 3.59826 72.5977 2.48329 72.2803 1.4253C71.9629 0.367319 70.848 -0.233048 69.79 0.0843474L70.9394 3.91565ZM48.8647 84L50.0082 82.3592L48.8647 84ZM18.5768 147.838C19.5921 148.273 20.7678 147.803 21.2029 146.788L28.2935 130.243C28.7286 129.228 28.2583 128.052 27.243 127.617C26.2278 127.182 25.052 127.652 24.6169 128.668L18.3142 143.374L3.60788 137.071C2.59262 136.636 1.41686 137.106 0.98175 138.122C0.546639 139.137 1.01694 140.313 2.0322 140.748L18.5768 147.838ZM69.79 0.0843474C54.6447 4.62794 45.8797 10.353 41.8463 17.0466C37.7211 23.8926 38.8402 31.2143 42.0755 38.0643C45.2925 44.8758 50.7572 51.5782 55.9384 57.5475C61.2337 63.6482 66.1182 68.8703 68.6563 73.0399L72.0731 70.9601C69.3034 66.41 64.0341 60.7722 58.9592 54.9255C53.7702 48.9473 48.6483 42.6147 45.6923 36.3561C42.7546 30.136 42.114 24.3526 45.2724 19.1111C48.5227 13.717 56.0847 8.37206 70.9394 3.91565L69.79 0.0843474ZM68.6563 73.0399C71.1971 77.2142 72.0595 80.493 71.9298 82.8238C71.8064 85.0401 70.7979 86.4764 69.1943 87.3024C67.4823 88.1842 64.8599 88.4768 61.4756 87.7323C58.121 86.9943 54.1811 85.2676 50.0082 82.3592L47.7211 85.6408C52.2345 88.7865 56.6522 90.7668 60.6162 91.6388C64.5505 92.5044 68.2076 92.3101 71.026 90.8583C73.9528 89.3507 75.7254 86.6067 75.9236 83.0461C76.1154 79.6001 74.8399 75.5056 72.0731 70.9601L68.6563 73.0399ZM50.0082 82.3592C41.5084 76.4351 33.8781 74.458 27.4564 76.0678C20.9993 77.6866 16.3528 82.7803 13.5151 89.6764C7.87364 103.387 8.89353 125.207 17.5077 146.743L21.2216 145.257C12.8358 124.293 12.1057 103.613 17.2142 91.1986C19.7515 85.0322 23.605 81.1572 28.4291 79.9478C33.2887 78.7295 39.7209 80.0649 47.7211 85.6408L50.0082 82.3592Z" fill="white" />
                    </svg>
                </div>
            }
            <div
                className="switch left"
                style={{ borderColor: !night ? 'black' : 'white' }}
            >
                <div
                    onClick={() => { switchNight(night); setGuide(false); }}
                    className={['light-button', night ? '' : 'clicked'].join(' ')}></div>
            </div>
            <div
                className="switch right"
                style={{ borderColor: !night ? 'black' : 'white' }}
            >
                <div
                    onClick={() => switchSpin(spin)}
                    className={['light-button', !spin ? '' : 'clicked'].join(' ')}></div>
            </div>
            <div className="screw top left"
                style={{ backgroundColor: !night ? 'black' : 'white' }}></div>
            <div className="screw top right"
                style={{ backgroundColor: !night ? 'black' : 'white' }}></div>
            <div className="screw bottom left"
                style={{ backgroundColor: !night ? 'black' : 'white' }}></div>
            <div className="screw bottom right"
                style={{ backgroundColor: !night ? 'black' : 'white' }}></div>
        </div >
    )
}

const mapStatesToProps = state => ({
    night: state.ui.night,
    spin: state.ui.spin,
})

export default connect(mapStatesToProps, { switchNight, switchSpin })(LightBox)