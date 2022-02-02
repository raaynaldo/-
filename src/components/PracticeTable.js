import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletePracticeAsync,
  getPractice,
  getPracticesAsync,
} from '../features/practiceSlice';

const PracticeTable = () => {
  const dispatch = useDispatch();
  const practices = useSelector((state) => state.practice.practices);

  useEffect(() => {
    dispatch(getPracticesAsync());
  }, [dispatch]);

  function deletePractice(id) {
    dispatch(deletePracticeAsync({ id }));
  }

  function selectPractice(id) {
    dispatch(getPractice({ id }));
  }

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      {practices.map((practice) => (
        <tr key={practice.id}>
          <td>{practice.id}</td>
          <td>
            <button onClick={() => selectPractice(practice.id)}>{practice.name}</button>
          </td>
          <td>
            <button onClick={() => deletePractice(practice.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default PracticeTable;
