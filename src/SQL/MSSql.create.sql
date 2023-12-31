﻿



CREATE TABLE [ЕдИзм] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Единица] VARCHAR(255)  NULL,

	 [НомерСтроки] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПриказОУЦ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаСозд] VARCHAR(255)  NULL,

	 [НомерДок] INT  NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТабТовары] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИтогоЗаГод] INT  NULL,

	 [НаимМесяца] VARCHAR(255)  NULL,

	 [НомерСтроки] INT  NULL,

	 [ПланНаМесяц] INT  NULL,

	 [РазмерПрод] INT  NULL,

	 [Номенклатура] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтчетФР] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Выручка] INT  NULL,

	 [ДатаНачала] VARCHAR(255)  NULL,

	 [ДатаОконч] VARCHAR(255)  NULL,

	 [ДИРОтСотр] INT  NULL,

	 [КомРасходы] INT  NULL,

	 [НомерСтроки] INT  NULL,

	 [ПостНалОбяз] INT  NULL,

	 [ПрочДоходы] INT  NULL,

	 [ПрочНалОбяз] INT  NULL,

	 [ПрочРасходы] INT  NULL,

	 [СебПродаж] INT  NULL,

	 [СумПродаж] INT  NULL,

	 [УправРасходы] INT  NULL,

	 [ДанныеОрг] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПланПродаж] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаСозд] VARCHAR(255)  NULL,

	 [НомерДок] INT  NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТабМенеджер] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИтогоЗаГод] INT  NULL,

	 [НаимМесяца] VARCHAR(255)  NULL,

	 [НомерСтроки] INT  NULL,

	 [ПланНаМесяц] INT  NULL,

	 [РазмерПрод] INT  NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТабОУЦ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНач] VARCHAR(255)  NULL,

	 [ДатаОконч] VARCHAR(255)  NULL,

	 [НомерСтроки] INT  NULL,

	 [Цена] INT  NULL,

	 [Номенклатура] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДанныеОрг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Email] VARCHAR(255)  NULL,

	 [ИНН] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [НомерСтроки] INT  NULL,

	 [ОГРН] INT  NULL,

	 [ОПФ] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ЮрАдрес] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Обязанности] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Номенклатура] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодПозиции] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ЕдИзм] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDСотрудника] INT  NULL,

	 [Телефон] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




