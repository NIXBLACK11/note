import React from 'react';
import { Textarea } from "@chakra-ui/react";

const TextArea = () => {
  return (
    <Textarea
        placeholder="Start typing..."
        size="lg"
        resize="none"
        py={[5, 7, 10]}
        px={[10, 70, 160]}
        style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '1.5',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'inherit',
        }}
    />
  )
}

export default TextArea