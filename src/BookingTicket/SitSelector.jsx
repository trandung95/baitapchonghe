import React, { Component } from 'react'


export default class SitSelector extends Component {
    createSeat = () => {
        return this.props.seatRow.danhSachGhe.map((sit, index) => {
            let cssGheDaDat = '';
            if (sit.daDat) {
                cssGheDaDat = 'gheDuocChon'
            }
            return <button className="ghe" key={index}>

            </button>
        })
    }
    render() {
        return (
            <div className='text-light my-2'>
                {this.props.seatRow.hang} {this.createSeat()}
            </div>
        )
    }
}
