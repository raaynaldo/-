import React from 'react';
import { practiceApi, useGetPracticesQuery } from '../app/services/practiceApi';

const PracticeTableRTKQuery = () => {
  const { data: practices, error, isLoading, refetch } = useGetPracticesQuery();

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {practices?.map((practice) => (
          <tr key={practice.id}>
            <td>{practice.id}</td>
            <td>{practice.name}</td>
          </tr>
        ))}
      </table>
      <button onClick={refetch}>refetch</button>
    </>
  );
};

export default PracticeTableRTKQuery;
