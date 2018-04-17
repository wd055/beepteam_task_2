# Тестовое задание

Дан файл [data.json](data.json), в нём содержится информация о письмах.
Взяв всю необходимую информацию из файла, необходимо сверстать список писем с возможностью их удаления (в том числе множественного), добавить список в Storybook и задеплоить Storybook в Интернет. В случае пустого списка необходимо отображать заглушку. В качестве макета можно использовать [веб-версию Почты](https://e.mail.ru).

## Технологический стек

+ [React](https://reactjs.org/)
+ [Storybook](https://storybook.js.org/)

## Плюсом будет

+ [Typescript](https://www.typescriptlang.org/)
+ Документация
+ Покрытие тестами
+ CI / CD

## Стуктура письма в [data.json](data.json)

![Список писем на примере](list_explained.png)

`id` - уникальный идентификатор письма

`sender` - имя отправителя <span style="color:orange">*</span>

`avatar` - ссылка на аватар отправителя <span style="color:red">*</span>

`theme` - тема (заголовок) письма <span style="color:green">*</span>

`snippet` - фрагмент тела письма, отображаемый в списке писем <span style="color:blue">*</span>
