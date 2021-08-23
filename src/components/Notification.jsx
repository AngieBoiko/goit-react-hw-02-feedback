import React from 'react';
export default function Notification({ totalFeedbacks }) {
  if (!totalFeedbacks) {
    return <p>No feedback given</p>;
  }
}
