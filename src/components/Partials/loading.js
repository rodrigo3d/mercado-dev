// @author Rodrigo Ribeiro - me@rodrigo3d.com

import React from 'react'

const Loading = (props) => {
  return (
    <div className="col-md-12">
      <div className="card-body text-center">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-secondary" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Loading
