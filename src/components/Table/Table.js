import React from 'react'
import { connect } from 'react-redux'
import table from '../../assets/table.svg'
import Monitor from './Monitor'

import './Table.css'

const Table = ({ night }) => {
    return (
        <div className={['Table', night ? 'night' : 'day'].join(' ')}>
            <Monitor />
            <div className='blue-ball'></div>
            <div>
                <img src={table} alt="table" />
            </div>
        </div>
    )
}


const mapStatesToProps = state => ({
    night: state.ui.night
})

export default connect(mapStatesToProps)(Table)
