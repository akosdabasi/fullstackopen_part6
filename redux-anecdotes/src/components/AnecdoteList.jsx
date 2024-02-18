import { useSelector, useDispatch } from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleVote}) => (
  <div>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={() => handleVote(anecdote.id)}>vote</button>
    </div>
  </div>
)

const AnecdoteList = () =>
{
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(vote(id));
  }

  return  [...anecdotes].sort((a,b)=>b.votes - a.votes).map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={handleVote}/>)
}

export default AnecdoteList