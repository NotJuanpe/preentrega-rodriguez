import React from 'react'

const ItemListContainer = ({children}) => {
  return (
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 justify-content-center dflex ml-5 ">
                        <div className='my-5 mb-5 d-grid gap-3'>{children}</div>
            </div>
        </div>
  )
}

export default ItemListContainer