import React from 'react'
import { decreace, increace } from '../../store/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const Hero = ({ increace, decreace, count }) => {
         return (
           <div className='container'>
                  <div>
             <button onClick={decreace}>-</button>
             <h1 className='count'>{count}</h1>
             <button onClick={increace }>+</button>
           </div>
           </div>
         );
       };
       
       
       const mapStateToProps = (state) => ({
         count: state.count,
       });
       
       const mapDispatchToProps = (dispatch) => ({
         increace: () => dispatch(increace ()),
         decreace: () => dispatch(decreace()),
       });
       
       export default connect(mapStateToProps, mapDispatchToProps)(Hero);