import React from "react";

const Inner: React.FC = () => {
    // Создаем состояние для отслеживания того, открыт ли элемент FAQ
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    // Функция для переключения состояния открытия/закрытия элемента
    const toggleElement = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="faq__content">
            {/* Маппинг элементов FAQ */}
            {faqData.map((faq, index) => (
                <div className="faq__content-element" key={index}>
                    <div
                        className="faq__content-element_headerblog"
                        onClick={() => toggleElement(index)} // Вызываем функцию переключения при нажатии
                    >
                        <h2 className="faq__content-element_header">{faq.question}</h2>
                        {/* Добавляем класс активности для кнопки крестика */}
                        <button className={`faq__content-element_headercross ${openIndex === index ? 'active' : ''}`}></button>
                    </div>
                    {/* Условный рендеринг текста FAQ с добавлением класса активности */}
                    <p className={`faq__content-element_text ${openIndex === index ? 'active' : ''}`}>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Inner;
// Данные FAQ (вместо статических данных можно использовать данные из API или базы данных)
const faqData = [
    {
        question: 'Question',
        answer: 'Answer',
    },
    {
        question: 'Question',
        answer: 'Answer',
    },
    {
        question: 'Question',
        answer: 'Answer'}
];