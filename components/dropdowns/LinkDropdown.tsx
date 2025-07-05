import React from 'react';
import styles from './dropdown.module.scss';
import Link from 'next/link';

type Options = {
  id: string;
  name: string;
  href: string;
}[];

type LinkDropdownProps = {
    options: Options;
 }


const LinkDropdown: React.FC<LinkDropdownProps> = ({options}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.importHeader}>
        <p>Import</p>
      </div>
        {options.map((option) => (
          <Link key={option.id} href={option.href} className={styles.option}>{option.name}</Link>
        ))}
    </div>
  );
};

export default LinkDropdown;