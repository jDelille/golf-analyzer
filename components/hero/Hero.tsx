import React from 'react';
import styles from './Hero.module.scss';

type HeroProps = {
    title: string;
};

const Hero: React.FC<HeroProps> = ({title}) => {
  return (
    <div className={styles.hero}>
        <h2>{title}</h2>
    </div>
  );
};

export default Hero;