import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'

const AnecdoteForm = () =>
{
  const dispatch = useDispatch();

  const handleCreate = (event) =>
  {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(create(content));
  }

  return (
  <form onSubmit={handleCreate}>
        <div><input name='anecdote'/></div>
        <button>create</button>
  </form>)
}

export default AnecdoteForm;