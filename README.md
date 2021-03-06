# Шаблоны проектирования

Шаблоны проектирования помогают нам унифицировать код под уже существующие лучшие практики. Используя нужный шаблон проектирования в определёной ситуации формирует стерильный код. Здесь описаны в общей сумме 17 паттернов: порождающие, структурные и поведенческие.

## Оглавление
- [Шаблоны проектирования](#шаблоны-проектирования)
  - [Оглавление](#оглавление)
  - [Порождающие паттерны](#порождающие-паттерны)
    - [Singleton (Одиночка)](#singleton-одиночка)
      - [Предназначение](#предназначение)
      - [Суть паттерна](#суть-паттерна)
      - [Пример реализации](#пример-реализации)
    - [Prototype (Прототип)](#prototype-прототип)
      - [Предназначение](#предназначение-1)
      - [Суть паттерна](#суть-паттерна-1)
      - [Пример реализации](#пример-реализации-1)
    - [Builder (Строитель)](#builder-строитель)
      - [Предназначение](#предназначение-2)
      - [Суть паттерна](#суть-паттерна-2)
      - [Пример реализации](#пример-реализации-2)
    - [Factory (Фабрика)](#factory-фабрика)
      - [Предназначение](#предназначение-3)
      - [Суть паттерна](#суть-паттерна-3)
      - [Пример реализации](#пример-реализации-3)
  - [Структурные паттерны:](#структурные-паттерны)
    - [Bridge (Мост)](#bridge-мост)
      - [Предназначение](#предназначение-4)
      - [Суть паттерна](#суть-паттерна-4)
      - [Пример реализации](#пример-реализации-4)
    - [Facade (Фасад)](#facade-фасад)
      - [Предназначение](#предназначение-5)
      - [Суть паттерна](#суть-паттерна-5)
      - [Пример реализации](#пример-реализации-5)
    - [Adapter (Адаптер)](#adapter-адаптер)
      - [Предназначение](#предназначение-6)
      - [Суть паттерна](#суть-паттерна-6)
      - [Пример реализации](#пример-реализации-6)
    - [Proxy (Прокси)](#proxy-прокси)
      - [Предназначение](#предназначение-7)
      - [Суть паттерна](#суть-паттерна-7)
      - [Пример реализации](#пример-реализации-7)
    - [Composite (Композит)](#composite-композит)
      - [Предназначение](#предназначение-8)
      - [Суть паттерна](#суть-паттерна-8)
      - [Пример реализации](#пример-реализации-8)
  - [Поведенческие паттерны](#поведенческие-паттерны)
    - [Chain of command (цепочка команд)](#chain-of-command-цепочка-команд)
      - [Предназначение](#предназначение-9)
      - [Суть паттерна](#суть-паттерна-9)
      - [Пример реализации](#пример-реализации-9)
    - [Mediator (Посредник)](#mediator-посредник)
      - [Предназначение](#предназначение-10)
      - [Суть паттерна](#суть-паттерна-10)
      - [Пример реализации](#пример-реализации-10)
    - [Command (Команда)](#command-команда)
      - [Предназначение](#предназначение-11)
      - [Суть паттерна](#суть-паттерна-11)
      - [Пример реализации](#пример-реализации-11)
    - [State (Состояние)](#state-состояние)
      - [Предназначение](#предназначение-12)
      - [Суть паттерна](#суть-паттерна-12)
      - [Пример реализации](#пример-реализации-12)
    - [Strategy (Стратегия)](#strategy-стратегия)
      - [Предназначение](#предназначение-13)
      - [Суть паттерна](#суть-паттерна-13)
      - [Пример реализации](#пример-реализации-13)
    - [Iterator (Итератор)](#iterator-итератор)
      - [Предназначение](#предназначение-14)
      - [Суть паттерна](#суть-паттерна-14)
      - [Пример реализации](#пример-реализации-14)
    - [Template Method (Шаблонный метод)](#template-method-шаблонный-метод)
      - [Предназначение](#предназначение-15)
      - [Суть паттерна](#суть-паттерна-15)
      - [Пример реализации](#пример-реализации-15)
    - [Observer (Наблюдатель)](#observer-наблюдатель)
      - [Предназначение](#предназначение-16)
      - [Суть паттерна](#суть-паттерна-16)
      - [Пример реализации](#пример-реализации-16)

## Порождающие паттерны

Порождающие паттерны - это шаблоны, которые описают создание объектов.

### Singleton (Одиночка)

#### Предназначение
Данный шаблон необходимо применять, когда необходим лишь один экземпляр класса, 
например для методов, которые описывают конфигурацию или создают CRUDGeneric класс.

#### Суть паттерна
Суть паттерна - описывать методы класса через модификаторы *public* и *static*. 
Таким образом с помощью модификатора *public* методы будут доступны всем, а модификатор *static*, 
позволяет получать доступ к методам класса без создания экземпляра класса. 

#### Пример реализации
Паттерн используется, к примеру в фреймворке Express, где объект `app` является Singleton, с публичными методами по типу `use`.

Пример кода: [Singleton](creational_patterns/Singleton.ts)

### Prototype (Прототип)

#### Предназначение
Данный шаблон применяется когда необходимо клонировать полностью другой класс не углубляясь в реализацию этого класса.

#### Суть паттерна
Создать метод внутри класса, который позволяет полностью скопировать другой класс.

#### Пример реализации
Глубинное клонирование классов для параллельной разработки.

Пример кода: [Prototype](creational_patterns/Prototype.ts)

### Builder (Строитель) 

#### Предназначение
Данный шаблон применяется, когда необходимо создавать большие объекты с разными конфигурациями или фильтрами. 

#### Суть паттерна
Суть паттерна - создать большое количество простых методов, через модификатор *public*, которые можно будет последовательно 
через точку реализовывать на объекте, например методы фильтрации данных приходящих из базы данных.

#### Пример реализации
Объект позволяющий сделать объект запроса к базе данных, например агрегатор пакета mongoose.

Пример кода: [Builder](creational_patterns/Builder.ts)

### Factory (Фабрика) 

#### Предназначение
Данный шаблон применяется при создании возможности на основе базового класса создавать разные системы, которые подключаются к базовому классу через единый базовый интерфейс этого класса.

#### Суть паттерна
Создать базовый класс системы и описать API к подключению этой системы, после чего от этого базового класса 
системы наследовать все методы API для подключения и описания конкретной другой системы.

#### Пример реализации
Система отправки товара интернет-магазина, как базовая система со своим API, от которой могут наследоваться системы 
описывающее реализацию отправку Новой Почтой, Укрпочтой, или отправка курьером

Пример кода: [Factory](creational_patterns/Factory.ts)

## Структурные паттерны:

Структурные паттерны - это шаблоны проектирования, которые типизируют структурирования кода.

### Bridge (Мост)

#### Предназначение
Данный шаблон применяется, когда есть потребность реализовать одинаковые формат API, для разных сервисов, которые выполняют одну и ту же функциональность.

#### Суть паттерна
Создать общий интерфейс для каждого из класса сервиса, где описать все методы API. 
Реализовать каждый класс, такого сервиса через имплементацию этого интерфейса, после чего реализовать класс, 
в конструктор которого передается этот же интерфейс и в общие методы API группируются в один метод, при этом этот метод
в себе ссылается на this аргумента реализующий этот интерфейс.

#### Пример реализации
Приложение, по отправке сообщений. При этом оно должно реализовывать функциональность мгновенных и отложенных сообщений, 
а так же реализовывать эту функциональность для разного типа мессенджеров, таких как Telegram, WatchApp или Viber.

Пример кода: [Bridge](structure_patterns/Bridge.ts)

### Facade (Фасад) 

#### Предназначение
Данный шаблон применяется, когда необходимо за простым API спрятать перечень сервисов или несколько 
бизнес-логик, которые не связаны между собой.

#### Суть паттерна
Создать классы сервисов, которые должны быть реализованы в ходе работы примитивного действия. 
Также создания класса, который реализовывает простой API интерфейс и под его же колпаком, внедряются экземпляры 
классов различных сервисов. Эти сервисы внедряются с модификатором *private* поскольку сервисы 
должны быть инкапсулированы и не должны быть допустимы к использованию вне класса.

#### Пример реализации
Клавиша отправки уведомления на почту, которая под капотом имеет следующий сайд эффект в формате реализации нескольких логик:
- в виде логгирования (добавления реализации LoggerService).
- сервис автологгирования, который автоматически подтягивает данные из регистрации, как данные для логирования в почтовом, другом, сервисе (LoginService).
- реализация сервиса шаблона, который реализовывает разметку данного типа уведомления (MailService).  

Пример кода: [Facade](structure_patterns/Facade.ts)

### Adapter (Адаптер) 

#### Предназначение
Данный шаблон используется, когда необходимо подсоединить два различных класса с различными типами данных.

#### Суть паттерна
Создать или получить класс, который имеет неподходящий тип данных для портирования (соединения с другим классом). 
Создать класс, который бы наследовался от этого класса, и одновременно с этим, внутри своего конструктора принимает 
класс, к которому нужно адаптить, после чего внутри такого класса создать метод, который бы уже реализовывал приходящие 
данные не адаптированого класса в нужный нам формат. 

#### Пример реализации
Получение данных от стороннего сервиса, и которые необходимо как-то обработать, для получения необходимого формата 
данных, которые пользуются другим сторонним сервисом. 

Пример кода: [Adapter](structure_patterns/Adapter.ts)

### Proxy (Прокси) 

#### Предназначение
Данный шаблон используется, когда необходимо с работой отдельно взятого класса, происходили сопутствующие действия (side effects).

#### Суть паттерна
Создать общий интерфейс, который имплементит каждый из классов: класс, который выполняет логику и класс, который 
проксирует свою логику поверх первого класса. Необходимо понимать, что Proxy не расширяет один класс другим, как при 
классическом extends, а именно что оборачивает одну логику поверх другой. 

#### Пример реализации
Получение данных из базы данных, только если данные пользователя подходят под авторские права. 
Так логику доступа к базе данных описывается в просто классе, а логика проверки на соответствие пользователя в классе, 
который проксирует первый.

Пример кода: [Proxy](structure_patterns/Proxy.ts)

### Composite (Композит) 

#### Предназначение
Данный шаблон используется при реализации древовидных бизнес-логик и инкапсулирования их в простое API.

#### Суть паттерна
Создать абстрактный класс с абстрактными методами, которые наследуются разными вариантами реализации абстрактного класса, 
в ходе описания реализующих классов абстрактные классы перезаписываются и модифицируются модификатором *overrite*, 
для защиты от исчезновения методов в абстрактном классе. После чего создается результирующий класс, который 
реализовывает те же абстрактные методы в простое API.

#### Пример реализации
Интернет-магазин имеет возможность продажи как в готовой заводской упаковке - первая ветка дерева, так и cамостоятельно
упаковать несколько товаров - другая ветка дерева. Необходимо реализовать метод, который обходил бы 
дерево и давал итоговую стоимость как в случае с упаковкой, так и без.

Пример кода: [Composite](structure_patterns/Composite.ts)

## Поведенческие паттерны

Поведенческие паттерны - это паттерны, которые унифицируют поведение объектов, классов или функций.

### Chain of command (цепочка команд)

#### Предназначение
Данный шаблон используется при реализации цепочки различных обработчиков

#### Суть паттерна
Создать абстрактный класс, который в себе реализовывает 2 метода:
- next - метод принимающий другой обработчик. Этот, другой, обработчик передаётся по цепочке. 
- handle - условие. Если условие возвращает true, то данные передаются по цепочке следующему обработчику. Если нет - выход из цепочки.

#### Пример реализации
Middleware в работе express.js или nest.js

Пример кода: [Chain of command](behavioral_patterns/Chain_of_command.ts)

### Mediator (Посредник)

#### Предназначение
Паттерн в основном используется на Frontend, чтобы связать компоненты, которые разрознено должны знать о друг друге.

#### Суть паттерна
Например, какое-то событие EventEmitter необходимо выпустить какое-то событие, при этом, это событие, когда воспроизводится,
то должно производить логирование этого события, а также само событие попадать в кэш. Таким образом выходит, что каждый из этих
компонентов имеет между собой какие-то связи, таким образом создавая лишние зависимости. Mediator же является посредником между
всеми этими компонентами, таким образом отвязывая все зависимости между компонентами и завязывает их только на себе.

#### Пример реализации
Например, компонент формы

Пример кода: [Mediator](behavioral_patterns/Mediator.ts)

### Command (Команда) 

#### Предназначение
Паттерн предназначен для отделения отдельной задачи, как входной точки в модуль, в отдельную команду, через которую и 
управляется соединения модуля с другими модулями, а точнее управление бизнес-логики между этими модулями.

#### Суть паттерна
При написании приложений на Nest.js используются модули, таким образом отделяя логику по отдельным сущностям, но что если
одна сущность используется в различных других модулях? Например, UserService используется непосредственно в своём контроллере, 
шлёт какие-то данные по WebSockets через Gateway о том, что такой-то пользователь был создан или куда-то вошел, а также 
дополнительно ещё идёт какая-то синхронизация очереди в базе данных. 

Таким образом при изменении бизнес логики самого UserService, например отложенное добавления пользователя, вынуждает
менять логику каждой реализации с контроллером, веб-сокетами или базой данных. 

Чтобы этого избежать создаётся команда, например команда getUser и уже в рамках этой команды изменяется самая бизнес логика,
поскольку эта команда является входной точкой к сущности User.

#### Пример реализации
Используется например как CQRS - разделения запросов чтения и записи.

Пример кода: [Command](behavioral_patterns/Command.ts)

### State (Состояние)
Состояние отдельного элемента. 

#### Предназначение
Когда у объекта может быть несколько состояний.

#### Суть паттерна
По сути замена горы if`ов или же switch case на плавный переход к классам, которые имеют свои условия и ограничения. 
Получается, что вместо того, чтобы хранить всё состояние внутри нашего компонента, организовывается ссылка на текущее состояние у объекта, 
которая является надклассом над состоянием этого компонента (оно является абстрактным). После чего вся логика которая
относится к каждому из этапов лежит лишь в классе этого этапа.

#### Пример реализации
Например, у нас есть статья в блог, которая может быть в трёх состояниях:  
- черновик, если статья закончена, она отправляется на модерацию.
- на модерации, при этом если статья не проходит модерацию, то статья откатывается на черновик, иначе переходит в состояние публикации.
- опубликована, если статья не понравилась, то снять её с публикации и вернуть в черновик.

Пример кода: [State](behavioral_patterns/State.ts)

### Strategy (Стратегия) 

#### Предназначение
Удаление дублирования кода, путём интегрирования его в один класс. 

#### Суть паттерна
Выделение схожих алгоритмов поведения в общие классы, после чего использования эти алгоритмы через классы путём создания 
общего интерфейса для одного алгоритма и уже различные стратегии имплементируют этот интерфейс. 

#### Пример реализации
Часто используются для авторизации, где есть наборы схожих алгоритмов, чтобы проверить авторизован ли пользователь.
Но при этом может быть разные провайдеры: JWT, GitHub, GoogleAuthToken и так далее - к примеру Passport.js

Пример кода: [Strategy](behavioral_patterns/Strategy.ts)

### Iterator (Итератор)

#### Предназначение
Когда необходимо обойти ряд объектов по какому-то принципу - по приоритету или по зависимостям. То есть паттерн используется
в любом месте, где необходимо сделать какой-то обход коллекции.

#### Суть паттерна
Создавая общий интерфейс итератора, от которого имплементируются классы различных вариантов обхода. После этого в каждый 
список можно добавить этот интерфейс, через который реализовываются классы итераторов.

#### Пример реализации
Типы обхода различных коллекций

Пример кода: [Iterator](behavioral_patterns/Iterator.ts)

### Template Method (Шаблонный метод)

#### Предназначение
Метод используется, когда работа определенного объекта связанного с разными объектами связана общим шаблоном действий.

#### Суть паттерна
Создаётся некий абстрактный класс, который в себе имеет различные методы. При этом часть этих методов может быть абстрактными
и не зависеть от API, а часть может быть обычными, поскольку завязаны на самом API. После этого создаются различные классы этих API, 
которые специфичные каждый для своего API.

#### Пример реализации
Например, есть форма заявки, которая работает с несколькими API

Пример кода: [Template Method](behavioral_patterns/Template_method.ts)

### Observer (Наблюдатель)

#### Предназначение
Создание моста из события и функции, которые реагируют на это событие и после этого делают соответствующую
логику.

#### Суть паттерна
Есть интерфейс, который описывает схему работы непосредственно объекта генерирующего событие, а также интерфейс наблюдателя. 
У интерфейса наблюдателя есть метод подписаться на прослушку различных событий. Получается, чтобы получить обновление данных, не нужно к объекту
ходить, он сам генерирует событие и остальные объекты могут получать уведомление о том, что событие сработало.

#### Пример реализации
Ситуации, где есть подписчики на событие и есть функция, которая генерирует это событие.

Пример кода: [Observer](behavioral_patterns/Observer.ts)