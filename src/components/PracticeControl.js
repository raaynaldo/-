import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPracticeAsync } from '../features/practiceSlice';

const PracticeControl = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function addPracticeHandler(event) {
    event.preventDefault();
    dispatch(
      addPracticeAsync({
        name,
      })
    );
    setName('');
  }

  return (
    <form onSubmit={addPracticeHandler}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'>Add Practice</button>
    </form>
  );
};

export default PracticeControl;
