import React, { useState, useEffect, useRef } from 'react';

const BouncingText = () => {
    const textRef = useRef(null);
    const [color, setColor] = useState('#000000'); // Стартовый цвет текста
    const [position, setPosition] = useState({ x: 100, y: 100 }); // Начальная позиция текста
    const [velocity, setVelocity] = useState({ x: 2, y: 2 }); // Начальная скорость
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C']; // Возможные цвета текста

    // Функция для изменения цвета текста
    const changeColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    // Функция для анимации отскока текста
    const bounceText = () => {
        // Вычисляем новую позицию текста
        const newX = position.x + velocity.x;
        const newY = position.y + velocity.y;

        // Проверка на отскок от границ
        let newVelocityX = velocity.x;
        let newVelocityY = velocity.y;

        // Изменяем направление, если текст касается краев экрана
        if (newX <= 0 || newX >= screenWidth - 100) {
            newVelocityX = -newVelocityX; // Меняем направление по оси X
            changeColor(); // Меняем цвет при отскоке
        }

        if (newY <= 0 || newY >= screenHeight - 50) {
            newVelocityY = -newVelocityY; // Меняем направление по оси Y
            changeColor(); // Меняем цвет при отскоке
        }

        setPosition({ x: newX, y: newY });
        setVelocity({ x: newVelocityX, y: newVelocityY });

        // Продолжаем анимацию
        requestAnimationFrame(bounceText);
    };

    useEffect(() => {
        bounceText(); // Запускаем анимацию при монтировании компонента
    }, [position, velocity]); // Анимация будет запускаться при изменении позиции или скорости

    return (
        <div
            ref={textRef}
            style={{
                position: 'absolute',
                top: `${position.y}px`,
                left: `${position.x}px`,
                fontSize: '30px',
                fontWeight: 'bold',
                color: color,
                transition: 'color 0.2s', // Плавное изменение цвета
            }}
        >
            Отскок текста!
        </div>
    );
};

const Layout = () => {
    return (
        <div>
            <BouncingText />
            <p>Это другая страница, на которой происходит отскок текста.</p>
        </div>
    );
};

export default Layout;
