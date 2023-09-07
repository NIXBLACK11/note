import React, { useState, useRef } from 'react';
import { marked } from 'marked';

const TextArea = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    const divRef = useRef(null);

    const handleChange = () => {
        if (divRef.current) {
            setMarkdownContent(divRef.current.innerText);
        }
    };

    const renderMarkdown = () => {
        const html = marked(markdownContent);
        return { __html: html };
    };

    return (
        <div
            ref={divRef}
            contentEditable
            placeholder="Start typing..."
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
                whiteSpace: 'nowrap', // Prevent line breaks
            }}
            onInput={handleChange}
            dangerouslySetInnerHTML={renderMarkdown()}
        >{renderMarkdown()}</div>
    );
};

export default TextArea;


// import React, { useState } from 'react';
// import { Textarea } from "@chakra-ui/react";
// import { marked } from 'marked';

// const TextArea = () => {

//     const [markdownContent, setMarkdownContent] = useState('');

//     const handleChange = (event) => {
//         setMarkdownContent(event.target.value);
//     };

//     const renderMarkdown = () => {
//         const html = marked(markdownContent);
//         return { __html: html };
//     };

//     return (
//         <Textarea
//             placeholder="Start typing..."
//             size="lg"
//             resize="none"
//             py={[5, 7, 10]}
//             px={[10, 70, 160]}
//             style={{
//             width: '100%',
//             height: '100%',
//             border: 'none',
//             outline: 'none',
//             fontSize: '16px',
//             lineHeight: '1.5',
//             backgroundColor: 'transparent',
//             boxShadow: 'none',
//             color: 'inherit',
//             }}
//             value={markdownContent}
//             onChange={handleChange}
//             dangerouslySetInnerHTML={renderMarkdown()}
//         />
//   );
// };

// export default TextArea;