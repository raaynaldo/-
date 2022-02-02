import React from 'react';
import { useSelector } from 'react-redux';

const PracticeDetail = () => {
  const practice = useSelector((state) => state.practice.selectedPractice);

  return (
    <div>
      <div>Id: {practice?.id ?? '-'}</div>
      <div>name: {practice?.name ?? '-'}</div>
    </div>
  );
};

export default PracticeDetail;
