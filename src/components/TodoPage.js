import React from 'react'

const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3">+</button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center">
              Todo List
            </h2>
          </div>
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Todo Title" />
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Todo Description" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoPage
