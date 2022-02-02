import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPracticesAsync } from '../features/practiceSlice';

const PracticeTableRTKQuery = () => {
  const dispatch = useDispatch();
  const practices = useSelector((state) => state.practice.practices);

  useEffect(() => {
    dispatch(getPracticesAsync());
  }, [dispatch]);

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      {practices.map((practice) => (
        <tr key={practice.id}>
          <td>{practice.id}</td>
          <td>{practice.name}</td>
        </tr>
      ))}
    </table>
  );
};

export default PracticeTableRTKQuery;
