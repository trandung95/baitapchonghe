import React, { Component } from 'react'
import './BookingTicket.css';
import SitSelector from './SitSelector';
import danhSachGhe from './danhSachGhe.json'

export default class BookingTicket extends Component {
    renderSeats = () => {
        return danhSachGhe.map((seatRow, index) => {
            return <div key={index}>
                <SitSelector seatRow={seatRow} />
            </div>
        })
    }
    render() {
        return (
            <div style={{ background: 'url(./booking/bgmovie.jpg)', position: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}>
                <div className="container">
                    <h2 className='text-light text-center display-4 mt-4'>MOVIE SEAT SELECTION</h2>
                    <div style={{ background: 'rgba(0,0,0,0.3)' }} className='p-5'>
                        <p className='text-danger'>Fill the required details below and select your seats</p>
                        <div className="row">
                            <div className="col-6">
                                <p className='text-success'>Your name</p>
                                <input type="text" id='name' />
                            </div>
                            <div className="col-6">
                                <p className='text-success'>Number of Seats</p>
                                <input type="number" id='seatNum' />
                            </div>
                            <button className='btn btn-outline-light mt-4'>Start selecting</button>
                        </div>
                        <div className="row">
                            <div className="col-4 text-light"><i class="fa fa-square text-success"></i> Selected Seat</div>
                            <div className="col-4 text-light"><i class="fa fa-square text-danger"></i> Reserved Seat</div>
                            <div className="col-4 text-light"><i class="fa fa-square text-light"></i> EmptySeat Seat</div>
                        </div>
                        <div className="selectorArea" style={{ display: 'flex', justifyContent: 'center' }}>

                        </div>
                        {this.renderSeats()}
                    </div>
                </div>
            </div>
        )
    }
}
