import React from 'react';

const btnItems = [
  { id: 1, name: 'Good' },
  { id: 2, name: 'Neutral' },
  { id: 3, name: 'Bad' },
];
export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <ul>
      {btnItems.map(item => (
        <li key={item.id}>
          <button type="button" onClick={onLeaveFeedback}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
