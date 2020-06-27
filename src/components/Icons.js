import React from 'react'
import { FaRegCircle, FaPen, FaTimes} from 'react-icons/fa'

function Icons({name}) {
switch (name) {
    case 'circle':
        return <FaRegCircle className='icons'/>;
    case 'cross':
        return <FaTimes className='icons'/>;
    default:
        return <FaPen className='icons'/>;

}
}

export default Icons;
