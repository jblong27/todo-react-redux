import React, { useState } from "react";

const TODOS_STATUS = ["Unstarted", "In Progress", "Completed"]

const TodoPage = () => {

  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  const renderTodoLists = () => {

  }

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center">Todo List</h2>
          </div>
        </div>
        {/* Input form */}
        {cardForm && (
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Todo Title"
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Todo Description"
                onChange={onDescriptionChange}
              />
            </div>
            <button type="submit" className="btn-btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
