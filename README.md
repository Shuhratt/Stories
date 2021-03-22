# Stories #1
![Super-Linter](https://github.com/Shuhratt/Stories/workflows/Super-Linter/badge.svg)

![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Сборка
```
$ npm run build
```
## Запуск
```
$ npm start
```
## Технологии
- <i> JS Native </i>
- <i> SCSS </i>
- <i> Webpack </i>
- <i> ESLint </i>
- <i> Stylelint </i>

## Ход работы:
В проекте не использовал какие-либо фрейморки JavaScript, в принципе всё получилось сделать и без них.
Использовал сборщик webpack, чтобы удобно было поддерживать проект, разширять его и использовать соврменные возможности JavaScript
Для контроля стиля кода JavaScript и SCSS подключил ESLint и stylelint
Стили написаны с помощью препроцессор SCSS, чтобы удобно было структурировать файлы стилей и активно использовать возможности препроцессора

###### Шаблон leaders:
В шаблоне leaders где есть ключ `selectedUserId` я решил сделать проверку на существование этого ключа, и иконку добавить у последнего элемента в массиве, хотя я думал что его нужно добавить у элемента которого id такой же как значение ключа, но так тесты уже не проходили

###### Шаблон vote:
В шаблоне vote на карточках пользователя я добавил атрибут `data-params`, кнопкам добавил атрибут `data-action` со значение `prev` и `next` соотвественно, если смотреть на 3 задание то это должны быть верные теги  

###### Шаблон chart:


###### Шаблон diagram:


###### Шаблон activity:


