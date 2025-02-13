"use client"; // Используем client-side рендеринг

import React, { createContext, useState, useEffect, useContext } from "react";

// Создаем контекст
const DataContext = createContext(null);

// Хук для использования данных в любом компоненте
export const useData = () => useContext(DataContext);

// Компонент провайдера для предоставления данных в приложение
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://script.google.com/macros/s/AKfycbw4TXftteP5c-unHk7ZKegt7h_17f76zGVVje1RisAOadLcUQ42MXeaBhQr544SI-_qcg/exec";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          cache: "no-store", // Отключаем кэш для получения актуальных данных
          method: "GET",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Присваиваем данные
        setLoading(false); // Завершаем загрузку
      } catch (error) {
        setError(error); // Обрабатываем ошибки
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
