import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react';

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjcwNzAxMmUxN2YxNjcxNDlhY2QyMWQiLCJpYXQiOjE3MTg2NDQ3NTQsImV4cCI6MjAzNDIyMDc1NH0.minweeTPzSTdvAIQ3hG28f3TnxwzVvv6IVqSN3VR4dk" />
    </>
  );
}
