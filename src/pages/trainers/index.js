import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import female from '../../assets/icons/female.png';
import male from '../../assets/icons/male.png';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  const getTrainers = async () => {
    const response = await fetch(`//localhost:3000/trainers.json`);
    const trainers = await response.json();
    setTrainers(trainers);
  };

  useEffect(() => {
    getTrainers();
  }, []);

  return (
    <div>
      <h1>Trainers Page</h1>
      <ul>
        {trainers.map(trainer => (
          <li key={trainer.id}>
            <Link to={{ pathname: `/trainer/${trainer.id}` }}>
              {/* <div>
                <span>Photo</span>
                <img src={trainer.photo || default} width="100" alt="Trainer" />
              </div> */}
              {trainer.photo && (
                <div>
                  <span>Photo</span>
                  <img src={trainer.photo} width="100" alt="Trainer" />
                </div>
              )}
              <div>
                <span>Name</span>
                <div>{trainer.name}</div>
              </div>
              <div>
                <img src={trainer.sex === female ? female : male} alt="Gender" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trainers 
