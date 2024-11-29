import React, { useState } from "react";

export default function DraggableTimeline() {
  const [position1, setPosition1] = useState(0); // Начальная позиция первого кружка
  const [position2, setPosition2] = useState(155); // Начальная позиция второго кружка

  const handleDragStart = (event, setPosition, initial) => {
    // Сохраните начальное положение при старте перетаскивания
    event.dataTransfer.setData("text/plain", initial);
  };

  const handleDragOver = (event) => {
    // Предотвращает действие по умолчанию, чтобы элемент можно было сбросить
    event.preventDefault();
  };

  const handleDrop = (event, setPosition) => {
    // Получите начальную позицию
    const initialPosition = Number(event.dataTransfer.getData("text/plain"));
    // Вычисление новой позиции
    const newPosition = event.clientX - initialPosition; // Пример для вычисления новой позиции
    setPosition(newPosition);
  };
}
