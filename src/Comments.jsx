import React from 'react';

const commentsData = [
    {
        author: 'Іван',
        time: '2025-02-26 14:30',
        text: 'Текст коментаря 1!'
    },
    {
        author: 'Анна',
        time: '2025-02-26 14:35',
        text: 'Текст коментаря 2!'
    },
    {
        author: 'Сергій',
        time: '2025-02-26 14:40',
        text: 'Текст коментаря 3!'
    },
    {
        author: 'Марія',
        time: '2025-02-26 14:45',
        text: 'Текст коментаря 4!'
    },
    {
        author: 'Олексій',
        time: '2025-02-26 14:50',
        text: 'Текст коментаря 5!'
    }
];

const Comment = ({ author, time, text }) => {
    return (
        <div className="comment">
            <div className="author">{author}</div>
            <div className="time">{time}</div>
            <div className="text">{text}</div>
        </div>
    );
};

const Comments = () => {
    return (
        <div className="comments">
            <h2>Коментарі</h2>
            {commentsData.map((comment, index) => (
                <Comment
                    key={index}
                    author={comment.author}
                    time={comment.time}
                    text={comment.text}
                />
            ))}
        </div>
    );
};

export default Comments;
