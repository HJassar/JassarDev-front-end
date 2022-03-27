import { useState } from 'react'
import { connect } from 'react-redux'

import { fixTilt } from '../../redux/ui/ui.actions'

import './Frames.css'
import Frame1 from '../../assets/frames/frame-1.svg'
import Frame2 from '../../assets/frames/frame-2.svg'
import Frame3 from '../../assets/frames/frame-3.svg'
import Frame4 from '../../assets/frames/frame-4.svg'
import Frame5 from '../../assets/frames/frame-5.svg'

const Frames = ({ night, fixTilt }) => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className={['Frames', night ? 'night' : 'day'].join(' ')}>
            {[Frame1, Frame2, Frame3, Frame4, Frame5].map((frame, index) => (
                <div
                    id={'frame-' + (index + 1)}
                    key={index}
                    className={[
                        'frame',
                        (clicked && index === 4) ? 'clicked' : '',
                    ].join(' ')}
                    onClick={() => {
                        if (index === 4) {
                            setClicked(true)
                            setTimeout(() => {
                                fixTilt()
                            }, 2500);
                        }
                    }}
                >
                    <img src={frame} alt={'frame-' + (index + 1)} />
                </div>
            ))}
        </div>
    )
}

const mapStatesToProps = state => ({
    night: state.ui.night
})

export default connect(mapStatesToProps, { fixTilt })(Frames)