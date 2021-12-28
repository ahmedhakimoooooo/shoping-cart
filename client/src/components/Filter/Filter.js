import React from 'react'
import '../../css/Filter/Filter.css'
import Bounce  from 'react-reveal/Bounce'

function Filter(props) {
    return (
       <Bounce right>
            <div className='filter'>
            <h2>filter</h2>
            <p>Number Of Product : {props.numberProduct}</p>
            <div className='filter-by-size'>
                <span>Size</span>
                <select onChange={props.handelFilterBySize} value={props.size} className="form-control">
                    <option value="all">all</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                    <option value="xxl">xxl</option>
                </select>
            </div>

            <div className='filter-by-order'>
                <span>Order</span>
                <select onChange={props.handelFilterByOrder} value={props.order} className="form-control">
                    <option value="latest">latest</option>
                    <option value="lower">lower</option>
                    <option value="height">height</option>

                </select>
            </div>
        </div>
       </Bounce>
    )
}
export default Filter;