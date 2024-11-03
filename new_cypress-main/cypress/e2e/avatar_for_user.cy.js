describe('Проверка покупки аватара для трененра', function () {

    it('Проверка покупки нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru/login'); // заходим на сайт покемонов
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // вводим верный логин
         cy.get('#password').type('USER_PASSWORD'); // вводим верный пароль
         cy.get('.auth__button').click({ force: true }); // кликаем на кнопку Войти
         cy.get('.header__id-text_type_profile').click(); // кликаем на профиль тренера
         cy.get('[href="/shop"]').click({ force: true }); // кликаем на кнопку Смена аватара
         cy.get('.available > button').first().click({ force: true }); // кликаем Купить первый свободный аватар 
         cy.get('.credit').type('4627100101654724'); // вводим номер карты
         cy.get('.k_input_date').type('1225'); // вводим срок действия карты
         cy.get('.k_input_ccv').type('125'); // вводим ССV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ARTEM ZHDANOV'); // вводим имя владельца карты
         cy.get('.pay-btn').click({ force: true }); // кликаем на кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // вводим код из смс
         cy.get('.payment__submit-button').click({ force: true }); // кликаем на кнопку Отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка, что покупка прошла успешно

    })

})