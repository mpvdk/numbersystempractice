'use client';

import { useState } from 'react';

interface SinglesProps {}

const Singles: React.FC<SinglesProps> = ({}) => {
  const [editing, setEditing] = useState(false);
  const rows = [];

  for (let i = 0; i < 10; i++) {
    rows.push(
      <tr key={i} className='h-12'>
        <th scope='row' className=''>
          {i}
        </th>
        <td className=''>{editing ? <input type='text' className='w-12 h-full border-2 rounded'></input> : <span>{numberToLetter[i]}</span>}</td>
      </tr>
    );
  }

  return (
    <section className='mt-12 flex flex-col items-center'>
      <table className='border-spacing-x-12 border-separate'>
        <thead className=''>
          <tr>
            <th scope='col'>number</th>
            <th scope='col'>letter</th>
          </tr>
        </thead>
        <tbody>{rows.map((r) => r)}</tbody>
      </table>
      <button className='border-2 border-slate-800 w-40 h-12 mt-8 rounded-lg' onClick={() => setEditing(!editing)}>
        {editing ? 'save' : 'edit'}
      </button>
    </section>
  );
};

export default Singles;

// const numberToLetter = {
//   0: 'O',
//   1: 'I',
//   2: 'L',
//   3: 'E',
//   4: 'D',
//   5: 'S',
//   6: 'G',
//   7: 'T',
//   8: 'B',
//   9: 'J',
// };
const numberToLetter = ['O', 'I', 'L', 'E', 'D', 'S', 'G', 'T', 'B', 'J'];
