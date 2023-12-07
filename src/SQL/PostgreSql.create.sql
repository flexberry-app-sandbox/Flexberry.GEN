




CREATE TABLE ЕдИзм (
 primaryKey UUID NOT NULL,
 НомерСтроки INT NULL,
 Единица VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриказОУЦ (
 primaryKey UUID NOT NULL,
 ДатаСозд VARCHAR(255) NULL,
 НомерДок INT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТабТовары (
 primaryKey UUID NOT NULL,
 НомерСтроки INT NULL,
 ПланНаМесяц INT NULL,
 ИтогоЗаГод INT NULL,
 РазмерПрод INT NULL,
 НаимМесяца VARCHAR(255) NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетФР (
 primaryKey UUID NOT NULL,
 Выручка INT NULL,
 ПрочРасходы INT NULL,
 ПостНалОбяз INT NULL,
 ПрочДоходы INT NULL,
 ДИРОтСотр INT NULL,
 СумПродаж INT NULL,
 СебПродаж INT NULL,
 ПрочНалОбяз INT NULL,
 УправРасходы INT NULL,
 ДатаОконч VARCHAR(255) NULL,
 КомРасходы INT NULL,
 ДатаНачала VARCHAR(255) NULL,
 НомерСтроки INT NULL,
 ДанныеОрг UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПланПродаж (
 primaryKey UUID NOT NULL,
 НомерДок INT NULL,
 ДатаСозд VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТабМенеджер (
 primaryKey UUID NOT NULL,
 ПланНаМесяц INT NULL,
 ИтогоЗаГод INT NULL,
 НомерСтроки INT NULL,
 НаимМесяца VARCHAR(255) NULL,
 РазмерПрод INT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТабОУЦ (
 primaryKey UUID NOT NULL,
 Цена INT NULL,
 НомерСтроки INT NULL,
 ДатаОконч VARCHAR(255) NULL,
 ДатаНач VARCHAR(255) NULL,
 Номенклатура UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДанныеОрг (
 primaryKey UUID NOT NULL,
 НомерСтроки INT NULL,
 Email VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 ИНН INT NULL,
 ОГРН INT NULL,
 Телефон INT NULL,
 ОПФ VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Обязанности VARCHAR(255) NULL,
 IDДолжности INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 КодПозиции INT NULL,
 Наименование VARCHAR(255) NULL,
 ЕдИзм UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 IDСотрудника INT NULL,
 Телефон INT NULL,
 ФИО VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ПриказОУЦ ADD CONSTRAINT FKeb489c47271c54e5550cd23b08de90a551f6440c FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexeb489c47271c54e5550cd23b08de90a551f6440c on ПриказОУЦ (Сотрудники); 

 ALTER TABLE ТабТовары ADD CONSTRAINT FK6888f3e4caf39f961068c601fad516143bb751ea FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index6888f3e4caf39f961068c601fad516143bb751ea on ТабТовары (Номенклатура); 

 ALTER TABLE ОтчетФР ADD CONSTRAINT FKc6f31c94d87c94e3ad5a12f92f73e0c5fc671bcd FOREIGN KEY (ДанныеОрг) REFERENCES ДанныеОрг; 
CREATE INDEX Indexc6f31c94d87c94e3ad5a12f92f73e0c5fc671bcd on ОтчетФР (ДанныеОрг); 

 ALTER TABLE ОтчетФР ADD CONSTRAINT FKd9ec3c6761f8711c5fc7c524d391a6db4ca3e32a FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexd9ec3c6761f8711c5fc7c524d391a6db4ca3e32a on ОтчетФР (Сотрудники); 

 ALTER TABLE ПланПродаж ADD CONSTRAINT FK99d07f78cd0b607a5cd690e91a9f0e291377d00c FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index99d07f78cd0b607a5cd690e91a9f0e291377d00c on ПланПродаж (Сотрудники); 

 ALTER TABLE ТабМенеджер ADD CONSTRAINT FK63780a7668bdebdd343a81a530708a1ba70c7f2f FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index63780a7668bdebdd343a81a530708a1ba70c7f2f on ТабМенеджер (Сотрудники); 

 ALTER TABLE ТабОУЦ ADD CONSTRAINT FK308977c3a022ff63e7c3c2fd61e635b63ce00ec6 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index308977c3a022ff63e7c3c2fd61e635b63ce00ec6 on ТабОУЦ (Номенклатура); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FK036a196eb8028f05d271dcb35b1fc5fce39fa3c8 FOREIGN KEY (ЕдИзм) REFERENCES ЕдИзм; 
CREATE INDEX Index036a196eb8028f05d271dcb35b1fc5fce39fa3c8 on Номенклатура (ЕдИзм); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

