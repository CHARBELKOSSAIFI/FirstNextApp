// pages/taskserver.tsx

import { GetServerSideProps } from 'next';
import axios from 'axios';
import React from 'react';

interface TaskDetails {
  title: string;
  image: string;
}

const TaskServerPage: React.FC<{ taskDetails: TaskDetails }> = ({ taskDetails }) => {
  return (
    <div>
      <h1>{taskDetails.title}</h1>
      <img src={taskDetails.image} alt={taskDetails.title} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
    const taskDetails: TaskDetails = {
      title: response.data.title,
      image: response.data.image,
    };

    return {
      props: {
        taskDetails,
      },
    };
  } catch (error) {
    console.error('Error fetching task details:', error);
    return {
      notFound: true,
    };
  }
};

export default TaskServerPage;
